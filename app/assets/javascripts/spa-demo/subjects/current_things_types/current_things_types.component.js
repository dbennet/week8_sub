(function() {
  "use strict";

  angular
    .module("spa-demo.subjects")
    .component("sdCurrentThingsTypes", {
      templateUrl: thingsTypeTemplateUrl,
      controller: CurrentThingsTypesController,
    })
    // .component("sdCurrentThingInfo", {
    //   templateUrl: thingInfoTemplateUrl,
    //   controller: CurrentThingInfoController,
    // })
    // ;

  thingsTypeTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function thingsTypeTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.current_tt_html;
  }    
  // thingInfoTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  // function thingInfoTemplateUrl(APP_CONFIG) {
  //   return APP_CONFIG.current_thing_info_html;
  // }    

  CurrentThingsTypesController.$inject = ["$scope",
                                     "spa-demo.subjects.currentSubjects"];
  function CurrentThingsTypesController($scope,currentSubjects) {
    var vm=this;

    // add options for types

      vm.types = {
         availableOptions: [
                             {value: "museum", name:"Museum"},
                             {value: "hotel", name: "Hotel"},]
                 };
     vm.typeSelection = null;
     vm.typesSubmitted = typesSubmitted;
     





    vm.thingClicked = thingClicked;
    vm.isCurrentThing = currentSubjects.isCurrentThingIndex;












    vm.$onInit = function() {
      console.log("CurrentThingsController",$scope);
    }
    vm.$postLink = function() {
      $scope.$watch(
        function() { return currentSubjects.getThings(); }, 
        function(things) { vm.things = things; }
      );
    }    
    return;
    //////////////
    function thingClicked(index) {
      currentSubjects.setCurrentThing(index);
    }    

    function typesSubmitted(value) {
       currentThingTypes.setCurrentTypes(value);
    } 
  }




  // CurrentThingInfoController.$inject = ["$scope",
  //                                       "spa-demo.subjects.currentSubjects",
  //                                       "spa-demo.subjects.Thing",
  //                                       "spa-demo.authz.Authz"];
  // function CurrentThingInfoController($scope,currentSubjects, Thing, Authz) {
  //   var vm=this;
  //   vm.nextThing = currentSubjects.nextThing;
  //   vm.previousThing = currentSubjects.previousThing;

  //   vm.$onInit = function() {
  //     console.log("CurrentThingInfoController",$scope);
  //   }
  //   vm.$postLink = function() {
  //     $scope.$watch(
  //       function() { return currentSubjects.getCurrentThing(); }, 
  //       newThing 
  //     );
  //     $scope.$watch(
  //       function() { return Authz.getAuthorizedUserId(); },
  //       function() { newThing(currentSubjects.getCurrentThing()); }
  //     );        
  //   }    
  //   return;
  //   //////////////
  //   function newThing(link) {
  //     vm.link = link; 
  //     vm.thing = null;
  //     if (link && link.thing_id) {
  //       vm.thing=Thing.get({id:link.thing_id});
  //     }
  //   }
  // }

})();
