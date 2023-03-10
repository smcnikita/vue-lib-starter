import { App } from 'vue';
import * as components from './components';

function install(app: App) {
  for (const key in components) {
    // @ts-expect-error
    app.component(key, components[key]);
  }
}

import './assets/main.scss';
// noinspection JSUnusedGlobalSymbols
export default { install };

export * from './components';
