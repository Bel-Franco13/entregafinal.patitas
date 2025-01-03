let shop = document.getElementById('shop');

let basket= JSON.parse(localStorage.getItem("data")) || []

let generateShop=()=>{
      (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,img,price}=x;
        let search = basket.find((x)=>x.id===id)||[]
        return `
        <div id=product-id-${x.id} class="item">
            <img width="223" src=${x.img} alt="">
            <div class="details">
              <h5>${x.name}</h5>
              <div class="price-quantity">
                <h2>$ ${x.price}</h2>
                <div class="buttons">
                  <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
                  <div id=${x.id} class="quantity">
                    ${search.item===undefined?0:search.item}
                  </div>
                  <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
                </div>
              </div>
            </div>
          </div>
          `
      }).join(""))
}

generateShop()

let increment = (id) => {
  let selectedItem=id
  let search= basket.find((x) => x.id === selectedItem.id)
  if (search===undefined){
    basket.push({
      id:selectedItem.id,
      item:1
    })
  } else {
    search.item+=1
  }
  update(selectedItem.id)
}
let decrement = (id) => {
  let selectedItem=id
  let search= basket.find((x) => x.id === selectedItem.id)
  if(search===undefined){
    return
  } else if (search.item===0){
    return
  }else {
    search.item-=1
    }
  update(selectedItem.id)
}
let update = (id) => {
  let search =  basket.find((x)=>x.id===id)
  document.getElementById(id).innerHTML=search.item
  if(search.item===0){
    const objWithIdIndex = basket.findIndex((obj) => obj.id === search.id);
    basket.splice(objWithIdIndex, 1);
  }
  calculation()
  localStorage.setItem("data",JSON.stringify(basket))
}   

let calculation=()=>{
  let cartIcon = document.getElementById("cartAmount")
  let totalItems=(basket.map((x)=>x.item)).reduce((x,y)=>x+y,0)
  cartIcon.innerHTML=totalItems
}

calculation()