function addItem( ){
  let image =document.getElementById("image").value;
  
  db.collection("insta").add({
    image: image,
  }) 
  document.getElementById("image").value  =''
}

//display image//
function getItems(){
  db.collection("insta").onSnapshot((snapshot)=>{
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
               <i onclick= add("${item.id}") id="like" class="far fa-heart"></i>
               <p class="click">Click On Favorite Post</p>
            </div>
         </div>
                     
      
                     
      `;
      
  });
document.querySelector(".contanior").innerHTML=itemsHMTL;

}

//id pass kiye h par first image par work kar raha h
function add(id){
  console.log(id);
  var like = document.querySelector("#like");

  console.log(like.classList.contains("far"));
  if(like.classList.contains("far")){
    like.classList.remove("far");
    like.classList.add("fas");
  }else{
    like.classList.remove("fas");
    like.classList.add("far");
  }
 
    
  
  
}

getItems();
