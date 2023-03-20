//#region Global Variables
var currentURL = window.location.href;
var urlPath = window.location.pathname;
var author = "";
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
//#endregion

if ("complete" === document.readyState || "loaded" === document.readyState)
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

var geoData = {
  countryCode: null,
};
var adSchedulerData = {
  desktop_floor: 4.0,
  mobile_floor: 4.0,
  show_desktop: true,
  show_mobile: true,
};
// Default if APIs fail
var prebidConfig = {
  price_floor: 4.0,
  shouldFire: true,
};

async function getGeoAndApiResponse() {
  try {
    await Promise.all([
      fetch("https://geolocation.outreach.com/city").then((resp) =>
        resp.json()
      ),
      fetch("https://portal.outreachmediagroup.com/api/adscheduler/1").then(
        (resp) => resp.json()
      ),
    ]).then((data) => {
      geoData = data[0];
      adSchedulerData = data[1];
    });
  } catch (error) {}

  if (geoData.countryCode === "US") {
    let desktopFloor = parseFloat(adSchedulerData.desktop_floor).toFixed(2);
    let mobileFloor = parseFloat(adSchedulerData.mobile_floor).toFixed(2);
    let isMobile = window.innerWidth <= adSpots.inline_mobile1.max;
    prebidConfig = {
      price_floor: isMobile ? mobileFloor : desktopFloor,
      shouldFire: isMobile
        ? adSchedulerData.show_mobile
        : adSchedulerData.show_desktop,
    };
  }
}

getGeoAndApiResponse().then(() => {
  pbjs.que.push(function () {
    pbjs.setConfig({
      priceGranularity: "dense",
      floors: {
        default: parseFloat(prebidConfig.price_floor),
      },
    });
  });
  startAdsOnLoad();
});

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
    a9: true,
    bids: [openx("538767369"), ix(200251), rubicon("743318"), sovrn("1119239")],
  },
  inlineMobile2: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_inline_mobile2",
      sizes: [[300, 250]],
      code: "inline-mobile2",
    },
    a9: true,
    bids: [ix(200252), rubicon("743320"), sovrn("1119240")],
  },
  inlineMobile3: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_inline_mobile3",
      sizes: [[300, 250]],
      code: "inline-mobile3",
    },
    a9: true,
    bids: [ix(200253), rubicon("743322"), sovrn("1119241")],
  },
  inlineMobile4: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/sc_mobile_inline_mobile4",
      sizes: [[300, 250]],
      code: "inline-mobile4",
    },
    a9: true,
    bids: [ix(200254), rubicon("743324"), sovrn("1119242")],
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
      bids: [
        openx("538768368"),
        ix(200250),
        rubicon("743316"),
        sovrn("1119243"),
      ],
    },
  },
  billboard: {
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/sc_desktop_billboard_970x250",
      sizes: [[970, 250]],
      code: "desktop-billboard",
    },
    a9: true,
    prebid: {
      code: "desktop-billboard",
      mediaTypes: {
        banner: {
          sizes: [[970, 250]],
        },
      },
      bids: [sovrn("1119247"), ix(959764), rubicon("2808042")],
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
    a9: true,
    prebid: {
      code: "desktop-728x90",
      mediaTypes: {
        banner: {
          sizes: [[728, 90]],
        },
      },
      bids: [],
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
    a9: true,
    prebid: {
      code: "right-rail",
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 250],
          ],
        },
      },
      bids: [
        openx("538768367"),
        ix(200249),
        rubicon("743310"),
        sovrn("1119244"),
      ],
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
    a9: true,
    prebid: {
      code: "desktop-showcase",
      mediaTypes: {
        banner: {
          sizes: [[300, 250]],
        },
      },
      bids: [ix(200258), rubicon("743306"), sovrn("1119245")],
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
    a9: true,
    prebid: {
      code: "right-rail-sticky",
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 250],
          ],
        },
      },
      bids: [ix(200257), rubicon("743312"), sovrn("1119246")],
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
//#endregion

//#region Ad Functions
// Initialize A9
!(function (a9, a, p, s, t, A, g) {
  if (a[a9]) return;

  function q(c, r) {
    a[a9]._Q.push([c, r]);
  }
  a[a9] = {
    init: function () {
      q("i", arguments);
    },
    fetchBids: function () {
      q("f", arguments);
    },
    setDisplayBids: function () {},
    targetingKeys: function () {
      return [];
    },
    _Q: [],
  };
  A = p.createElement(s);
  A.async = 0;
  A.src = t;
  g = p.getElementsByTagName(s)[0];
  g.parentNode.insertBefore(A, g);
})(
  "apstag",
  window,
  document,
  "script",
  "//c.amazon-adsystem.com/aax2/apstag.js"
);

