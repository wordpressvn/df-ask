export default Ember.Component.extend({
	classNames: ['df-ask--recipient'],
	tagName: 'div',
   /**
	* 2018-04-03
	* @override
	* https://guides.emberjs.com/v2.13.0/components/the-component-lifecycle/#toc_on-initial-render
	*/
	didInsertElement() {
		this._super();
		const rec = this.topic.df_ask__recipient;
		if (rec) {
			this.set('avatar', rec.username);
			this.set('username', rec.username);
		}
	}
});