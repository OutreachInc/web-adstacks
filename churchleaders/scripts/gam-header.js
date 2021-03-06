var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var clCategory = new URL(location.href).pathname.split("/")[1];
if(clCategory == 'outreach-missions') clCategory = 'outreach';

var adSpots = {
    inline_mobile1: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_inline_mobile1',
            sizes: [[300, 250]],
            code: 'inline-mobile1'
        },
    },
    inline_mobile2: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_inline_mobile2',
            sizes: [[300, 250]],
            code: 'inline-mobile2'
        },
    },
    inline_mobile3: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_inline_mobile3',
            sizes: [[300, 250]],
            code: 'inline-mobile3'
        },
    },
    inline_mobile4: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_inline_mobile4',
            sizes: [[300, 250]],
            code: 'inline-mobile4'
        },
    },
    inline_mobile5: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_inline_mobile5',
            sizes: [[300, 250]],
            code: 'inline-mobile5'
        },
    },
    inline_mobile6: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_inline_mobile6',
            sizes: [[300, 250]],
            code: 'inline-mobile6'
        },
    },
    inline_mobile7: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_inline_mobile7',
            sizes: [[300, 250]],
            code: 'inline-mobile7'
        },
    },
    btf_mobile: {
        min: 0,
        max: 768,
        gam: {
            unit: '/5500201/cl_mobile_btf_mobile',
            sizes: [[300, 250]],
            code: 'btf-mobile'
        },
    },
    mobileSticky: {
        min: 0,
        max: 768,
        refreshable: false,
        gam: {
            unit: '/5500201/cl_mobile_adhesion_320x100',
            sizes: [[1, 1]],
            code: 'banner-bottom'
        },
    },
    // btf_left: {
    //     min: 769,
    //     max: 9999,
    //     gam: {
    //         unit: '/5500201/cl_desktop_btf_left_300x250',
    //         sizes: [300, 250],
    //         code: 'btf-left-300x250'
    //     },
    // },
    // btf_right: {
    //     min: 769,
    //     max: 9999,
    //     gam: {
    //         unit: '/5500201/cl_desktop_btf_right_300x250',
    //         sizes: [300, 250],
    //         code: 'btf-right-300x250'
    //     },
    // },
    right_rail: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_right_rail',
            sizes: [
                [300, 600],
                [160, 600],
                [300, 250]
            ],
            code: 'right-rail'
        }
    },
    showcase: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_showcase_300x250',
            sizes: [[300, 250]],
            code: 'desktop-showcase-300x250'
        },
    },
    inline_desktop3: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_inline3',
            sizes: [[300, 250]],
            code: 'inline-desktop3'
        },
    },
    inline_desktop4: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_inline4',
            sizes: [[300, 600]],
            code: 'inline-desktop4'
        },
    },
    inline_desktop5: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_inline5',
            sizes: [[300, 250]],
            code: 'inline-desktop5'
        },
    },
    inline_desktop6: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_inline6',
            sizes: [[300, 600]],
            code: 'inline-desktop6'
        },
    },
    inline_desktop7: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_inline7',
            sizes: [[300, 250]],
            code: 'inline-desktop7'
        },
    },
    interstitial: {
        min: 769,
        max: 9999,
        init: false,
        refreshable: false,
        gam: {
            unit: '/5500201/cl_interstitial',
            sizes: [[1,1]],
            code: 'desktop-interstitial'
        },
    },
    desktop_native: {
        min: 769,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_Native',
            sizes: [[580, 210]],
            code: 'desktop-native'
        },
    },
    billboard: {
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_billboard_970x250',
            sizes: [[970, 250]],
            code: 'desktop-billboard'
        },
    },
    wallpaper_left: {
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_wallpaper_200x1200_l',
            sizes: [[200, 1200]],
            code: 'wallpaper-left'
        },
    },
    wallpaper_right: {
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/cl_desktop_wallpaper_200x1200_r',
            sizes: [[200, 1200]],
            code: 'wallpaper-right'
        },
    }
}
var gamSlots = {};
googletag.cmd.push(function () {
    Object.entries(adSpots).forEach(([key, adSpot]) => {
        if (adSpot.gam !== undefined && adSpot.min <= window.innerWidth && adSpot.max >= window.innerWidth) {
            gamSlots[adSpot.gam.code] = googletag.defineSlot(adSpot.gam.unit, adSpot.gam.sizes, adSpot.gam.code).addService(googletag.pubads());
        }
    })

    googletag.pubads().setTargeting("author", author);
    googletag.pubads().setTargeting("advid", advid);
    googletag.pubads().setTargeting("cl-category", clCategory);
    googletag.pubads().setTargeting("url", window.location.pathname.substr(0, 40));
    // googletag.pubads().enableSingleRequest();
    googletag.pubads().disableInitialLoad();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();

    // Strech iframe to width of mobile device on ad load
    googletag.pubads().addEventListener("slotRenderEnded", function(e) {
        e.slot === gamSlots['banner-bottom'] && (document.getElementById("banner-bottom").width = window.innerWidth)
    })
});

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function (e) {

    var key = e.message ? "message" : "data";
    var data = e[key];

    var eventName = data.message || 'ignore';

    if (eventName == 'adContentAvailable') {
        // replace content
        document.querySelector('[data-container-ad-unit-id="' + data.adUnit + '"]').innerHTML = data.content;
        document.getElementById('desktop-interstitial').remove(); // Remove initial iframe
    }
    //run function//
}, false);

function refreshSlots(refreshSlots){
    googletag.cmd.push(function () {
        googletag.pubads().refresh(refreshSlots);
    });
}

let adsStarted = false;
function startAds(){
    if (!adsStarted) {
        adsStarted = true;
    } else {
        return false
    }

    var initialAds = [];
    Object.entries(adSpots).forEach(([key, adSpot]) => {
        if (adSpot.min <= window.innerWidth && adSpot.max >= window.innerWidth && adSpot.init !== false) {
            if (adSpot.refreshable !== false) {
                adRefresh(adSpot);
            }
            initialAds.push(gamSlots[adSpot.gam.code]);
        }
    });

    refreshSlots(initialAds);
}

function adRefresh(adSpot) {
    setInterval(() => {
        var ad = document.getElementById(adSpot.gam.code).getBoundingClientRect();
        if (
            !document.hidden
            && adSpot.refreshable !== false
            && ad.bottom >= 0
            && ad.right >= 0
            && ad.top <= (window.innerHeight || document.documentElement.clientHeight)
            && ad.left <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            refreshSlots([gamSlots[adSpot.gam.code]]);
        }
    }, 6e4) // 60 seconds
}

window.addEventListener('load', () => {
    startAds();
})

let clIntFired = false;
window.addEventListener('scroll', () => {
    if (!clIntFired && (window.pageYOffset / document.body.offsetHeight) >= (1/4) && window.innerWidth > 768) {
        fireInterstitial();
    }
})

function fireInterstitial() {
    clIntFired = true;
    googletag.display('desktop-interstitial');
    refreshSlots([gamSlots['desktop-interstitial']]);
}