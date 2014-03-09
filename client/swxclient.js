if (Meteor.isClient) {
	Annonces = new Meteor.Collection("annonces");

  Students = new Meteor.Collection("Students");

  Questions = new Meteor.Collection("questions");
  
  Deps.autorun(function()
  {
    Meteor.subscribe('userData');
    Meteor.subscribe('annonces');
  });

  // Template.linkCV.events({
  //   'click input.link-cv' : function(event){
  //     event.preventDefault();
  //     var cv = document.getElementById("linkCVtext").value;
  //     Meteor.call("addCV", cv);
  //   }
  // });

  Template.annonces_html.items = function(){
  	return Annonces.find({},{sort:{'start':1}});
  };

}

