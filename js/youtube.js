
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
          videoId: '_DrYKjOajqI', //재생할 유투브 영상 ID
          playerVars: {
                autoplay : true, //자동 재생 유무
                loop: true, //반복 재생 유무
          },
          events: {
            //영상이 준비되었을 때
            onReady: function(event){
                event.target.mute() //음소거
            }
          }
        })
      }