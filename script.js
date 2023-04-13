// slide show

var index = 0;
slideShow();

function slideShow() {
  var x = document.getElementsByClassName("project-image1");
  var y = document.getElementsByClassName("project-image2");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
  }
  index++;
  if (index > x.length) {
    index = 1;
  }

  x[index - 1].style.display = "block";
  y[index - 1].style.display = "block";

  setTimeout(slideShow, 2000);
}

var idx = 0;
slideShow2();
function slideShow2() {
  var x = document.getElementsByClassName("project-image3");
  var y = document.getElementsByClassName("project-image4");
  // var z = document.getElementsByClassName("project-image3");
  // var u = document.getElementsByClassName("project-image4");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
    // z[j].style.display = "none";
    // u[i].style.display = "none";
  }
  idx++;
  if (idx > x.length) {
    idx = 1;
  }

  x[idx - 1].style.display = "block";
  y[idx - 1].style.display = "block";
  // z[index - 1].style.display = "block";
  // u[index - 1].style.display = "block";

  setTimeout(slideShow2, 2000);
}
