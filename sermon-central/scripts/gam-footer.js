Object.entries(adSpots).forEach(([key, adSpot]) => {
    if (adSpot.min <= window.innerWidth && adSpot.max >= window.innerWidth) {
        if (adSpot.refreshable !== false) {
            adRefresh(adSpot);
        }
        executeBidding([adSpot])
    }
});

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
            executeBidding([adSpot])
        }
    }, 6e4) // 60 seconds
}