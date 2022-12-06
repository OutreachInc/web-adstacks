var advid = advid || null;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

! function (a9, a, p, s, t, A, g) {
    if (a[a9]) return;

    function q(c, r) {
        a[a9]._Q.push([c, r])
    }
    a[a9] = {
        init: function () {
            q("i", arguments)
        },
        fetchBids: function () {
            q("f", arguments)
        },
        setDisplayBids: function () { },
        targetingKeys: function () {
            return []
        },
        _Q: []
    };
    A = p.createElement(s);
    A.async = 0;
    A.src = t;
    g = p.getElementsByTagName(s)[0];
    g.parentNode.insertBefore(A, g)
}("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

var geoData = {};

fetch("https://geolocation.outreach.com/city").then(resp => resp.json())
    .then(data => {
        geoData = data;
        if (geoData.countryName == "United Kingdom" || geoData.countryName == "Australia" || geoData.countryName == "Canada" || geoData.countryName == "South Africa") {
            googletag.cmd.push(function () { googletag.display('just-premium') })
        }
    })

function amx(){
    return {
        bidder: 'amx',
        params: {}
    }
}

function appnexus(value) {
    return {
        bidder: 'appnexusAst',
        params: {
            placementId: value
        }
    };
}

function appnexusVideo(value) {
    return {
        bidder: 'appnexusAst',
        params: {
            placementId: value,
            video: {
                playback_method: ['auto_play_sound_off']
            }
        }
    };
}

function audienceNetwork(value) {
    return {
        bidder: 'audienceNetwork',
        params: {
            placementId: value,
            format: 'fullwidth'
        }
    };
}

function cleanmedianet(value) {
    return {
        bidder: 'cleanmedianet',
        params: {
            supplyPartnerId: value
        }
    };
}

function ix(adSize, site) {
    return {
        bidder: 'ix',
        params: {
            size: adSize,
            siteId: site
        }
    };
}

function oneDisplay(value) {
    return {
        bidder: 'aol',
        params: {
            network: '10961.1',
            placement: value
        }
    }; // AOL Desktop
}

function openx(value) {
    return {
        bidder: 'openx',
        params: {
            unit: value,
            delDomain: 'faithit-d.openx.net'
        }
    };
}


function rubicon(zone) {
    return {
        bidder: 'rubicon',
        params: {
            accountId: '16724',
            siteId: '144998',
            zoneId: zone,
            latLong: [geoData.latitude, geoData.longitude]
        }
    }
}

function pulsepoint(size, tag) {
    return {
        bidder: 'pulsepoint',
        params: {
            cf: size,
            cp: 561169,
            ct: tag
        }
    }
}

function pulsepointOutstream(size, tag, cw, ch) {
    return {
        bidder: 'pulsepoint',
        params: {
            cf: size,
            cp: 561169,
            ct: tag,
            cw,
            ch
        }
    }
}

function sovrn(value) {
    return {
        bidder: 'sovrn',
        params: {
            tagid: value
        }
    };
}

var adSpots = {
    inline_mobile1: {
        min: 0,
        max: 959,
        gam: {
            unit: '/5500201/FI_Mobile_Inline_Mobile',
            sizes: [300, 250],
            code: 'inline-mobile1'
        },
        a9: {
            slotID: 'inline-mobile1',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'inline-mobile1',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
                video: {
                    context: 'outstream',
                    playerSize: [[640, 480]]
                },
            },
            bids: [
                amx(),
                appnexus(11003434),
                appnexusVideo(11719216),
                // audienceNetwork('158696408012994_158714064677895'),
                cleanmedianet('1999'),
                ix([
                    [300, 250]
                ], '200222'),
                openx('538728573'),
                pulsepoint('300X250', 576247),
                pulsepointOutstream('1X1', 603721, 640, 480),
                rubicon('685018'),
                sovrn('590054'),
                // oneDisplay('4488080'),
                // sonobi('22f4da52d8d369547c64')
            ]
        }
    },
    inline_mobile2: {
        min: 0,
        max: 959,
        gam: {
            unit: '/5500201/FI_Mobile_Inline_Mobile2',
            sizes: [300, 250],
            code: 'inline-mobile2'
        },
        a9: {
            slotID: 'inline-mobile2',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'inline-mobile2',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
            },
            bids: [
                // audienceNetwork('158696408012994_158714798011155'),
                amx(),
                ix([
                    [300, 250]
                ], '200223'),
                rubicon('685028'),
                openx('538787625'),
                appnexus(11056566),
                pulsepoint('300X250', 576248),
                // oneDisplay('4514158'),
                sovrn('590055'),
                cleanmedianet('1999'),
                // sonobi('5eb9a9c21cfed59753a5'),
            ]
        }
    },
    inline_mobile3: {
        min: 0,
        max: 959,
        gam: {
            unit: '/5500201/FI_Mobile_Inline_Mobile3',
            sizes: [300, 250],
            code: 'inline-mobile3'
        },
        a9: {
            slotID: 'inline-mobile3',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'inline-mobile3',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
            },
            bids: [
                // audienceNetwork('158696408012994_158714924677809'),
                amx(),
                ix([
                    [300, 250]
                ], '200225'),
                rubicon('685032'),
                openx('538787626'),
                appnexus(11056567),
                // oneDisplay('4514159'),
                pulsepoint('300X250', 576249),
                sovrn('590056'),
                cleanmedianet('1999'),
                // sonobi('b685029d3cc2174f62a7'),
            ]
        }
    },
    inline_mobile4: {
        min: 0,
        max: 959,
        gam: {
            unit: '/5500201/FI_Mobile_Inline_Mobile4',
            sizes: [300, 250],
            code: 'inline-mobile4'
        },
        a9: {
            slotID: 'inline-mobile4',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'inline-mobile4',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
            },
            bids: [
                // audienceNetwork('158696408012994_158715008011134'),
                amx(),
                ix([
                    [300, 250]
                ], '200226'),
                rubicon('685034'),
                openx('538787628'),
                appnexus(11056568),
                // oneDisplay('4514160'),
                sovrn('590057'),
                pulsepoint('300X250', 576250),
                cleanmedianet('1999'),
                // sonobi('485b762e9490305cd6f1'),
            ]
        }
    },
    btfMobile: {
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/FI_Mobile_BTF_Mobile',
            sizes: [300, 250],
            code: 'btf-mobile'
        },
        a9: {
            slotID: 'btf-mobile',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'btf-mobile',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
            },
            bids: [
                // audienceNetwork('158696408012994_158715018011133'),
                amx(),
                ix([
                    [300, 250]
                ], '200221'),
                rubicon('685016'),
                openx('538728572'),
                appnexus(10008065),
                // oneDisplay('4488081'),
                pulsepoint('300X250', 576246),
                sovrn('590058'),
                cleanmedianet('1999'),
                // sonobi('20b2cb27efc49afcdea0')
            ]
        }
    },
    connatix: {
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/FI_Mobile_Connatix',
            sizes: [1, 1],
            code: 'connatix-mobile'
        }
    },
    justPremium: {
        min: 0,
        max: 9999,
        gam: {
            unit: '/5500201/FI_JustPremium',
            sizes: [1, 1],
            code: 'just-premium'
        }
    },
    mobileSticky: {
        refreshable: false,
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/FI_Mobile_320x100',
            sizes: [
                [1, 1],
                [320, 100]
            ],
            code: 'banner-bottom'
        }
    },
    billboard: {
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/fi_desktop_billboard_970x250',
            sizes: [970, 250],
            code: 'desktop-billboard'
        },
        a9: {

        },
        prebid: {
            code: 'desktop-billboard',
            mediaTypes: {
                banner: {
                    sizes: [970, 250]
                },
            },
            bids: [
                amx(),
                cleanmedianet('1999'),
                rubicon('1083234'),
                sovrn('611379'),
                appnexus(15976817),
            ]

        }
    },
    showcase: {
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_Showcase_300x250',
            sizes: [300, 250],
            code: 'desktop-showcase'
        },
        a9: {
            slotID: 'desktop-showcase',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'desktop-showcase',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
            },
            bids: [
                amx(),
                ix([300, 250], '217110'),
                rubicon('710288'),
                appnexus(11994937),
                sovrn('590071'),
                cleanmedianet('1999'),
                pulsepoint('300X250', 604398),
                // sonobi('5e2b43e9882239e3b441'),
            ]
        }
    },
    right_rail: {
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_Right_Rail',
            sizes: [
                [300, 600],
                [160, 600],
                [300, 250]
            ],
            code: 'right-rail'
        },
        a9: {
            slotID: 'right-rail',
            sizes: [
                [300, 600],
                [160, 600],
                [300, 250]
            ]
        },
        prebid: {
            code: 'right-rail',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600],
                        [160, 600],
                        [300, 250]
                    ]
                },
            },
            bids: [
                amx(),
                ix([300, 600], '200220'),
                rubicon('685014'),
                openx('538699942'),
                appnexus(10008055),
                sovrn('590061'),
                cleanmedianet('1999'),
                pulsepoint('300X600', 576248),
                // sonobi('bf4255ad1bb79314389c'),
            ]
        }
    },
    btf_left: {
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_BTF_Left_300x250',
            sizes: [300, 250],
            code: 'btf-left-300x250'
        },
        a9: {
            slotID: 'btf-left-300x250',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'btf-left-300x250',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
            },
            bids: [
                amx(),
                ix([300, 250], '200218'),
                rubicon('685010'),
                openx('538699940'),
                appnexus(10008050),
                sovrn('590059'),
                cleanmedianet('1999'),
                pulsepoint('300X250', 576243),
                // sonobi('41c0bf01db9e13a477b1'),
            ]
        }
    },
    btf_right: {
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_BTF_Right_300x250',
            sizes: [300, 250],
            code: 'btf-right-300x250'
        },
        a9: {
            slotID: 'btf-right-300x250',
            sizes: [
                [300, 250]
            ]
        },
        prebid: {
            code: 'btf-right-300x250',
            mediaTypes: {
                banner: {
                    sizes: [300, 250]
                },
            },
            bids: [
                amx(),
                ix([300, 250], '200219'),
                rubicon('685012'),
                openx('538699941'),
                appnexus(10008037),
                sovrn('590060'),
                cleanmedianet('1999'),
                pulsepoint('300X250', 576244),
                // sonobi('95d49b46f6bd3d7acdd8')
            ]
        }
    },
    desktop_outstream: {
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_Outstream',
            sizes: [1, 1],
            code: 'desktop-outstream'
        },
        prebid: {
            code: 'desktop-outstream',
            mediaTypes: {
                video: {
                    context: 'outstream',
                    playerSize: [[640, 480]]
                },
            },
            bids: [
                appnexusVideo(11003463),
                pulsepointOutstream('1X1', 603717, 640, 480),
            ]
        }
    },
    interstitial: {
        init: false,
        refreshable: false,
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Interstitial_550x350',
            sizes: [1, 1],
            code: 'interstitial'
        },
    },
    desktop_left_sidebar: {
        refreshable: false,
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_Left_Sidebar',
            sizes: [[1, 1],[300,600],[120,600],[160,600]],
            code: 'desktop-left-sidebar'
        },
    },
    desktop_below_article: {
        refreshable: true,
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_Below_Article',
            sizes: [1, 1],
            code: 'desktop-below-article'
        },
    },
    desktop_native: {
        refreshable: false,
        min: 9670,
        max: 9999,
        gam: {
            unit: '/5500201/FI_Desktop_Native',
            sizes: [580, 210],
            code: 'desktop-native'
        },
    },
    wallpaper_towers: {
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/fi_desktop_wallpaper_towers',
            sizes: [1, 1],
            code: 'wallpaper-towers'
        },
    },
};

