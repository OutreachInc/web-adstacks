//#region Global Variables
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var clCategory = new URL(location.href).pathname.split("/")[1];
if (clCategory == "outreach-missions") clCategory = "outreach";

var geoData = {
  countryCode: null,
};
var adSchedulerData = {
  desktop_floor: 4.0,
  mobile_floor: 4.0,
  show_desktop: false,
  show_mobile: false,
};
// Default if APIs fail
var prebidConfig = {
  price_floor: 4.0,
  shouldFire: false,
};

/**
 * The timeoutPromise helper allows you to wrap any promise to fulfill within a timeout.
 *
 * @param {Promise} promise A promise instance
 * @param {BigInteger} timeoutInMilliseconds The time limit in milliseconds to fulfill or reject the promise.
 * @returns {Promise} A pending Promise
 */
Promise.timeout = function (promise, timeoutInMilliseconds) {
  return Promise.race([
    promise,
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("timeout");
      }, timeoutInMilliseconds);
    }),
  ]);
};

function getDataFromUrl(url, timeoutInMilliseconds) {
  return Promise.timeout(
    new Promise((resolve, reject) => {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log("Error fetching data from API", error);
          reject(error);
        });
    }),
    timeoutInMilliseconds
  );
}

async function getGeoAndApiResponse() {
  const geoDataCall = getDataFromUrl(
    "https://geolocation.outreach.com/city",
    1000
  );
  const adSchedulerDataCall = getDataFromUrl(
    "https://portal.outreachmediagroup.com/api/adscheduler/4",
    1000
  );

  try {
    await Promise.all([geoDataCall, adSchedulerDataCall]).then((data) => {
      geoData = data[0];
      adSchedulerData = data[1];
    });
  } catch (error) {}

  if (geoData.countryCode === "US") {
    let desktopFloor = parseFloat(adSchedulerData.desktop_floor).toFixed(2);
    let mobileFloor = parseFloat(adSchedulerData.mobile_floor).toFixed(2);
    let isMobile = window.innerWidth < 768;
    prebidConfig = {
      price_floor: isMobile ? mobileFloor : desktopFloor,
      shouldFire: isMobile
        ? adSchedulerData.show_mobile
        : adSchedulerData.show_desktop,
    };
  }
}

