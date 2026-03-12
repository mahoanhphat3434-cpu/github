function createMeteor(){

const meteor = document.createElement("div");
meteor.classList.add("meteor");

/* vị trí */

meteor.style.top = Math.random()*window.innerHeight*0.4 + "px";

/* độ dài */

meteor.style.height = (150 + Math.random()*120) + "px";

/* tốc độ */

meteor.style.animationDuration = (1 + Math.random()*1.5) + "s";

document.querySelector(".meteor-container").appendChild(meteor);

setTimeout(()=>{
meteor.remove();
},3000);

}

/* nhiều sao băng */

setInterval(()=>{
createMeteor();
},800);
const container = document.querySelector(".stars");

for(let i=0;i<100;i++){

const star = document.createElement("div");
star.className = "star";

star.style.top = Math.random()*window.innerHeight + "px";
star.style.left = Math.random()*window.innerWidth + "px";

star.style.animationDuration = (1+Math.random()*2)+"s";

container.appendChild(star);

}
document.addEventListener("DOMContentLoaded", function(){

const container = document.querySelector(".stars");

/* tạo 300 sao */

for(let i=0;i<50
 ;i++){

const star = document.createElement("div");
star.className="star";

/* vị trí ngẫu nhiên */

star.style.top=Math.random()*window.innerHeight+"px";
star.style.left=Math.random()*window.innerWidth+"px";

/* tốc độ nhấp nháy khác nhau */

star.style.animationDuration=(1+Math.random()*3)+"s";

/* kích thước khác nhau */

let size=Math.random()*3+1;
star.style.width=size+"px";
star.style.height=size+"px";

container.appendChild(star);

}

});