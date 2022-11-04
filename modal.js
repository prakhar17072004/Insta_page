function addItem( ){
  let image =document.getElementById("image").value;
  
  db.collection("instaa").add({
    image: image,
    status:"unlike",
    
  }) 
  document.getElementById("image").value  =''
}

//display image//
function getItems(){
  db.collection("instaa").onSnapshot((snapshot)=>{
      let items=[];

      console.log(snapshot.docs[0].data())


      snapshot.docs.forEach((doc)=>(
          items.push({
              id:doc.id,
              ...doc.data()
          })
      ))

      displayItems(items);
  })
}
function displayItems(items){
  let itemsHMTL="";
  items.forEach((item,index)=>{

      itemsHMTL+= ` 
      <div class="card">
            <div class="post-img">
                <img src="${item.image}" >
            </div>
            <div class="bottom">
               <i onclick= add("${item.id}")  id="${item.id}" data-id="${item.id}" class="far fa-heart ${item.status=="like"?"fas":""}"></i>
               <p class="click">Click On Favorite Post</p>
            </div>
         </div>
                     
      
                     
      `;
      
  });
document.querySelector(".contanior").innerHTML=itemsHMTL;
createEventListeners();
}
function createEventListeners(){
  let likeButton = document.querySelectorAll(".bottom .fa-heart");
  console.log(likeButton);
  likeButton.forEach((like)=>{
  like.addEventListener("click",function(){
      markCompleted(like.dataset.id);
   })
  })
}
function add(id){

  if(document.getElementById(id).classList.contains("far")){
    document.getElementById(id).classList.remove("far");
    document.getElementById(id).classList.add("fas");
  } 
  else{
    document.getElementById(id).classList.remove("fas");
    document.getElementById(id).classList.add("far");
  }
 }
 
 function markCompleted(id){
  //from a database
 let item = db.collection("instaa").doc(id);
 item.get().then(function(doc){
    
  if(doc.exists){
    console.log("heare is data:",doc.data())
      let status=doc.data().status;
      if(status=="unlike"){
          item.update({
              status:"like"
          })
      }else if(status=="like"){
          item.update({
              status:"unlike"
          })
      }
  }
 })

 
}
 
  

 


 

getItems();
