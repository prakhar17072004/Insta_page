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
               <i onclick= add("${item.id}") id="${item.id}" class="far fa-heart"></i>
               <p class="click">Click On Favorite Post</p>
            </div>
         </div>
                     
      
                     
      `;
      
  });
document.querySelector(".contanior").innerHTML=itemsHMTL;

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

getItems();
