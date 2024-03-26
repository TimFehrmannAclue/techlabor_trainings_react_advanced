import { IRouteConfig } from '../../type/route/IRouteConfig';
import { IGenericMap } from '../../type/common/map/IGenericMap';

// All of these are displayed as Buttons in the AppBar
type IRoute = 'INDEX' | 'MENU' | 'ACCOUNT';

export const SEARCH_PARAM_TAB = 'tab';
const ROUTE_CONFIGS: IGenericMap<IRoute, IRouteConfig> = {
  INDEX: {
    name: 'Login',
    route: '/',
    requiresAuthentication: false,
  },
  MENU: {
    name: 'Menu',
    route: '/menu',
    requiresAuthentication: true,
  },
  ACCOUNT: {
    name: 'Account',
    route: `Menu?${SEARCH_PARAM_TAB}=Account`,
    requiresAuthentication: true,
  },
};

export default ROUTE_CONFIGS;
