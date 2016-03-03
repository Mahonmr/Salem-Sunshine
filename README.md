# Salem Sunshine

Salem Sunshine uses the [Open States](http://openstates.org) API to search information about the Oregon State Legislature. Other Oregon bill tracker websites do not allow searches by both date and keywords, only one or the other. This API allows for a superior search option.

Salem Sunshine was created as an exercise in the use of APIs to retrieve JSON data in Ember.js apps.

## Features

* Look up state legislators by address
* Look up bills by keyword search and date of last legislative action
* View bill details and links to more information

## Technologies Used

Ember.js, JavaScript, SASS, Bootstrap.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/JeffreyRuder/bill-tracker.git`
* Change into the new directory
* `npm install`
* `bower install`
* Acquire API keys for Google Geocode and [Open States](http://openstates.org)
* Insert the following properties into the `ENV` variable in `bill-tracker/config/environment.js`:
  * `OPENSTATES_API_KEY: 'your key here'`
  * `GOOGLE_GEOCODE_API_KEY: 'your key here'`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
