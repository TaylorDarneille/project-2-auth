const db = require('./models')


db.product.bulkCreate([
    {
    "color": "black2",
    "category" :" glasses",
    "price": 25,
    "productNmae": "G28",
    "img" :"https://www.coolframes.com/get_image.php?fid=242188&color=036_54&alt=",
    "brandName": "joe Glasses"
},
     
{
    "category" :"glasses",
    "color": "black1",
    "price": 25,
    "productNmae": "G12",
    "img" :"https://img.ebdcdn.com/product/frame/gray/mt7117_0.jpg?im=Resize,width=600,height=300,aspect=fill;UnsharpMask,sigma=1.0,gain=1.0&q=85",
    "brandName": "artsy Glasses "
},

{
    "category" :"frames",
    "color": "black",
    "price": 25,
    "productNmae": "F14",
    "img" :"https://greateyeglasses.com/wp-content/uploads/2021/01/Rollins_NavyBlack-800x279.jpg",
    "brandName": "Rimless Frames"
},
     
{
    "category" :"frames",
    "color": "black-black",
    "price": 40,
    "productNmae": "F22",
    "img" :"https://ae01.alicdn.com/kf/HTB1FQx6jzqhSKJjSspnq6A79XXaY.jpg?size=79022&height=443&width=720&hash=83d7539fc802100db1c7907496b769aa",
    "brandName": "Full-rimmed Frames"
},
   
{
    "category":"chain",
    "color": "black",
    "price": 30,
    "img" :"https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_856/FSH-1637748654484-eyewearbmobilepackshot.jpg",
    "productNmae": "C42",
    "brandName": "in twisted"
},
     
{
    "category":"chain",
    "color": "Gold",
    "price": 40,
    "img" :"https://i.etsystatic.com/5131084/c/1410/1120/512/120/il/c6cc27/2206924033/il_500x500.2206924033_5233.jpg",
    "productNmae": "G27",
    "brandName": "Chain Gold"
}
   
]
).then(() => console.log('test'))