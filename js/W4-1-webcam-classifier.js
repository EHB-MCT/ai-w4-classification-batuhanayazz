"use strict";

let mobilenet;
let video;
let label = '';
let prob;

function modelReady() {
  console.log('Model is ready!');
  mobilenet.predict(gotResults);
}

function gotResults(error, results) {
  if(error){
    console.log(error)
  } else{
    console.log(results);
    label = results[0].className;
    prob = results[0].probability;
    mobilenet.predict(gotResults);
  }
    console.log('Prediction ready');
}

function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  let canvas = createCanvas(640, 360);
  canvas.parent("container");
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
  background(0);
  image(video, 0, 0, width, height);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}