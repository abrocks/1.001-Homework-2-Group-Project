var exercise = {};


exercise.roman = function(time){
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        if(hour<10){document.getElementById('block5_-1').innerHTML = 'time';
                    document.getElementById('block6_-1').innerHTML = '';};

        if((hour >10)&&(hour<20)){document.getElementById()};

        switch(hour){
        case 0:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = '';
            break;
        case 1:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 2:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'II';
            break;
        case 3:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'III';
            break;
        case 4: 
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'IV';
            break;
        case 5: 
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'V';
            break;
        case 6: 
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'VI';
            break;
        case 7:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'VII';
            break;
        case 8:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'VIII';
            break;
        case 9:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'IX';
            break;
        case 10:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 11:
            document.getElementById('box6_0').innerText() = 'I';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 12:
            document.getElementById('box6_0').innerText() = 'II';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 13:
            document.getElementById('box6_0').innerText() = 'III';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 14:
            document.getElementById('box6_0').innerText() = 'IV';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 15:
            document.getElementById('box6_0').innerText() = 'V';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 16:
            document.getElementById('box6_0').innerText() = 'VI';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 17:
            document.getElementById('box6_0').innerText() = 'VII';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 18:
            document.getElementById('box6_0').innerText() = 'VII';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 19:
            document.getElementById('box6_0').innerText() = 'IX';
            document.getElementById('box5_0').innerText() = 'I';
            break;
        case 20:
            document.getElementById('box6_0').innerText() = '';
            document.getElementById('box5_0').innerText() = 'II';
            break;
        case 21:
            document.getElementById('box6_0').innerText() = 'I';
            document.getElementById('box5_0').innerText() = 'II';
            console.log('confirm'); 
            break;
        case 22:
            document.getElementById('box6_0').innerText() = 'II';
            document.getElementById('box5_0').innerText() = 'II';
            break;
         case 23:
            document.getElementById('box6_0').innerText() = 'III';
            document.getElementById('box5_0').innerText() = 'II';
            break;
        };
        //switch(minutes){}
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

};

//commas and whatnot below slightly fucked up 
//missed the col thing 
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
        document.getElementbyId('box5_1').style.color = "red";
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


    }

};