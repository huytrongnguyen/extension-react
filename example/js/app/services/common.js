import Rext, { Service, Ajax, Cache } from '@/rext';

@Service
export default class {
  async initApp() {
    await Ajax.request({
      url: '/api/configuration',
      next: configuration => Cache.set('configuration', configuration)
    });
  }
}