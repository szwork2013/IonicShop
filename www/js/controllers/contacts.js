angular.module('starter.controllers', [])

.controller('ContactsCtrl', function ($scope, contacts) {
		$scope.contacts = contacts.getAll();


	})
	.controller('CartCtrl', function ($scope, contacts, Items) {
		$scope.buyItem = contacts.getCart();
		$scope.items = Items;
		$scope.getTotal = function () {
			var total = 0;
			for (var i = 0; i < $scope.items.length; i++) {
				total += $scope.items[i].price;
			}
			return total;
		};
		$scope.remove = function (item) {
			var index = $scope.buyItem.indexOf(item);
			$scope.buyItem.splice(index, 1);
			$scope.items.$remove(item);

		};


	}).controller('CheckoutCtrl', function ($scope, contacts) {


	})

.controller('DetailCtrl', function ($scope, $stateParams, contacts, Items) {
	$scope.detail = contacts.getById($stateParams.itemId);
	contacts.addToCart($scope.detail);

	$scope.items = Items;
	$scope.addItem = function () {

		$scope.items.$add($scope.detail);

	};

});