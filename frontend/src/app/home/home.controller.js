(function() {
  'use strict';

  angular
  .module('application.home')
  .controller('HomeController', HomeController);

  function HomeController(Socket, $scope) {
    var home = this;

    $scope.data =  {labels: ['Fame'],
      series: [
        [10]
      ]
    };

    home.type = "Serial";

    home.options =  {
      high: 100,
      low: 0,
      ticks: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      scaleMinSpace: 100,
      caleBeginAtZero: true,
      scaleStartValue: 0,
      scaleEndValue: 100
    };

    Socket.on('change', function(data) {
      if(data.value === 0) {
        return;
      }

      if(data.id === "fame") {
        $scope.fame = data.value / 2;
        $scope.data = {
          labels: ['Fame'],
          series: [[(data.value / 2)]]
        };
      }

      if(data.id === "temp") {
        $scope.temp = data.value;
      }

      if(data.id === "hum") {
        $scope.hum = data.value;
      }

      $scope.$apply();


    });

    home.title = 'Home';
  }
})();
