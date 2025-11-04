//////////// Clock /////////////

// Create Date Time And Day
let clockTime = new Date()

// Month List 
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// DayList
let DayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// Seconds
let clockSecond = clockTime.getSeconds() + 1
let secondDegree = clockSecond * 6
document.getElementById('second-needle').style.transform = `rotate(${secondDegree}deg)`

// Minutes
let clockMinute = clockTime.getMinutes()
let minutDegree = clockMinute * 6 + clockSecond * 0.1
document.getElementById('minut-needle').style.transform = `rotate(${minutDegree}deg)`

// Hours
let clockHour = clockTime.getHours()
let hourDegree = clockHour * 30 + clockMinute * 0.5
document.getElementById('hour-needle').style.transform = `rotate(${hourDegree}deg)`

// Clock Interval 
setInterval(function(){
    // Seconds 
    let clockTime = new Date()
    let clockSecond = clockTime.getSeconds() + 1
    let secondDegree = clockSecond * 6
    document.getElementById('second-needle').style.transform = `rotate(${secondDegree}deg)`

    // Minutes
    let clockMinute = clockTime.getMinutes()
    let minutDegree = clockMinute * 6 + clockSecond * 0.1
    document.getElementById('minut-needle').style.transform = `rotate(${minutDegree}deg)`

    // Hour
    let clockHour = clockTime.getHours()
    let hourDegree = clockHour * 30 + clockMinute * 0.5;
    document.getElementById('hour-needle').style.transform = `rotate(${hourDegree}deg)`
}, 1000)

//////////// Digital Clock /////////////

// Create Date Time And Day 
let creatTime = new Date()

// Month 
let month = creatTime.getMonth()
let monthName = monthList[month]
document.getElementsByClassName('month')[0].innerHTML = monthName
document.getElementsByClassName('month')[1].innerHTML = monthName

// Date 
let date = creatTime.getDate()
document.getElementsByClassName('date')[0].innerHTML = date + ","
document.getElementsByClassName('date')[1].innerHTML = date + ","

// Year 
let year = creatTime.getFullYear()
document.getElementsByClassName('year')[0].innerHTML = year
document.getElementsByClassName('year')[1].innerHTML = year

// Seconds 
let second = creatTime.getSeconds()
document.getElementsByClassName('second')[0].innerHTML = second.toString().padStart(2, '0')
document.getElementsByClassName('second')[1].innerHTML = second.toString().padStart(2, '0')

// Minutes 
let minute = creatTime.getMinutes()
document.getElementsByClassName('minute')[0].innerHTML = minute.toString().padStart(2, '0')
document.getElementsByClassName('minute')[1].innerHTML = minute.toString().padStart(2, '0')

// Hours 
let hour = creatTime.getHours() % 12 || 12
document.getElementsByClassName('hour')[0].innerHTML = hour.toString().padStart(2, '0')
document.getElementsByClassName('hour')[1].innerHTML = hour.toString().padStart(2, '0')
hour >= 12 ? document.getElementById('ampm').innerHTML = "AM" : document.getElementById('ampm').innerHTML = "PM"

// Day 
let day = creatTime.getDay()
let dayName = DayList[day]
document.getElementsByClassName('day')[0].innerHTML = dayName
document.getElementsByClassName('day')[1].innerHTML = dayName

// Digital Clock Interval 
setInterval(function() {
    // Create Date Time And Day 
    let creatTime = new Date()

    // Month 
    let month = creatTime.getMonth()
    let monthName = monthList[month]
    document.getElementsByClassName('month')[0].innerHTML = monthName
    document.getElementsByClassName('month')[1].innerHTML = monthName

    // Date 
    let date = creatTime.getDate()
    document.getElementsByClassName('date')[0].innerHTML = date + ","
    document.getElementsByClassName('date')[1].innerHTML = date + ","

    // Year 
    let year = creatTime.getFullYear()
    document.getElementsByClassName('year')[0].innerHTML = year
    document.getElementsByClassName('year')[1].innerHTML = year

    // Seconds 
    let second = creatTime.getSeconds() + 1
    document.getElementsByClassName('second')[0].innerHTML = second.toString().padStart(2, '0')
    document.getElementsByClassName('second')[1].innerHTML = second.toString().padStart(2, '0')
    if (second == 60){
        document.getElementsByClassName('second')[0].innerHTML = '00'
        document.getElementsByClassName('second')[1].innerHTML = '00'
    }

    // Minutes 
    let minute = creatTime.getMinutes()
    document.getElementsByClassName('minute')[0].innerHTML = minute.toString().padStart(2, '0')
    document.getElementsByClassName('minute')[1].innerHTML = minute.toString().padStart(2, '0')
    if (minute == 60){
        document.getElementsByClassName('minute')[0].innerHTML = '00'
        document.getElementsByClassName('minute')[1].innerHTML = '00'
    }

    // Hours 
    let hour = creatTime.getHours() % 12 || 12
    document.getElementsByClassName('hour')[0].innerHTML = hour.toString().padStart(2, '0')
    document.getElementsByClassName('hour')[1].innerHTML = hour.toString().padStart(2, '0')
    hour >= 12 ? document.getElementById('ampm').innerHTML = "AM" : document.getElementById('ampm').innerHTML = "PM"

    // Day 
    let day = creatTime.getDay()
    let dayName = DayList[day]
    document.getElementsByClassName('day')[0].innerHTML = dayName
    document.getElementsByClassName('day')[1].innerHTML = dayName
}, 1000)