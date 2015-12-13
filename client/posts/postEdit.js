Template.postEdit.onCreated(function () {
  const template = this;
  template.actionCreator = new ZenAction(['postEditMixin']);
  template.subscribe('singlePost', FlowRouter.getParam('postId'));
});

Template.postEdit.helpers({
  post: function () {
    return Posts.findOne(FlowRouter.getParam('postId'));
  }
});

Template.postEdit.events({
  'submit form': function (event, template) {
    event.preventDefault();
    const currentPostId = FlowRouter.getParam('postId');
    let postProperties = template.actionCreator.generatePostProperties(event);
    return template.actionCreator.postEditAction(currentPostId, postProperties);
  },

  'click .delete': function (event, template) {
    event.preventDefault();
    if (confirm("Delete this post?")) {
      const currentPostId = FlowRouter.getParam('postId');
      return template.actionCreator.postDeleteAction(currentPostId);
    }
  }
});
