noseX=0;
noseY=0;

function preload()
{
 iron_mask=loadImage('https://i.postimg.cc/NGPWCMcM/iron-mask-removebg-preview.png')
}

function setup()
{
 canvas=createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.size(300,300);
 video.hide()
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose',gotResult);
}

function modelLoaded()
{
console.log("Posenet is activated");
}

function draw()
{
 image(video,0,0,300,300);
 image(iron_mask,noseX-99,noseY-80,200,180);
}

function take_photo()
{
 save("IRON MAN.png")
}

function gotResult(results)
{
 if(results.length>0)
 {
   console.log(results)
   noseX=results[0].pose.nose.x;
   noseY=results[0].pose.nose.y;  
 }
}