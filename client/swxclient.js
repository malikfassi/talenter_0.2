if (Meteor.isClient) {
  Questions = new Meteor.Collection("questions");
  
  Deps.autorun(function() {
    Meteor.subscribe('userData');
    console.log(Meteor.user());
  });

  Template.linkCV.events({
    'click input.link-cv' : function(event){
      console.log('ok');
      event.preventDefault();
      var cv = document.getElementById("linkCVtext").value;
      Meteor.call("addCV", cv);
    }
  });

  Template.addquestion.events({
    'click input.add-question' : function(event){
      event.preventDefault();
      var questionText = document.getElementById("questionText").value;
      Meteor.call("addQuestion", questionText);
      document.getElementById("questionText").value = "";
    }
  });

  Template.questions.items = function(){
    return Questions.find({},{sort:{'submittedOn':-1}});
  };

  Template.linkCV.voidcv = function(){
    return Meteor.user().cv === '';
  }

  
}

