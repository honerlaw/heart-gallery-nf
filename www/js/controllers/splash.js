module.controller('SplashController', function($scope) {

  $scope.gallery = function() {
    app.menu.toggleMenu();
  };

  $scope.camera = function() {
    app.camera.picture();
  };

});
