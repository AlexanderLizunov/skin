// //TODO::change appId
// VK.init({ apiId: 6257619 , onlyWidgets: true });
//
// VK.Observer.subscribe('widgets.like.liked', function(likeCount)
// {
//     // console.log('Liked!');
//     BS.Tracker.reason = 'VKLike';
//     BS.Tracker.track();
//     // console.log(BS.Tracker.reason);
//     ga('send', {
//         hitType: 'event',
//         eventCategory: 'Subscribe',
//         eventAction: 'subscribe-vk',
//         eventLabel: 'Contest',
//         eventValue: 1
//     });
// });
//
// // VK.Observer.subscribe("widgets.like.shared", function f() {
// // 	alert('Молодец!');
// // });
// VK.Observer.subscribe('widgets.like.unliked', function(likeCount)
// {
//     // console.log('Unlike!');
//     BS.Tracker.reason = 'VKUnlike';
//     BS.Tracker.track();
//     // console.log(BS.Tracker.reason);
// });
// VK.Observer.subscribe('widgets.like.shared', function(likeCount)
// {
//     console.log('YOOOHU!');
//     //
//     // BS.Tracker.reason = 'VKShare';
//     // BS.Tracker.track();
//     // ga('send', {
//     //     hitType: 'event',
//     //     eventCategory: 'Share',
//     //     eventAction: 'share-vk',
//     //     eventLabel: 'Contest',
//     //     eventValue: 3
//     // });
//     // console.log('user post in the vk');
// });
// // VK.Observer.subscribe('widgets.share.shared', function(likeCount)
// // {
// // 	// BS.Tracker.reason = 'VKShare';
// // 	// BS.Tracker.track();
// // 	console.log('user post in the vk');
// // });
// VK.Observer.subscribe('widgets.subscribed', function(likeCount)
// {
//     // BS.Tracker.reason = 'VKSubscribe';
//     // BS.Tracker.track();
//     // console.log('user SUBSCRIBED to GROUP');
// });
// VK.Observer.subscribe('widgets.unsubscribed', function(likeCount)
// {
//     // BS.Tracker.reason = 'VKUnsubscribe';
//     // BS.Tracker.track();
//     // console.log('user UNSUBSCRIBED from GROUP');
// });
//
// // $('#vk-share').on('click', function () {
// // 	console.log('OK!');
// // 	BS.Tracker.reason = 'VKShare';
// // 	BS.Tracker.track();
// // 	return false;
// // });
//
// $('#vk_share_button, #vk_share_button2').on('click', function () {
//     console.log('OK!')
//     // BS.Tracker.reason = 'VKShare';
//     // BS.Tracker.track();
//     // ga('send', {
//     //     hitType: 'event',
//     //     eventCategory: 'Share',
//     //     eventAction: 'share-vk',
//     //     eventLabel: 'Contest',
//     //     eventValue: 3
//     // });
//     console.log('vk-share');
//     return false;
// });