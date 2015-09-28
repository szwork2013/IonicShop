angular.module('starter.services', [])
	.factory('shopfactory', function (Products) {
		var shopfactory = Products;
		var items = [];
		return {
			getAll: function () {
				return shopfactory;
			},
			getById: function (id) {
				for (var i = 0; i < shopfactory.length; i++) {
					if (shopfactory[i].id === id) {
						return shopfactory[i];
					}
				}
				return null;
			},
			addToCart: function (item) {
				items.push(item);

			},
			removeFromCart: function (id) {
				for (var i = 0; i < items.length; i++) {
					if (items[i].id === id) {
						items.pop(items[i]);
					}
				}
			},
			getCart: function () {
				return items;
			}
		};

	}).factory("Items", function ($firebaseArray) {
		var itemsRef = new Firebase("https://ionicshop.firebaseio.com/items");
		return $firebaseArray(itemsRef);
	}).factory("Products", function ($firebaseArray) {
		var itemsRef = new Firebase("https://ionicshop.firebaseio.com/products");
		return $firebaseArray(itemsRef);
	}).factory("Auth", function ($firebaseAuth) {
		var usersRef = new Firebase("https//ionicshop.firebaseio.com/users");
		return $firebaseAuth(usersRef);
	});