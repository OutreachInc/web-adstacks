var geoData = {};
fetch("https://geolocation.outreach.com/city").then(resp => resp.json())
    .then(data => {
        geoData = data;
        if (geoData.countryName == "United Kingdom" || geoData.countryName == "Australia" || geoData.countryName == "Canada" || geoData.countryName == "South Africa") {
            googletag.cmd.push(function () { googletag.display('just-premium') })
        }
    })

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

// function audienceNetwork(value) {
//     return {
//         bidder: 'audienceNetwork',
//         params: {
//             placementId: value,
//             format: 'fullwidth'
//         }
//     };
// }

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
            siteId: '145002',
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
            unit: '/5500201/FEM_Mobile_Inline_Mobile1',
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
                    sizes: [[300, 250]]
                },
                video: {
                    context: 'outstream',
                    playerSize: [[640, 480]]
                },
            },
            bids: [
                // audienceNetwork('1843134112669898_1843166106000032'),
                ix([300, 250], '200231'),
                rubicon('685062'),
                openx('538748829'),
                appnexus(10713946),
                appnexusVideo(10929705),
                sovrn('437947'),
                pulsepoint('300X250', 575209),
                pulsepointOutstream('1X1', 603737, 640, 480),
                // oneDisplay('4488080'),
                // cleanmedianet('1999'),
                // sonobi('22f4da52d8d369547c64')
            ]
        }
    },
    inline_mobile2: {
        min: 0,
        max: 959,
        gam: {
            unit: '/5500201/FEM_Mobile_Inline_Mobile2',
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
                // audienceNetwork('1843134112669898_1843166009333375'),
                ix([300, 250], '200232'),
                rubicon('685064'),
                openx('538787629'),
                appnexus(11058275),
                pulsepoint('300X250', 575210),
                // oneDisplay('4514169'),
                sovrn('450706'),
                // cleanmedianet('1999'),
                // sonobi('5eb9a9c21cfed59753a5'),
            ]
        }
    },
    inline_mobile3: {
        min: 0,
        max: 959,
        gam: {
            unit: '/5500201/FEM_Mobile_Inline_Mobile3',
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
                // audienceNetwork('1843134112669898_1843165939333382'),
                ix([300, 250], '200233'),
                rubicon('685074'),
                openx('538787630'),
                appnexus(11058276),
                pulsepoint('300X250', 575211),
                // oneDisplay('4514168'),
                sovrn('450707'),
                // cleanmedianet('1999'),
                // sonobi('b685029d3cc2174f62a7'),
            ]
        }
    },
    inline_mobile4: {
        min: 0,
        max: 959,
        gam: {
            unit: '/5500201/FEM_Mobile_Inline_Mobile4',
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
                // audienceNetwork('1843134112669898_1843165866000056'),
                ix([300, 250], '200236'),
                rubicon('685076'),
                openx('538787631'),
                appnexus(11058277),
                // oneDisplay('4514167'),
                pulsepoint('300X250', 575212),
                sovrn('450708'),
                // cleanmedianet('1999'),
                // sonobi('485b762e9490305cd6f1'),
            ]
        }
    },
    btfMobile: {
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/FEM_Mobile_BTF_Mobile',
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
                // audienceNetwork('1843134112669898_1843165836000059'),
                ix([300, 250], '200230'),
                rubicon('685058'),
                openx('538748827'),
                appnexus(10713945),
                // oneDisplay('4488098'),
                pulsepoint('300X250', 575208),
                sovrn('437922'),
                // cleanmedianet('1999'),
                // sonobi('20b2cb27efc49afcdea0')
            ]
        }
    },
    connatix: {
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/FEM_Mobile_Connatix',
            sizes: [1, 1],
            code: 'connatix-carousel'
        }
    },
    justPremium: {
        min: 0,
        max: 9999,
        gam: {
            unit: '/5500201/FEM_JustPremium',
            sizes: [1, 1],
            code: 'just-premium'
        }
    },
    mobileSticky: {
        refreshable: false,
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/FEM_Mobile_320x100',
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
            unit: '/5500201/fem_desktop_billboard_970x250',
            sizes: [970, 250],
            code: 'desktop-billboard'
        },
        // a9: {
        //     slotID: 'right-rail',
        //     sizes: [
        //         [970, 250],
        //     ]
        // },
        // prebid: {
        //     code: 'desktop-billboard',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [970, 250]
        //         },
        //     },
        //     bids: [
        //         // cleanmedianet('1999'),
        //         rubicon('1083242'),
        //         sovrn('611380'),
        //         appnexus(15976831),
        //     ]

        // }
    },
    right_rail: {
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FEM_Desktop_Right_Rail',
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
                ix([300, 600], '200229'),
                rubicon('685052'),
                openx('538748819'),
                appnexus(10067208),
                sovrn('590071'),
                pulsepoint('300X600', 575207),
                // cleanmedianet('1999'),
                // sonobi('bf4255ad1bb79314389c'),
            ]
        }
    },
    // btf_left: {
    //     min: 768,
    //     max: 9999,
    //     gam: {
    //         unit: '/5500201/FEM_Desktop_BTF_Left_300x250',
    //         sizes: [300, 250],
    //         code: 'btf-left-300x250'
    //     },
    //     a9: {
    //         slotID: 'btf-left-300x250',
    //         sizes: [
    //             [300, 250]
    //         ]
    //     },
    //     prebid: {
    //         code: 'btf-left-300x250',
    //         mediaTypes: {
    //             banner: {
    //                 sizes: [300, 250]
    //             },
    //         },
    //         bids: [
    //             ix([300, 250], '200227'),
    //             rubicon('685046'),
    //             openx('538748815'),
    //             appnexus(10067209),
    //             sovrn('590067'),
    //             pulsepoint('300X250', 575205),
    //             // pulsepoint('300X250', 575205),
    //             // cleanmedianet('1999'),
    //             // sonobi('41c0bf01db9e13a477b1'),
    //         ]
    //     }
    // },
    // btf_right: {
    //     min: 768,
    //     max: 9999,
    //     gam: {
    //         unit: '/5500201/FEM_Desktop_BTF_Right_300x250',
    //         sizes: [300, 250],
    //         code: 'btf-right-300x250'
    //     },
    //     a9: {
    //         slotID: 'btf-right-300x250',
    //         sizes: [
    //             [300, 250]
    //         ]
    //     },
    //     prebid: {
    //         code: 'btf-right-300x250',
    //         mediaTypes: {
    //             banner: {
    //                 sizes: [300, 250]
    //             },
    //         },
    //         bids: [
    //             ix([300, 250], '200228'),
    //             rubicon('685048'),
    //             openx('538748818'),
    //             appnexus(10067210),
    //             sovrn('590068'),
    //             pulsepoint('300X250', 575206),
    //             // cleanmedianet('1999'),
    //             // sonobi('95d49b46f6bd3d7acdd8')
    //             // sekindo(79824),
    //             // pulsepoint('300X250', 575206),
    //         ]
    //     }
    // },
    desktop_outstream: {
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FEM_Desktop_Outstream',
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
                appnexusVideo(10713951),
                pulsepointOutstream('1X1', 603735, 640, 480)
            ]
        }
    },
    interstitial: {
        refreshable: false,
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FEM_Interstitial_550x350',
            sizes: [1, 1],
            code: 'interstitial'
        },
    },
    desktop_native: {
        refreshable: false,
        min: 960,
        max: 9999,
        gam: {
            unit: '/5500201/FEM_Desktop_Native',
            sizes: [580, 210],
            code: 'desktop-native'
        },
    },
    wallpaper_towers: {
        min: 970,
        max: 9999,
        gam: {
            unit: '/5500201/FEM_Desktop_Wallpaper_Towers',
            sizes: [1, 1],
            code: 'wallpaper-towers'
        },
    },
};



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
    A.async = !0;
    A.src = t;
    g = p.getElementsByTagName(s)[0];
    g.parentNode.insertBefore(A, g)
}("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function () {
    pbjs.setConfig({
        priceGranularity: "dense",
    });
    pbjs.enableAnalytics([{
        provider: 'pubwise',
        options: {
            site: 'eb3c9003-e9b6-4ecb-83d7-1198c365ecb9',
            endpoint:'https://api.pubwise.io/api/v4/event/add/'
            }
        }]
    );
});

