noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function preload(){
    pic = loadImage('candy.jpg');
}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(570,200);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Intialised !!");
}
function draw(){
    background(pic);
    textSize(difference);
    document.getElementById("name_size").innerHTML = "Size of the Name will be"+difference+"px";
    fill("Orange");
    stroke("darkblue");
    strokeWeight(10);
    text('Mr.K',noseX,noseY);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWrist - rightWrist);
    }
}