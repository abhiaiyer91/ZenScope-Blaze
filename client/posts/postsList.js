const FAKE_SCROLL_OFFSET = 150;
const PAGE_LIMIT = 10;
const INITIAL_PAGE_LIMIT = 5;
Template.postsList.helpers({
  postsWithRank: function() {
    var i = 0, options = {limit: Session.get('pageLimit')};
    return Posts.find({}, options).map(function(post) {
      post._rank = i;
      i += 1;
      return post;
    });
  },

  allPostsLoaded: function() {
    var template = Template.instance();
    return template.data.subReady &&
      Posts.find().count() === Counts.get('PostCount');
  }
});

Template.postsList.events({
  'click .load-more': function(event) {
    event.preventDefault();
    var pageLimit = Session.get('pageLimit') || INITIAL_PAGE_LIMIT;
    Session.set('pageLimit', parseInt(pageLimit + PAGE_LIMIT));
    $('html,body').animate({
      scrollTop: $(document).height() - FAKE_SCROLL_OFFSET
    }, 350);
  }
});