var gamSlots = {};
googletag.cmd.push(function () {
    Object.keys(adSpots).forEach(adSpot => {
        if (adSpots[adSpot].gam !== undefined) {
            gamSlots[adSpots[adSpot].gam.code] = googletag.defineSlot(adSpots[adSpot].gam.unit, adSpots[adSpot].gam.sizes, adSpots[adSpot].gam.code)
                .addService(googletag.pubads());
        }
    })
    googletag.pubads().setTargeting("url", window.location.pathname.substr(0, 40));
    googletag.pubads().setTargeting("advid", window.advid != undefined ? window.advid : '');
    googletag.pubads().disableInitialLoad();
    // googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
});

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
        if (adSpot.a9 !== undefined) {
            a9Slots.push(adSpot.a9)
        }
        if (adSpot.prebid !== undefined) {
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

var intFired = false;
window.addEventListener('scroll', () => {
    if (!intFired && (window.pageYOffset / document.body.offsetHeight) >= (1/5) && window.innerWidth > 960) {
        fireInterstitial();
    }
})

function fireInterstitial() {
    intFired = true;
    executeBidding([adSpots.interstitial]);
    // googletag.display('desktop-interstitial');
    // refreshSlots([gamSlots['desktop-interstitial']]);
}

//

/*******************
 *
 *   Extra Scripts
 *
 */
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
// Listen to message from child window
eventer(messageEvent, function (e) {
    var key = e.message ? "message" : "data";
    var data = e[key];
    var eventName = data.message || 'ignore';
    if (eventName == 'adContentAvailable') {
        // console.log('ad data available: ', data);
        // replace content
        jQuery('div').filter('[data-container-ad-unit-id="' + data.adUnit + '"]').html(data.content);
    }
}, false);