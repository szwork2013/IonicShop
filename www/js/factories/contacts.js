angular.module('starter.services', [])
	.factory('contacts', function () {
		var data = [{
			"id": "1001",
			"product_name": "Smokey Dokey",
			"level": "20%",
			"price": 40,
			"quantity": 100,
			"img": "http://lovelypackage.com/wp-content/uploads/2010/08/beer2.jpg",
			"check": false,
			"desc": "Tastes bitter and awful"
		}, {
			"id": "1002",
			"product_name": "Lätt men Good",
			"level": "10%",
			"price": 20,
			"quantity": 100,
			"img": "http://lovelypackage.com/wp-content/uploads/2010/08/beer2.jpg",
			"checked": true,
			"desc": "Tastes like normal beer"
		}, {
			"id": "1003",
			"product_name": "Skånes Mästaröl ",
			"level": "8%",
			"price": 8,
			"quantity": 1020,
			"img": "http://lovelypackage.com/wp-content/uploads/2010/08/beer2.jpg",
			"checked": false,
			"desc": "Tastes likes skåne"
		}];
		var contacts = data;
		var items = [];
		return {
			getAll: function () {
				return contacts;
			},
			getById: function (id) {
				for (var i = 0; i < contacts.length; i++) {
					if (contacts[i].id === id) {
						return contacts[i];
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
	});