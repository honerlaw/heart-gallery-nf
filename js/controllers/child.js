module.controller('ChildController', function($scope) {

  $scope.data = {
    child: app.data.child
  };

  $('.image-loading-icon').css('display', 'block');

  /*angular.element(document).ready(function() {
    setTimeout(function() {
      var img = $('<img />');
      img.css('display', 'none');
      img.load(function() {
        $('#image-loading-icon').css('display', 'none');
        img.css({
          'display' : 'block',
          'opacity' : '1'
        });
      });
      $('#child-page').prepend(img);
      img.attr('src', $scope.data.child.image);
    }, 500);
  });*/

});
