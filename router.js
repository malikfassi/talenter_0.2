Router.map(function() {
	this.route('index', {
		path: '/',
		template : 'index',
		layoutTemplate: 'layoutMain'});

	this.route('talent', {
		path: '/talent',
		template : 'talent',
		layoutTemplate: 'layoutMain'});

	this.route('quizz', {
		path: '/quizz',
		template : 'quizz',
		layoutTemplate: 'layoutMain'});

	this.route('annonces', {
		path: '/annonces',
		template : 'annonces',
		layoutTemplate: 'layoutMain'});
});