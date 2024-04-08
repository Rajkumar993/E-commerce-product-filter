data=[
  {
    id:1,
    name:"itel A70 (4GB RAM, 128GB ROM) Upto 12GB RAM with Memory Fusion | 13MP Dual Rear Camera & 8MP Front Camera",
    img:"https://m.media-amazon.com/images/I/71esUGR5C7L._SL1500_.jpg",
    amt:6799,
    category:"mobile"
  },  
  {
    id:2,
    name:"Oneplus Nord CE4 (Celadon Marble, 8GB RAM, 256GB Storage)",
    img:"https://m.media-amazon.com/images/I/61nxQ62qglL._SL1500_.jpg",
    amt:26999,
    category:"mobile"
  },

  {
    id:3,
    name:"Xiaomi 125 cm (50 inches) X 4K Dolby Vision Series Smart Google TV L50M8-A2IN (Black)",
    img:"https://m.media-amazon.com/images/I/71yUe9yiJBL._SL1500_.jpg",
    amt:32999,
    category:"tv"
  },
  {
    id:4,
    name:"Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
    img:"https://m.media-amazon.com/images/I/71hj88T5aBL._SL1500_.jpg",
    amt:17699,
    category:"mobile"
  },
  {
    id:5,
    name:"Samsung 108 cm (43 Inches) Crystal Vision 4K Ultra HD Smart LED TV UA43CUE70AKLXL (Titan Gray)",
    img:"https://m.media-amazon.com/images/I/71G3w6wIhZL._SL1500_.jpg",
    amt:31990,
    category:"tv"
  }, 
   {
    id:6,
    name:"Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)",
    img:"https://m.media-amazon.com/images/I/71RxCmvnrbL._SL1500_.jpg",
    amt:42490,
    category:"tv"
  },
  {
    id:7,
    name:"Noise ColorFit Pro 4 Alpha 1.74\" AMOLED Display, Bluetooth Calling Smart Watch",
    img:"https://m.media-amazon.com/images/I/61HSmreVWrL._SL1500_.jpg",
    amt:2499,
    category:"watch"
  },
  {
    id:8,
    name:"boAt Xtend Pro Smart Watch with Advanced Dedicated Bluetooth Calling Chip, Coins,Dial Pad, 1.78 AMOLED Display",
    img:"https://m.media-amazon.com/images/I/61WAR+iuFeL._SL1500_.jpg",
    amt:1899,
    category:"watch"
  },
  {
    id:9,
    name:"Fire-Boltt Ninja Call Pro Plus 1.83\" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
    img:"https://m.media-amazon.com/images/I/61WQsMHoQhL._SL1500_.jpg",
    amt:1099,
    category:"watch"
  },
  {
    id:10,
    name:"Fire-Boltt Ninja 3 Plus 1.83\" Display Smartwatch Full Touch with 100+ Sports Modes with IP68, Sp02 Tracking, Over 100 Cloud Based Watch Faces (Grey)",
    img:"https://m.media-amazon.com/images/I/61QMdK2FrXL._SL1500_.jpg",
    amt:999,
    category:"watch"
  },
  {
    id:11,
    name:" Kodak 80 cm (32 inches) 9XPRO Series HD Ready Certified Android LED TV 329X5051 (Black)",
    img:"https://m.media-amazon.com/images/I/61sDDAOUzSL._SL1500_.jpg",
    amt:7500,
    category:"tv"
  },
  {
    id:12,
    name:"iQOO 12 5G (Alpha, 16GB RAM, 512GB Storage) | India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera",
    img:"https://m.media-amazon.com/images/I/61JUyx1-SbL._SL1200_.jpg",
    amt:57999,
    category:"mobile"
  }
]
const products=document.querySelector('.products');
const catogorie=document.querySelector('.catogorie');

function displayProducts(productsList){
  if(productsList.length){
    const product=productsList.map((product)=>{
      return `<div class="product">
               <div class="imgs">
                 <img class="img" src=${product.img}>
               </div>
               <div class="productName">
                 <h3 class="name">${product.name}</h3>
               </div>
               <div class="product-price">
                 <p id="price">Rs.${product.amt}</p>
               </div>
             </div>`
           
     }).join('')
     products.innerHTML=product;
  }else
  products.innerHTML=`<h3>No Products Available</h3>`



}
function displayCatogory(){
  const cats=data.map(product=>product.category);
const cato=cats.filter((cat,index)=>cats.indexOf(cat)===index);
const res=["All",...cato];

catogorie.innerHTML=res.map(r=>{
  return `<li>${r}</li>`
}).join('')

catogorie.addEventListener('click',(e)=>{
  const value =e.target.textContent;

  value==="All"?displayProducts(data):displayProducts(data.filter((d)=>{return d.category==value}))
})

}

const search=document.getElementById('search');

function searchItems(){
search.addEventListener('keyup',(e)=>{
  const value=e.target.value;
  console.log(value.toLowerCase())
  displayProducts(data.filter(da=>{
    return da.name.toLowerCase().includes(value.trim().toLowerCase())
  }))
})

}
function priceRange(){
  const range=document.getElementById('change');
  const price=document.getElementById('price');

  const priceList=data.map(m=>m.amt)
 
  range.max=Math.max(...priceList);
  range.min=Math.min(...priceList);
range.addEventListener('input',(e)=>{
price.innerHTML=`Rs.${e.target.value}`
displayProducts(data.filter(da=>da.amt>=e.target.value))

 
})
}
displayProducts(data);
displayCatogory();
searchItems();
priceRange();


