//add ready for document to load AFTER HTML
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  //on click needs to set informaition to local storage - time and text so its not deleted
  $('.saveBtn').click(function () {
    // time variable - parent id the parent DIV and attr grabs the id (hour-<number>)
    // this applies to the click object
    let time = $(this).parent().attr('id');

    // text variable - sibling element to the button
    // .description is the class of text area
    // val method used to return the attribute value
    let text = $(this).siblings('.description').val();

    // returned values to be SET in local storage
    localStorage.setItem(time, text);
  });

  //Ccrate function to get the curretn time in hours
  function getTime() {
    //current time
    let presentTime = moment().hour();
    console.log(presentTime);

    //Must go through the scheduled times that are on the schedule
    // for each loop in JQuery
    $('.time-block').each(function () {
      // variable to get elements with the scheduled time and turn string into integer
      // this pertains to the object/element it is getting the attributes for
      let scheduledTime = parseInt($(this).attr('id').split('-')[1]);
      //check if pulling calendar times
      console.log(scheduledTime);
      //this referes to each element that is looped through
      //add class for past
      if (scheduledTime < presentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
        //add class for future
      } else if (scheduledTime > presentTime) {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
        //add class for present
      } else {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }
    });
  }

  //create GET to select the local storage inputs and place on the page
  // select the id of the time block and then the id of it
  // get the value from the local storage that has been set
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // call the function
  getTime();
  // var timer = setInterval(getTime, 15000);
});

// create variable for date using Moment API
var todayDate = moment().format('dddd, MMM Do');
$('#currentDay').html(todayDate);
