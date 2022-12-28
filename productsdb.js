const db = require('./models')


db.products.bulkCreate([
    {
    "color": "black2",
    "category" :"tshirt",
    "price": 15,
    "productNmae": "D28",
    "img"  :"https://cdn.shopify.com/s/files/1/0593/7863/0818/products/product-image-1633242427_1200x1200.jpg?v=1657878129",
    "brandName": " DEMON SLAYER TANJIRO T-shirt"
},
     
{
    "category" :"tshirt",
    "color": "white",
    "price": 12,
    "productNmae": "G12",
    "img" :"https://img.joomcdn.net/ce508036a2c74dc2cf4b8c59518b4663856dcec2_original.jpeg",
    "brandName": "T-shirt Dororo"
},

{
    "category" :"cap Hunter",
    "color": "black",
    "price": 9,
    "productNmae": "H14",
    "img" :"https://static.caphunters.com/29931-large_default/gorra-curva-negra-y-azul-ajustable-killua-zoldyck-tag-kir1-hunter-x-hunter-de-capslab.jpg",
    "brandName": "hunter x hunter cap"
},
     
{
    "category" :"cap Attack",
    "color": "white",
    "price": 10,
    "productNmae": "F22",
    "img" :"https://ih1.redbubble.net/image.2569525707.6082/ssrco,dad_hat,product,FFFDF5:8c3db69414,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg",
    "brandName": "attack titan cap"
},
   
{
    "category":"hoodie-kimetsu",
    "color": "white",
    "price": 30,
    "img" :"https://litb-cgis.rightinthebox.com/images/640x640/202108/bps/product/inc/phivqi1629362647878.jpg",
    "productNmae": "k42",
    "brandName": "hoodie kimetsu no yaiba"
},
     
{
    "category":"J-K hoodie",
    "color": "white",
    "price": 20,
    "img" :"https://cdn.shopify.com/s/files/1/0602/0605/5651/products/product-image-1883327556_1200x.jpg?v=1642448912",
    "productNmae": "J27",
    "brandName": "Jujutsu Kaisen hoodie"
}
   
]
).then(() => console.log('test')) 

const Sequelize = require('sequelize')