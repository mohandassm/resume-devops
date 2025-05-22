
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/resume-devops/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/resume-devops"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 699, hash: 'bec3c348b7f0717f99a057cab6ae777271d1bb61fbb8382993d97c8071683102', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '799734223a506b70504c67d46b42869a71bdaabbfe351c6ba4182674ea5b0c0b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27033, hash: '185eda3bf580b544dba07244cea6edf49cf13bc4a3cd7a6acfcce05853e03c86', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FFJTKSSR.css': {size: 171, hash: 'iXivmw7W1Rc', text: () => import('./assets-chunks/styles-FFJTKSSR_css.mjs').then(m => m.default)}
  },
};