pbjs.que.push(function () {
    pbjs.setConfig({
        priceGranularity: "dense",
    });
    // pbjs.enableAnalytics([{
    //     provider: 'pubwise',
    //     options: {
    //         site: 'f1e3a583-f3b4-4574-b41a-9b9875175eb5',
    //         endpoint:'https://api.pubwise.io/api/v4/event/add/'
    //         }
    //     }]
    // );
});

var gamSlots = {};
googletag.cmd.push(function () {
    Object.entries(adSpots).forEach(([key, adSpot]) => {
        if (adSpot.gam !== undefined && adSpot.min <= window.innerWidth && adSpot.max >= window.innerWidth) {
            gamSlots[adSpot.gam.code] = googletag.defineSlot(adSpot.gam.unit, adSpot.gam.sizes, adSpot.gam.code).addService(googletag.pubads());
        }
    })

    googletag.pubads().setTargeting("advid", advid);
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

//set APS config
apstag.init({
    pubID: '810a1afb-9c83-4dec-8de3-63fd0e28708a',
    adServer: 'googletag'
});

/** Executes a parallel auction between a9 & prebid **/
function executeBidding(adSpots) {
    var FAILSAFE_TIMEOUT = 2e3;
    var requestManager = {
        adserverRequestSent: false,
        aps: false,
        prebid: false
    };

    var a9Slots = [];
    var prebidSlots = [];
    var refreshSlots = [];
    adSpots.forEach(adSpot => {
        if ('a9' in adSpot) {
            a9Slots.push(adSpot.a9)
        }
        if ('prebid' in adSpot) {
            prebidSlots.push(adSpot.prebid)
        }
        refreshSlots.push(gamSlots[adSpot.gam.code]);
    })

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
                        })
                    }
                });
            });
        } else {
            biddersBack();
        }

        if (!requestManager.aps) {
            apstag.fetchBids({
                slots: a9Slots
            }, function (bids) {
                googletag.cmd.push(function () {
                    apstag.setDisplayBids();
                    requestManager.aps = true;
                    biddersBack();
                });
            });
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
};

function startAds(){
    var initialAds = [];
    Object.entries(adSpots).forEach(([key, adSpot]) => {
        if (adSpot.min <= window.innerWidth && adSpot.max >= window.innerWidth && adSpot.init !== false) {
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
        var ad = document.getElementById(adSpot.gam.code).getBoundingClientRect();
        if (
            !document.hidden
            && adSpot.refreshable !== false
            && ad.bottom >= 0
            && ad.right >= 0
            && ad.top <= (window.innerHeight || document.documentElement.clientHeight)
            && ad.left <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            executeBidding([adSpot]);
        }
    }, 6e4) // 60 seconds
}

function fireInterstitial() {
    googletag.display('desktop-interstitial');
    executeBidding([adSpots.interstitial]);
}

window.addEventListener('load', () => {
    startAds();
    setTimeout(() => {
        fireInterstitial();
    }, 1e4)
})