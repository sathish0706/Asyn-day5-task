async function bible () {

    let res= await fetch("https://62b184d2c7e53744afbae3ce.mockapi.io/Animal")
    let res1= await res.json();
    for(let i=0; i<res1.length; i++){
        console.log(res1[i]);
        var div=document.createElement("div");
        div.setAttribute("id","div");
        div.innerHTML=`
        <div class="card-container">
        <div class="card-body">
        <img src="${res1[i].image_link}" class="card-img-top" alt="${res1[i].name}"><br>
          <h3>name:${res1[i].name}</h3>
          <h6>weight:${res1[i].weight_max}</h6>length
          <h6>length:${res1[i].length}</h6>
          <h6>diet:${res1[i].diet}</h6>


      </div>
      </div>`
        document.body.append(div)
    }
}
bible()