var ad = false;
function() {

  var timeout = setInterval(function() {
    if (window.location.pathname !== '/watch') {
      return;
    }
    var isVideoAd = document.getElementsByClassName('videoAdUi')[0];
    var btnCloseBanner = document.getElementsByClassName('svg-close-button')[0];
    var btnSpeedUp = document.getElementById('SpeedUp');
    var btnSpeedReset = document.getElementById('PlayBackRate');
    var btnSpeedDown = document.getElementById('SpeedDown');
    var btnSkipAd = document.getElementsByClassName('videoAdUiSkipButton')[0];
    //console.log("tic");
    if (btnSkipAd) {
      //console.log("skipad");
      eventFire(btnSkipAd, 'click');
    }
    if (btnCloseBanner){
      //console.log("closeBanner");
      eventFire(btnCloseBanner, 'click');
    }
    if (isVideoAd){
      ad = true;
      //console.log("speedup");
      for (var i = 0; i < 64; i++){
        eventFire(btnSpeedUp, 'click');
      }
    }else if (ad){
      //console.log("button reset");
      ad = false;
      eventFire(btnSpeedReset, 'click');
    }
  }, 2000);

  function eventFire(el, etype, range){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    }else{
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

}();
