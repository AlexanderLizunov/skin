/**
 * Created by BogdanKootz on 18.03.17.
 */

var decCache = [],
	decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles) {
	if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
	
	return titles[decCache[number]];
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));


    if (t >= 0 ) {
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    } else {
        $("body").addClass("contest-end");
        return {
            'total': 0,
            'days': 0,
            'hours': 0,
            'minutes': 0,
            'seconds': 0
        };
    }

}

function initializeClock(id, n, endtime) {
	var clock = document.getElementById(id);
	// console.log(clock)
	var days = 'days' +n;
	var hours = 'hours' +n;
	var minutes = 'minutes' +n;
	var seconds = 'seconds' +n;

	var daysSpan = document.getElementsByClassName(days)[0];
	var hoursSpan = document.getElementsByClassName(hours)[0];
	var minutesSpan = document.getElementsByClassName(minutes)[0];
	var secondsSpan = document.getElementsByClassName(seconds)[0];
	// console.log(daysSpan)
	// console.log(days)
	function updateClock() {
		var t = getTimeRemaining(endtime);
		
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		
		var daysText = document.getElementById("days-text"+n);
		var hoursText = document.getElementById("hours-text"+n);
		var minutesText = document.getElementById("minutes-text"+n);
		var secondsText = document.getElementById("seconds-text"+n);


		daysText.innerHTML = decOfNum(t.days, ["день", "дня", "дней"]);
		hoursText.innerHTML = decOfNum(t.hours, ["час", "часа", "часов"]);
		minutesText.innerHTML = decOfNum(t.minutes, ["минута", "минуты", "минут"]);
		secondsText.innerHTML = decOfNum(t.seconds, ["секунда", "секунды", "секунд"]);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(2018, 2, 27, 18, 0, 0);
console.log(deadline);
//TODO::change id of timer block
initializeClock('js-timer', '', deadline);
initializeClock('js-timer2', '1', deadline);
initializeClock('js-timer3', '2', deadline);