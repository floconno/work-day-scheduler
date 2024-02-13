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
    $(".saveBtn").on("click", function () {
      console.log(this);

      var timeBlock = $(this).parent().attr('id');
      console.log(timeBlock);
      var userInput = $(this).siblings('.description').val();
      console.log(userInput);
      
      
      localStorage.setItem(timeBlock, userInput);

    });

    $(".time-block").each(function () {
      var hour = +this.id.split("-").pop();

      var currentHour = dayjs().hour();
        if (hour < currentHour) {
          $(this).addClass("past");
        } else if (hour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }

    });
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this
    $("#hour-9 .description").val(localStorage.getItem('hour-9'));
    $("#hour-10 .description").val(localStorage.getItem('hour-10'));
    $("#hour-11 .description").val(localStorage.getItem('hour-11'));
    $("#hour-12 .description").val(localStorage.getItem('hour-12'));
    $("#hour-13 .description").val(localStorage.getItem('hour-13'));
    $("#hour-14 .description").val(localStorage.getItem('hour-14'));
    $("#hour-15 .description").val(localStorage.getItem('hour-15'));
    $("#hour-16 .description").val(localStorage.getItem('hour-16'));
    $("#hour-17 .description").val(localStorage.getItem('hour-17'));
    

    //Displays the current date in the header of the page.
    var today = dayjs(); 
    var dayWeek = today.format('dddd, MMMM D[th]');
    $('#currentDay').text(dayWeek); 

  });
  

