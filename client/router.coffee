if Meteor.isClient
  #define routes..
  Router.map ->
      @route 'home',
          path:"/"
          controller: "homeController"
      @route 'talent',
          path: "/talent"
          controller: "talentController"