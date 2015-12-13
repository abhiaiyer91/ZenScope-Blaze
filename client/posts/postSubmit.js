Template.postSubmit.onCreated(function () {
  var template = Template.instance();
  template.actionCreator = new ZenAction(['postSubmitMixin']);
});


Template.postSubmit.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var post = template.actionCreator.generatePostParams(event);
    return template.actionCreator.postSubmitAction(post);
  }
});
