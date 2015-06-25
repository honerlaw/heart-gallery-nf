var module = ons.bootstrap('heart-gallery', ['onsen']);

module.directive('imageonload', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('load', function() {
        $('.image-loading-icon').css('display', 'none');
        $(element).css('display', 'block');
      });
    }
  };
});

var app = (function() {
  return {
    init: function() {
      app.request.children();
    },
    data: {
      children: [],
      child: undefined
    },
    request: {
      children: function(callback) {
        $.ajax({
          url : 'http://www.heartgallerynorthflorida.org/api/core/get_posts/?post_type=portfolio&count=1000',
          type : 'GET',
          dataType : 'JSON',
          success: function(data) {
            for(var i = 0; i < data.posts.length; ++i) {
              if(data.posts[i].thumbnail_images.full) {
                data.posts[i].image = data.posts[i].thumbnail_images.full.url;
              } else if(data.posts[i].thumbnail_images.large) {
                data.posts[i].image = data.posts[i].thumbnail_images.large.url;
              } else if(data.posts[i].thumbnail_images.medium) {
                data.posts[i].image = data.posts[i].thumbnail_images.medium.url;
              } else if(data.posts[i].thumbnail_images.thumbnail) {
                data.posts[i].image = data.posts[i].thumbnail_images.thumbnail.url;
              } else if(data.posts[i].thumbnail) {
                data.posts[i].image = data.posts[i].thumbnail;
              } else {
                data.posts[i].image = 'img/heart-gallery-nf-logo.png';
              }
            }
            app.data.children = data;
            if(callback) callback(data);
          },
          error: function(err) {
            if(callback) callback(err);
          }
        });
      }
    },
    camera: {
      picture: function() {
        cordova.plugins.barcodeScanner.scan(app.camera.success, app.camera.error);
      },
      success: function(data) {
        console.log(data);
      },
      error: function(err) {
        console.log(err);
      }
    }

  };
})();

ons.ready(function() {
  app.init();
});
