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
  convolverNodes = [],
  convolverDry = [],
  convolverWet = [],
  convolvers = [],
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
  thisAuthor,
  wavesurfer = [],
  waveTracks = 0,
  tracksVol = [],
  pitchNodes = [];

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
    if (loopOn[sample] == false) {
      loopOn[sample] = true;
      clearLoop(sample);
    }
    document.querySelectorAll('.loop')[sample].classList.remove('looping');
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
      this.parentNode.querySelector('.reverb').style.display = 'none';
    } else if (this.value == 'filter') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'block';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'none';
      this.parentNode.querySelector('.pan').style.display = 'none';
      this.parentNode.querySelector('.reverb').style.display = 'none';
    } else if (this.value == 'loop') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'block';
      this.parentNode.querySelector('.stretch').style.display = 'none';
      this.parentNode.querySelector('.pan').style.display = 'none';
      this.parentNode.querySelector('.reverb').style.display = 'none';
    } else if (this.value == 'stretch') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'block';
      this.parentNode.querySelector('.pan').style.display = 'none';
      this.parentNode.querySelector('.reverb').style.display = 'none';
    } else if (this.value == 'pan') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'none';
      this.parentNode.querySelector('.pan').style.display = 'block';
      this.parentNode.querySelector('.pan').style.display = 'none';
    } else if (this.value == 'reverb') {
      this.parentNode.querySelector('.gain').style.display = 'none';
      this.parentNode.querySelector('.filter').style.display = 'none';
      this.parentNode.querySelector('.loop').style.display = 'none';
      this.parentNode.querySelector('.stretch').style.display = 'none';
      this.parentNode.querySelector('.pan').style.display = 'none';
      this.parentNode.querySelector('.reverb').style.display = 'block';
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

  function setRecordNode() {
    recordNode = audioCtx.createGain();
  }

  function createDownloadLink() {
    recorder && recorder.exportWAV(function(blob) {
      var url = URL.createObjectURL(blob);
      var waveHolder = document.createElement('div');
      waveHolder.setAttribute('class', 'wave-holder');
      var wave = document.createElement('div');
      wave.setAttribute('class', 'wave' + waveTracks);
      $(wave).addClass('wave');
      var div = document.createElement('div');
      div.className = 'track-holder';
      var vol = document.createElement('input');
      vol.setAttribute('type','range');
      vol.setAttribute('class','volume');
      vol.setAttribute('value','1');
      vol.setAttribute('min','0');
      vol.setAttribute('max','1');
      vol.setAttribute('step','0.01');
      var au = document.createElement('audio');
      var hf = document.createElement('a');
      var mute = document.createElement('div');
      mute.className = 'mute-track';
      mute.innerHTML = "<img src='../../assets/images/volume.svg'>";

      au.controls = true;
      au.src = url;
      hf.href = url;
      hf.download = new Date().toISOString() + '.wav';
      hf.innerHTML = "<img src='../../assets/images/download.svg'>";
      waveHolder.appendChild(wave);
      mute.appendChild(vol);
      div.appendChild(mute);
      div.appendChild(au);
      div.appendChild(waveHolder);
      div.appendChild(hf);

      // remove track if it has no data
      div.style.display = 'none';
      document.getElementsByClassName('tracks')[0].appendChild(div);
      setTimeout(function(){
        if (isNaN(document.getElementsByClassName('tracks')[0].lastChild.querySelector('audio').duration)) {
          document.getElementsByClassName('tracks')[0].removeChild(div);
        } else {
          div.style.display = 'block';
        }

        // add margin to bottom of main sample area to prevent tracks from preventing interaction with buttons
        if (document.querySelectorAll('.track-holder').length == 1) {
          $('.sample-bank').css('margin-bottom','200px');
        } else if (document.querySelectorAll('.track-holder').length == 2) {
          $('.sample-bank').css('margin-bottom','250px');
        } else if (document.querySelectorAll('.track-holder').length == 3) {
          $('.sample-bank').css('margin-bottom','300px');
        }

        var cont = '.wave' + waveTracks;

        wavesurfer[waveTracks] = WaveSurfer.create({
          container: cont,
          waveColor: '#EEEEEE',
          progressColor: '#BBBBBB',
          cursorColor: '#FFFFFF',
          height: 49,
          fillParent: false
        });
        wavesurfer[waveTracks].load(url);
        wavesurfer[waveTracks].toggleMute();
        waveTracks++;

      },100);
      setVolValues();
      setTrackVolume();
    });
  }

  // play all recordings
  function playAll() {
    var sounds = document.querySelectorAll('.tracks audio');
    for (var s = 0; s < sounds.length; s++) {
      sounds[s].play();
    }
    var waves = document.querySelectorAll('.wave');
    if (document.querySelector('.wave')) {
      for (var w = 0; w < waves.length; w++) {
        wavesurfer[w].play();
      }
    }
  }

  // stop all recordings
  function stopAll() {
    var sounds = document.querySelectorAll('.tracks audio');
    for (var s = 0; s < sounds.length; s++) {
      sounds[s].currentTime = 0;
      sounds[s].pause();
    }
    var waves = document.querySelectorAll('.wave');
    if (document.querySelector('.wave')) {
      for (var w = 0; w < waves.length; w++) {
        wavesurfer[w].stop();
      }
    }
  }

  function setVolValues() {
    tracksVol = [];
    var trackList = document.querySelectorAll('.track-holder');
    for (var n=0;n<trackList.length;n++) {
      tracksVol.push(document.querySelectorAll('.volume')[n]);
    }
  }

  function setTrackVolume() {
    $('.volume').on('input', function() {
      $('.tracks audio')[tracksVol.indexOf(this)].volume = $(tracksVol[tracksVol.indexOf(this)]).val();
    });
  }

  // grab all audio elements
  function setAudio() {
    myAudio = document.querySelectorAll('audio');
  }

  // set audio elements as web audio api source nodes
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

  // reset a single source when switching individual samples
  function setSingleSource(n) {
    source[n] = audioCtx.createMediaElementSource(myAudio[n]);
  }

  // all effects stuff starts here

  function grabEffects() {
    var effects = document.querySelectorAll('.effects');
    for (var e = 0; e < 16; e++) {
      var element = effects[e];
      element.addEventListener('change', changeEffects);
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
      console.log(interval[i]);
      loopOn[i] = false;
    } else {
      clearInterval(interval[i]);
      console.log(interval[i]);
      loopOn[i] = true;
    }
  }

  // stop looping a sample
  function clearLoop(i) {
    clearInterval(interval[i]);
  }

  function grabLoops() {
    for (var l = 0; l < document.querySelectorAll('.loop').length; l++) {
      loops.push(document.querySelectorAll('.loop')[l]);
    }
  }

  function setRateValues() {
    for (var n=0;n<16;n++) {
      stretches.push(document.querySelectorAll('.stretch')[n]);
    }
  }

  function stretchIt () {
    $('.stretch').on('input', function() {
      $('.sample-player')[stretches.indexOf(this)].playbackRate = $(stretches[stretches.indexOf(this)]).val();
    });
  }

  function setGainNodes() {
    for (var g = 0; g<16; g++) {
      gainNodes.push(audioCtx.createGain());
    }
  }

  function setGainValues() {
    for (var n=0;n<16;n++) {
      gains.push(document.querySelectorAll('.gain')[n]);
    }
  }

  function gainIt() {
    $('.gain').on('input', function() {
      $('.sample-player')[gains.indexOf(this)].volume = $(gains[gains.indexOf(this)]).val();
    });
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

  function panIt() {
    $('.pan').on('input', function() {
      panNodes[pans.indexOf(this)].pan.value = $(pans[pans.indexOf(this)]).val();
    });
  }

  // load reverb impulse and connect it to convolveNodes buffer
  var loadImpulse = function () {
    var url = "http://samplerv2.s3.amazonaws.com/factory.hall.wav";
    var request = new XMLHttpRequest();
    request.open( "GET", url, true );
    request.responseType = "arraybuffer";
    request.onload = function () {
      audioCtx.decodeAudioData( request.response, function ( buffer ) {
        for (var n = 0; n<16; n++) {
          convolverNodes[n].buffer = buffer;
        }
      }, function ( e ) { console.log( e ); } );
    };request.onerror = function ( e ) {
      console.log( e );
    };
    request.send();
  };

  function setConvolverNodes() {
    for (var f = 0; f<16; f++) {
      convolverNodes.push(audioCtx.createConvolver());
      convolverDry.push(audioCtx.createGain());
      convolverWet.push(audioCtx.createGain());
    }
  }

  function setConvolverValues() {
    for (var n=0;n<16;n++) {
      convolvers.push(document.querySelectorAll('.reverb')[n]);
      convolverDry[n].gain.value = (1.0 - $(convolvers[n]).val());
      convolverWet[n].gain.value = $(convolvers[n]).val();
    }
  }

  function convolveIt() {
    $('.reverb').on('input', function() {
      convolverDry[convolvers.indexOf(this)].gain.value = ( 1.0 - $(convolvers[convolvers.indexOf(this)]).val() );
      convolverWet[convolvers.indexOf(this)].gain.value = $(convolvers[convolvers.indexOf(this)]).val();
    });
  }

  function createPitchShifter() {
    for (var p = 0; p<16; p++) {
      pitchNodes[p] = new Jungle( audioCtx );
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

  function filterIt() {
    $('.filter').on('input', function() {
      filterNodes[filters.indexOf(this)].frequency.value = $(filters[filters.indexOf(this)]).val();
    });
  }

  function setDestinations() {
    // connect the AudioBufferSourceNode to the gainNode
    // and the gainNode to the destination, so we can play the
    // music and adjust the volume using the mouse cursor
    for (var d = 0; d<16; d++) {

      // for reverb
      source[d].connect(convolverNodes[d])
      convolverNodes[d].connect(convolverWet[d]);
      source[d].connect(convolverDry[d]);
      convolverDry[d].connect(gainNodes[d]);
      convolverWet[d].connect(gainNodes[d]);

      source[d].connect(pitchNodes[d].input);
      pitchNodes[d].output.connect(gainNodes[d]);

      source[d].connect(filterNodes[d]).connect(gainNodes[d]).connect(panNodes[d]).connect(recordNode).connect(audioCtx.destination);
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
    amp.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
    amp.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.11);
  }

  // lazy load samples
  function lazyLoadMain() {
    var samps = document.querySelectorAll('.main-sample-holder .sample-player');
    for (var s = 0; s < samps.length; s++) {
      var og = samps[s].getAttribute('data-original');
      samps[s].setAttribute('src',og);
    }
  }

  function lazyLoadBank() {
    var samps = document.querySelectorAll('.sample-bank .sample-player');
    for (var s = 0; s < samps.length; s++) {
      var og = samps[s].getAttribute('data-original');
      samps[s].setAttribute('src',og);
    }
  }


  // Copyright 2012, Google Inc.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

function createFadeBuffer(context, activeTime, fadeTime) {
    var length1 = activeTime * context.sampleRate;
    var length2 = (activeTime - 2*fadeTime) * context.sampleRate;
    var length = length1 + length2;
    var buffer = context.createBuffer(1, length, context.sampleRate);
    var p = buffer.getChannelData(0);

    console.log("createFadeBuffer() length = " + length);

    var fadeLength = fadeTime * context.sampleRate;

    var fadeIndex1 = fadeLength;
    var fadeIndex2 = length1 - fadeLength;

    // 1st part of cycle
    for (var i = 0; i < length1; ++i) {
        var value;

        if (i < fadeIndex1) {
            value = Math.sqrt(i / fadeLength);
        } else if (i >= fadeIndex2) {
            value = Math.sqrt(1 - (i - fadeIndex2) / fadeLength);
        } else {
            value = 1;
        }

        p[i] = value;
    }

    // 2nd part
    for (var i = length1; i < length; ++i) {
        p[i] = 0;
    }


    return buffer;
}

function createDelayTimeBuffer(context, activeTime, fadeTime, shiftUp) {
    var length1 = activeTime * context.sampleRate;
    var length2 = (activeTime - 2*fadeTime) * context.sampleRate;
    var length = length1 + length2;
    var buffer = context.createBuffer(1, length, context.sampleRate);
    var p = buffer.getChannelData(0);

    console.log("createDelayTimeBuffer() length = " + length);

    // 1st part of cycle
    for (var i = 0; i < length1; ++i) {
        if (shiftUp)
          // This line does shift-up transpose
          p[i] = (length1-i)/length;
        else
          // This line does shift-down transpose
          p[i] = i / length1;
    }

    // 2nd part
    for (var i = length1; i < length; ++i) {
        p[i] = 0;
    }

    return buffer;
}

var delayTime = 0.100;
var fadeTime = 0.050;
var bufferTime = 0.100;

function Jungle(context) {
    this.context = context;
    // Create nodes for the input and output of this "module".
    var input = context.createGain();
    var output = context.createGain();
    this.input = input;
    this.output = output;

    // Delay modulation.
    var mod1 = context.createBufferSource();
    var mod2 = context.createBufferSource();
    var mod3 = context.createBufferSource();
    var mod4 = context.createBufferSource();
    this.shiftDownBuffer = createDelayTimeBuffer(context, bufferTime, fadeTime, false);
    this.shiftUpBuffer = createDelayTimeBuffer(context, bufferTime, fadeTime, true);
    mod1.buffer = this.shiftDownBuffer;
    mod2.buffer = this.shiftDownBuffer;
    mod3.buffer = this.shiftUpBuffer;
    mod4.buffer = this.shiftUpBuffer;
    mod1.loop = true;
    mod2.loop = true;
    mod3.loop = true;
    mod4.loop = true;

    // for switching between oct-up and oct-down
    var mod1Gain = context.createGain();
    var mod2Gain = context.createGain();
    var mod3Gain = context.createGain();
    mod3Gain.gain.value = 0;
    var mod4Gain = context.createGain();
    mod4Gain.gain.value = 0;

    mod1.connect(mod1Gain);
    mod2.connect(mod2Gain);
    mod3.connect(mod3Gain);
    mod4.connect(mod4Gain);

    // Delay amount for changing pitch.
    var modGain1 = context.createGain();
    var modGain2 = context.createGain();

    var delay1 = context.createDelay();
    var delay2 = context.createDelay();
    mod1Gain.connect(modGain1);
    mod2Gain.connect(modGain2);
    mod3Gain.connect(modGain1);
    mod4Gain.connect(modGain2);
    modGain1.connect(delay1.delayTime);
    modGain2.connect(delay2.delayTime);

    // Crossfading.
    var fade1 = context.createBufferSource();
    var fade2 = context.createBufferSource();
    var fadeBuffer = createFadeBuffer(context, bufferTime, fadeTime);
    fade1.buffer = fadeBuffer
    fade2.buffer = fadeBuffer;
    fade1.loop = true;
    fade2.loop = true;

    var mix1 = context.createGain();
    var mix2 = context.createGain();
    mix1.gain.value = 0;
    mix2.gain.value = 0;

    fade1.connect(mix1.gain);
    fade2.connect(mix2.gain);

    // Connect processing graph.
    input.connect(delay1);
    input.connect(delay2);
    delay1.connect(mix1);
    delay2.connect(mix2);
    mix1.connect(output);
    mix2.connect(output);

    // Start
    var t = context.currentTime + 0.050;
    var t2 = t + bufferTime - fadeTime;
    mod1.start(t);
    mod2.start(t2);
    mod3.start(t);
    mod4.start(t2);
    fade1.start(t);
    fade2.start(t2);

    this.mod1 = mod1;
    this.mod2 = mod2;
    this.mod1Gain = mod1Gain;
    this.mod2Gain = mod2Gain;
    this.mod3Gain = mod3Gain;
    this.mod4Gain = mod4Gain;
    this.modGain1 = modGain1;
    this.modGain2 = modGain2;
    this.fade1 = fade1;
    this.fade2 = fade2;
    this.mix1 = mix1;
    this.mix2 = mix2;
    this.delay1 = delay1;
    this.delay2 = delay2;

    this.setDelay(delayTime);
}

Jungle.prototype.setDelay = function(delayTime) {
    this.modGain1.gain.setTargetAtTime(0.5*delayTime, 0, 0.010);
    this.modGain2.gain.setTargetAtTime(0.5*delayTime, 0, 0.010);
}

var previousPitch = -1;

Jungle.prototype.setPitchOffset = function(mult) {
        if (mult>0) { // pitch up
            this.mod1Gain.gain.value = 0;
            this.mod2Gain.gain.value = 0;
            this.mod3Gain.gain.value = 1;
            this.mod4Gain.gain.value = 1;
        } else { // pitch down
            this.mod1Gain.gain.value = 1;
            this.mod2Gain.gain.value = 1;
            this.mod3Gain.gain.value = 0;
            this.mod4Gain.gain.value = 0;
        }
        this.setDelay(delayTime*Math.abs(mult));
    previousPitch = mult;
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

    loadImpulse();
    setConvolverNodes();
    setConvolverValues();
    convolveIt();

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

    createPitchShifter();
    // set destination for all sources
    setDestinations();


    // get keyboard ready to play
    playWithKeyboard();

    // init metronome the page has finished loading.
    initAudio();

    // lazy load main samples
    lazyLoadMain()


  }, 1000);
