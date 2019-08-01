import { SecurityService } from './security-service';

// Set up the dataSources needed by our resolvers
export const dataSources = () => ({
    securityService: new SecurityService()
});
