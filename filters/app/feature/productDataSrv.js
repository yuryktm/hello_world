(function() {
	"use strict";

	angular
		.module("feature")
		.factory("productData", productData);

	function productData() {
		return {
			products: [
				{"name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10},
				{"name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7},
				{"name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6},
				{"name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3},
				{"name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2},
				{"name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4},
				{"name": "Beer", "category": "Drinks", "price": 2.99, "expiry": 365},
				{"name": "Wine", "category": "Drinks", "price": 8.99, "expiry": 365},
				{"name": "Whisky", "category": "Drinks", "price": 45.99, "expiry": 365}
			]
		};
	};

})();

