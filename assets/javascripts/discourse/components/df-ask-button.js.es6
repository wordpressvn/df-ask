import computed from 'ember-addons/ember-computed-decorators';
export default Ember.Component.extend({
	actions: {show() {this.sendAction('show');}}
	,tagName: ''
});