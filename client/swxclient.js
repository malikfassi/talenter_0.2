Colors = new Meteor.Collection("colors");

if (Meteor.isClient) {
  Students = new Meteor.Collection("Students");

  Template.color_list.colors = function()
  {
    return Colors.find({}, {sort: {name:1}});
  }
  Questions = new Meteor.Collection("questions");
  
  Deps.autorun(function()
  {
    Meteor.subscribe('userData');
  });

  Template.linkCV.events({
    'click input.link-cv' : function(event){
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

  Template.menu.events({
      'click a' : function(event){
        event.preventDefault();
        var choice = event.toElement.id;
        switch(choice)
        {
          case 'quizz-creation':
            Meteor.call('changePos', 'quizzcreation');
            break;
          case 'quizz':
            Meteor.call('changePos', 'quizz');
            break;
        }
      }
  });

  Template.linkCV.voidcv = function(){
    return Meteor.user().cv === '';
  }

  Template.main.welcome = function(){
    return Meteor.user().position == 'welcome';
  }

  Template.main.createquizz = function(){
    return Meteor.user().position == 'quizzcreation';
  }

  Template.main.answerquizz = function(){
    return Meteor.user().position == 'quizz';
  }

  Template.newquestion.events({
    'click a.new-question' : function(event)
    {
      event.preventDefault();

    }
  })
}

