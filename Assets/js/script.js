// function compares the current time using dayjs to the ID of the entire time block div to determine whether the time block is in the past, present or future.

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

// event listener for each save button and saves the description and time of block into local storage with the time as the key and the description as the value

$(".saveBtn").on("click", function () {
  let description = $(this).siblings(".description").val();
  let timeOfDay = $(this).parent().attr("id");

  localStorage.setItem(timeOfDay, description);
});

// adds a display for the current date and time in the header

$("#currentDay")
  .append("<h2></h2>")
  .text(dayjs().format("dddd, D MMM. h:mm A"));

// iterates through each description box of each time block and adds in the value of the corresponding object from local storage where the key equals the time

function renderText() {
  $(".time-block").each(function () {
    $(this)
      .children(".description")
      .val(localStorage.getItem($(this).attr("id")));
  });
}

// runs functions on load

timeCompare();
renderText();
