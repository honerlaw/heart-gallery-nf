module.controller('ChildController', function($scope) {

  $scope.data = {
    child: app.data.child
  };

  $('.image-loading-icon').css('display', 'block');

  $scope.camera = function() {
    app.camera.picture();
  };

});
