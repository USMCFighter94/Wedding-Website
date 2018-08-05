var countDownDate = new Date("June 21, 2019 17:00:00").getTime();

var x = setInterval(function() {
  var distance = countDownDate - new Date().getTime();

  if (distance > 0) {

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("wedding-timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }
}, 1000);
