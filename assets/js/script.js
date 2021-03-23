var listOFCities = ['Dallas', 'Minneapolis', 'Los Angeles', 'Seattle', 'New York', 'Miami', 'Boston', 'Washington D.C.', 'Baltimore', 'Cleavland']
var cityListDiv = document.getElementById('cityList')

// var url = 'http://api.openweathermap.org/data/2.5/forecast?q=minneapolis&appid=f932c7ef48b242dff55d444fbb313308'

// fetch(url, {

// }).then(function (response) {
//     console.log(response)
//     return response.json();
// })
//     .then(function (data) {
//         console.log(data)
//         console.log(data.list[9].weather[0].icon)
//     });

cityList()
function cityList() {

    var city = document.getElementById('giveC')

    var goGo = document.getElementById('search')



    goGo.addEventListener('click', function (event) {
        event.preventDefault()

        show(city.value)
        var hh = JSON.parse(localStorage.getItem('listOcity'))

        console.log(hh)

        if (localStorage.getItem("listOcity") === null) {

            localStorage.setItem('listOcity', JSON.stringify('[]'))
        }



        // hh.push(city.value)

        console.log(JSON.stringify(hh))

        localStorage.setItem('listOcity', JSON.stringify(hh))

        localStorage.getItem
    })


}


function show(g) {

    var askFor = 'http://api.openweathermap.org/data/2.5/forecast?q=' + g + '&appid=f932c7ef48b242dff55d444fbb313308'

    fetch(askFor, {

    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            console.log(data)
            var date1 = data.list[5].dt_txt;
            var date2 = data.list[13].dt_txt;
            var date3 = data.list[21].dt_txt;
            var date4 = data.list[29].dt_txt;
            var date5 = data.list[37].dt_txt;

            var tempDay1 = data.list[5].main.temp;
            var tempDay2 = data.list[13].main.temp;
            var tempDay3 = data.list[21].main.temp;
            var tempDay4 = data.list[29].main.temp;
            var tempDay5 = data.list[37].main.temp;

            getDates(date1, date2, date3, date4, date5)
            getTemps(tempDay1, tempDay2, tempDay3, tempDay4, tempDay5)

            var iconDay1 = data.list[5].weather[0].icon
            var iconDay2 = data.list[13].weather[0].icon;
            var iconDay3 = data.list[21].weather[0].icon;
            var iconDay4 = data.list[29].weather[0].icon;
            var iconDay5 = data.list[37].weather[0].icon;

            getIcon(iconDay1, iconDay2, iconDay3, iconDay4, iconDay5)

            var feel1 = data.list[5].main.feels_like;
            var feel2 = data.list[13].main.feels_like;
            var feel3 = data.list[21].main.feels_like;
            var feel4 = data.list[29].main.feels_like;
            var feel5 = data.list[37].main.feels_like;

            feelLike(feel1, feel2, feel3, feel4, feel5)

            var hL1 = data.list[5].main.temp_max
            var hL2 = data.list[13].main.temp_max
            var hL3 = data.list[21].main.temp_max
            var hL4 = data.list[29].main.temp_max
            var hL5 = data.list[37].main.temp_max

            high(hL1,hL2,hL3,hL4,hL5)

            var lH1 = data.list[5].main.temp_min
            var lH2 = data.list[13].main.temp_min
            var lH3 = data.list[21].main.temp_min
            var lH4 = data.list[29].main.temp_min
            var lH5 = data.list[37].main.temp_min

            low(lH1,lH2,lH3,lH4,lH5)


        });

}
function getDates(first, second, third, fourth, fith) {

    var h = [first, second, third, fourth, fith]
    var changeFirst = moment(first).format('MMM Do, YYYY')
    var changeSecond = moment(second).format('MMM Do, YYYY')
    var changeThird = moment(third).format('MMM Do, YYYY')
    var changeFourth = moment(fourth).format('MMM Do, YYYY')
    var changeFith = moment(fith).format('MMM Do, YYYY')
    var date1EL = document.getElementById('day1').textContent = changeFirst
    var date2El = document.getElementById('day2').textContent = changeSecond
    var date3El = document.getElementById('day3').textContent = changeThird
    var date4El = document.getElementById('day4').textContent = changeFourth
    var date5El = document.getElementById('day5').textContent = changeFith


}
function getTemps(first, second, third, fourth, fith) {


    var temp1El = document.getElementById('tempD1').textContent = ((first - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp2El = document.getElementById('tempD2').textContent = ((second - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp3El = document.getElementById('tempD3').textContent = ((third - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp4El = document.getElementById('tempD4').textContent = ((fourth - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp5El = document.getElementById('tempD5').textContent = ((fith - 273.15) * 9 / 5 + 32).toFixed(0)


}
function getIcon(first, second, third, fourth, fith) {

    var icon1EL = document.getElementById('icon1').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + first + ".png\" alt=\"maybe\">"
    var icon2EL = document.getElementById('icon2').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + second + ".png\" alt=\"maybe\">"
    var icon3EL = document.getElementById('icon3').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + third + ".png\" alt=\"maybe\">"
    var icon4EL = document.getElementById('icon4').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + fourth + ".png\" alt=\"maybe\">"
    var icon5EL = document.getElementById('icon5').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + fith + ".png\" alt=\"maybe\">"

}
function feelLike(first, second, third, fourth, fith) {

    var temp1El = document.getElementById('feelD1').textContent = ((first - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp2El = document.getElementById('feelD2').textContent = ((second - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp3El = document.getElementById('feelD3').textContent = ((third - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp4El = document.getElementById('feelD4').textContent = ((fourth - 273.15) * 9 / 5 + 32).toFixed(0)
    var temp5El = document.getElementById('feelD5').textContent = ((fith - 273.15) * 9 / 5 + 32).toFixed(0)

}
function high(first,second,third,fourth,fith) {

    var high_low1 = document.getElementById('highLo1').textContent = ((first - 273.15) * 9 / 5 + 32).toFixed(0)
    var high_low2 = document.getElementById('highLo2').textContent = ((second - 273.15) * 9 / 5 + 32).toFixed(0)
    var high_low3 = document.getElementById('highLo3').textContent = ((third - 273.15) * 9 / 5 + 32).toFixed(0)
    var high_low4 = document.getElementById('highLo4').textContent = ((fourth - 273.15) * 9 / 5 + 32).toFixed(0)
    var high_low5 = document.getElementById('highLo5').textContent = ((fith - 273.15) * 9 / 5 + 32).toFixed(0)

}
function low(first,second,third,fourth,fith) {

    var low_high1 = document.getElementById('loHigh1').textContent = ((first - 273.15) * 9 / 5 + 32).toFixed(0)
    var low_high2 = document.getElementById('loHigh2').textContent = ((second - 273.15) * 9 / 5 + 32).toFixed(0)
    var low_high3 = document.getElementById('loHigh3').textContent = ((third - 273.15) * 9 / 5 + 32).toFixed(0)
    var low_high4 = document.getElementById('loHigh4').textContent = ((fourth - 273.15) * 9 / 5 + 32).toFixed(0)
    var low_high5 = document.getElementById('loHigh5').textContent = ((fith - 273.15) * 9 / 5 + 32).toFixed(0)
}

