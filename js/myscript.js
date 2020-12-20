
var app = angular.module('app', []);


app.directive('ngCompare', [function() {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      var firstfield = "#" + attrs.ngCompare;

      
      elem.on('keyup', function() {
        scope.$apply(function() {
          var isMatch = elem.val() === $(firstfield).val();
          ctrl.$setValidity('valueMatch', isMatch);
        });
      });

      
      $(firstfield).on('keyup', function() {
        scope.$apply(function() {
          var isMatch = elem.val() === $(firstfield).val();
          ctrl.$setValidity('valueMatch', isMatch);
        });
      });
    }
  }
}]);


app.controller('Ctrl', function($scope) {

  $scope.submitForm = function() {

    
    if ($scope.userForm.$valid) {
       alert("Your Form Is Submitted");
       window.location = "https://gajjalaramprakashreddy.github.io/JoinTheRace/" ;
    }
  }
});