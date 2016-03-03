import Ember from 'ember';
import ENV from 'bill-tracker/config/environment';

export default Ember.Route.extend({

  model: function(params) {

    var url = 'http://openstates.org/api/v1//bills/?q=' + params.search + '&state=or&last_action_since=' + params.date + '&apikey=' + ENV.OPENSTATES_API_KEY;
    return Ember.$.getJSON(url)
      .then(function(response) {
        var bills = [];
        response.forEach(function(bill) {
          bills.push(bill);
        });
        return {
          //THIS IS THE MODEL OBJECT
          bills: bills,
          number_of_results: bills.length,
          search: params.search,
          search_date: params.date
        };
    });
  },

  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search, params.date);
    }
  }
});
