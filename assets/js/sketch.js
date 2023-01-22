let reloadButton;
let imgAspectRatio;
let vid;
let playing = true;

function preload() {
  dither = loadShader('/assets/shader.vert', '/assets/shader.frag');
  img = loadImage('/assets/omg-inv.png');
}

function setup() {
  vid = createVideo("/assets/echo-v3.mp4");
  vid.size(400, 400);
  vid.volume(0);
  vid.loop();
  vid.hide();

  let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("canvas-container");
  noStroke();
  noSmooth();
  
  // reloadButton = createButton('new shader');
  // reloadButton.position(5, 5);
  // reloadButton.mousePressed(() => {genDitherMat(ditherMat)});
  
  // setInterval(() => {genDitherMat(ditherMat)}, 10000);

  // initialize the createGraphics layers
  dithered = createGraphics(width, height, WEBGL);
  dithered.noStroke();
  dithered.noSmooth();
  
  // Create initial random dither matrix
  ditherMat = createImage(8,8);  
  genDitherMat(ditherMat);
}

// Generates a random dither matrix
function genDitherMat(mat) {
  mat.loadPixels();
  for (let i = 0; i < mat.width; i++) {
    for (let j = 0; j < mat.height; j++) {
      let randVal = int(random(256));
      mat.set(i, j, color(randVal, randVal, randVal));
    }
  }
  mat.updatePixels();
}

function draw() {
  background(255);
  // shader(dither);  
  img = vid.get()
  
  dithered.shader(dither);
  dither.setUniform('tex0', img);
  dither.setUniform('mat0', ditherMat);
  dither.setUniform('u_mouseX', mouseX/width);
  dither.setUniform('u_mouseY', mouseY/height);
  dither.setUniform('u_screenWidth', width);
  dither.setUniform('u_screenHeight', height);
  dither.setUniform('u_texAspect', img.width/img.height);
  // image(img,0,0,width,height)
  
  // // We have to draw a rect onto which to put the image
  // dithered.rect(0,0,width, height);
  dithered.background(255);

  // dithered.normalMaterial();
  // dithered.rotateX(frameCount * 0.01);
  // dithered.rotateY(frameCount * 0.01);
  // dithered.texture(img);
  dithered.plane(0, 0, 200, 100);

  image(dithered, -width,-height, width*2, height*2);
  // image(dithered, 0, 0)
  // circle(50,50,50,50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }