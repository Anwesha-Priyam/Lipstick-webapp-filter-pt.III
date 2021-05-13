noseX=0;
noseY=0;
function preload()
{
    lipstick=loadImage("https://i.postimg.cc/kGb1QqtM/lipstick-img.png")
}
function setup()
{
    canvas=createCanvas(450,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(445,345);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video,10,10,430,330);
    fill(194, 252, 247);
    image(lipstick, noseX, noseY, 100, 80);
}
function takeSnapshot()
{
    save("myLipstickFilters.png");
}
function modelLoaded()
{
    console.log("PoseNet model is ready.");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose x =" + noseX);
        console.log("Nose y =" + noseY);
        noseX=results[0].pose.nose.x-45;
        noseY=results[0].pose.nose.y;
        console.log(results);
        console.log("Nose x =" + results[0].pose.nose.x);
        console.log("Nose y =" + results[0].pose.nose.y);
    }
}