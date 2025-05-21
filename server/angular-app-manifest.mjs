
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
    'index.csr.html': {size: 510, hash: '2983cc92988bff4266d8e8edbf9729d8b4a548a4227c59b2a50b6e47829ccda2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'c65528d440cad0998b8739fefde2ffcb90956ec6419cdd48e82999957a11f27b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23836, hash: '279f74fbe7795cadff9c0159831d72d38c990a4c83f2baffc8f34f0d9d0577bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
