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
  gainNodes = [],
  panNodes = [],
  pans = [],
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

  // play sample
  function playThing(sample, key) {
    var audio = $('.sample-player')[sample];
    $(audio).parent().parent().addClass('selected');
    if (down[key] == null) {
      audio.pause();
      audio.currentTime = 0;
      gainNodes[sample].gain.value = 1;
      setTimeout(function(){
        audio.play();
      }, 50);
      down[key] = true;
    }
  }

  // pause sample
  function pauseThing(sample, key) {
    var audio = $('.sample-player')[sample];
    $(audio).parent().parent().removeClass('selected');
    gainNodes[sample].gain.value = 0;
    setTimeout(function(){
      audio.pause();
    },100);
    down[key] = null;
  }

  // play samples on keyboard interaction
  function playWithKeyboard() {

    // grab keydown code + play sample
    $(document).keydown(function(e) {
      if (keysActive === true) {

        if ( e.keyCode === 90 ) { //z
          playThing(12,'90');
        }
        if ( e.keyCode === 88 ) { //x
          playThing(13,'88');
        }
        if ( e.keyCode === 67 ) { //c
          playThing(14,'67');
        }
        if ( e.keyCode === 86 ) { //v
          playThing(15,'86');
        }
        if ( e.keyCode === 83 ) { //s
          playThing(8,'83');
        }
        if ( e.keyCode === 68 ) { //d
          playThing(9,'68');
        }
        if ( e.keyCode === 70 ) { //f
          playThing(10,'70');
        }
        if ( e.keyCode === 71 ) { //g
          playThing(11,'71');
        }
        if ( e.keyCode === 69 ) { //e
          playThing(4,'69');
        }
        if ( e.keyCode === 82 ) { //r
          playThing(5,'82');
        }
        if ( e.keyCode === 84 ) { //t
          playThing(6,'84');
        }
        if ( e.keyCode === 89 ) { //y
          playThing(7,'89');
        }
        if ( e.keyCode === 52 ) { //4
          playThing(0,'52');
        }
        if ( e.keyCode === 53 ) { //5
          playThing(1,'53');
        }
        if ( e.keyCode === 54 ) { //6
          playThing(2,'54');
        }
        if ( e.keyCode === 55 ) { //7
          playThing(3,'55');
        }
      }
    });

    $(document).keyup(function(e) {

      if (keysActive === true) {
        if ( e.keyCode === 90 ) { //z
          pauseThing(12,'90');
        }
        if ( e.keyCode === 88 ) { //x
          pauseThing(13,'88');
        }
        if ( e.keyCode === 67 ) { //c
          pauseThing(14,'67');
        }
        if ( e.keyCode === 86 ) { //v
          pauseThing(15,'86');
        }
        if ( e.keyCode === 83 ) { //s
          pauseThing(8,'83');
        }
        if ( e.keyCode === 68 ) { //d
          pauseThing(9,'68');
        }
        if ( e.keyCode === 70 ) { //f
          pauseThing(10,'70');
        }
        if ( e.keyCode === 71 ) { //g
          pauseThing(11,'71');
        }
        if ( e.keyCode === 69 ) { //e
          pauseThing(4,'69');
        }
        if ( e.keyCode === 82 ) { //r
          pauseThing(5,'82');
        }
        if ( e.keyCode === 84 ) { //t
          pauseThing(6,'84');
        }
        if ( e.keyCode === 89 ) { //y
          pauseThing(7,'89');
        }
        if ( e.keyCode === 52 ) { //4
          pauseThing(0,'52');
        }
        if ( e.keyCode === 53 ) { //5
          pauseThing(1,'53');
        }
        if ( e.keyCode === 54 ) { //6
          pauseThing(2,'54');
        }
        if ( e.keyCode === 55 ) { //7
          pauseThing(3,'55');
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
      this.parentNode.querySelector('.pan').style.display = 'none';
    } else if (this.value == 'filter') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'block';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'none';
      this.parentNode.querySelector('.pan').style.display = 'none';
    } else if (this.value == 'loop') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'block';
      this.parentNode.querySelector('.stretch').style.display = 'none';
      this.parentNode.querySelector('.pan').style.display = 'none';
    } else if (this.value == 'stretch') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'block';
      this.parentNode.querySelector('.pan').style.display = 'none';
    } else if (this.value == 'pan') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'none';
      this.parentNode.querySelector('.pan').style.display = 'block';
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

  function panIt() {
    $('.pan').on('input', function() {
      panNodes[pans.indexOf(this)].pan.value = $(pans[pans.indexOf(this)]).val();
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
      document.getElementsByClassName('tracks')[0].appendChild(div);
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

  function setGainNodes() {
    for (var g = 0; g<16; g++) {
      gainNodes.push(audioCtx.createGain());
    }
  }

  function setPanNodes() {
    for (var p = 0; p<16; p++) {
      panNodes.push(audioCtx.createStereoPanner());
    }
  }

  function setPanValues() {
    for (var n=0;n<16;n++) {
      pans.push(document.querySelectorAll('.pan')[n]);
      panNodes[n].pan.value = $(pans[n]).val();
    }
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
      source[d].connect(filterNodes[d]).connect(gainNodes[d]).connect(panNodes[d]).connect(recordNode).connect(audioCtx.destination);
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
    var sounds = document.querySelectorAll('.tracks audio');
    for (var s = 0; s < sounds.length; s++) {
      sounds[s].play();
    }
  }

  // stop all recordings
  function stopAll() {
    var sounds = document.querySelectorAll('.tracks audio');
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
    setGainNodes();
    setGainValues();
    gainIt();

    // set panning for all sources
    setPanNodes();
    setPanValues();
    panIt();

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
