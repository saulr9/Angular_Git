
$(document).ready(function() {
  $('select').material_select();
  $('ul.tabs').tabs();
  $('.modal').modal();
});
(function() {
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function() {
    this.products = gems;

  });

  app.controller('TabController', function() {
    this.tab = 1;

    this.setTab = function(selectedTab) {
      this.tab = selectedTab;
    };
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('GalleryController', function() {
    this.current= 0;
    this.setCurrent = function(newValue) {
      this.current = newValue || 0;

    };
  });
    app.controller('ReviewController', function($scope) {
    this.review= {};
    this.stars = [5,4,3,2,1];
    this.hideF= false;
    showF = false;
    $scope.showdos=false;
    $scope.showForm = function(showF) {
      $scope.showdos = showF;
    };
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      $scope.showdos= false;
      this.review= {};
    };
  });

    app.directive("productReviews", function() {
      return {
        restrict: "E",
        templateUrl: "product-reviews.html"
      };
    });
    app.directive("productCardTop", function() {
      return {
        restrict: "E",
        templateUrl: "product-card-top.html"
      };
    });
    app.directive("productModal", function() {
      return {
        restrict: "E",
        templateUrl: "product-modal.html"
      };
    });
    var gems = [
      {
        id: 1,
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        canPurchase: true,
        images: [
          "assets/img/gems/gem-02.gif",
          "assets/img/gems/gem-05.gif",
          "assets/img/gems/gem-09.gif"
        ],
        reviews: [{
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }]
      },
      {
        id: 2,
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        canPurchase: true,
        images: [
          "assets/img/gems/gem-01.gif",
          "assets/img/gems/gem-03.gif",
          "assets/img/gems/gem-04.gif",
        ],
        reviews: [{
          stars: 3,
          body: "I think this gem was just OK, could honestly use more shine, IMO.",
          author: "JimmyDean@example.org",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Any gem with 12 faces is for me!",
          author: "gemsRock@example.org",
          createdOn: 1397490980837
        }]
      },
      {
        id: 3,
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        canPurchase: true,
        images: [
          "assets/img/gems/gem-06.gif",
          "assets/img/gems/gem-07.gif",
          "assets/img/gems/gem-09.gif"
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org",
          createdOn: 1397490980837
        }]
      }
    ];

})();

