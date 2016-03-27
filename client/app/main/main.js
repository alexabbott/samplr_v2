angular.module('meanAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

var fileURL;
function addURL(test){
  fileURL = test;
  $('.src').attr('value',test);
}

var thisAuthor;
$(window).load(function(){
  thisAuthor = $('.navbar-text').text();
});
function addAuthor(){
  thisAuthor = $('.navbar-text').text();
  $('.author').attr('value',thisAuthor);
}

var down = {};

function playWithKeyboard() {

  // grab keydown code + play sample
  $(document).keydown(function(e) {

    if ( e.keyCode === 90 ) { //z
        function play1(){
             var audio1 = $('.sample-player')[12];
            $(audio1).parent().parent().addClass('selected');
             if (down['90'] == null) {
                audio1.pause();
                audio1.currentTime = 0;
                audio1.play();
                down['90'] = true;
             }
        };
        play1();
    }
    if ( e.keyCode === 88 ) { //x
        function play2(){
             var audio2 = $('.sample-player')[13];
             $(audio2).parent().parent().addClass('selected');
            if (down['88'] == null) {
              audio2.pause();
              audio2.currentTime = 0;
              audio2.play();
              down['88'] = true;
            }
        };
        play2();
    }
    if ( e.keyCode === 67 ) { //c
        function play3(){
             var audio3 = $('.sample-player')[14];
             $(audio3).parent().parent().addClass('selected');
             if (down['67'] == null) {
               audio3.pause();
               audio3.currentTime = 0;
               audio3.play();
               down['67'] = true;
             }
        };
        play3();
    }
    if ( e.keyCode === 86 ) { //v
        function play4(){
             var audio4 = $('.sample-player')[15];
             $(audio4).parent().parent().addClass('selected');
             if (down['86'] == null) {
               audio4.pause();
               audio4.currentTime = 0;
               audio4.play();
               down['86'] = true;
             }
        };
        play4();
    }
    if ( e.keyCode === 83 ) { //s
        function play5(){
             var audio5 = $('.sample-player')[8];
             $(audio5).parent().parent().addClass('selected');
             if (down['83'] == null) {
               audio5.pause();
               audio5.currentTime = 0;
               audio5.play();
               down['83'] = true;
             }
        };
        play5();
    }
    if ( e.keyCode === 68 ) { //d
        function play6(){
             var audio6 = $('.sample-player')[9];
             $(audio6).parent().parent().addClass('selected');
             if (down['68'] == null) {
               audio6.pause();
               audio6.currentTime = 0;
               audio6.play();
               down['68'] = true;
             }
        };
        play6();
    }
    if ( e.keyCode === 70 ) { //f
        function play7(){
             var audio7 = $('.sample-player')[10];
             $(audio7).parent().parent().addClass('selected');
             if (down['70'] == null) {
               audio7.pause();
               audio7.currentTime = 0;
               audio7.play();
               down['70'] = true;
             }
        };
        play7();
    }
    if ( e.keyCode === 71 ) { //g
        function play8(){
             var audio8 = $('.sample-player')[11];
             $(audio8).parent().parent().addClass('selected');
             if (down['71'] == null) {
               audio8.pause();
               audio8.currentTime = 0;
               audio8.play();
               down['71'] = true;
             }
        };
        play8();
    }
    if ( e.keyCode === 69 ) { //e
        function play9(){
             var audio9 = $('.sample-player')[4];
             $(audio9).parent().parent().addClass('selected');
             if (down['69'] == null) {
               audio9.pause();
               audio9.currentTime = 0;
               audio9.play();
               down['69'] = true;
             }
        };
        play9();
    }
    if ( e.keyCode === 82 ) { //r
        function play10(){
             var audio10 = $('.sample-player')[5];
             $(audio10).parent().parent().addClass('selected');
             if (down['82'] == null) {
               audio10.pause();
               audio10.currentTime = 0;
               audio10.play();
               down['82'] = true;
             }
        };
        play10();
    }
    if ( e.keyCode === 84 ) { //t
        function play11(){
             var audio11 = $('.sample-player')[6];
             $(audio11).parent().parent().addClass('selected');
             if (down['84'] == null) {
               audio11.pause();
               audio11.currentTime = 0;
               audio11.play();
               down['84'] = true;
             }
        };
        play11();
    }
    if ( e.keyCode === 89 ) { //y
        function play12(){
             var audio12 = $('.sample-player')[7];
             $(audio12).parent().parent().addClass('selected');
             if (down['89'] == null) {
               audio12.pause();
               audio12.currentTime = 0;
               audio12.play();
               down['89'] = true;
             }
        };
        play12();
    }
    if ( e.keyCode === 52 ) { //4
        function play13(){
             var audio13 = $('.sample-player')[0];
             $(audio13).parent().parent().addClass('selected');
             if (down['52'] == null) {
               audio13.pause();
               audio13.currentTime = 0;
               audio13.play();
               down['52'] = true;
             }
        };
        play13();
    }
    if ( e.keyCode === 53 ) { //5
        function play14(){
             var audio14 = $('.sample-player')[1];
             $(audio14).parent().parent().addClass('selected');
             if (down['53'] == null) {
               audio14.pause();
               audio14.currentTime = 0;
               audio14.play();
               down['53'] = true;
             }
        };
        play14();
    }
    if ( e.keyCode === 54 ) { //6
        function play15(){
             var audio15 = $('.sample-player')[2];
             $(audio15).parent().parent().addClass('selected');
             if (down['54'] == null) {
               audio15.pause();
               audio15.currentTime = 0;
               audio15.play();
               down['54'] = true;
             }
        };
        play15();
    }
    if ( e.keyCode === 55 ) { //7
        function play16(){
             var audio16 = $('.sample-player')[3];
             $(audio16).parent().parent().addClass('selected');
             if (down['55'] == null) {
               audio16.pause();
               audio16.currentTime = 0;
               audio16.play();
               down['55'] = true;
             }
        };
        play16();
    }

  });

  $(document).keyup(function(e) {

    if ( e.keyCode === 90 ) { //z
        function pause1(){
             var audio1 = $('.sample-player')[12];
             $(audio1).parent().parent().removeClass('selected');
              audio1.pause();
              down['90'] = null;
        };
        pause1();
    }
    if ( e.keyCode === 88 ) { //x
        function pause2(){
             var audio2 = $('.sample-player')[13];
             $(audio2).parent().parent().removeClass('selected');
              audio2.pause();
              down['88'] = null;
        };
        pause2();
    }
    if ( e.keyCode === 67 ) { //c
        function pause3(){
             var audio3 = $('.sample-player')[14];
             $(audio3).parent().parent().removeClass('selected');
             audio3.pause();
             down['67'] = null;
        };
        pause3();
    }
    if ( e.keyCode === 86 ) { //v
        function pause4(){
             var audio4 = $('.sample-player')[15];
             $(audio4).parent().parent().removeClass('selected');
             audio4.pause();
             down['86'] = null;
        };
        pause4();
    }
    if ( e.keyCode === 83 ) { //s
        function pause5(){
             var audio5 = $('.sample-player')[8];
             $(audio5).parent().parent().removeClass('selected');
             audio5.pause();
             down['83'] = null;
        };
        pause5();
    }
    if ( e.keyCode === 68 ) { //d
        function pause6(){
             var audio6 = $('.sample-player')[9];
             $(audio6).parent().parent().removeClass('selected');
             audio6.pause();
             down['68'] = null;
        };
        pause6();
    }
    if ( e.keyCode === 70 ) { //f
        function pause7(){
             var audio7 = $('.sample-player')[10];
             $(audio7).parent().parent().removeClass('selected');
             audio7.pause();
             down['70'] = null;
        };
        pause7();
    }
    if ( e.keyCode === 71 ) { //g
        function pause8(){
             var audio8 = $('.sample-player')[11];
             $(audio8).parent().parent().removeClass('selected');
             audio8.pause();
             down['71'] = null;
        };
        pause8();
    }
    if ( e.keyCode === 69 ) { //e
        function pause9(){
             var audio9 = $('.sample-player')[4];
             $(audio9).parent().parent().removeClass('selected');
             audio9.pause();
             down['69'] = null;
        };
        pause9();
    }
    if ( e.keyCode === 82 ) { //r
        function pause10(){
             var audio10 = $('.sample-player')[5];
             $(audio10).parent().parent().removeClass('selected');
             audio10.pause();
             down['82'] = null;
        };
        pause10();
    }
    if ( e.keyCode === 84 ) { //t
        function pause11(){
             var audio11 = $('.sample-player')[6];
             $(audio11).parent().parent().removeClass('selected');
             audio11.pause();
             down['84'] = null;
        };
        pause11();
    }
    if ( e.keyCode === 89 ) { //y
        function pause12(){
             var audio12 = $('.sample-player')[7];
             $(audio12).parent().parent().removeClass('selected');
             audio12.pause();
             down['89'] = null;
        };
        pause12();
    }
    if ( e.keyCode === 52 ) { //4
        function pause13(){
             var audio13 = $('.sample-player')[0];
             $(audio13).parent().parent().removeClass('selected');
             audio13.pause();
             down['52'] = null;
        };
        pause13();
    }
    if ( e.keyCode === 53 ) { //5
        function pause14(){
             var audio14 = $('.sample-player')[1];
             $(audio14).parent().parent().removeClass('selected');
             audio14.pause();
             down['53'] = null;
        };
        pause14();
    }
    if ( e.keyCode === 54 ) { //6
        function pause15(){
             var audio15 = $('.sample-player')[2];
             $(audio15).parent().parent().removeClass('selected');
             audio15.pause();
             down['54'] = null;
        };
        pause15();
    }
    if ( e.keyCode === 55 ) { //7
        function pause16(){
             var audio16 = $('.sample-player')[3];
             $(audio16).parent().parent().removeClass('selected');
             audio16.pause();
             down['55'] = null;
        };
        pause16();
    }
  });
}
playWithKeyboard();

var directives = angular.module('directives', []);

directives.directive('file', function() {
  return {
    restrict: 'AE',
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
      });
    }
  };
});
