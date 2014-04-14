/* global AuthenticatedRoute */
import AuthenticatedRoute from './authenticated';

var SecretRoute = AuthenticatedRoute.extend({
  model: function() {
    return this.store.find('user');
  }
});

export default SecretRoute;
