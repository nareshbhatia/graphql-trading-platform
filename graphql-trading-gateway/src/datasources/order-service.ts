import { RESTDataSource } from 'apollo-datasource-rest';

export class OrderService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ORDERS_API;
    }

    orderReducer({ ...rest }) {
        return {
            ...rest
        };
    }

    async getOrderById({ id }) {
        const order = await this.get(`/orders/${id}`);
        return this.orderReducer(order);
    }

    async getOrdersBySecurity({ cusip }) {
        const orders = await this.get(`/orders?cusip=${cusip}`);
        return orders.map(order => this.orderReducer(order));
    }
}
