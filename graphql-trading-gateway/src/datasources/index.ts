import { OrderService } from './order-service';
import { SecurityService } from './security-service';
import { TradeService } from './trade-service';

// Set up the dataSources needed by our resolvers
export const dataSources = () => ({
    orderService: new OrderService(),
    securityService: new SecurityService(),
    tradeService: new TradeService()
});
