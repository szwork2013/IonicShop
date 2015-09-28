angular.module('starter.controllers', [])

.controller('ItemsCtrl', function ($scope, shopfactory, Products) {
		$scope.things = Products;
	})
	.controller('CartCtrl', function ($scope, shopfactory, Items, Auth, Products) {
		$scope.buyItem = shopfactory.getCart();
		$scope.items = Items;
		$scope.products = Products;
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

		$scope.removeAll = function () {
			for (i = 0; i < $scope.items.length; i++) {
				$scope.items.$remove($scope.items[i]);
			}
		};
		$scope.login = function () {
			Auth.$authWithOAuthRedirect("facebook").then(function (authData) {
				$scope.authData = authData;
				console.log(authData);
			}, {
				remember: "sessionOnly",
				scope: "email,user_likes"
			}).catch(function (error) {
				if (error.code === "TRANSPORT_UNAVAILABLE") {
					Auth.$authWithOAuthPopup("facebook").then(function (authData) {
						// User successfully logged in. We can log to the console
						// since we’re using a popup here
						console.log(authData);
					});
				} else {
					// Another error occurred
					console.log(error);
				}
			});
		};


	}).controller('CheckoutCtrl', function ($scope, shopfactory, Auth) {
		$scope.name = '';
		$scope.picture = '';
		Auth.$onAuth(function (authData) {
			if (authData === null) {
				console.log("Not logged in yet");
			} else {
				console.log("Logged in as", authData.facebook.displayName);
				$scope.name = authData.facebook.displayName;
				$scope.picture = authData.facebook.profileImageURL;
			}
			$scope.authData = authData; // This will display the user's name in our view
		});
	})


.controller('DetailCtrl', function ($scope, $stateParams, shopfactory, Items, Products) {
	$scope.detail = shopfactory.getById($stateParams.itemId);
	shopfactory.addToCart($scope.detail);
	$scope.items = Items;
	$scope.addItem = function () {
		$scope.items.$add($scope.detail);

	};

});