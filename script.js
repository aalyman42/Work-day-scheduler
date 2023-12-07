// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var now = dayjs();
var textArea = $(".description");
var hour = $(".hour");
var timeBlock = $(".time-block");
var savedItem = {
  h9: "",
  h10: "",
  h11: "",
  h12: "",
  h13: "",
  h14: "",
  h15: "",
  h16: "",
  h17: "",
};
// var savedItemArray = [];
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });

function init() {
  currentDay.text("Today is: " + now.format("dddd MMM D, YYYY"));
  color(now);
  pullStorage();
}

function color(now) {
  for (i = 0; i < timeBlock.length; i++) {
    var areaColor = $(timeBlock[i].children[1]);
    var hourId = timeBlock[i].id;
    var parsedHour = parseInt(hourId.split("-")[1]);
    if (now.format("H") == parsedHour) {
      console.log(areaColor);
      areaColor.addClass("present");
    } else if (now.format("H") < parsedHour) {
      console.log(areaColor);
      areaColor.addClass("future");
    } else if (now.format("H") > parsedHour) {
      console.log(areaColor);
      areaColor.addClass("past");
    }
  }
}

function pullStorage() {
  var getStorage = localStorage.getItem("saved items");
  var savedItem = JSON.parse(getStorage);
  console.log(savedItem);
  for (i = 0; i < timeBlock.length; i++) {
    var blockText = $(timeBlock[i].children[1]);
    if (timeBlock[i].id == "hour-9") {
      blockText.text(savedItem.h9);
    }
    if (timeBlock[i].id == "hour-10") {
      blockText.text(savedItem.h10);
    }
    if (timeBlock[i].id == "hour-11") {
      blockText.text(savedItem.h11);
    }
    if (timeBlock[i].id == "hour-12") {
      blockText.text(savedItem.h12);
    }
    if (timeBlock[i].id == "hour-13") {
      blockText.text(savedItem.h13);
    }
    if (timeBlock[i].id == "hour-14") {
      blockText.text(savedItem.h14);
    }
    if (timeBlock[i].id == "hour-15") {
      blockText.text(savedItem.h15);
    }
    if (timeBlock[i].id == "hour-16") {
      blockText.text(savedItem.h16);
    }
    if (timeBlock[i].id == "hour-17") {
      blockText.text(savedItem.h17);
    }
  }
}

timeBlock.on("click", "button", function (event) {
  event.preventDefault();
  for (i = 0; i < timeBlock.length; i++) {
    var blockText = $(timeBlock[i].children[1]).val();
    if (timeBlock[i].id == "hour-9") {
      savedItem.h9 = blockText;
    }
    if (timeBlock[i].id == "hour-10") {
      savedItem.h10 = blockText;
    }
    if (timeBlock[i].id == "hour-11") {
      savedItem.h11 = blockText;
    }
    if (timeBlock[i].id == "hour-12") {
      savedItem.h12 = blockText;
    }
    if (timeBlock[i].id == "hour-13") {
      savedItem.h13 = blockText;
    }
    if (timeBlock[i].id == "hour-14") {
      savedItem.h14 = blockText;
    }
    if (timeBlock[i].id == "hour-15") {
      savedItem.h15 = blockText;
    }
    if (timeBlock[i].id == "hour-16") {
      savedItem.h16 = blockText;
    }
    if (timeBlock[i].id == "hour-17") {
      savedItem.h17 = blockText;
    }
  }
  var stringStore = JSON.stringify(savedItem);
  localStorage.setItem("saved items", stringStore);
});

init();
