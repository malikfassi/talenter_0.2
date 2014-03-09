
if (Meteor.isServer) {
	Students = new Meteor.Collection("Students");
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

	Meteor.methods({
		addQuestion : function(questionText){
			var questionId = Questions.insert({
				'questionText' : questionText,
				'submittedOn': new Date()
			});
			return questionId;
		},
		addCV : function(linkCVtext){
			Meteor.users.update({_id : Meteor.userId()},
						{$set: {cv:linkCVtext}});
		},
		changePos : function(newpos){
			Meteor.users.update({_id : Meteor.userId()},
						{$set: {position : newpos}});
		}
	});

}