import Ext from '~/core/ext';

class AjaxObservable {
  constructor(urlOrRequest) {
    this.request = Ext.extend({
      url: '',
      params: '',
      contentType: 'application/json; charset=utf-8',
      method: 'get',
    }, Ext.isString(urlOrRequest) ? { url: urlOrRequest } : urlOrRequest);

    this.promise = request => new Promise((resolve, reject) => {
      this.createRequest(request, (error, response) => error ? reject(error) : resolve(response));
    });
  }

  async subscribe({ next, error, complete }) {
    try {
      let response;
      try {
        response = await this.promise({ url, contentType, method, params });
      } catch (ex) {
        console.error(`Cannot get response from server for url [${url}] caused by: ${ex}`);
        error && error(ex);
        return null;
      }

      return next ? next(response) : response;
    } finally {
      complete && complete();
    }
  }

  send({ url, contentType, method, params }, done) {
    (method === 'get' && params) && (url = `${url}?${String.toQueryString(params)}`);
    const xhr = Ext.XHR;
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', contentType);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === XMLHttpRequest.DONE) {
        // ajax will return as a json by default, if parser error then it will return a raw string
        if (xhr.status === 200) {
          try {
            done(null, JSON.parse(xhr.responseText));
          } catch (e) {
            done(null, xhr.responseText);
          }
        } else {
          try {
            done(JSON.parse(xhr.responseText));
          } catch (e) {
            done(xhr.responseText);
          }
        }
      }
    }
    xhr.send(params ? JSON.stringify(params) : null);
  }

  static create(urlOrRequest) {
    return new AjaxObservable(urlOrRequest);
  }
}