Template.postPage.onCreated(function () {
  const template = this;
  template.subscribe('singlePost', FlowRouter.getParam('postId'));
});

Template.postPage.helpers({
  currentPost: function() {
    return Posts.findOne(FlowRouter.getParam('postId'));
  }
});
