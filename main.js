noseX=0;
noseY=0;
difference=0;
LeftwristX=0;
RightwristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,500);
canvas.position(600,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}


function modelLoaded(){
    console.log("posenet model has been initialized");

}



function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+ " ,noseY="+noseY);
    
    LeftwristX=results[0].pose.leftWrist.X;
    RightwristX=results[0].pose.rightWrist.X;
    difference= Math.floor(LeftwristX-RightwristX);
    console.log("LeftwreistX="+LeftwristX+ ", RightwristX="+RightwristX+ ", difference="+difference);

}
}

function draw(){
    
    background("grey");
    document.getElementById("square_side").innerHTML= "Width and Height Of the Square= " + difference + " px ";
    fill("yellow");
    stroke("blue");
    square(noseX, noseY, difference);
 

}
