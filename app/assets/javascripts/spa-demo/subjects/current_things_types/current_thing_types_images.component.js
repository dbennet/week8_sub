(function() {
  "use strict";

  //again we can use the current images component for type of thing images

  angular
    .module("spa-demo.subjects")
    .component("sdCurrentThingsTypesImages", {
      templateUrl: currentThingTypesImagesTemplateUrl,
      controller: currentThingTypesImagesController,
    });
    // .component("sdCurrentImageViewer", {
    //   templateUrl: imageViewerTemplateUrl,
    //   controller: CurrentImageViewerController,
    //   bindings: {
    //     name: "@",
    //     minWidth: "@"
    //   }
    // })
    // ;

  currentThingTypesImagesTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function currentThingTypesImagesTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.current_ti_html;
  }    
  // imageViewerTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  // function imageViewerTemplateUrl(APP_CONFIG) {
  //   return APP_CONFIG.current_image_viewer_html;
  // }    

  currentThingTypesImagesController.$inject = ["$scope",
                                     "spa-demo.subjects.currentThingTypes"];
  function currentThingTypesImagesController($scope, currentThingTypes) {
    var vm=this;
    vm.imageClicked = imageClicked;
    vm.isCurrentImage = currentThingTypes.isCurrentImageIndex;

    vm.$onInit = function() {
      console.log("currentThingTypesImagesController",$scope);
    }
    vm.$postLink = function() {
      $scope.$watch(
        function() { return currentThingTypes.getImages(); }, 
        function(images) { vm.images = images; }
      );
    }    
    return;
    //////////////
    function imageClicked(index) {
      currentThingTypes.setCurrentImage(index);
    }
  }

  // CurrentImageViewerController.$inject = ["$scope",
  //                                         "spa-demo.subjects.currentThingTypes"];
  // function CurrentImageViewerController($scope, currentThingTypes) {
  //   var vm=this;
  //   vm.viewerIndexChanged = viewerIndexChanged;

  //   vm.$onInit = function() {
  //     console.log("CurrentImageViewerController",$scope);
  //   }
  //   vm.$postLink = function() {
  //     $scope.$watch(
  //       function() { return currentThingTypes.getImages(); }, 
  //       function(images) { vm.images = images; }
  //     );
  //     $scope.$watch(
  //       function() { return currentThingTypes.getCurrentImageIndex(); }, 
  //       function(index) { vm.currentImageIndex = index; }
  //     );
  //   }    
  //   return;
  //   //////////////
  //   function viewerIndexChanged(index) {
  //     console.log("viewer index changed, setting currentImage", index);
  //     currentThingTypes.setCurrentImage(index);
  //   }
  // }

})();
