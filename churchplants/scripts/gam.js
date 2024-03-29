var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function() {
	if (window.innerWidth <= 768){
            mobileSticky = googletag.defineSlot('/5500201/cp_mobile_adhesion_320x100', [1, 1], 'banner-bottom').addService(googletag.pubads());
            googletag.defineSlot('/5500201/cp_mobile_inline_mobile1', [300, 250], 'inline-mobile1').addService(googletag.pubads());
            googletag.defineSlot('/5500201/cp_mobile_inline_mobile2', [300, 250], 'inline-mobile2').addService(googletag.pubads());
            googletag.defineSlot('/5500201/cp_mobile_inline_mobile3', [300, 250], 'inline-mobile3').addService(googletag.pubads());
            googletag.defineSlot('/5500201/cp_mobile_inline_mobile4', [300, 250], 'inline-mobile4').addService(googletag.pubads());
        } else {
        //googletag.defineSlot('/5500201/cp_desktop_728x90', [728, 90], 'leaderboard').addService(googletag.pubads());
		googletag.defineSlot('/5500201/cp_desktop_970x250', [970, 250], 'leaderboard').addService(googletag.pubads());
        googletag.defineSlot('/5500201/cp_desktop_right_rail', [[300, 600], [300, 250], [160, 600]], 'rightrail').addService(googletag.pubads());
        googletag.defineSlot('/5500201/cp_desktop_showcase_300x250', [300, 250], 'showcase').addService(googletag.pubads());
    }
    googletag.defineSlot('/5500201/cp_desktop_textad_top', [1, 1], 'toptext').addService(googletag.pubads());
    googletag.defineSlot('/5500201/cp_desktop_textad_bottom', [1, 1], 'bottomtext').addService(googletag.pubads());

    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs();
    googletag.pubads().setTargeting("advid", advid);
    googletag.enableServices();

	// Strech iframe to width of mobile device on ad load
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            if (event.slot === mobileSticky) {
                var iFrame = document.getElementById( 'google_ads_iframe_/5500201/cp_mobile_adhesion_320x100_0' );
                iFrame.width = window.innerWidth;
            }
        });

    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        if (event.size[0] === 1) {
            var cpTop = document.getElementById( 'google_ads_iframe_/5500201/cp_desktop_textad_top_0__container__' );
            cpTop.style.display = "none";

            var cpBottom = document.getElementById( 'google_ads_iframe_/5500201/cp_desktop_textad_bottom_0__container__' );
            cpBottom.style.display = "none";
        }
    });
});

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {

var key = e.message ? "message" : "data";
var data = e[key];

var eventName = data.message || 'ignore';

if (eventName == 'adContentAvailable') {
console.log( 'ad data available: ', data );

// replace content
$('div').filter('[data-container-ad-unit-id="' + data.adUnit + '"]').html( data.content );
}
//run function//
},false);