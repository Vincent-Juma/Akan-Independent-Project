var year = "CC"+"YY"
var month = "MM"
var day = "DD"
var CC = 19

var dayOfTheWeek = "( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7";

if (month < 13) {
    dayOfTheWeek = "( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7";
  } else if (day < 32) {
    dayOfTheWeek = "( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7";
  } 
  if (year < 0) {
    dayOfTheWeek = "( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7";
  }
  else {
    dayOfTheWeek = "Invalid Character";
  }


var Male = ("Sunday: Kwasi", "Monday: Kwadwo", "Tuesday: Kwabena", "Wednesday: Kwaku", 
            "Thursday:  Yaw", "Friday: Kofi", "Saturday: Kwame");
var Female = ("Sunday: Akosua", "Monday: Adwoa", "Tuesday: Abenaa",
"Wednesday: Akua", "Thursday:  Yaa", "Friday: Afua", "Saturday: Ama");










