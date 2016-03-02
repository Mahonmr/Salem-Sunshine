import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var lat = params.lat;
    var lng = params.lng;

    var url = 'http://openstates.org/api/v1//legislators/geo/?lat=' + lat +
    '&long=' + lng + '&apikey=ad8985ad95754238a64c485cd36ae247';

    return Ember.$.getJSON(url).then(function(response) {
      return response;
    })
  },

  actions: {
    executeSearch(params) {
      this.transitionTo('search', params.search, params.date);
    },

    submitAddress(params) {
      console.log(params)
      var self = this;

      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        params.street.trim().replace(" ", "+") + "," +
        params.city.trim().replace(" ", "+") + ",OR" +
        params.zip.trim().replace(" ", "+") + "&key=AIzaSyCsudB_1mjPTFM4A4o6pJaEBrnOPZPTUiY";

      Ember.$.getJSON(url).then(function(response) {
        return response.results[0].geometry.location;
      }).then(function(location) {
        self.transitionTo('lookup', location.lat, location.lng)
      });
    }
  }
});
