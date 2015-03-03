
$(function() {
  
  //To add new videos to the carousel, add them to this array.
  var videos = [
      'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0123+2-Dibs_compress_mp4_5k.mp4',
      'https://dl.dropboxusercontent.com/u/57909785/work.mp4'
  ];

  $("#carousel-button").click(function(){
    newVideo();
  });

  var random = 1;

  var newVideo = function(){
    if($("#carousel-link"))
      $("#carousel-link").remove();

    var link = videos[random];
    var maybeRand = Math.floor(Math.random() * videos.length);

    while(maybeRand == random){
      maybeRand = Math.floor(Math.random() * videos.length);
    }
    random = maybeRand;

    $("#video-carousel").append("<source id=\"carousel-link\" src=\"" + link + "\" type=\"video/mp4\" />");
    $("#video-carousel").load();
  }

  newVideo();

});

