var currentURL = window.location.href,
    urlPath = window.location.pathname,
    author = "";
if ("complete" === document.readyState || "loaded" === document.readyState)
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
}! function(e, i) {
    i.liosetup = i.liosetup || {}, i.liosetup.callback = i.liosetup.callback || [], i.liosetup.addCallback = function(e) {
        if ("function" == typeof i.liosetup.callback) {
            var t = [];
            t.push(i.liosetup.callback), i.liosetup.callback = t
        }
        i.lio && i.lio.loaded ? e(i.lio.data) : i.liosetup.callback.push(e)
    }
}(document, window),
function(e, i) {
    i.googletag = i.googletag || {}, i.googletag.cmd = i.googletag.cmd || [], void 0 !== i.googletag ? i.googletag.cmd.push(function() {
        i.googletag.pubads().disableInitialLoad()
    }) : console.warn("attempting to load Lytics for DFP before initializing googletag"), i.liosetup.callback.push(function(e) {
        e || e.segments ? i.googletag.cmd.push(function() {
            i.googletag.pubads().setTargeting("LyticsSegments", e.segments)
        }) : console.warn("unable to load Lytics audiences for DFP")
    })
}(document, window), window.liosetup = window.liosetup || {}, window.liosetup.loadid = !0,
    function(e, i, t, o, n, a, s) {
        function d(t, o) {
            i[e]._Q.push([t, o])
        }
        i[e] || (i[e] = {
            init: function() {
                d("i", arguments)
            },
            fetchBids: function() {
                d("f", arguments)
            },
            setDisplayBids: function() {},
            targetingKeys: function() {
                return []
            },
            _Q: []
        }, (a = t.createElement(o)).async = !0, a.src = "//c.amazon-adsystem.com/aax2/apstag.js", (s = t.getElementsByTagName(o)[0]).parentNode.insertBefore(a, s))
    }("apstag", window, document, "script");
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
    window.innerWidth < 768 && (
        googletag.defineSlot("/5500201/sc_mobile_inline_mobile1", [300, 250], "inline-mobile1").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_mobile_inline_mobile2", [300, 250], "inline-mobile2").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_mobile_inline_mobile3", [300, 250], "inline-mobile3").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_mobile_inline_mobile4", [300, 250], "inline-mobile4").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_mobile_btf_mobile", [300, 250], "btf-mobile").addService(googletag.pubads()),
        bannerBottom = googletag.defineSlot("/5500201/sc_mobile_adhesion_320x100", [1, 1], "banner-bottom").addService(googletag.pubads())
    ),
    window.innerWidth >= 768 && (
        googletag.defineSlot("/5500201/sc_desktop_billboard_970x250", [970, 250], "desktop-billboard").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_desktop_728x90", [728, 90], "desktop-728x90").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_desktop_showcase_300x250", [300, 250], "desktop-showcase").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_desktop_right_rail", [[300, 600],[300, 250]], "right-rail").addService(googletag.pubads()),
        rightRailSticky = googletag.defineSlot("/5500201/sc_desktop_right_rail_sticky", [[300, 600],[300, 250],[160, 600]], "right-rail-sticky").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/sc_interstitial", [1, 1], "interstitial").addService(googletag.pubads()),
        bannerBottom = "null"
    ),
    window.innerWidth >= 1200 && (
        googletag.defineSlot("/5500201/sc_desktop_wallpaper_200x1200_l", [200, 1200], "wallpaper-left").addService(googletag.pubads()),
        googletag.defineSlot("/5500201/SC_Desktop_Wallpaper_200x1200_r", [200, 1200], "wallpaper-right").addService(googletag.pubads())
    ),
    googletag.pubads().setTargeting("url", window.location.pathname.substr(0, 40)),
    googletag.pubads().setTargeting("author", author),
    googletag.pubads().disableInitialLoad(),
    googletag.pubads().enableSingleRequest(),
    googletag.pubads().collapseEmptyDivs(),
    googletag.enableServices(),
    googletag.pubads().addEventListener("slotRenderEnded", function(e) {
        e.slot === bannerBottom && (document.getElementById("google_ads_iframe_/5500201/sc_mobile_adhesion_320x100_0").width = window.innerWidth)
    })
});
var pbjs = pbjs || {};

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
pbjs.que = pbjs.que || [];
var mobileOutstream = {
        code: "inline-mobile1",
        sizes: [
            [640, 480]
        ],
        mediaType: "video-outstream",
        bids: [appnexusVideo(12237278)]
    },
    inlineMobile1 = {
        code: "inline-mobile1",
        sizes: [
            [300, 250]
        ],
        bids: [appnexus(12237266), openx("538768369"), oneMobile("inline_mobile1"), ix([300, 250], 200251), rubicon("743318")]
    },
    inlineMobile2 = {
        code: "inline-mobile2",
        sizes: [
            [300, 250]
        ],
        bids: [appnexus(12237267), ix([300, 250], 200252), rubicon("743320")]
    },
    inlineMobile3 = {
        code: "inline-mobile3",
        sizes: [
            [300, 250]
        ],
        bids: [appnexus(12237268), ix([300, 250], 200253), rubicon("743322")]
    },
    inlineMobile4 = {
        code: "inline-mobile4",
        sizes: [
            [300, 250]
        ],
        bids: [appnexus(12237269), ix([300, 250], 200254), rubicon("743324")]
    },
    btfMobile = {
        code: "btf-mobile",
        sizes: [
            [300, 250]
        ],
        bids: [appnexus(12237270), openx("538768368"), ix([300, 250], 200250), rubicon("743316")]
    },
    rightRail = {
        code: "right-rail",
        sizes: [
            [300, 600],
            [160, 600],
            [300, 250]
        ],
        bids: [appnexus(12237263), openx("538768367"), ix([300, 600], 200249), rubicon("743310")]
    },
    rightRailShowcase = {
        code: "desktop-showcase",
        sizes: [
            [300, 250]
        ],
        bids: [appnexus(12237264), ix([300, 250], 200258), rubicon("743306")]
    },
    rightRailSticky = {
        code: "right-rail-sticky",
        sizes: [
            [300, 600],
            [160, 600],
            [300, 250]
        ],
        bids: [appnexus(12237265), ix([300, 600], 200257), rubicon("743312")]
    },
    element = document.querySelector('meta[property="inline-ad-count"]'),
    inlineAds = element && element.getAttribute("content");

