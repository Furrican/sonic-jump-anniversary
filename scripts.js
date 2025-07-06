window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 90);
});

function closeNav() {
    if(document.getElementById("mySidenav").style.width == "310px"){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("burger").innerHTML = "&#9776;";
    }
}

function Nav() {
    if(document.getElementById("mySidenav").style.width == "310px"){
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("burger").innerHTML = "&#9776;";
    }
    else{
        document.getElementById("mySidenav").style.width = "310px";
        document.getElementById("burger").innerHTML = "&#x2716;";
    }
}

function toggleText(n) {
    var text = document.getElementById("answer" + n);
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }