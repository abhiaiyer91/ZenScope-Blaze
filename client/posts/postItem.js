Template.postItem.onCreated(function () {
  var template = this;
  template.actionCreator = new ZenAction(['upvoteMixins']);
});

Template.postItem.helpers({
  ownPost: function() {
    var template = Template.instance();
    return template.data.post.userId == Meteor.userId();
  },
  domain: function() {
    var template = Template.instance();
    var a = document.createElement('a');
    a.href = template.data.post.url;
    return a.hostname;
  },
  upvotedClass: function() {
    var template = Template.instance();
    var userId = Meteor.userId();
    if (userId && !_.contains(template.data.post.upvoters, userId)) {
      return 'btn-primary upvoteable';
    } else {
      return 'disabled';
    }
  }
});

Template.postItem.onRendered(function(){
  // animate post from previous position to new position
  var instance = this;
  var rank = instance.data.post._rank;
  var $this = $(this.firstNode);
  var postHeight = 80;
  var newPosition = rank * postHeight;

  // if element has a currentPosition (i.e. it's not the first ever render)
  if (!_.isUndefined(instance.currentPosition)) {
    var previousPosition = instance.currentPosition;
    // calculate difference between old position and new position and send element there
    var delta = previousPosition - newPosition;
    $this.css("top", delta + "px");
  } else {
    // it's the first ever render, so hide element
    $this.addClass("invisible");
  }

  // let it draw in the old position, then..
  Meteor.defer(function() {
    instance.currentPosition = newPosition;
    // bring element back to its new original position
    $this.css("top",  "0px").removeClass("invisible");
  });
});

Template.postItem.events({
  'click .upvoteable': function (event, template) {
    event.preventDefault();
    var postId = template.data.post._id;
    return template.actionCreator.upvoteAction(postId);
  }
});
