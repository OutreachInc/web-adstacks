//#region Global Variables
var currentURL = window.location.href;
var urlPath = window.location.pathname;
var author = "";
window.googletag = window.googletag || { cmd: [] };

if ("complete" === document.readyState || "loaded" === document.readyState) {
  if (window.location.href.indexOf("sermons") > -1) {
    let re = /(?=by )(.*)(?= on)/g,
      str = document.getElementsByClassName("subtitle")[0].innerText,
      newAuthor = str.match(re),
      author = newAuthor.toString();
    author = author.replace(/by/g, "");
  } else if (window.location.href.indexOf("articles") > -1) {
    let re = /^\s*(\w+)\s*,?\s*(\w+)/g,
      str = document.getElementsByClassName("links")[0].innerText,
      newAuthor = str.match(re);
    author = newAuthor.toString();
  }
}

//#region AdSpots
var adSpots = {
  inlineMobile1: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_inline_mobile1",
      sizes: [[300, 250]],
      code: "inline-mobile1",
    },
  },
  inlineMobile2: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_inline_mobile2",
      sizes: [[300, 250]],
      code: "inline-mobile2",
    },
  },
  inlineMobile3: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_inline_mobile3",
      sizes: [[300, 250]],
      code: "inline-mobile3",
    },
  },
  inlineMobile4: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_inline_mobile4",
      sizes: [[300, 250]],
      code: "inline-mobile4",
    },
  },
  btfMobile: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_btf_mobile",
      sizes: [[300, 250]],
      code: "btf-mobile",
    },
    prebid: {
      code: "btf-mobile",
      mediaTypes: {
        banner: {
          sizes: [[300, 250]],
        },
      },
    },
  },
  mobileAdhesion: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_adhesion_320x100",
      sizes: [[1, 1]],
      code: "banner-bottom",
    },
  },
  billboard: {
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_billboard_970x250",
      sizes: [
        [970, 250],
        [970, 90],
        [728, 90],
      ],
      code: "desktop-billboard",
    },
  },
  leaderboard: {
    min: 728,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_728x90",
      sizes: [[728, 90]],
      code: "desktop-728x90",
    },
  },
  rightRail: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_right_rail",
      sizes: [
        [300, 600],
        [160, 600],
        [300, 250],
      ],
      code: "right-rail",
    },
  },
  rightRailShowcase: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_showcase_300x250",
      code: "desktop-showcase",
      sizes: [[300, 250]],
    },
  },
  rightRailSticky: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_right_rail_sticky",
      code: "right-rail-sticky",
      sizes: [
        [300, 600],
        [160, 600],
        [300, 250],
      ],
    },
  },
  interstitial: {
    init: false,
    refreshable: false,
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/sc_interstitial",
      sizes: [1, 1],
      code: "interstitial",
    },
  },
  wallpaper_tower_left: {
    min: 1200,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_wallpaper_200x1200_l",
      sizes: [200, 1200],
      code: "wallpaper-left",
    },
  },
  wallpaper_tower_right: {
    min: 1200,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_wallpaper_200x1200_r",
      sizes: [200, 1200],
      code: "wallpaper-right",
    },
  },
};

//#region Set Ad Queue
var gamSlots = {};

