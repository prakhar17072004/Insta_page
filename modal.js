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
               <i onclick= "add()"  id="btn" class="far fa-heart"></i>
               <p class="click">Click On Favorite Post</p>
            </div>
         </div>
                     
      
                     
      `;
      
  });
document.querySelector(".contanior").innerHTML=itemsHMTL;




 
}


function add(btn){
  var btn = document.querySelector("#btn");

  console.log(btn.classList.contains("far"));
  if(btn.classList.contains("far")){
    btn.classList.remove("far");
    btn.classList.add("fas");
  }else{
    btn.classList.remove("fas");
    btn.classList.add("far");

  }
}


getItems();
