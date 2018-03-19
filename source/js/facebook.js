function onFacebookReady(callback) {
    var checker = setInterval(function () {
        if (typeof FB !== "undefined") {
            clearInterval(checker);
            callback();
        }
    }, 400);
}

onFacebookReady(function () {
    console.log('fb!');
    FB.Event.subscribe('edge.create', function () {
        // BS.Tracker.reason = 'FBLike';
        // BS.Tracker.track();
        // ga('send', {
        //     hitType: 'event',
        //     eventCategory: 'Subscribe',
        //     eventAction: 'subscribe-fb',
        //     eventLabel: 'Contest',
        //     eventValue: 1
        // });
        console.log("like on facebook");
    });
    FB.Event.subscribe('edge.remove', function () {
        // BS.Tracker.reason = 'FBUnlike';
        // BS.Tracker.track();
        console.log("unlike on facebook");
    });
    $('.fb-share').on('click', function () {
        FB.ui(
            {
                method: 'share',
                href: 'https://zagar-msk.ru?utm_source=FB&utm_medium=repost&utm_campaign=contest',

            }, function (response) {
                if (response && !response.error_message) {
                    // BS.Tracker.reason = 'FBShare';
                    // BS.Tracker.track();
                    // ga('send', {
                    //     hitType: 'event',
                    //     eventCategory: 'Share',
                    //     eventAction: 'share-fb',
                    //     eventLabel: 'Contest',
                    //     eventValue: 3
                    // });
                }
            });
    });
});
