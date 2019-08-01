export default {
    Query: {
        trade(parent, { id }, { dataSources }) {
            return dataSources.tradeService.getTradeById({ id });
        }
    },

    Trade: {
        security(parent, args, { dataSources }) {
            return dataSources.securityService.getSecurityByCusip({
                cusip: parent.cusip
            });
        },

        order(parent, args, { dataSources }) {
            return dataSources.orderService.getOrderById({
                id: parent.orderId
            });
        }
    }
};
