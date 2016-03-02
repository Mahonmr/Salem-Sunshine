import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submitAddress() {
      var params = {
        street: this.get('street'),
        city: this.get('city'),
        zip: this.get('zip'),
      };
      this.set('street', "")
      this.set('city', ""),
      this.set('zip', ""),
      this.sendAction('submitAddress', params);
    }
  }
});
