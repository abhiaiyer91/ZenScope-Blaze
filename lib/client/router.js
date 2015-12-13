BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  action() {
    BlazeLayout.render('mainLayout', {
      header: "header",
      main: "mainPage"
    });
  },
  name: "new"
});

FlowRouter.route('/submit', {
  triggersEnter: [function(context, redirect) {
    if (!Meteor.userId()) {
      redirect('/accessDenied');
    }
  }],
  action() {
    BlazeLayout.render('mainLayout', {
      header: "header",
      main: "postSubmit"
    });
  },
  name: "submit post"
});

FlowRouter.route('/accessDenied', {
  action() {
    BlazeLayout.render('mainLayout', {
      header: "header",
      main: "accessDenied"
    });
  },
  name: "access denied"
});

FlowRouter.route('/post/:postId', {
  name: 'post page',
  action() {
    BlazeLayout.render('mainLayout', {
      header: "header",
      main: "postPage"
    });
  }
});

FlowRouter.route('/post/:postId/edit', {
  name: 'post edit page',
  action() {
    BlazeLayout.render('mainLayout', {
      header: "header",
      main: "postEdit"
    });
  }
});
