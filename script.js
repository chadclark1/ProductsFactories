var app = angular.module('app', []);


app.factory('productFactory', function (){
    // The factory is nothing more than a function that returns an object
    var products = [
        {name: 'Laptop', price: 999, quantity: 50},
        {name: 'Desktop', price: 1299, quantity: 40},
        {name: 'Phone', price: 199, quantity: 30}];
    var factory = {};
    factory.index = function (callback){
        callback(products);
    }

    factory.create = function(product, callback){
    	products.push(product);
    	callback(products);
    }

    factory.delete = function(id, callback){
    	products.splice(id,1);
    	callback(products);
    }

    return factory;
});


app.controller('productsController', ['$scope', 'productFactory', function ($scope, productFactory){
    
	function setProducts(data){
		$scope.products = data;
		$scope.product = {};
	}

    // $scope.products = {};
    // $scope.product = {};
    
    $scope.index = function(){
	    productFactory.index(setProducts);
	}

	$scope.index();
    
    $scope.create = function(){
    	productFactory.create($scope.product, setProducts)
    }
    $scope.delete = function(id){
	    productFactory.delete(id,setProducts);
	}
}])


app.controller('ordersController', ['$scope', 'productFactory', function ($scope, productFactory){
    
    function setProducts(data){
        $scope.products = data;
        // $scope.product = {};
    }

    // $scope.products = {};
    // $scope.product = {};
    
    $scope.index = function(){
        productFactory.index(setProducts);
    }

    $scope.index();
    $scope.create = function(){
        productFactory.create($scope.product, setProducts)
    }
    $scope.delete = function(id){
        productFactory.delete(id,setProducts);
    }
}])