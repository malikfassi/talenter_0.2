class @homeController extends RouteController
	layoutTemplate: 'layoutMain'
	before: ->

	run: ->
			console.log "router -> homeController"
			super

#template...................................
_.extend Template.home,
	events:
		'click #btn_magicBtn': ->
			console.log "i am magic"
			return
	rendered: ->
		#callend when the dom is rendered
		console.log "Home is rendered"
		return