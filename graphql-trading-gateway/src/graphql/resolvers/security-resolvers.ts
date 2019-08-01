export default {
    Query: {
        security(parent, { cusip }, { dataSources }) {
            return dataSources.securityService.getSecurityByCusip({ cusip });
        },

        securitiesByType(parent, { type }, { dataSources }) {
            return dataSources.securityService.getSecuritiesByType({ type });
        }
    }
};
