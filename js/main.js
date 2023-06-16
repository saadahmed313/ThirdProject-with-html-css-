// *****************************countdown************************
let days  = document.querySelector(".days");
let hours  = document.querySelector(".hours");
let minutes  = document.querySelector(".minutes");
let seconds  = document.querySelector(".seconds");
let skill = document.querySelector(".skill");
let spans = document.querySelectorAll(".skill span");
let up = document.querySelector(".up");
let article = document.querySelector(".articles");
let state =document.querySelectorAll(".awesome");
let states =document.querySelector(".states");
let counter = setInterval(() => {
    let datenow = new Date();
    let date= new Date("Dec 31,2022 23:59:59");
    let difference=date-datenow;
    let day = Math.floor( difference/(1000*60*60*24));
    days.innerHTML =day;
   let hour =Math.floor( (difference%(1000*60*60*24)) /(1000*60*60));
   hours.innerHTML =`${hour<10? `0${hour}`:hour }`;
   let minute =Math.floor( (difference%(1000*60*60)) /(1000*60));
   minutes.innerHTML =`${minute<10? `0${minute}`:minute }`;
   let second =Math.floor( (difference%(1000*60)) /(1000));
   seconds.innerHTML =second<10? `0${second}`:`${second}` ;
}, 1000);
window.onscroll =function()
{
    if(window.scrollY >=(skill.offsetTop-400) && window.scrollY<=(skill.offsetTop+600) )
    {
   spans.forEach((el)=>
   {
   
el.style.width = `${el.dataset.progress}%`;
   }
   );
    }
    else
    {
        spans.forEach((el)=>
        {
        
     el.style.width = `0`;
        }
        );
    }
    if(window.scrollY >= states.offsetTop)
    {
        state.forEach((el)=>
        {
         let myinterval=   setInterval(()=>
            {
                
                if(Number(el.dataset.awesome) > Number(el.innerHTML))
             {
                el.innerHTML++;
             }
             else
             {
                clearInterval(myinterval);
             }
            },200);
    
         
         
        })
    }
if(window.scrollY >= articles.offsetTop)
{

    up.style.display="block";
}
else
{
    up.style.display="none";
}
}
up.addEventListener("click",(el)=>
{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
})