const lovingStart = 1531578140000;
const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;
const oneSecond = 1000;


function createMyDate() {
    var myDate = new Date();
    var curMill = myDate.getTime();
    var fallinlove = curMill - lovingStart;
    var days = Math.floor(fallinlove / oneDay);
    fallinlove = fallinlove % oneDay;
    var hours = Math.floor(fallinlove / oneHour);
    fallinlove = fallinlove % oneHour;
    var minutes = Math.floor(fallinlove / oneMinute);
    fallinlove = fallinlove % oneMinute;
    var seconds = Math.floor(fallinlove / oneSecond);
    fallinlove = fallinlove % oneSecond;

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}