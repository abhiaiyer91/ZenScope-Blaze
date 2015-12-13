const postEditAction = (postId, postProps, cb) => {
  return Posts.update(postId, {$set: postProps}, function (error) {
    if (error) {
      throw new Meteor.Error('504', error.reason);
    }
    if (_.isFunction(cb)) {
      cb();
    }
    const flowRoute = `/post/${postId}`;
    return FlowRouter.go(flowRoute);
  });
};

const generatePostProperties = (event) => {
  return {
    url: $(event.target).find('[name=url]').val(),
    title: $(event.target).find('[name=title]').val()
  };
};

const postDeleteAction = (postId, cb) => {
  Posts.remove(postId);
  if (_.isFunction(cb)) {
    cb();
  }
  return FlowRouter.go('/');
};

ZenMixins.registerMixin('postEditMixin', {
  postEditAction,
  generatePostProperties,
  postDeleteAction
});
