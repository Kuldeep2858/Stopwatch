let startbutton=document.querySelector('#start');
let lapbutton=document.getElementById("lap");
let time1=document.getElementById('hour');
let time2=document.getElementById('minute');
let time3=document.getElementById('sec');
let time4=document.getElementById('msec');
let laplist=document.getElementById('laplist');
let resetdiv=document.getElementById('reset');
// let stopdiv=document.getElementsByClassName('circle3')[0];
// let stopbutton=document.getElementById('stop');
// let startpara=document.getElementById('start');

startbutton.addEventListener ("click",f1);
let flag=1;
let a;
let msec=0;
let sec=0;
let min=0;
let hr=0;
function f1(){
    if(flag==1)
    {
        resetdiv.style.display="block";
        resetdiv.style.marginLeft="95px";

        

        startbutton.innerHTML="Stop";
        startbutton.style.fontSize="25px";
        startbutton.style.color="white"
 
        flag=0;
        a=setInterval(time,10);
    }
    else
    {
        startbutton.innerHTML="Start";
        flag=1;
        clearInterval(a);
    }
    // startpara.innerHTML="Stop";


}
function time(){
        msec++;
        time4.innerHTML=msec%100;
        if(msec>=100)
        {
            sec++;
            msec=0;
            time3.innerHTML=sec%60;
        }
        if(sec>=60)
            {
                min++;
                sec=0;
                time2.innerHTML=min%60;
            }
        if(min>=60)
             {
                hr++;
                min=0;
                time1.innerHTML=hr;               }
}


function lap(){
    let div2=document.createElement('div');
    div2.setAttribute("id","div2");
    let all=time1.innerHTML+":"+time2.innerHTML+":"+time3.innerHTML+":"+time4.innerHTML;
    div2.innerHTML=all;

    laplist.appendChild(div2);
    laplist.style.display="block";
}
lapbutton.addEventListener("click",lap);

// startbutton.addEventListener ("click",f1);

function reset(){
    window.location.reload();
}
resetdiv.addEventListener("click",reset);