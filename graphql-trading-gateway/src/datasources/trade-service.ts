import { RESTDataSource } from 'apollo-datasource-rest';

export class TradeService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRADES_API;
    }

    tradeReducer({ ...rest }) {
        return {
            ...rest
        };
    }

    async getTradeById({ id }) {
        const trade = await this.get(`/trades/${id}`);
        return this.tradeReducer(trade);
    }

    async getTradesByOrderId({ orderId }) {
        const trades = await this.get(`/trades?orderId=${orderId}`);
        return trades.map(trade => this.tradeReducer(trade));
    }
}
