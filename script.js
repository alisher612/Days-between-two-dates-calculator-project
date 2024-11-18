let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click" , () => {
    let date1 = new Date(document.getElementById("date-1").value);
    let date2 = new Date(document.getElementById("date-2").value);

    // check if the inputs are valid
    // if valid then calculate the difference
    if(date1.getTime() && date2.getTime()){
        // calculate difference in time using getTime() function
        // getTime() calculate number of years since jan1 , 1970
        let timeDifference = date2.getTime() - date1.getTime();
        //since this value is in milliseconds we need to convert it in the days
        // we want the differences to be non-negative. hence we use Mathh.abs()
        let dayDifferences = Math.abs(timeDifference / (1000 * 3600 * 24));
        output.innerHTML = `Difference between the two dates is <span>${dayDifferences}</span> days.`;
    }
    // Else display that the input is valid
    else{
        output.innerHTML = "Please select a valid date";
    }
});