angular.module('meanAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

function addURL(test){
  fileURL = test;
  $('.src').attr('value',test);
}

var thisAuthor;
function addAuthor(){
  thisAuthor = $('.navbar-text').text();
  $('.author').attr('value',thisAuthor);
}

var down = {};

// grab keydown code + play sample
$(document).keydown(function(e) {

  if ( e.keyCode === 90 ) { //z
      function play1(){
           var audio1 = $('.sample-player')[12];
          $(audio1).parent().addClass('selected');
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
           $(audio2).parent().addClass('selected');
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
           $(audio3).parent().addClass('selected');
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
           $(audio4).parent().addClass('selected');
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
           $(audio5).parent().addClass('selected');
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
           $(audio6).parent().addClass('selected');
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
           $(audio7).parent().addClass('selected');
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
           $(audio8).parent().addClass('selected');
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
           $(audio9).parent().addClass('selected');
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
           $(audio10).parent().addClass('selected');
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
           $(audio11).parent().addClass('selected');
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
           $(audio12).parent().addClass('selected');
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
           $(audio13).parent().addClass('selected');
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
           $(audio14).parent().addClass('selected');
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
           $(audio15).parent().addClass('selected');
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
           $(audio16).parent().addClass('selected');
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
           $(audio1).parent().removeClass('selected');
            audio1.pause();
            down['90'] = null;
      };
      pause1();
  }
  if ( e.keyCode === 88 ) { //x
      function pause2(){
           var audio2 = $('.sample-player')[13];
           $(audio2).parent().removeClass('selected');
            audio2.pause();
            down['88'] = null;
      };
      pause2();
  }
  if ( e.keyCode === 67 ) { //c
      function pause3(){
           var audio3 = $('.sample-player')[14];
           $(audio3).parent().removeClass('selected');
           audio3.pause();
           down['67'] = null;
      };
      pause3();
  }
  if ( e.keyCode === 86 ) { //v
      function pause4(){
           var audio4 = $('.sample-player')[15];
           $(audio4).parent().removeClass('selected');
           audio4.pause();
           down['86'] = null;
      };
      pause4();
  }
  if ( e.keyCode === 83 ) { //s
      function pause5(){
           var audio5 = $('.sample-player')[8];
           $(audio5).parent().removeClass('selected');
           audio5.pause();
           down['83'] = null;
      };
      pause5();
  }
  if ( e.keyCode === 68 ) { //d
      function pause6(){
           var audio6 = $('.sample-player')[9];
           $(audio6).parent().removeClass('selected');
           audio6.pause();
           down['68'] = null;
      };
      pause6();
  }
  if ( e.keyCode === 70 ) { //f
      function pause7(){
           var audio7 = $('.sample-player')[10];
           $(audio7).parent().removeClass('selected');
           audio7.pause();
           down['70'] = null;
      };
      pause7();
  }
  if ( e.keyCode === 71 ) { //g
      function pause8(){
           var audio8 = $('.sample-player')[11];
           $(audio8).parent().removeClass('selected');
           audio8.pause();
           down['71'] = null;
      };
      pause8();
  }
  if ( e.keyCode === 69 ) { //e
      function pause9(){
           var audio9 = $('.sample-player')[4];
           $(audio9).parent().removeClass('selected');
           audio9.pause();
           down['69'] = null;
      };
      pause9();
  }
  if ( e.keyCode === 82 ) { //r
      function pause10(){
           var audio10 = $('.sample-player')[5];
           $(audio10).parent().removeClass('selected');
           audio10.pause();
           down['82'] = null;
      };
      pause10();
  }
  if ( e.keyCode === 84 ) { //t
      function pause11(){
           var audio11 = $('.sample-player')[6];
           $(audio11).parent().removeClass('selected');
           audio11.pause();
           down['84'] = null;
      };
      pause11();
  }
  if ( e.keyCode === 89 ) { //y
      function pause12(){
           var audio12 = $('.sample-player')[7];
           $(audio12).parent().removeClass('selected');
           audio12.pause();
           down['89'] = null;
      };
      pause12();
  }
  if ( e.keyCode === 52 ) { //4
      function pause13(){
           var audio13 = $('.sample-player')[0];
           $(audio13).parent().removeClass('selected');
           audio13.pause();
           down['52'] = null;
      };
      pause13();
  }
  if ( e.keyCode === 53 ) { //5
      function pause14(){
           var audio14 = $('.sample-player')[1];
           $(audio14).parent().removeClass('selected');
           audio14.pause();
           down['53'] = null;
      };
      pause14();
  }
  if ( e.keyCode === 54 ) { //6
      function pause15(){
           var audio15 = $('.sample-player')[2];
           $(audio15).parent().removeClass('selected');
           audio15.pause();
           down['54'] = null;
      };
      pause15();
  }
  if ( e.keyCode === 55 ) { //7
      function pause16(){
           var audio16 = $('.sample-player')[3];
           $(audio16).parent().removeClass('selected');
           audio16.pause();
           down['55'] = null;
      };
      pause16();
  }
});




// Web audio api stuff starts here
setTimeout(function () {
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  var myAudio = document.querySelectorAll('audio');
  // Create a MediaElementAudioSourceNode
  // Feed the HTMLMediaElement into it

  var source = [
    audioCtx.createMediaElementSource(myAudio[0]),
    audioCtx.createMediaElementSource(myAudio[1]),
    audioCtx.createMediaElementSource(myAudio[2]),
    audioCtx.createMediaElementSource(myAudio[3]),
    audioCtx.createMediaElementSource(myAudio[4]),
    audioCtx.createMediaElementSource(myAudio[5]),
    audioCtx.createMediaElementSource(myAudio[6]),
    audioCtx.createMediaElementSource(myAudio[7]),
    audioCtx.createMediaElementSource(myAudio[8]),
    audioCtx.createMediaElementSource(myAudio[9]),
    audioCtx.createMediaElementSource(myAudio[10]),
    audioCtx.createMediaElementSource(myAudio[11]),
    audioCtx.createMediaElementSource(myAudio[12]),
    audioCtx.createMediaElementSource(myAudio[13]),
    audioCtx.createMediaElementSource(myAudio[14]),
    audioCtx.createMediaElementSource(myAudio[15])
  ];

  var filterNodes = [
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter(),
      audioCtx.createBiquadFilter()
  ];


var filters = [];
$('.filter').each(function() {
  filters.push($(this));
})

for (var n=0;n<16;n++) {
  filterNodes[n].frequency.value = $(filters[n]).val();
  filterNodes[n].type = "bandpass";
  filterNodes[n].Q.value = 0;
}

$(filters[0]).on('input', function() {
      console.log(filterNodes[0]);
      filterNodes[0].frequency.value = $(filters[0]).val();
});
$(filters[1]).on('input', function() {
      filterNodes[1].frequency.value = $(filters[1]).val();
});
$(filters[2]).on('input', function() {
      filterNodes[2].frequency.value = $(filters[2]).val();
});
$(filters[3]).on('input', function() {
      filterNodes[3].frequency.value = $(filters[3]).val();
});
$(filters[4]).on('input', function() {
      filterNodes[4].frequency.value = $(filters[4]).val();
});
$(filters[5]).on('input', function() {
      filterNodes[5].frequency.value = $(filters[5]).val();
});
$(filters[6]).on('input', function() {
      filterNodes[6].frequency.value = $(filters[6]).val();
});
$(filters[7]).on('input', function() {
      filterNodes[7].frequency.value = $(filters[7]).val();
});
$(filters[8]).on('input', function() {
      filterNodes[8].frequency.value = $(filters[8]).val();
});
$(filters[9]).on('input', function() {
      filterNodes[9].frequency.value = $(filters[9]).val();
});
$(filters[10]).on('input', function() {
      filterNodes[10].frequency.value = $(filters[10]).val();
});
$(filters[11]).on('input', function() {
      filterNodes[11].frequency.value = $(filters[11]).val();
});
$(filters[12]).on('input', function() {
      filterNodes[12].frequency.value = $(filters[12]).val();
});
$(filters[13]).on('input', function() {
      filterNodes[13].frequency.value = $(filters[13]).val();
});
$(filters[14]).on('input', function() {
      filterNodes[14].frequency.value = $(filters[14]).val();
});
$(filters[15]).on('input', function() {
      filterNodes[15].frequency.value = $(filters[15]).val();
});

  // Create a gain node
var gainNodes = [
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain(),
      audioCtx.createGain()
  ];

var gains = [];
$('.gain').each(function() {
  gains.push($(this));
})

$(gains[0]).on('input', function() {
      gainNodes[0].gain.value = $(gains[0]).val();
});
$(gains[1]).on('input', function() {
      gainNodes[1].gain.value = $(gains[1]).val();
});
$(gains[2]).on('input', function() {
      gainNodes[2].gain.value = $(gains[2]).val();
});
$(gains[3]).on('input', function() {
      gainNodes[3].gain.value = $(gains[3]).val();
});
$(gains[4]).on('input', function() {
      gainNodes[4].gain.value = $(gains[4]).val();
});
$(gains[5]).on('input', function() {
      gainNodes[5].gain.value = $(gains[5]).val();
});
$(gains[6]).on('input', function() {
      gainNodes[6].gain.value = $(gains[6]).val();
});
$(gains[7]).on('input', function() {
      gainNodes[7].gain.value = $(gains[7]).val();
});
$(gains[8]).on('input', function() {
      gainNodes[8].gain.value = $(gains[8]).val();
});
$(gains[9]).on('input', function() {
      gainNodes[9].gain.value = $(gains[9]).val();
});
$(gains[10]).on('input', function() {
      gainNodes[10].gain.value = $(gains[10]).val();
});
$(gains[11]).on('input', function() {
      gainNodes[11].gain.value = $(gains[11]).val();
});
$(gains[12]).on('input', function() {
      gainNodes[12].gain.value = $(gains[12]).val();
});
$(gains[13]).on('input', function() {
      gainNodes[13].gain.value = $(gains[13]).val();
});
$(gains[14]).on('input', function() {
      gainNodes[14].gain.value = $(gains[14]).val();
});
$(gains[15]).on('input', function() {
      gainNodes[15].gain.value = $(gains[15]).val();
});

  // connect the AudioBufferSourceNode to the gainNode
  // and the gainNode to the destination, so we can play the
  // music and adjust the volume using the mouse cursor
  source[0].connect(filterNodes[0]).connect(gainNodes[0]).connect(audioCtx.destination);
  source[1].connect(filterNodes[1]).connect(gainNodes[1]).connect(audioCtx.destination);
  source[2].connect(filterNodes[2]).connect(gainNodes[2]).connect(audioCtx.destination);
  source[3].connect(filterNodes[3]).connect(gainNodes[3]).connect(audioCtx.destination);
  source[4].connect(filterNodes[4]).connect(gainNodes[4]).connect(audioCtx.destination);
  source[5].connect(filterNodes[5]).connect(gainNodes[5]).connect(audioCtx.destination);
  source[6].connect(filterNodes[6]).connect(gainNodes[6]).connect(audioCtx.destination);
  source[7].connect(filterNodes[7]).connect(gainNodes[7]).connect(audioCtx.destination);
  source[8].connect(filterNodes[8]).connect(gainNodes[8]).connect(audioCtx.destination);
  source[9].connect(filterNodes[9]).connect(gainNodes[9]).connect(audioCtx.destination);
  source[10].connect(filterNodes[10]).connect(gainNodes[10]).connect(audioCtx.destination);
  source[11].connect(filterNodes[11]).connect(gainNodes[11]).connect(audioCtx.destination);
  source[12].connect(filterNodes[12]).connect(gainNodes[12]).connect(audioCtx.destination);
  source[13].connect(filterNodes[13]).connect(gainNodes[13]).connect(audioCtx.destination);
  source[14].connect(filterNodes[14]).connect(gainNodes[14]).connect(audioCtx.destination);
  source[15].connect(filterNodes[15]).connect(gainNodes[15]).connect(audioCtx.destination);
}, 1000);


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