getGeoAndApiResponse().then(() => {
  addInfiniteScrollingAds();

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
      unit: "/5500201/cl_mobile_inline_mobile1",
      sizes: [[300, 250]],
      code: "inline-mobile1",
    },
    a9: true,
    prebid: {
      code: "inline-mobile1",
      mediaTypes: {
        banner: {
          sizes: [[300, 250]],
        },
        video: {
          context: "outstream",
          playerSize: [[640, 480]],
        },
      },
      bids: [
        ix("959592"),
        // openx("538728573"),
        rubicon("743340"),
        sovrn("1119221"),
      ],
    },
  },
  inline_mobile2: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile2",
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
        ix("959594"),
        rubicon("743342"),
        // openx("538787625"),
        sovrn("1119222"),
      ],
    },
  },
  inline_mobile3: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile3",
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
        ix("959595"),
        rubicon("743344"),
        // openx("538787626"),
        sovrn("1119223"),
      ],
    },
  },
  inline_mobile4: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile4",
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
        ix("959596"),
        rubicon("743346"),
        // openx("538787628"),
        sovrn("1119224"),
      ],
    },
  },
  inline_mobile5: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile5",
      sizes: [[300, 250]],
      code: "inline-mobile5",
    },
    a9: true,
    prebid: {
      code: "inline-mobile5",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("959597"),
        rubicon("2807960"),
        // openx("538787628"),
        sovrn("1119225"),
      ],
    },
  },
  inline_mobile6: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile6",
      sizes: [[300, 250]],
      code: "inline-mobile6",
    },
    a9: true,
    prebid: {
      code: "inline-mobile6",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("959598"),
        rubicon("2807962"),
        // openx("538787628"),
        sovrn("1119226"),
      ],
    },
  },
  inline_mobile7: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile7",
      sizes: [[300, 250]],
      code: "inline-mobile7",
    },
    a9: true,
    prebid: {
      code: "inline-mobile7",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [
        ix("959599"),
        rubicon("2807964"),
        // openx("538787628"),
        sovrn("1119227"),
      ],
    },
  },
  btf_mobile: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_btf_mobile",
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
        ix("959600"),
        rubicon("743338"),
        // openx("538728572"),
        sovrn("1119228"),
      ],
    },
  },
  mobileAdhesion: {
    min: 0,
    max: 767,
    refreshable: false,
    gam: {
      unit: "/5500201/cl_mobile_adhesion_320x100",
      sizes: [[1, 1]],
      code: "banner-bottom",
    },
  },
  // btf_left: {
  //     min: 768,
  //     max: 9999,
  //     gam: {
  //         unit: '/5500201/cl_desktop_btf_left_300x250',
  //         sizes: [300, 250],
  //         code: 'btf-left-300x250'
  //     },
  // },
  // btf_right: {
  //     min: 768,
  //     max: 9999,
  //     gam: {
  //         unit: '/5500201/cl_desktop_btf_right_300x250',
  //         sizes: [300, 250],
  //         code: 'btf-right-300x250'
  //     },
  // },
  right_rail: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_right_rail",
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
        ix("959601"),
        rubicon("743330"),
        // openx("538699942"),
        sovrn("1119229"),
      ],
    },
  },
  showcase: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_showcase_300x250",
      sizes: [[300, 250]],
      code: "desktop-showcase-300x250",
    },
    a9: true,
    prebid: {
      code: "desktop-showcase",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [ix("959602"), rubicon("743328"), sovrn("1119230")],
    },
  },
  inline_desktop3: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_inline3",
      sizes: [[300, 250]],
      code: "inline-desktop3",
    },
    a9: true,
    prebid: {
      code: "inline-desktop3",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [ix("959603"), rubicon("743336"), sovrn("1119231")],
    },
  },
  inline_desktop4: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_inline4",
      sizes: [[300, 250]],
      code: "inline-desktop4",
    },
    a9: true,
    prebid: {
      code: "inline-desktop4",
      mediaTypes: {
        banner: {
          sizes: [[300, 250]],
        },
      },
      bids: [ix("959604"), rubicon("743338"), sovrn("1119233")],
    },
  },
  inline_desktop5: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_inline5",
      sizes: [[300, 250]],
      code: "inline-desktop5",
    },
    a9: true,
    prebid: {
      code: "inline-desktop5",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [ix("959605"), rubicon("2807676"), sovrn("1119234")],
    },
  },
  inline_desktop6: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_inline6",
      sizes: [[300, 250]],
      code: "inline-desktop6",
    },
    a9: true,
    prebid: {
      code: "inline-desktop6",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [ix("959606"), rubicon("2807678"), sovrn("1119235")],
    },
  },
  inline_desktop7: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_inline7",
      sizes: [[300, 250]],
      code: "inline-desktop7",
    },
    a9: true,
    prebid: {
      code: "inline-desktop7",
      mediaTypes: {
        banner: {
          sizes: [300, 250],
        },
      },
      bids: [ix("959607"), rubicon("2807682"), sovrn("1119236")],
    },
  },
  interstitial: {
    min: 768,
    max: 9999,
    init: false,
    refreshable: false,
    gam: {
      unit: "/5500201/cl_interstitial",
      sizes: [[1, 1]],
      code: "desktop-interstitial",
    },
  },
  desktop_native: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_Native",
      sizes: [[580, 210]],
      code: "desktop-native",
    },
  },
  billboard: {
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_billboard_970x250",
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
      bids: [rubicon("2807700"), sovrn("1119237"), ix("959608")],
    },
  },
  wallpaper_left: {
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_wallpaper_200x1200_l",
      sizes: [[200, 1200]],
      code: "wallpaper-left",
    },
  },
  wallpaper_right: {
    min: 970,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_wallpaper_200x1200_r",
      sizes: [[200, 1200]],
      code: "wallpaper-right",
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
      siteId: "156028",
      zoneId: zone,
      latLong: geoData ? [geoData.latitude, geoData.longitude] : null,
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

  googletag.pubads().setTargeting("author", author);
  googletag.pubads().setTargeting("advid", advid);
  googletag.pubads().setTargeting("cl-category", clCategory);
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
    var key = e.message ? "message" : "data";
    var data = e[key];

    var eventName = data.message || "ignore";

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
    aps: prebidConfig.shouldFire ? false : true,
    prebid: prebidConfig.shouldFire ? false : true,
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

function addInfiniteScrollingAds() {
  // Define the main content container using the selector you provided
  const container = document.querySelector(".cl-post-content > div");

  if (!container) {
    console.log("Content container not found.");
    return;
  }

  // Get all paragraph tags inside the container
  const paragraphs = container.querySelectorAll("p");

  // Loop through the paragraphs and insert a div after every third one
  paragraphs.forEach((p, index) => {
    if (index > 8 && index % 3 === 2) {
      const newDiv = document.createElement("div");
      let innerHTML = `<div id="infinite_${index}_left" class="scroll-ad"></div>
      `;

      if (window.innerWidth >= 654) {
        innerHTML += `<div id="infinite_${index}_right" class="scroll-ad"></div>`;

        adSpots["infinite_" + index + "_right"] = {
          min: 654,
          max: 9999,
          gam: {
            code: `infinite_${index}_right`,
            unit: "/5500201/cl_article_infinite_scroll_2",
            sizes: [[300, 250]],
          },
        };

        if (
          adSpots["infinite_" + index + "_right"].gam !== undefined &&
          adSpots["infinite_" + index + "_right"].min <= window.innerWidth &&
          adSpots["infinite_" + index + "_right"].max >= window.innerWidth
        ) {
          gamSlots[adSpots["infinite_" + index + "_right"].gam.code] = googletag
            .defineSlot(
              adSpots["infinite_" + index + "_right"].gam.unit,
              adSpots["infinite_" + index + "_right"].gam.sizes,
              adSpots["infinite_" + index + "_right"].gam.code
            )
            .addService(googletag.pubads());
        }
      }

      adSpots["infinite_" + index + "_left"] = {
        min: 0,
        max: 9999,
        gam: {
          code: `infinite_${index}_left`,
          unit: "/5500201/cl_article_infinite_scroll_1",
          sizes: [[300, 250]],
        },
      };

      if (
        adSpots["infinite_" + index + "_left"].gam !== undefined &&
        adSpots["infinite_" + index + "_left"].min <= window.innerWidth &&
        adSpots["infinite_" + index + "_left"].max >= window.innerWidth
      ) {
        gamSlots[adSpots["infinite_" + index + "_left"].gam.code] = googletag
          .defineSlot(
            adSpots["infinite_" + index + "_left"].gam.unit,
            adSpots["infinite_" + index + "_left"].gam.sizes,
            adSpots["infinite_" + index + "_left"].gam.code
          )
          .addService(googletag.pubads());
      }

      newDiv.innerHTML = innerHTML;
      newDiv.style.margin = "20px 0";
      newDiv.style.display = "flex";
      newDiv.style.flexWrap = "wrap";
      newDiv.style.justifyContent = "space-around";

      p.parentNode.insertBefore(newDiv, p.nextSibling);
    }
  });
}
