// const reset = document.getElementById("Reset");
// const decrease = document.getElementById("Decrease");
// const increase = document.getElementById("Increase");
// const input = document.querySelector(".input-box");

// console.log(increase)

// // reset=0;
// increase=0;


// increase.addEventListener("click" ,()=>{
//     for(let i = 1 ; i<=10000; i++){
//         input.innerHTML=increase+i;

//     }

// });

// decrease=0;
// decrease.addEventListener("click" ,()=>{
//     for(let i = -1 ; i<=-10000; i++){
//         decrease= decrease+i;

//     }

// });

// reset.addEventListener("click" ,()=>{
//     reset=0;
// })

let count =0;
const value=document.querySelector("#value");
const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach(function (btn) {
    btn.addEventListener("click" ,function(e){
        const style = e.currentTarget.classList;

       if(style.contains("Decrease")){
        count--;
       }

       else if(style.contains("Increase")){
        count++;
       }
       else{
        count=0;
       }
       value.textContent= count;
    }); 
});
