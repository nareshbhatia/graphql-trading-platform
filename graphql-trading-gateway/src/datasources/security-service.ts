import { RESTDataSource } from 'apollo-datasource-rest';

export class SecurityService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.SECURITIES_API;
    }

    securityReducer({ id, ...rest }) {
        return {
            cusip: id,
            ...rest
        };
    }

    async getSecurityByCusip({ cusip }) {
        const security = await this.get(`/securities/${cusip}`);
        return this.securityReducer(security);
    }

    async getSecuritiesByType({ type }) {
        const securities = await this.get(`/securities?type=${type}`);
        return securities.map(security => this.securityReducer(security));
    }
}
