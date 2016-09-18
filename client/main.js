var angular2_meteor_auto_bootstrap_1 = require('angular2-meteor-auto-bootstrap');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
angular2_meteor_auto_bootstrap_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]);
//# sourceMappingURL=main.js.map