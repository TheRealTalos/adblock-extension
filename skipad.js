
;(function() {
  var ad = false;
  var timeout = setInterval(function() {
    if (window.location.pathname !== '/watch') {
      return;
    }
    var isVideoAd = document.getElementsByClassName('ad-showing')[0];
    var btnCloseBanner = document.getElementsByClassName('ytp-ad-overlay-close-button')[0];
    var btnSpeedUp = document.querySelector('faster')
    var btnSpeedDown = document.querySelector('slower')
    var btnSkipAd = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0];
    //console.log(ad);
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
      for (var i = 0; i < 160; i++){
        eventFire(btnSpeedUp, 'click');
      }
    }else if (ad){
      //console.log("button reset");
      ad = false;
      for (var i = 0; i < 160; i++){
        eventFire(btnSpeedDown, 'click');
      }
    }
  }, 100);

  function eventFire(el, etype, range){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    }else{
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

})();
