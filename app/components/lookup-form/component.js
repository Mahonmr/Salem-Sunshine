import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitAddress() {
      var params = {
        address: this.get('address'),
      };
      this.set('address', "");
      this.sendAction('submitAddress', params);
    }
  }
});
