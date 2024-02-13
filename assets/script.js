// ensures that the code isn't run until the browser has finished rendering all the elements in the html
$(function () {
    // On "click" of the save button, the users input into the time-block text area with a class of description is saved to the local storage
    $(".saveBtn").on("click", function () {
      console.log(this);
      // targets the save button's parent (the div with class .time-block)
      var timeBlock = $(this).parent().attr('id');
      console.log(timeBlock);
      // targets the save button's sibling (the text area with class .description)
      var userInput = $(this).siblings('.description').val();
      console.log(userInput);
      
      // sets the users input to the text area in the time block to the local storage
      localStorage.setItem(timeBlock, userInput);

    });

    // getting the hour from each time block 
    $(".time-block").each(function () {
      var hour = +this.id.split("-").pop();
      // comparing the hour to the current hour of the day to determine if it is in the past, the current hour, of if it is in the future
      var currentHour = dayjs().hour();
        if (hour < currentHour) {
          $(this).addClass("past");
        } else if (hour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }

    });
    // targets the id of each time-block based on the hour as well as the hours text area entry with the class .description and gets the value of the text area entry for each hour from local storage
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
  

