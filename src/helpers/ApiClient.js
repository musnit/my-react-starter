//Adapted from https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/helpers/ApiClient.js
import superagent from 'superagent';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return config.apiProtocol + '://' + config.apiHost + ':' + config.apiPort + '/v1' + adjustedPath;
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class _ApiClient {
  constructor() {
    methods.forEach((method) =>
      this[method] = (path, { params, data, authToken, progressCallback, endCallback, errorCallback } = {}) => {
        return new Promise(((resolve, reject) => {
          const request = superagent[method](formatUrl(path));
          if (params) {
            request.query(params);
          }

          if (data) {
            request.send(data);
          }
          if (this.authToken) {
            request.set('Authorization', 'Bearer ' + this.authToken);
          }
          if (progressCallback){
            request.on('progress', progressCallback);
          }
          request.end((err, { body } = {}) => {
            if (err){
              errorCallback? errorCallback(err) : undefined;
              reject(body || err);
            }
            else {
              resolve(body);
            }
            endCallback? endCallback() : undefined;
          });
        }).bind(this));
      });
  }
}

_ApiClient.prototype.setAuthToken = function (authToken) {
  this.authToken = authToken;
}

_ApiClient.prototype.getAuthToken = function (authToken) {
  return this.authToken;
}

const ApiClient = _ApiClient;

export default ApiClient;
