if (Meteor.isServer) {
	Questions = new Meteor.Collection("questions");

	

	Meteor.startup(function () {
		Meteor.publish("userData", function()
		{
			return Meteor.users.find({_id : this.userId},
								{fields: {'cv':1}});
		});
	});

	Accounts.onCreateUser(function(options, user){
		user.cv = "";
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
			console.log(Meteor.user());
		}	
	})

}