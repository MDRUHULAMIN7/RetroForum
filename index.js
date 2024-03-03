const btnContainer =document.getElementById("card-container");
const latestContainer=document.getElementById("card-container-2")
const postFetchCategory=async()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const datas =data.posts;

    datas.forEach(card => {

        const div=document.createElement("div");
        div.classList="bg-[#F3F3F5] rounded-xl lg:px-8 lg:py-4  mt-8 w-full";
        div.innerHTML=`
        <div class="flex gap-4">
    <img class="w-16 h-16 rounded-xl" src="${card.image}" alt="">
    <div>
      <div class="flex gap-4">
        <p># <span id="card-category">${card.category}</span></p>
        <p>Author:<span id="card-author-name">${card.author.name}</span></p>
  
      </div>
   <div class=" w-4/6  lg:w-full">
    <h1 id="card-title" class="lg:text-2xl text-base text-black lg:font-semibold mt-1 w-4/6  lg:w-full">${card.title}</h1>
   </div>

   <p id="card-description" class="text-slate-400 lg:mb-4 w-4/6 lg:w-full">${card.description}</p>
   <hr  class=" w-4/6  lg:w-full" >
   <div class="flex justify-between mt-4">
    <div class=" flex gap-8 ">
   <p class="flex text-xl gap-2"><img class="lg:w-7 lg:h-7" src="pic/Vector (4).png" alt=""><span class="pl-2" id="card-comment-count">${card.comment_count}</span></p>
   <p class="flex text-xl gap-2"><img class="lg:w-7 lg:h-7"  src="pic/Vector (5).png" alt=""><span class="pl-2" id="card-view-count">${card.view_count}</span></p>
   <p class="flex text-xl gap-2"><img class="lg:w-7 lg:h-7"  src="pic/Vector (6).png" alt=""><span class="pl-2" id="card-posted-time">${card.posted_time}</span>min</p>
    </div>
    <div class="lg:pl-44 pl-4">
     <button onclick='btnClicked("${escape(card.title)}","${escape(card.view_count)}")' id="add-title-btn" ><img src="pic/email 1.png" alt=""></button>
    </div>
   </div>
    </div>
   
  </div>

`;

btnContainer.appendChild(div);


console.log(data);
      
    });
 
   
}


function btnClicked(title,view ){
  console.log("ruhul");
  const cardT = unescape(title);
  const cardV = unescape(view);
  const newDiv = document.getElementById("title-container");
  const dybamicTitle=document.createElement("div");
 

 const leftCount= document.getElementById("count-read").innerText;
  let pLeft =parseInt(leftCount);

  console.log(pLeft);
  
  console.log( typeof pLeft);
  const newCount = pLeft + 1;
  console.log(newCount);
  // leftCount.innerText=newCount;
  setText('count-read',newCount);
  
  dybamicTitle.innerHTML=`
  <div class="bg-white p-3 rounded-lg flex justify-between mx-4 mt-2">
        <div><h1 class="text-xl text-black font-bold">${cardT}</h1></div>
        <div class="flex gap-3"><img class="w-5 h-5" src="pic/Vector (5).png" alt=""> <p>${cardV}</p></div>
       </div>
  `;
  newDiv.appendChild(dybamicTitle);
 

} 



// all post section
const fetchLatestPost=async()=>{
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const datas = await res.json();
  datas.forEach(card2=>{
    console.log(card2);
const latestDiv = document.createElement("div");
latestDiv.innerHTML=`
<div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-2 py-2 "><img class= "rounded-xl" src="${card2.cover_image}" alt="Shoes" /></figure>
          <div class="flex gap-2 px-3 py-5"><img src="pic/Frame (1).png" alt=""> <p>29 january 2024</p></div>
          <div class="px-3 "><h1 class="text-xl font-semibold">title of the card</h1></div>
          <div class="px-3 py-2">
            
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
          <div class="flex px-3 gap-2 pb-5">
            <img class="w-12 rounded-full" src="${card2.profile_image}" alt="">
            <div>
            <p class="font-bold">Russel</p>
            <p class="">developer</p>
            </div>
          </div>
        </div>

`
latestContainer.appendChild(latestDiv);
  })
}

fetchLatestPost()
postFetchCategory()

function setText(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText=value;
}