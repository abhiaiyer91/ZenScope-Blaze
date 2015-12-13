Template.mainPage.onCreated(function () {
  var template = this;
  template.autorun(function() {
    template.subscribe('newPosts', Session.get('pageLimit') || 5);
  });
});
