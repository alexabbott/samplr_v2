angular.module('meanAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

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

$(window).load(function(){
  thisAuthor = $('.navbar-text').text();
});


// VARIABLE DEFINITIONS //

  var interval = [],
      loopOn = [],
      oscillator,
      amp,
      $x = 1000,
      $newbpm = 60,
      $t,
      metOn = false,
      loops = [],
      displayTime,
      recordTime = 0,
      recorder,
      audioCtx,
      myAudio,
      source = [],
      recordNode,
      delayNodes,
      gains = [],
      filters = [],
      stretches = [],
      filterNodes = [],
      samplenames = [],
      sampleinfos = [],
      sampleurls = [],
      down = {},
      fileURL,
      thisAuthor;

  keysActive = true;

// MAIN FUNCTIONS //

  // play samples on keyboard interaction
  function playWithKeyboard() {

    // grab keydown code + play sample
    $(document).keydown(function(e) {
      if (keysActive === true) {

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
      }
    });

    $(document).keyup(function(e) {

      if (keysActive === true) {
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
      }
    });
  }

  // add sample url to input
  function addURL(test){
    fileURL = test;
    $('.src').attr('value',test);
  }

  // add author to input
  function addAuthor(){
    thisAuthor = $('.navbar-text').text();
    $('.author').attr('value',thisAuthor);
  }

  // grab a new sample you want to load
  function reply_click(clicked_id) {
    newSample = (clicked_id);
  }

  // allow for effects switching using dropdowns
  function changeEffects(e, index) {
    if (this.value == 'gain') {
      this.parentNode.querySelector('.gain').style.display = 'block';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'none';
    } else if (this.value == 'filter') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'block';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'none';
    } else if (this.value == 'loop') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'block';
      this.parentNode.querySelector('.stretch').style.display = 'none';
    } else if (this.value == 'stretch') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'block';
    }
  }

  // create loop states for each sample
  function createLoopStates() {
    for (var o = 0; o<16; o++) {
      loopOn.push(true);
    }
  }

  // loop a sample
  function loopIt(i) {
    if (loopOn[i] === true) {
      interval[i] = setInterval(function () {
        myAudio[i].pause();
        myAudio[i].currentTime = 0;
        myAudio[i].play();
        }, document.querySelectorAll('.loop')[i].value);
      loopOn[i] = false;
    } else {
      clearInterval(interval[i]);
      loopOn[i] = true;
    }
  }

  // stop looping a sample
  function clearLoop(i) {
    clearInterval(interval[i]);
  }

  function stretchIt () {
    $('.stretch').on('input', function() {
      $('.sample-player')[stretches.indexOf(this)].playbackRate = $(stretches[stretches.indexOf(this)]).val();
    });
  }

  function gainIt() {
    $('.gain').on('input', function() {
      $('.sample-player')[gains.indexOf(this)].volume = $(gains[gains.indexOf(this)]).val();
    });
  }

  function filterIt() {
    $('.filter').on('input', function() {
      filterNodes[filters.indexOf(this)].frequency.value = $(filters[filters.indexOf(this)]).val();
    });
  }

  function grabLoops() {
    for (var l = 0; l < document.querySelectorAll('.loop').length; l++) {
      loops.push(document.querySelectorAll('.loop')[l]);
    }
  }

  function grabEffects() {
    var effects = document.querySelectorAll('.effects');
    for (var e = 0; e < 16; e++) {
      var element = effects[e];
      element.addEventListener('change', changeEffects);
    }
  }

  // recorderjs logic
  function startUserMedia() {
    var input = recordNode;
    recorder = new Recorder(input);
  }

  function startRecording() {
    recorder && recorder.record();
  }

  function stopRecording() {
    recorder && recorder.stop();

      // create WAV download link using audio data blob
      createDownloadLink();

      recorder.clear();
    }

  function createDownloadLink() {
    recorder && recorder.exportWAV(function(blob) {
      var url = URL.createObjectURL(blob);
      var div = document.createElement('div');
      var au = document.createElement('audio');
      var hf = document.createElement('a');

      au.controls = true;
      au.src = url;
      hf.href = url;
      hf.download = new Date().toISOString() + '.wav';
      hf.innerHTML = "Download";
      div.appendChild(au);
      div.appendChild(hf);
      document.getElementsByClassName('recording')[0].appendChild(div);
    });
  }

  function setSources() {
      source = [
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
    }

  function setSingleSource(n) {
    source[n] = audioCtx.createMediaElementSource(myAudio[n]);
  }

  function setFilterNodes() {
    for (var f = 0; f<16; f++) {
      filterNodes.push(audioCtx.createBiquadFilter());
    }
  }

  function setFilterValues() {
    for (var n=0;n<16;n++) {
      filters.push(document.querySelectorAll('.filter')[n]);
      filterNodes[n].frequency.value = $(filters[n]).val();
      filterNodes[n].type = "lowpass";
      filterNodes[n].Q.value = 0;
    }
  }

  function setDestinations() {
    // connect the AudioBufferSourceNode to the gainNode
    // and the gainNode to the destination, so we can play the
    // music and adjust the volume using the mouse cursor
    for (var d = 0; d<16; d++) {
      source[d].connect(filterNodes[d]).connect(recordNode).connect(audioCtx.destination);
    }
  }

  function setRecordNode() {
    recordNode = audioCtx.createGain();
  }

  function setAudio() {
    myAudio = document.querySelectorAll('audio');
  }


  function setGainValues() {
    for (var n=0;n<16;n++) {
      gains.push(document.querySelectorAll('.gain')[n]);
    }
  }

  function setRateValues() {
    for (var n=0;n<16;n++) {
      stretches.push(document.querySelectorAll('.stretch')[n]);
    }
  }

  // play all recordings
  function playAll() {
    var sounds = document.querySelectorAll('.recording audio');
    for (var s = 0; s < sounds.length; s++) {
      sounds[s].play();
    }
  }

  // stop all recordings
  function stopAll() {
    var sounds = document.querySelectorAll('.recording audio');
    for (var s = 0; s < sounds.length; s++) {
      sounds[s].pause();
      sounds[s].currentTime = 0;
    }
  }

  // Metronome functions
  function fixOscillator(osc) {
    if (typeof osc.start == 'undefined') {
      osc.start = function(when) {
        osc.noteOn(when);
      }
    }
    if (typeof osc.stop == 'undefined') {
      osc.stop = function(when) {
        osc.noteOff(when);
      }
    }
  }

  // set metronome pitch
  function beep() {
      startTone(600);
  }

  // Create an metronome node
  function initAudio() {
    if( audioCtx ) {
      oscillator = audioCtx.createOscillator();
      fixOscillator(oscillator);
      oscillator.frequency.value = 440;
      amp = audioCtx.createGain();
      amp.gain.value = 0;

      // Connect ooscillator to amp and amp to the mixer of the context.
      // This is like connecting cables between jacks on a modular synth.
      oscillator.connect(amp);
      amp.connect(audioCtx.destination);
      oscillator.start(0);
    }
  }

  // Set the frequency of the oscillator and start it running.
  function startTone( frequency ) {
    var now = audioCtx.currentTime;

    oscillator.frequency.setValueAtTime(frequency, now);

    // Ramp up the gain so we can hear the sound.
    // We can ramp smoothly to the desired value.
    // First we should cancel any previous scheduled events that might interfere.
    amp.gain.cancelScheduledValues(now);
    // Anchor beginning of ramp at current value.
    amp.gain.setValueAtTime(amp.gain.value, now);
    amp.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.01);
    amp.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.11);
  }



// Initiate Web Audio API and call functions //
  setTimeout(function () {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // collect audio elements
    setAudio();

    // set audioe elements as media sources
    setSources();

    // grab all effects and watch for change
    grabEffects();

    // grab all loop inputs
    createLoopStates();
    grabLoops();

    // Set volume for all sources
    setGainValues();
    gainIt();

    // set filter for all sources
    setFilterNodes();
    setFilterValues();
    filterIt();

    // set playback rate
    setRateValues();
    stretchIt();

    // set record for all sources
    setRecordNode();

    // set destination for all sources
    setDestinations();

    // get keyboard ready to play
    playWithKeyboard();

    // init metronome the page has finished loading.
    initAudio();


  }, 1000);
