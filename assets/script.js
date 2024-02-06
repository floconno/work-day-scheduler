// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(".sveBtn").on("click", function () {
      console.log(this);
    });

    $(".time-block").each(function () {
      var hour = +this.id.split("-").pop();
      $(this).children
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
      var currentHour = dayjs().hour();
        if (hour < currentHour) {
          $(this).addClass("past");
        } else if (hour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
    });
    // TODO: Add code to display the current date in the header of the page.
    var today = dayjs(); 
    var dayWeek = today.format('dddd, MMMM DD[th]');
    $('#currentDay').text(dayWeek); 

  });
  