function openx(e) {
  return {
    bidder: "openx",
    params: {
      unit: e,
      delDomain: "faithit-d.openx.net",
    },
  };
}

function ix(i) {
  return {
    bidder: "ix",
    params: {
      siteId: i,
    },
  };
}

function rubicon(e) {
  return {
    bidder: "rubicon",
    params: {
      accountId: "16724",
      siteId: "156018",
      zoneId: e,
      // floor: parseFloat(prebidConfig.price_floor),
    },
  };
}

function sovrn(i) {
  return {
    bidder: "sovrn",
    params: {
      tagid: i,
      // bidfloor: prebidConfig.price_floor.toString(),
    },
  };
}

function convertGamToA9(gamSlot) {
  return {
    slotID: gamSlot.code,
    slotName: gamSlot.unit,
    sizes: gamSlot.sizes,
  };
}
//#endregion

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
  // googletag.pubads().addEventListener("slotRenderEnded", function(e) {
  //     e.slot === gamSlots['banner-bottom'] && (document.getElementById("google_ads_iframe_/5500201/sc_mobile_adhesion_320x100_0").width = window.innerWidth)
  // })
});

let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
let eventer = window[eventMethod];
let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(
  messageEvent,
  function (e) {
    let i = e[e.message ? "message" : "data"];
    if (
      "adContentAvailable" == (i.message || "ignore") &&
      ("sc-interstitial" == i.adUnit || "interstitial" == i.adUnit)
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

//set APS config
apstag.init({
  pubID: "810a1afb-9c83-4dec-8de3-63fd0e28708a",
  adServer: "googletag",
});

/** Executes a parallel auction between a9 & prebid **/
function executeBidding(adSpots) {
  let FAILSAFE_TIMEOUT = 2e3;
  let requestManager = {
    adserverRequestSent: false,
    aps: false,
    prebid: false,
  };

  let a9Slots = [];
  let prebidSlots = [];
  let refreshSlots = [];
  adSpots.forEach((adSpot) => {
    if ("a9" in adSpot && adSpot.a9 == true) {
      a9Slots.push(convertGamToA9(adSpot.gam));
    }
    if ("prebid" in adSpot) {
      prebidSlots.push(adSpot.prebid);
    }
    refreshSlots.push(gamSlots[adSpot.gam.code]);
  });

  // when both APS and Prebid have returned, initiate ad request
  function biddersBack() {
    if (requestManager.aps && requestManager.prebid) {
      sendAdserverRequest();
    }
    return;
  }

  // sends adserver request
  function sendAdserverRequest() {
    if (requestManager.adserverRequestSent === true) return;
    requestManager.adserverRequestSent = true;
    googletag.cmd.push(function () {
      googletag.pubads().refresh(refreshSlots);
    });
  }

  // sends bid request to APS and Prebid
  function requestHeaderBids() {
    if (!requestManager.prebid) {
      pbjs.que.push(function () {
        pbjs.removeAdUnit();
        pbjs.addAdUnits(prebidSlots);
        pbjs.requestBids({
          timeout: 1.5e3,
          bidsBackHandler: function () {
            googletag.cmd.push(function () {
              pbjs.setTargetingForGPTAsync();
              requestManager.prebid = true;
              biddersBack();
            });
          },
        });
      });
    } else {
      biddersBack();
    }

    if (!requestManager.aps) {
      apstag.fetchBids(
        {
          slots: a9Slots,
        },
        function (bids) {
          googletag.cmd.push(function () {
            apstag.setDisplayBids();
            requestManager.aps = true;
            biddersBack();
          });
        }
      );
    } else {
      biddersBack();
    }
  }

  if (a9Slots.length === 0) requestManager.aps = true;
  if (prebidSlots.length === 0) requestManager.prebid = true;
  requestHeaderBids();

  window.setTimeout(function () {
    sendAdserverRequest();
  }, FAILSAFE_TIMEOUT);
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
    let ad = document.getElementById(adSpot.gam.code).getBoundingClientRect();
    if (
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

var interstitialFired = false;
window.addEventListener("scroll", () => {
  if (canFireInterstitial()) {
    fireInterstitial();
  }
});

function canFireInterstitial() {
  return (
    !interstitialFired &&
    window.pageYOffset / document.body.offsetHeight >= 1 / 5 &&
    window.innerWidth >= adSpots.interstitial.min
  );
}

function fireInterstitial() {
  interstitialFired = true;
  googletag.display("desktop-interstitial");
  executeBidding([adSpots.interstitial]);
}

function startAdsOnLoad() {
  if (document.readyState === "complete") {
    startAds();
  } else {
    window.addEventListener("load", () => {
      startAds();
    });
  }
}
