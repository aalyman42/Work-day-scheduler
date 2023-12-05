// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var now = dayjs();
var textArea = $(".description");
var hour = $(".hour");
var timeBlock = $(".time-block");
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

function color(now) {
  for (i = 0; i < timeBlock.length; i++) {
    var areaColor = timeBlock[i].children[1];
    if (now.format("hA") == timeBlock[i].children[0].textContent) {
      console.log(areaColor);
      areaColor.addClass("present");
    } else if (now.format("hA") > timeBlock[i].children[0].textContent) {
      console.log(areaColor);
      areaColor.addClass("future");
    } else if (now.format("hA") < timeBlock[i].children[0].textContent) {
      console.log(areaColor);
      areaColor.addClass("past");
    }
  }
}

function init() {
  currentDay.text("Today is: " + now.format("dddd MMM D, YYYY"));
  color(now);
}
saveBtn.on("click", function (event) {
  event.preventDefault();
});

init();
