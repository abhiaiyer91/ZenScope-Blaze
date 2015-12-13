Template.header.helpers({
  isActive(name) {
    var routeName = FlowRouter.getRouteName();
    if (routeName === name) {
      return 'active';
    }
    return;
  }
});
