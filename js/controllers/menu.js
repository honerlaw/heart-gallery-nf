module.controller('MenuController', function($scope) {

  $scope.data = {
    children: app.data.children
  };

  app.request.children(function(data) {
    $scope.$apply(function() {
      if(data.posts) {
        $scope.data.children = data;
      }
    })
  });

  $scope.home = function() {
    if(app.nav.getCurrentPage().name !== 'pages/splash.html') {
      app.nav.resetToPage('pages/splash.html', {
        animation: 'lift'
      });
    }
    app.menu.closeMenu();
  };

  $scope.display = function(child) {
    app.data.child = child;
    app.nav.resetToPage('pages/child.html', {
      animation: 'lift'
    });
    app.menu.closeMenu();
  };

});
