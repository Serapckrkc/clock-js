
function GetTime(){
    var now = new Date();
    var hour= now.getHours();
    var minute=now.getMinutes();
    var second= now.getSeconds();

    var day=now.getDate();
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


   (hour<10) ? document.getElementById("hour").innerHTML="0"+hour : 
               document.getElementById("hour").innerHTML=hour;

   (minute<10) ? document.getElementById("minute").innerHTML="0"+minute :
                 document.getElementById("minute").innerHTML=minute;
   (second<10) ? document.getElementById("second").innerHTML="0"+second :
                 document.getElementById("second").innerHTML=second;
                 
                 document.getElementById("day").innerHTML = gunler[d.getDay()];
document.getElementById("date").innerHTML= day;
}

setInterval(function(){GetTime();},1000);
