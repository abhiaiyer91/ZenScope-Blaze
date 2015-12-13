const upvoteAction = (postId) => {
  return Meteor.call('upvote', postId);
};

ZenMixins.registerMixin('upvoteMixins', {
  upvoteAction
});
