var imgArray = [
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg']
var curIndex = 0;
var imgDuration = 3000;

function slide_Auto_Change() {
  setTimeout(function () {
    document.getElementById("slider_container").style.backgroundImage = "url(" + imgArray[curIndex] + ")";
  }, 1000);
  curIndex++;
  if (curIndex == imgArray.length) { curIndex = 0; }
  setTimeout(slide_Auto_Change, imgDuration);
}
slide_Auto_Change();

function change_right() {
  if (curIndex < 2) {
    curIndex++
  } else {
    curIndex = 0
  }
  document.getElementById("slider_container").style.backgroundImage = "url(" + imgArray[curIndex] + ")";
}

function change_left() {
  if (curIndex > 0) {
    curIndex--
  } else {
    curIndex = 2
  }
  document.getElementById("slider_container").style.backgroundImage = "url(" + imgArray[curIndex] + ")";
}

function myImg1() {
  document.getElementById("slider_container").style.backgroundImage = "url(/img2.jpg)";
  curIndex = 0;
}

function myImg2() {
  document.getElementById("slider_container").style.backgroundImage = "url(/img3.jpg)";
  curIndex = 1;
}

function myImg3() {
  document.getElementById("slider_container").style.backgroundImage = "url(/img4.jpg)";
  curIndex = 2;
}