function addPrebidInlineAds(adCount) {
    for (var i = 1; i <= adCount; i++) adUnits.push(eval("inlineMobile" + i)), 1 === i && adUnits.push(mobileOutstream)
}

function addA9InlineAds(e) {
    for (var i = 1; i <= e; i++) {
        var t = {
            slotID: "inline-mobile" + i,
            sizes: [
                [300, 250]
            ]
        };
        apstagSlots.push(t)
    }
}
if (pbjs.que.push(function() {
        pbjs.setConfig({})
    }), apstag.init({
        pubID: "810a1afb-9c83-4dec-8de3-63fd0e28708a",
        adServer: "googletag"
    }), window.innerWidth < 768) {
    var adUnits = [btfMobile];
    addPrebidInlineAds(4)
} else if (window.innerWidth >= 768) var adUnits = [rightRail, rightRailShowcase, rightRailSticky];
else var adUnits = [];
if (window.innerWidth < 768) {
    var apstagSlots = [{
        slotID: "btf-mobile",
        sizes: [
            [300, 250]
        ]
    }];
    addA9InlineAds(4)
} else if (window.innerWidth >= 768) var apstagSlots = [{
    slotID: "desktop-showcase",
    sizes: [
        [300, 250]
    ]
}, {
    slotID: "right-rail",
    sizes: [
        [300, 600],
        [160, 600],
        [300, 250]
    ]
}, {
    slotID: "right-rail-sticky",
    sizes: [
        [300, 600],
        [160, 600],
        [300, 250]
    ]
}];
else var apstagSlots = [];

function fetchHeaderBids(e, i) {
    var t = ["a9", "prebid"],
        o = {
            adserverRequestSent: !1,
            apstagSlots: e,
            adUnits: i
        };

    function n(e) {
        !0 !== o.adserverRequestSent && ("a9" === e ? o.a9 = !0 : "prebid" === e && (o.prebid = !0), t.map(function(e) {
            return o[e]
        }).filter(Boolean).length === t.length && a())
    }

    function a() {
        !0 !== o.adserverRequestSent && (o.adserverRequestSent = !0, googletag.cmd.push(function() {
            apstag.setDisplayBids(), pbjs.setTargetingForGPTAsync(), googletag.pubads().refresh()
        }))
    }
    t.forEach(function(e) {
        o[e] = !1
    }), pbjs.que.push(function() {
        pbjs.addAdUnits(o.adUnits), pbjs.requestBids({
            bidsBackHandler: function(e) {
                n("prebid")
            }
        })
    }), apstag.fetchBids({
        slots: o.apstagSlots
    }, function(e) {
        n("a9")
    }), window.setTimeout(function() {
        a()
    }, 2e3)
}
fetchHeaderBids(apstagSlots, adUnits);
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