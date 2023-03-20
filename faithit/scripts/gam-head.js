//#region Global Variables
var advid = advid || null;

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
      fetch("https://portal.outreachmediagroup.com/api/adscheduler/2").then(
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
//#endregion

//#region AdSpots
var adSpots = {
  inline_mobile1: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/FI_Mobile_Inline_Mobile",
      sizes: [[300, 250]],
      code: "inline-mobile1",
    },
    a9: true,
    prebid: {
      code: "inline-mobile1",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
        video: {
          context: "outstream",
          playerSize: [[640, 480]],
        },
      },
      bids: [
        ix("200222"),
        openx("538728573"),
        rubicon("685018"),
        sovrn("590054"),
      ],
    },
  },
  inline_mobile2: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/FI_Mobile_Inline_Mobile2",
      sizes: [[300, 250]],
      code: "inline-mobile2",
    },
    a9: true,
    prebid: {
      code: "inline-mobile2",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("200223"),
        rubicon("685028"),
        openx("538787625"),
        sovrn("590055"),
      ],
    },
  },
  inline_mobile3: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/FI_Mobile_Inline_Mobile3",
      sizes: [[300, 250]],
      code: "inline-mobile3",
    },
    a9: true,
    prebid: {
      code: "inline-mobile3",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("200225"),
        rubicon("685032"),
        openx("538787626"),
        sovrn("590056"),
      ],
    },
  },
  inline_mobile4: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/FI_Mobile_Inline_Mobile4",
      sizes: [[300, 250]],
      code: "inline-mobile4",
    },
    a9: true,
    prebid: {
      code: "inline-mobile4",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("200226"),
        rubicon("685034"),
        openx("538787628"),
        sovrn("590057"),
      ],
    },
  },
  btfMobile: {
    min: 0,
    max: 934,
    gam: {
      unit: "/5500201/FI_Mobile_BTF_Mobile",
      sizes: [[300, 250]],
      code: "btf-mobile",
    },
    a9: true,
    prebid: {
      code: "btf-mobile",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("200221"),
        rubicon("685016"),
        openx("538728572"),
        sovrn("590058"),
      ],
    },
  },
  mobileSticky: {
    refreshable: false,
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/FI_Mobile_320x100",
      sizes: [
        [1, 1],
        [320, 100],
      ],
      code: "banner-bottom",
    },
  },
  billboard: {
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/fi_desktop_billboard_970x250",
      sizes: [
        [970, 250],
        [970, 90],
        [728, 90],
      ],
      code: "desktop-billboard",
    },
    a9: true,
    prebid: {
      code: "desktop-billboard",
      mediaTypes: {
        banner: {
          sizes: [
            [970, 250],
            [970, 90],
            [728, 90],
          ],
        },
      },
      bids: [rubicon("1083234"), sovrn("611379"), ix("959229")],
    },
  },
  showcase: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_Showcase_300x250",
      sizes: [[300, 250]],
      code: "desktop-showcase",
    },
    a9: true,
    prebid: {
      code: "desktop-showcase",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [ix("217110"), rubicon("710288"), sovrn("590071")],
    },
  },
  right_rail: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_Right_Rail",
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
        ix("200220"),
        rubicon("685014"),
        openx("538699942"),
        sovrn("590061"),
      ],
    },
  },
  btf_left: {
    min: 935,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_BTF_Left_300x250",
      sizes: [[300, 250]],
      code: "btf-left-300x250",
    },
    a9: true,
    prebid: {
      code: "btf-left-300x250",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("200218"),
        rubicon("685010"),
        openx("538699940"),
        sovrn("590059"),
      ],
    },
  },
  btf_right: {
    min: 935,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_BTF_Right_300x250",
      sizes: [300, 250],
      code: "btf-right-300x250",
    },
    a9: true,
    prebid: {
      code: "btf-right-300x250",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("200219"),
        rubicon("685012"),
        openx("538699941"),
        sovrn("590060"),
      ],
    },
  },
  desktop_outstream: {
    min: 960,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_Outstream",
      sizes: [1, 1],
      code: "desktop-outstream",
    },
    prebid: {
      code: "desktop-outstream",
      mediaTypes: {
        video: {
          context: "outstream",
          playerSize: [[640, 480]],
        },
      },
      bids: [],
    },
  },
  interstitial: {
    init: false,
    refreshable: false,
    min: 960,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Interstitial_550x350",
      sizes: [1, 1],
      code: "interstitial",
    },
  },
  desktop_left_sidebar: {
    refreshable: false,
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_Left_Sidebar",
      sizes: [
        [1, 1],
        [300, 600],
        [120, 600],
        [160, 600],
      ],
      code: "desktop-left-sidebar",
    },
  },
  desktop_below_article: {
    refreshable: true,
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_Below_Article",
      sizes: [1, 1],
      code: "desktop-below-article",
    },
  },
  desktop_native: {
    refreshable: false,
    min: 9670,
    max: 9999,
    gam: {
      unit: "/5500201/FI_Desktop_Native",
      sizes: [580, 210],
      code: "desktop-native",
    },
  },
  wallpaper_towers: {
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/fi_desktop_wallpaper_towers",
      sizes: [1, 1],
      code: "wallpaper-towers",
    },
  },
};
//#endregion

//#region Ad Functions
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

function ix(site) {
  return {
    bidder: "ix",
    params: {
      siteId: site,
    },
  };
}

function openx(value) {
  return {
    bidder: "openx",
    params: {
      unit: value,
      delDomain: "faithit-d.openx.net",
    },
  };
}

function rubicon(zone) {
  return {
    bidder: "rubicon",
    params: {
      accountId: "16724",
      siteId: "144998",
      zoneId: zone,
      latLong: [geoData?.latitude, geoData?.longitude],
      // floor: parseFloat(prebidConfig.price_floor),
    },
  };
}

function sovrn(value) {
  return {
    bidder: "sovrn",
    params: {
      tagid: value,
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

  googletag.pubads().setTargeting("advid", advid);
  googletag.pubads().setTargeting("url", window.location.pathname.slice(0, 40));
  // googletag.pubads().enableSingleRequest();
  googletag.pubads().disableInitialLoad();
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();

  // Strech iframe to width of mobile device on ad load
  googletag.pubads().addEventListener("slotRenderEnded", function (e) {
    e.slot === gamSlots["banner-bottom"] &&
      (document.getElementById("banner-bottom").width = window.innerWidth);
  });
});

let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
let eventer = window[eventMethod];
let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(
  messageEvent,
  function (e) {
    let key = e.message ? "message" : "data";
    let data = e[key];

    let eventName = data.message || "ignore";

    if (eventName == "adContentAvailable") {
      // replace content
      document.querySelector(
        '[data-container-ad-unit-id="' + data.adUnit + '"]'
      ).innerHTML = data.content;
      document.getElementById("desktop-interstitial").remove(); // Remove initial iframe
    }
    //run function//
  },
  false
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
    aps: prebidConfig.shouldFire ? false : true, // false indicates that we need to send the request
    prebid: prebidConfig.shouldFire ? false : true, // false indicates that we need to send the request
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

function fireInterstitial() {
  googletag.display("desktop-interstitial");
  executeBidding([adSpots.interstitial]);
}

function startAdsOnLoad() {
  if (document.readyState === "complete") {
    loadInAds();
  } else {
    window.addEventListener("load", () => {
      loadInAds();
    });
  }
}

function loadInAds() {
  startAds();
  setTimeout(() => {
    fireInterstitial();
  }, 1e4); // 10 seconds
}
