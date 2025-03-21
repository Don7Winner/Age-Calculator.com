$(document).ready(() => {
  const year = $("#year");
  const month = $("#month");
  const days = $("#day");
  const button = $("form img");
  const form = $("form input");
  button.click(() => {
    // ERROR MESSAGE FOR YEAR
    if (year.val() == "" || year.val() == null) {
      year.css("border", "1px solid  hsl(0, 100%, 67%)");
      $("#yearErrorMsg").text("This feild is required");
      $("#labelyear").css("color", "hsl(0, 100%, 67%)");
      form.click("submit", (e) => {
        e.preventDefault();
      });
    } else if (year.val() > 2026) {
      year.css("border", "1px solid  hsl(0, 100%, 67%)");
      $("#yearErrorMsg").text("Must be in the past");
      $("#labelyear").css("color", "hsl(0, 100%, 67%)");
      form.click("submit", (e) => {
        e.preventDefault();
      });
    } else {
      $("#yearErrorMsg").text("");
      // THE CALCULATION FOR YEAR OF AGE
      let yearCalculation = 2025 - year.val();
      $("#yearOutput").text(yearCalculation);
      $("#labelyear").css("color", "hsl(0, 1%, 44%)");
    }

    // ERROR MESSAGE FOR MONTH
    if (month.val() == "" || month.val() == null) {
      month.css("border", "1px solid  hsl(0, 100%, 67%)");
      $("#monthErrorMsg").text("This feild is required");
      $("#labelmonth").css("color", "hsl(0, 100%, 67%)");
      form.click("submit", (e) => {
        e.preventDefault();
      });
    } else if (month.val() > 13) {
      month.css("border", "1px solid  hsl(0, 100%, 67%)");
      $("#monthErrorMsg").text("Must be a valid month");
      $("#labelmonth").css("color", "hsl(0, 100%, 67%)");
      form.click("submit", (e) => {
        e.preventDefault();
      });
    } else {
      $("#monthErrorMsg").text("");
      $("#labelmonth").css("color", "hsl(0, 1%, 44%)");
      // THE CALCULATION FOR MONTHS OF THE REMAINING YEAR
      let monthCalculation = 12 - month.val();
      $("#monthOutput").text(monthCalculation);
    }

    // ERROR MESSAGE days
    if (days.val() == "" || days.val() == null) {
      days.css("border", "1px solid  hsl(0, 100%, 67%)");
      $("#daysErrorMsg").text("This feild is required");
      $("#labelday").css("color", "hsl(0, 100%, 67%)");
      form.click("submit", (e) => {
        e.preventDefault();
      });
    } else if (days.val() > 32) {
      days.css("border", "1px solid  hsl(0, 100%, 67%)");
      $("#daysErrorMsg").text("Must be a valid day");
      $("#labelday").css("color", "hsl(0, 100%, 67%)");
      form.click("submit", (e) => {
        e.preventDefault();
      });
    } else {
      $("#daysErrorMsg").text("");
      $("#labelday").css("color", "hsl(0, 1%, 44%)");
      // THE CALCULATION FOR DAYS OF THE REMAINING MONTH
      if (
        month.val() == 1 ||
        month.val() == 3 ||
        month.val() == 5 ||
        month.val() == 7 ||
        month.val() == 8 ||
        month.val() == 12
      ) {
        let daysCalculation = 31 - days.val();
        $("#daysOutput").text(daysCalculation);
      } else if (
        month.val() == 10 ||
        month.val() == 9 ||
        month.val() == 4 ||
        month.val() == 6 ||
        month.val() == 11
      ) {
        let daysCalculation = 30 - days.val();
        $("#daysOutput").text(daysCalculation);
      } else {
        let daysCalculation = 29 - days.val();
        $("#daysOutput").text(daysCalculation);
      }
    }
  });
});
