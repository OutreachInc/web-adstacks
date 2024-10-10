googletag.cmd.push(function () {
  if (window.innerWidth <= 768) {
    mobileSticky = googletag
      .defineSlot(
        "/5500201/TSAL_Mobile_320x100",
        [
          [320, 100],
          [1, 1],
        ],
        "banner-bottom"
      )
      .addService(googletag.pubads());
    googletag
      .defineSlot(
        "/5500201/TSAL_Mobile_Inline_Mobile1",
        [300, 250],
        "inline-mobile1"
      )
      .addService(googletag.pubads());
    googletag
      .defineSlot(
        "/5500201/TSAL_Mobile_Inline_Mobile2",
        [300, 250],
        "inline-mobile2"
      )
      .addService(googletag.pubads());
    googletag
      .defineSlot(
        "/5500201/TSAL_Mobile_Inline_Mobile3",
        [300, 250],
        "inline-mobile3"
      )
      .addService(googletag.pubads());
    googletag
      .defineSlot(
        "/5500201/TSAL_Mobile_Inline_Mobile4",
        [300, 250],
        "inline-mobile4"
      )
      .addService(googletag.pubads());
    googletag
      .defineSlot("/5500201/TSAL_Mobile_BTF_Mobile", [300, 250], "btf-mobile")
      .addService(googletag.pubads());
  } else {
    googletag
      .defineSlot(
        "/5500201/TSAL_Desktop_Right_Rail",
        [
          [300, 600],
          [300, 250],
          [160, 600],
        ],
        "right-rail"
      )
      .addService(googletag.pubads());
    googletag
      .defineSlot(
        "/5500201/TSAL_Desktop_BTF_Left_300x250",
        [300, 250],
        "btf-left"
      )
      .addService(googletag.pubads());
    googletag
      .defineSlot(
        "/5500201/TSAL_Desktop_BTF_Right_300x250",
        [300, 250],
        "btf-right"
      )
      .addService(googletag.pubads());
  }

  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.pubads().setTargeting("advid", advid);
  googletag.enableServices();

  // Strech iframe to width of mobile device on ad load
  //   googletag.pubads().addEventListener("slotRenderEnded", function (event) {
  //     if (event.slot === mobileSticky) {
  //       var iFrame = document.getElementById(
  //         "google_ads_iframe_/5500201/cp_mobile_adhesion_320x100_0"
  //       );
  //       iFrame.width = window.innerWidth;
  //     }
  //   });
});

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(
  messageEvent,
  function (e) {
    var key = e.message ? "message" : "data";
    var data = e[key];

    var eventName = data.message || "ignore";

    if (eventName == "adContentAvailable") {
      console.log("ad data available: ", data);

      // replace content
      $("div")
        .filter('[data-container-ad-unit-id="' + data.adUnit + '"]')
        .html(data.content);
    }
    //run function//
  },
  false
);
