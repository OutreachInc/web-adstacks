//#region Global Variables
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var clCategory = new URL(location.href).pathname.split("/")[1];
if (clCategory == "outreach-missions") clCategory = "outreach";

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
  },
  inline_mobile2: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile2",
      sizes: [[300, 250]],
      code: "inline-mobile2",
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
  },
  inline_mobile4: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile4",
      sizes: [[300, 250]],
      code: "inline-mobile4",
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
  },
  inline_mobile6: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_inline_mobile6",
      sizes: [[300, 250]],
      code: "inline-mobile6",
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
  },
  btf_mobile: {
    min: 0,
    max: 767,
    gam: {
      unit: "/5500201/cl_mobile_btf_mobile",
      sizes: [[300, 250]],
      code: "btf-mobile",
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
  },
  showcase: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_showcase_300x250",
      sizes: [[300, 250]],
      code: "desktop-showcase-300x250",
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
  },
  inline_desktop4: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_inline4",
      sizes: [[300, 250]],
      code: "inline-desktop4",
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
  },
  inline_desktop6: {
    min: 768,
    max: 9999,
    gam: {
      unit: "/5500201/cl_desktop_inline6",
      sizes: [[300, 250]],
      code: "inline-desktop6",
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

document.addEventListener("DOMContentLoaded", loadInAds);

// function addInfiniteScrollingAds() {
//   // Define the main content container using the selector you provided
//   const container = document.querySelector(".cl-post-content > div");

//   if (!container) {
//     console.log("Content container not found.");
//     return;
//   }

//   // Get all paragraph tags inside the container
//   const paragraphs = container.querySelectorAll("p");

//   // Helper to define and fire ad when in view
//   function fireInfiniteAd(adKey) {
//     const adSpot = adSpots[adKey];
//     if (!adSpot || !adSpot.gam) return;
//     // Only define slot if not already defined
//     if (!gamSlots[adSpot.gam.code]) {
//       gamSlots[adSpot.gam.code] = googletag
//         .defineSlot(adSpot.gam.unit, adSpot.gam.sizes, adSpot.gam.code)
//         .addService(googletag.pubads());
//     }
//     googletag.display(adSpot.gam.code);
//     executeBidding([adSpot]);
//   }

//   // Keep track of which ads have fired
//   const firedAds = new Set();

//   // Intersection Observer setup
//   const observer = new window.IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const adKey = entry.target.getAttribute("data-ad-key");
//           if (adKey && !firedAds.has(adKey)) {
//             fireInfiniteAd(adKey);
//             firedAds.add(adKey);
//             observer.unobserve(entry.target);
//           }
//         }
//       });
//     },
//     {
//       root: null,
//       rootMargin: "100px",
//       threshold: 0.1,
//     }
//   );

//   // Loop through the paragraphs and insert a div after every third one
//   paragraphs.forEach((p, index) => {
//     if (index > 8 && index % 4 === 3) {
//       const newDiv = document.createElement("div");
//       let innerHTML = "";

//       // Left ad
//       const leftKey = `infinite_${index}_left`;
//       innerHTML += `<div id="${leftKey}" class="scroll-ad" data-ad-key="${leftKey}"></div>`;
//       adSpots[leftKey] = {
//         min: 0,
//         max: 9999,
//         gam: {
//           code: leftKey,
//           unit: "/5500201/cl_article_infinite_scroll_1",
//           sizes: [[300, 250]],
//         },
//       };

//       // Right ad (desktop)
//       if (window.innerWidth >= 654) {
//         const rightKey = `infinite_${index}_right`;
//         innerHTML += `<div id="${rightKey}" class="scroll-ad" data-ad-key="${rightKey}"></div>`;
//         adSpots[rightKey] = {
//           min: 654,
//           max: 9999,
//           gam: {
//             code: rightKey,
//             unit: "/5500201/cl_article_infinite_scroll_2",
//             sizes: [[300, 250]],
//           },
//         };
//       }

//       newDiv.innerHTML = innerHTML;
//       newDiv.style.margin = "20px 0";
//       newDiv.style.display = "flex";
//       newDiv.style.flexWrap = "wrap";
//       newDiv.style.justifyContent = "space-around";

//       p.parentNode.insertBefore(newDiv, p.nextSibling);

//       // Observe each ad div for visibility
//       Array.from(newDiv.children).forEach((adDiv) => {
//         if (adDiv.classList.contains("scroll-ad")) {
//           observer.observe(adDiv);
//         }
//       });
//     }
//   });
// }
