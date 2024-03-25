export interface IRouteConfig {
    name: string;
    route: string;
    // Only display this if logged in
    requiresAuthentication?: boolean;
}
