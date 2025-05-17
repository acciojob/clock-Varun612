//your JS code here. If required.
timerEl=document.getElementById("timer");
let currentDate=new Date();
setInterval( function(){
	currentDate=new Date();
	timerEl.innerHTML=currentDate.toLocaleString();
},1000)