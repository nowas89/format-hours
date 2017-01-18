var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('second');
var result = document.getElementById('result');


document.getElementById('convert-button').addEventListener('click', function() {

    if (isNaN(hours.value) || isNaN(minutes.value) || isNaN(second.value)) {
        console.log('nie jest numerem - wprowadz poprawne wartosci');
        hours.value = '';
        minutes.value = '';
        seconds.value = '';
        result.innerHTML = 'wprowadź poprawne wartości'

    } else {

        var decimalHours = (Number(hours.value) + (Number(minutes.value) / 60) + (Number(seconds.value) / 3600)).toFixed(2);
        document.getElementById('result').innerHTML = 'liczba godzin łącznie:  ' + decimalHours  + ',    ';
        document.getElementById('hoursDecimal').innerHTML = hours.value +'h,    ';
        document.getElementById('minutesDecimal').innerHTML = minutes.value + 'min,     ';
        document.getElementById('secondsDecimal').innerHTML = seconds.value +   'sec.';


    }

}, false);
