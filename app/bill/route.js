import Ember from 'ember';
import ENV from 'bill-tracker/config/environment';

export default Ember.Route.extend({

  model: function(params) {

    var url = 'http://openstates.org/api/v1/bills/' + params.bill_id + '/?&apikey=' + ENV.OPENSTATES_API_KEY;

    return Ember.$.getJSON(url)
      .then(function(response) {
        console.log(response.sources[0].url);
        return response;
    });
  },

  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search, params.date);
    }
  }
});
