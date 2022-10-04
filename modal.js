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
                <img src=" images/heart.png" class="like">
               <p class="click">Click On Favorite Post</p>
            </div>
         </div>
                     
      
                     
      `;
      
  });
document.querySelector(".contanior").innerHTML=itemsHMTL;
  
}

 


 
getItems();
