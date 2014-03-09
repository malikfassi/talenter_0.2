
if (Meteor.isServer) {
	Annonces = new Meteor.Collection("annonces");

	Meteor.startup(function () {
		Meteor.publish("userData", function()
		{
			return Meteor.users.find({_id : this.userId},
								{fields: {'cv':1, 'position':1}});
		});
		Meteor.publish("annonces", function(){
			return Annonces.find();
		});
	});

	Accounts.onCreateUser(function(options, user){
		user.cv = "";
		user.position = "welcome";
		if (options.profile)
			user.profile = options.profile;
		return user;
	});

}