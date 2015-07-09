/**
 * Angular Flipcard
 *
 * author: 		Luis Carlos Osorio Jayk
 * authorEmail: luiscarlosjayk@gmail.com
 * date:  		2015-07-09
 */
(function (window, angular) {

	angular.module ('ciul.flipcard', [])

		.directive ('flipcard', [
			function () {
				return {
					restrict: 	'E',
					scope: 		false,
					template: 	'<div class="flip-container" ng-click="flip ()"><div class="flipper" ng-transclude></div></div>',
					transclude: true,
					replace: 	true,
					link:  		function ($scope, $elem, $attrs) {
						
						$scope.flip = function () {
							$elem.toggleClass ('flip');
						};

					}
				};
			}
		])

		.directive ('flipcardFront', [
			function () {
				return {
					restrict: 	'E',
					template: 	'<div class="front" ng-transclude></div>',
					transclude: true,
					replace: 	true,
					link:  		function ($scope, $elem, $attrs) {}
				};
			}
		])

		.directive ('flipcardBack', [
			function () {
				return {
					restrict: 	'E',
					template: 	'<div class="back" ng-transclude></div>',
					transclude: true,
					replace: 	true,
					link:  		function ($scope, $elem, $attrs) {}
				};
			}
		])

	;

	!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.flip-container{perspective:1000}.flipper{transition:.6s;transform-style:preserve-3d;position:relative}.back,.front{backface-visibility:hidden;position:absolute;top:0;left:0}.front{z-index:2;transform:rotateY(0deg)}.back,.flip-container.flip .flipper{transform:rotateY(180deg)}</style');

}) (window, angular);
