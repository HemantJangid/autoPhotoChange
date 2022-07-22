// Config

// var sequencePath =
//   "https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/";
// var sequencePath = "https://stuff.nicolas.se/epiroc/hat-overview/";
var sequencePath = "photos/";
// var sequenceNumberLength = 3;
var sequenceNumberLength = 4;
var fileName = "1080_";
// var fileName = "hat-overview-";
var fileSuffix = ".png";

var targetElement = document.getElementById("myCanvas");

//var fps = 30;
var startFrame = 1;
var endFrame = 50;
// var endFrame = 300;
var loop = true;
var pingPong = true;

// Functions

function padWithZeroes(number, length) {
  var paddedNumber = "" + number;
  while (paddedNumber.length < length) {
    paddedNumber = "0" + paddedNumber;
  }
  return paddedNumber;
}

var frames = [];
var framesLoaded = 0;
function loadFrames(callback) {
  for (var i = startFrame; i <= endFrame; i++) {
    frames[i] = new Image();
    frames[i].src =
      sequencePath +
      fileName +
      padWithZeroes(i, sequenceNumberLength) +
      fileSuffix;
    frames[i].onload = function () {
      framesLoaded++;
      if (framesLoaded >= endFrame - startFrame) {
        callback();
      }
    };
  }
}

var currentFrame = startFrame;
//var interval = 1000/fps;
var forwards = true;

function frameAnimation() {
  var canvas = targetElement;
  var context = canvas.getContext("2d");
  //var img = new Image;

  //img.onload = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(frames[currentFrame], 0, 0);
  //};

  // If last frame
  if (currentFrame == endFrame) {
    if (!loop) cancelAnimationFrame();

    if (pingPong) {
      forwards = false; // Go backwards
    } else {
      currentFrame = startFrame; // Start over
    }
    // If first frame
  } else if (currentFrame == startFrame) {
    if (pingPong) {
      forwards = true;
    }
  }

  //img.src = sequencePath + fileName + padWithZeroes(currentFrame, sequenceNumberLength) + fileSuffix;

  if (forwards) {
    currentFrame++;
  } else {
    currentFrame--;
  }

  requestAnimationFrame(frameAnimation);
}

const canvas = document.querySelector("#myCanvas");
if (window.innerHeight > window.innerWidth) {
  canvas.style.height = "100%";
  canvas.style.width = "auto";
} else if (window.innerWidth > window.innerHeight) {
  canvas.style.width = "100%";
  canvas.style.height = "auto";
}

loadFrames(function () {
  console.log("loaded!");
  frameAnimation();
});
