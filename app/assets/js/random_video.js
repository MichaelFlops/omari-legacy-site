
$(function() {
  
  //$("#video-carousel").

  //To add new videos to the carousel, add them to this array.
  var videos = [
    'https://dl.dropboxusercontent.com/u/57909785/work.mp4',
    'https://s3-us-west-1.amazonaws.com/firepenguin/MVI_3788-Wi-Fi+High.mp4',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0130.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/chrisOmari-Wi-Fi+High.mp4',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0131.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0132.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0123+2-Dibs_compress_mp4_5k.mp4',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0136.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0138.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/michaelBand-Wi-Fi+High.mp4',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0144.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0145.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/sf2-HD+720p.mov',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0147.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0148.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/IMG_0151.MOV',
    'https://s3-us-west-1.amazonaws.com/firepenguin/1080p.mov'
  ];

  videos = _.shuffle(videos);

  $("#carousel-button").click(function(){
    newVideo();
  });

  var start = 0;

  var newVideo = function(){
    if($("#carousel-link"))
      $("#carousel-link").remove();


    var link = videos[start];
    start = (start + 1) % videos.length;

    $("#video-carousel").append("<source id=\"carousel-link\" src=\"" + link + "\" type=\"video/mp4\" />");
    $("#video-carousel").load();
  }

  newVideo();

});

