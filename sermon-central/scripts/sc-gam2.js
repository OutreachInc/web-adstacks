var currentURL = window.location.href,
    urlPath = window.location.pathname,
    author = "";
document.addEventListener('DOMContentLoaded', function(e) {
    if (window.location.href.indexOf("sermons") > -1) {
        var re = /(?=by )(.*)(?= on)/g,
            str = document.getElementsByClassName("subtitle")[0].innerText,
            newAuthor = str.match(re),
            author = newAuthor.toString();
        author = author.replace(/by/g, "")
    } else if (window.location.href.indexOf("articles") > -1) {
    var re = /^\s*(\w+)\s*,?\s*(\w+)/g,
        str = document.getElementsByClassName("links")[0].innerText,
        newAuthor = str.match(re);
    author = newAuthor.toString()
    }

    var mobileInline = 0;
    Array.from(document.getElementsByClassName('mobile-ad-300x250')).forEach(adDiv => {
        mobileInline++;
        adDiv.id = `mobile-inline-${mobileInline}`;
        adDiv.dataset.gamUnit = mobileInline <= 4 ?`/5500201/sc_mobile_inline_mobile${mobileInline}` : '/5500201/sc_mobile_btf_mobile';

        googletag.display('right-rail');
    })
});

function appnexus(e) {
    return {
        bidder: "appnexusAst",
        params: {
            placementId: e
        }
    }
}

function appnexusVideo(e) {
    return {
        bidder: "appnexusAst",
        params: {
            placementId: e,
            video: {
                playback_method: ["auto_play_sound_off"]
            }
        }
    }
}

function openx(e) {
    return {
        bidder: "openx",
        params: {
            unit: e,
            delDomain: "faithit-d.openx.net"
        }
    }
}

function oneMobile(e) {
    return {
        bidder: "aol",
        params: {
            dcn: "2c9d2b4f015f5eed201d086e368b0270",
            pos: e
        }
    }
}

function ix(e, i) {
    return {
        bidder: "ix",
        params: {
            size: e,
            siteId: i
        }
    }
}

function rubicon(e) {
    return {
        bidder: "rubicon",
        params: {
            accountId: "16724",
            siteId: "156018",
            zoneId: e
        }
    }
}

