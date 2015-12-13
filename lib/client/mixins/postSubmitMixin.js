const postSubmitAction = (postData, cb) => {
  return Meteor.call('post', postData, function(error, response) {
    if (error) {
      throw new Meteor.error('504', error.reason);
    }
    if (_.isFunction(cb)) {
       cb();
    }
    const flowRoute = `/post/${response}`;
    return FlowRouter.go(flowRoute)
  });
};

const generatePostParams = (event) => {
  return {
    url: $(event.target).find('[name=url]').val(),
    title: $(event.target).find('[name=title]').val(),
    message: $(event.target).find('[name=message]').val()
  };
};

ZenMixins.registerMixin('postSubmitMixin', {
  postSubmitAction,
  generatePostParams
});
