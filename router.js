Router.map(function() {
	this.route('index', {
		path: '/',
		template : 'index',
		layoutTemplate: 'layoutMain'});

	this.route('talent', {
		path: '/talent',
		template : 'talent',
		layoutTemplate: 'layoutMain'});
});