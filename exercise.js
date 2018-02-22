var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------
    var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        //if(hour<10){document.getElementById('block5_-1').innerHTML = 'time';
        //           document.getElementById('block6_-1').innerHTML = '';};

        //if((hour >10)&&(hour<20)){document.getElementById()};
        var hr1stDigit = (Math.floor(hour / 10)) % 10;
        var hr2ndDigit = hour % 10;
        var min1stDigit = (Math.floor(minutes / 10)) % 10;
        var min2ndDigit = minutes % 10;
        var sec1stDigit = (Math.floor(seconds / 10)) % 10;
        var sec2ndDigit = seconds % 10;
        console.log(hour)
        console.log(minutes)
        console.log(seconds)
        document.getElementById('box1_0').textContent = sec2ndDigit;
        document.getElementById('box2_0').textContent= sec1stDigit;
        document.getElementById('box3_0').textContent = min2ndDigit;
        document.getElementById('box4_0').textContent = min1stDigit;
        document.getElementById('box5_0').textContent = hr2ndDigit;
        document.getElementById('box6_0').textContent = hr1stDigit;

    
};

exercise.binary = function(time, col){

    
    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    // 
    //----------------------------------------------------------

};