import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/gather',
    exact: true,
    component: require('../gather.js').default,
  },
  {
    path: '/',
    exact: true,
    component: require('../index.js').default,
  },
  {
    path: '/login',
    exact: true,
    component: require('../login.js').default,
  },
  {
    path: '/welcome',
    exact: true,
    component: require('../welcome.js').default,
  },
  {
    path: '/product',
    exact: false,
    component: require('../product/_layout.js').default,
    routes: [
      {
        path: '/product/proadd',
        exact: true,
        component: require('../product/proadd.js').default,
      },
      {
        path: '/product/profind',
        exact: true,
        component: require('../product/profind.js').default,
      },
      {
        path: '/product/prolist',
        exact: true,
        component: require('../product/prolist.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    path: '/users',
    exact: false,
    component: require('../users/_layout.js').default,
    routes: [
      {
        path: '/users/address',
        exact: true,
        component: require('../users/address.js').default,
      },
      {
        path: '/users/useradd',
        exact: true,
        component: require('../users/useradd.js').default,
      },
      {
        path: '/users/userinfo',
        exact: true,
        component: require('../users/userinfo.js').default,
      },
      {
        path: '/users/userlist',
        exact: true,
        component: require('../users/userlist.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
