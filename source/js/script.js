$('.nav-item').on('click', function () {
    console.log($(this).index());
    anchorName= '#anchor-' + $(this).index();
    $('body, html').animate({scrollTop: $(anchorName).offset().top }, 900);
});

$(document).ready(function () {
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $('body').addClass('platform-ios');
    }
});

$('.call-button').on('click', function () {

    // event.preventDefault();
    $('#modal-call').modal('show');
})


$('.promo-button, .hue-item-button,.price-button, .hue-subscribe-button').on('click', function () {
    // event.preventDefault();
    $('.modal-title').css( "display", "none" );
    var titleId = this.getAttribute('data-text');
    getTitle= document.getElementById(titleId);
    getTitle.style.display = 'block';
    formEl = document.getElementById('mauticform_input_kozhasubscribe_direction');
    formEl.value= titleId;
    console.log(formEl.value);

    $('#modal-subscribe').modal('show');
})

var isActive = false;

$('.header__menubtn').on('click', function () {
    if (isActive) {
        $('.hamburger').removeClass('burger-active');
        $('.nav-list').removeClass('nav-list__active');
    } else {
        $('.hamburger').addClass('burger-active');
        $('.nav-list').addClass('nav-list__active');
    }
    isActive = !isActive;
});



$('.vk-share-1').on('click', function () {
    console.log('vk-1');

    ga('send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'share-vk1',
        eventLabel: 'Landing',
        eventValue: 3
    });
});

$('.vk-share-2').on('click', function () {
    ga('send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'share-vk2',
        eventLabel: 'Landing',
        eventValue: 3
    });
    console.log('vk-2');
});

$('.fb-share-1').on('click', function () {
    console.log('fb-1');
    ga('send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'share-fb1',
        eventLabel: 'Landing',
        eventValue: 3
    });
});

$('.fb-share-2').on('click', function () {
    console.log('fb-2');
    ga('send', {
        hitType: 'event',
        eventCategory: 'Share',
        eventAction: 'share-fb2',
        eventLabel: 'Landing',
        eventValue: 3
    });
});

$('.button-push').on('click', function () {

    var dataType = '' + this.getAttribute('data-type'),
        dataButton = '' + this.getAttribute('data-button');

    window.eventButton = dataButton;
    ga('send', {
        hitType: 'event',
        eventCategory: dataType,
        eventAction: 'push-button',
        eventLabel: dataButton,
        eventValue: 1
    });

    console.log(dataType, dataButton)

});

$('.arrow-up-cover').on('click', function () {
    $('body, html').animate({scrollTop: 0}, 900);
});


window.onload = function() {
    MaskedInput({
        elm: document.getElementById('phone'), // select only by id
        format: '+375 (__) ___-__-__',
        separator: '+375 ()-'
    });

    // MaskedInput({
    //     elm: document.getElementById('phone2'), // select only by id
    //     format: '+375 (__) ___-__-__',
    //     separator: '+375 ()-'
    // });
};