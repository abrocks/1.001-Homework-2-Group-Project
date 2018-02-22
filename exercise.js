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
    exercise.binary = function(time, col){
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        switch(hour)
        {case 0: 
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 1:
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break; 
        case 2: 
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break; 
        case 3: 
            document.getElementbyId('box5_1').
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 4: 
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break; 
        case 5: 
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break;     
        case 6: 
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break;   
        case 7: 
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 8: 
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "red";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 9: 
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "red";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 10: 
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "red";
            break;
        case 11: 
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 12: 
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 13: 
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 14:
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 15:
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 16:
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 17:
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "red";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 18:
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "red";
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 19:
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "red";  
            document.getElementbyId('box6_1').style.color = "red";
            document.getElementbyId('box6_2').style.color = "grey";
            break;
        case 20:
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "red";
            break;
        case 21:
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "grey";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "red";
            break;
        case 22:
            document.getElementbyId('box5_1').style.color = "grey";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "red";
            break;
        case 23:
            document.getElementbyId('box5_1').style.color = "red";
            document.getElementbyId('box5_2').style.color = "red";
            document.getElementbyId('box5_3').style.color = "grey";
            document.getElementbyId('box5_4').style.color = "grey";
            document.getElementbyId('box6_1').style.color = "grey";
            document.getElementbyId('box6_2').style.color = "red";
            break;    
        }
        switch(minutes){
            case 0:
         }
    
    };
};