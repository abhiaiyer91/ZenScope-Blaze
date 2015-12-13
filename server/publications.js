Meteor.publish('newPosts', function(limit) {
  Counts.publish(this, 'PostCount', Posts.find({}));
  return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});
