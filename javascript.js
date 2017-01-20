var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var result = document.getElementById('result');

document.getElementById('convert-button').addEventListener('click', function() {

    if (isNaN(hours.value) || isNaN(minutes.value) || isNaN(seconds.value) || hours.value === '' || minutes.value === '' || seconds.value === '') {
        console.log('nie jest numerem - wprowadz poprawne wartosci');
        var results = {
            hoursResult: '',
            minutesResult: '',
            secondsResult: '',
            decimalResult: 'please . . .  enter the correct value'
        }
        displayResults(results);

    } else {

        var decimalHours = (Number(hours.value) + (Number(minutes.value) / 60) + (Number(seconds.value) / 3600)).toFixed(2);
        results = {
            hoursResult: hours.value + 'h /',
            minutesResult: minutes.value + 'min /',
            secondsResult: seconds.value + 'sec',
            decimalResult: 'total number of hours in decimal form:  ' + decimalHours
        }
        displayResults(results);

    }
}, false);

function displayResults(results) {


    document.getElementById('result').innerHTML = results.decimalResult;
    document.getElementById('hoursDecimal').innerHTML = results.hoursResult;
    document.getElementById('minutesDecimal').innerHTML = results.minutesResult;
    document.getElementById('secondsDecimal').innerHTML = results.secondsResult;
    hours.value = '';
    minutes.value = '';
    seconds.value = '';

}