var adSpots = [
    {
        code: 'inline-mobile1',
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/sc_mobile_inline_mobile1',
            sizes: [[300, 250]],
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
            bids: [appnexus(12237266), appnexusVideo(12237278), openx("538768369"), oneMobile("inline_mobile1"), ix([300, 250], 200251), rubicon("743318")
            ]
        }
    },
    {
        code: 'inline-mobile2',
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/sc_mobile_inline_mobile2',
            sizes: [[300, 250]],
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
            bids: [appnexus(12237267), ix([300, 250], 200252), rubicon("743320")]
        }
    },{
        code: 'inline-mobile3',
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/sc_mobile_inline_mobile3',
            sizes: [[300, 250]],
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
            bids: [appnexus(12237268), ix([300, 250], 200253), rubicon("743322")]
        }
    }, {
        code: 'inline-mobile4',
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/sc_mobile_inline_mobile4',
            sizes: [[300, 250]],
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
            bids: [appnexus(12237269), ix([300, 250], 200254), rubicon("743324")]
        }
    },{
        code: 'btf-mobile',
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/sc_mobile_btf_mobile',
            sizes: [[300, 250]],
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
            bids: [appnexus(12237270), openx("538768368"), ix([300, 250], 200250), rubicon("743316")]
        }
    }, {
        code: 'banner-bottom',
        refreshable: false,
        min: 0,
        max: 767,
        gam: {
            unit: '/5500201/sc_mobile_adhesion_320x100',
            sizes: [
                [1, 1],
            ],
            code: 'banner-bottom'
        }
    }, {
        code: 'desktop-billboard',
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/sc_desktop_billboard_970x250',
            sizes: [[970, 250]],
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
    },{
        code: 'desktop-728x90',
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/sc_desktop_728x90',
            sizes: [
                [728, 90],
            ],
            code: 'desktop-728x90'
        },
        // a9: {
        //     slotID: 'right-rail',
        //     sizes: [
        //         [300, 600],
        //         [300, 250]
        //     ]
        // },
        // prebid: {
        //     code: 'right-rail',
        //     mediaTypes: {
        //         banner: {
        //             sizes: [
        //                 [300, 600],
        //                 [300, 250]
        //             ]
        //         },
        //     },
        //     bids: [appnexus(12237263), openx("538768367"), ix([300, 600], 200249), rubicon("743310")]
        // }
    }, {
        code: 'right-rail',
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/sc_desktop_right_rail',
            sizes: [
                [300, 600],
                [300, 250]
            ],
            code: 'right-rail'
        },
        a9: {
            slotID: 'right-rail',
            sizes: [
                [300, 600],
                [300, 250]
            ]
        },
        prebid: {
            code: 'right-rail',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600],
                        [300, 250]
                    ]
                },
            },
            bids: [appnexus(12237263), openx("538768367"), ix([300, 600], 200249), rubicon("743310")]
        }
    },{
        code: 'desktop-showcase',
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/sc_desktop_showcase_300x250',
            sizes: [
                [300, 250]
            ],
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
                    sizes: [
                        [300, 250]
                    ]
                },
            },
            bids: [appnexus(12237264), ix([300, 250], 200258), rubicon("743306")]
        }
    },{
        code: 'right-rail-sticky',
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/sc_desktop_right_rail_sticky',
            sizes: [
                [300, 600],
                [160, 600],
                [300, 250]
            ],
            code: 'right-rail-sticky'
        },
        a9: {
            slotID: 'right-rail-sticky',
            sizes: [
                [300, 600],
                [160, 600],
                [300, 250]
            ]
        },
        prebid: {
            code: 'right-rail-sticky',
            mediaTypes: {
                banner: {
                    sizes: [
                        [300, 600],
                        [160, 600],
                        [300, 250]
                    ]
                },
            },
            bids: [appnexus(12237265), ix([300, 600], 200257), rubicon("743312")]
        }
    },{
        code: 'interstitial',
        refreshable: false,
        min: 768,
        max: 9999,
        gam: {
            unit: '/5500201/sc_interstitial',
            sizes: [[1, 1]],
            code: 'interstitial'
        },
    },{
        code: 'wallpaper-left',
        min: 1200,
        max: 9999,
        gam: {
            unit: '/5500201/sc_desktop_wallpaper_200x1200_l',
            sizes: [[200, 1200]],
            code: 'wallpaper-left'
        },
    }, {
        code: 'wallpaper-right',
        min: 1200,
        max: 9999,
        gam: {
            unit: '/5500201/sc_desktop_wallpaper_200x1200_r',
            sizes: [[200, 1200]],
            code: 'wallpaper-right'
        },
    },
];

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
});

var gamSlots = {};
googletag.cmd.push(function () {
    adSpots.forEach(adSpot => {
        if (adSpot.gam !== undefined && adSpot.min <= window.innerWidth && adSpot.max >= window.innerWidth) {
            gamSlots[adSpot.gam.code] = googletag.defineSlot(adSpot.gam.unit, adSpot.gam.sizes, adSpot.gam.code).addService(googletag.pubads());
        }
    })
    googletag.pubads().setTargeting("url", window.location.pathname.substr(0, 40)),
    googletag.pubads().setTargeting("author", author),
    googletag.pubads().disableInitialLoad();
    // googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.enableServices();
    googletag.pubads().addEventListener("slotRenderEnded", function(e) {
        e.slot === gamSlots['banner-bottom'] && (document.getElementById("banner-bottom").width = window.innerWidth)
    })
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
    if (!intFired && (window.pageYOffset / document.body.offsetHeight) >= (1/5) && window.innerWidth > 768) {
        fireInterstitial();
    }
})

function fireInterstitial() {
    intFired = true;
    executeBidding([adSpots.interstitial]);
    // googletag.display('desktop-interstitial');
    // refreshSlots([gamSlots['desktop-interstitial']]);
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
    eventer = window[eventMethod],
    messageEvent = "attachEvent" == eventMethod ? "onmessage" : "message";
eventer(messageEvent, function(e) {
    var i = e[e.message ? "message" : "data"];
    "adContentAvailable" == (i.message || "ignore") && setTimeout(function() {
        document.querySelector('[data-container-ad-unit-id="' + i.adUnit + '"]').innerHTML = i.content, "sc-interstitial" == i.adUnit && setTimeout(function() {
            document.querySelector('[data-container-ad-unit-id="' + i.adUnit + '"]').style.display = "block"
        }, 5e3)
    }, 5e3)
}, !1);

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
    adSpots.forEach(adSpot => {
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