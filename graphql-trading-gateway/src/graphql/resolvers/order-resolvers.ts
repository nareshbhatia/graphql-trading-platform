export default {
    Query: {
        order(parent, { id }, { dataSources }) {
            return dataSources.orderService.getOrderById({ id });
        },

        ordersByCusip(parent, { cusip }, { dataSources }) {
            return dataSources.orderService.getOrdersBySecurity({ cusip });
        }
    },

    Order: {
        security(parent, args, { dataSources }) {
            return dataSources.securityService.getSecurityByCusip({
                cusip: parent.cusip
            });
        },

        trades(parent, args, { dataSources }) {
            return dataSources.tradeService.getTradesByOrderId({
                orderId: parent.id
            });
        }
    }
};
