import { IRouteConfig } from '../../type/route/IRouteConfig';

// All routes used by this app
type IRoute = 'INDEX' | 'MENU' | 'ACCOUNT';

export const SEARCH_PARAM_TAB = 'tab';
const ROUTE_CONFIGS: Record<IRoute, IRouteConfig> = {
  // Landing page is used for Login and can only be accessed when logged out
  INDEX: {
    name: 'Login',
    route: '/',
    requiresAuthentication: false,
  },
  // Menu page is displayed after Login & can only be accessed when logged in
  MENU: {
    name: 'Menu',
    route: '/menu',
    requiresAuthentication: true,
  },
  // Account page is displayed when clicking on the Account Tab on Menu Page
  ACCOUNT: {
    name: 'Account',
    route: `Menu?${SEARCH_PARAM_TAB}=Account`,
    requiresAuthentication: true,
  },
};

export default ROUTE_CONFIGS;
