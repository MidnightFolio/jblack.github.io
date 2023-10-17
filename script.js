var myVids = document.getElementById("video1");
var arrayVids = ["vid1.mp4", "Vid2.mp4", "Vid3.mp4", "Vid4.mp4"]
var videoIndex = 0;

function changeVids(){
   myVids.setAttribute("src", arrayVids[videoIndex]);
   videoIndex++;
   
   if(videoIndex >= arrayVids.length){
      videoIndex = 0;
   }
}
setInterval(changeVids, 19000);
