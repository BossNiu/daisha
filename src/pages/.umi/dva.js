import dva from 'dva';
import { Component } from 'react';
import createLoading from 'dva-loading';
import history from '@tmp/history';

let app = null;

export function _onCreate() {
  const plugins = require('umi/_runtimePlugin');
  const runtimeDva = plugins.mergeConfig('dva');
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  
  app.model({ namespace: 'classify', ...(require('D:/daisha/src/models/classify.js').default) });
app.model({ namespace: 'order', ...(require('D:/daisha/src/models/order.js').default) });
app.model({ namespace: 'product', ...(require('D:/daisha/src/models/product.js').default) });
app.model({ namespace: 'useraddr', ...(require('D:/daisha/src/models/useraddr.js').default) });
app.model({ namespace: 'userfind', ...(require('D:/daisha/src/models/userfind.js').default) });
app.model({ namespace: 'users', ...(require('D:/daisha/src/models/users.js').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
