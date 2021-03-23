var listOFCities = ['Dallas', 'Minneapolis', 'Los Angeles', 'Seattle', 'New York', 'Miami', 'Boston', 'Washington D.C.', 'Baltimore', 'Cleavland']
var cityListDiv = document.getElementById('cityList')

var url = 'http://api.openweathermap.org/data/2.5/forecast?q=minneapolis&appid=f932c7ef48b242dff55d444fbb313308'

fetch(url, {

}).then(function (response) {
    console.log(response)
    return response.json();
})
    .then(function (data) {
        console.log(data)
        console.log(data.list[9].weather[0].icon)
    });

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



       hh.push(city.value)

       console.log(JSON.stringify(hh))

       localStorage.setItem('listOcity',JSON.stringify(hh))

        localStorage.getItem
})

    // for(var c=0;c<listOFCities.length; c++){

    //     var cityName = listOFCities[c]

    //     var cityEl = document.createElement('li')
    //     cityEl.classList = 'list-group-item'
    //     cityEl.textContent = cityName

    //     cityListDiv.appendChild(cityEl)

    //     cityEl.addEventListener('click', function (event) {

    //         console.log(event.currentTarget.textContent)
    //         show(event.currentTarget.textContent)
    //     })

    // }

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

            high(hL1)

            var lH1 = data.list[5].main.temp_min

            low(lH1)


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
    // var icon1EL = document.getElementById('icon1').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + first + ".png\" alt=\"maybe\">"
    // var icon1EL = document.getElementById('icon1').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + first + ".png\" alt=\"maybe\">"
    // var icon1EL = document.getElementById('icon1').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + first + ".png\" alt=\"maybe\">"
    // var icon1EL = document.getElementById('icon1').innerHTML = "<img src=\"http://openweathermap.org/img/wn/" + first + ".png\" alt=\"maybe\">"

}
function feelLike(first, second, third, fourth, fith) {

    var temp1El = document.getElementById('feelD1').textContent = ((first - 273.15) * 9 / 5 + 32).toFixed(0)

}
function high(first) {

    var high_low1 = document.getElementById('highLo1').textContent = first

}
function low(first) {

    var low_high1 = document.getElementById('loHigh1').textContent = first
}