googletag.cmd.push(function () {
  Object.entries(adSpots).forEach(([key, adSpot]) => {
    if (
      adSpot.gam !== undefined &&
      adSpot.min <= window.innerWidth &&
      adSpot.max >= window.innerWidth
    ) {
      gamSlots[adSpot.gam.code] = googletag
        .defineSlot(adSpot.gam.unit, adSpot.gam.sizes, adSpot.gam.code)
        .addService(googletag.pubads());
    }
  });

  googletag.pubads().setTargeting("author", author);
  googletag.pubads().setTargeting("url", window.location.pathname.slice(0, 40));
  // googletag.pubads().enableSingleRequest();
  googletag.pubads().disableInitialLoad();
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();

  // Strech iframe to width of mobile device on ad load
  googletag.pubads().addEventListener("slotRenderEnded", function (e) {
    if (e.slot === gamSlots["banner-bottom"] && e.slot.getHtml()) {
      const timeNow = new Date().getTime();
      const oneDayFromNow = new Date(timeNow + 24 * 60 * 60 * 1000);
      const dateExpiresString = oneDayFromNow.toUTCString();
      document.cookie = `fired_mobile_adhesion=true;expires=${dateExpiresString}; SameSite=None; Secure`;
      //(document.getElementById("banner-bottom").width = window.innerWidth);
    }
  });
});

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(
  messageEvent,
  function (e) {
    let i = e[e.message ? "message" : "data"];
    if (
      "adContentAvailable" == (i.message || "ignore") &&
      ("sc-interstitial" == i.adUnit ||
        "interstitial" == i.adUnit ||
        "mobile-adhesion" == i.adUnit)
    ) {
      document.querySelector(
        '[data-container-ad-unit-id="' + i.adUnit + '"]'
      ).innerHTML = i.content;

      document.querySelector(
        '[data-container-ad-unit-id="' + i.adUnit + '"]'
      ).style.display = "block";
    }
  },
  !1
);
//#endregion

/** Executes a parallel auction between a9 & prebid **/
function executeBidding(adSpots) {
  let refreshSlots = [];
  adSpots.forEach((adSpot) => {
    refreshSlots.push(gamSlots[adSpot.gam.code]);
  });

  // sends adserver request
  function sendAdserverRequest() {
    googletag.cmd.push(function () {
      googletag.pubads().refresh(refreshSlots);
    });
  }

  sendAdserverRequest();
}

function startAds() {
  let initialAds = [];
  Object.entries(adSpots).forEach(([key, adSpot]) => {
    if (
      adSpot.min <= window.innerWidth &&
      adSpot.max >= window.innerWidth &&
      adSpot.init !== false
    ) {
      if (adSpot.refreshable !== false) {
        adRefresh(adSpot);
      }
      initialAds.push(adSpot);
    }
  });

  executeBidding(initialAds);
}

function adRefresh(adSpot) {
  setInterval(() => {
    let ad = document.getElementById(adSpot.gam.code)?.getBoundingClientRect();
    if (
      ad &&
      !document.hidden &&
      adSpot.refreshable !== false &&
      ad.bottom >= 0 &&
      ad.right >= 0 &&
      ad.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      ad.left <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      executeBidding([adSpot]);
    }
  }, 6e4); // 60 seconds
}

let interstitialFired = false;
function canFireInterstitial() {
  return (
    document.readyState === "complete" &&
    !interstitialFired &&
    window.scrollY / document.body.offsetHeight >= 1 / 5 &&
    window.innerWidth >= adSpots.interstitial.min
  );
}

function fireInterstitial() {
  interstitialFired = true;
  googletag.display("desktop-interstitial");
  executeBidding([adSpots.interstitial]);
}

// function startAdsOnLoad() {
//   if (document.readyState === "complete") {
//     loadInAds();
//   } else {
//     window.addEventListener("load", () => {
//       loadInAds();
//     });
//   }
// }

function loadInAds() {
  limitMobileAdhesion();
  startAds();

  if (new Date().toLocaleDateString() === "3/22/2023") {
    setTimeout(() => {
      fireInterstitial();
    }, 5e3); // 5 seconds
  } else {
    window.addEventListener("scroll", () => {
      if (canFireInterstitial()) {
        fireInterstitial();
      }
    });
  }
}

function limitMobileAdhesion() {
  if (
    window.innerWidth <= adSpots.mobileAdhesion.max &&
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("fired_mobile_adhesion"))
  ) {
    delete adSpots.mobileAdhesion;
  }
}

window.addEventListener("load", loadInAds);
