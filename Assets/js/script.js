// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

const saveButtonHandler = function () {
  let description = $(".saveBtn").siblings(".description").val();
  let timeOfDay = $(".time-block").attr("id");
  console.log(description);
  localStorage.setItem(timeOfDay, description);
};

let timeCompare = function () {
  let currentTime = dayjs().hour();

  $(".time-block").each(function () {
    let divHour = +$(this).attr("id");

    if (divHour < currentTime) {
      $(this).removeClass("future", "present");
      $(this).addClass("past");
    }

    if (divHour === currentTime) {
      $(this).removeClass("future", "past");
      $(this).addClass("present");
    }

    if (divHour > currentTime) {
      $(this).removeClass("past", "present");
      $(this).addClass("future");
    }
  });
};

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

$(".btn").on("click", saveButtonHandler);

// TODO: Add code to display the current date in the header of the page.

$("#currentDay")
  .append("<h2></h2>")
  .text(dayjs().format("dddd, D MMM. h:mm A"));

timeCompare();

// function renderText() {
//   $(".time-block").each(function () {
//     for (const taskText of $(".time-block textarea")) {
//       taskText.text(localStorage.getItem(description));
//     }
//   });
// }

// renderText();
