var express = require('express');
const connection= require('../db/sql');
var router = express.Router();
// var connection=require("../db/sql")
// console.log(connectio,888);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/api/index_list/0/data/1",(req,res)=>{
  res.send({
    code:0,
    data:{
      topBar:[
        {id:0,label:"推荐"},
        {id:1,label:"大红袍"},
        {id:2,label:"铁观音"},
        {id:3,label:"绿茶"},
        {id:4,label:"普洱"},
        {id:5,label:"茶具"},
        {id:6,label:"花茶"},
      ],
      data:[
        {
          id:0,
          type:"swiperList",
          data:[
            {id:0,imgUrl:"./images/swiper1.jpeg"},
            {id:1,imgUrl:"./images/swiper2.jpeg"},
            {id:2,imgUrl:"./images/swiper3.jpeg"}
          ]
        },
        {
          id:1,
          type:"iconsList",
          data:[
            {id:1,title:"自饮茶",imgUrl:"./images/icons1.png"},
            {id:2,title:"茶具",imgUrl:"./images/icons2.png"},
            {id:3,title:"茶礼盒",imgUrl:"./images/icons3.png"},
            {id:4,title:"领福利",imgUrl:"./images/icons4.png"},
            {id:5,title:"官方验证",imgUrl:"./images/icons5.png"}
          ]
        },
        {
          id:3,
          type:"recommendList",
          data:[
            {id:1,name:"龙井號铁罐250g",content:"鲜爽甘美，口味很好",price:68,imgUrl:"./images/recommend.jpeg"},
            {id:1,name:"龙井號铁罐250g",content:"鲜爽甘美，口味很好",price:68,imgUrl:"./images/recommend.jpeg"},
          ]
        },
        {
          id:4,
          type:"likeList",
          data:[
            {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
            {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
            {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
          ]
        }
      ]
    }
  })
})
router.get("/api/index_list/1/data/1",(req,res)=>{
  res.send({
    data:[
      {
        id:1,
        type:"adList",
        data:[
          {
            id:1,
            imgUrl:"./images/dhp.jpeg"
          },
          {
            id:2,
            imgUrl:"./images/dhp.jpeg"
          },
          {
            id:3,
            imgUrl:"./images/dhp.jpeg"
          },
        ]
      },
      {
        id:2,
        type:"likeList",
        data:[
          {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
        ]
      }
    ]
  })
})
router.get("/api/index_list/2/data/1",(req,res)=>{
  res.send({
    data:[
      {
        id:1,
        type:"adList",
        data:[
          {
            id:1,
            imgUrl:"./images/tgy.jpeg"
          },
          {
            id:2,
            imgUrl:"./images/tgy.jpeg"
          },
          {
            id:3,
            imgUrl:"./images/tgy.jpeg"
          }]
      },
      {
        id:2,
        type:"likeList",
        data:[
          {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
        ]
      }]
    
  
})
})






router.get("/api/index_list/3/data/1",(req,res)=>{
  res.send({


    data:[


      {
        id:1,
        type:"adList",
        data:[
          {
            id:1,
            imgUrl:"./images/lc.jpg"
          },
          {
            id:2,
            imgUrl:"./images/lc.jpg"
          },
          {
            id:3,
            imgUrl:"./images/lc.jpg"
          },
        ]
      },



      {
        id:2,
        type:"likeList",
        data:[
          {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
        ]
      }

    ]
  })
})

router.get("/api/index_list/4/data/1",(req,res)=>{
  res.send({


    data:[


      {
        id:1,
        type:"adList",
        data:[
          {
            id:1,
            imgUrl:"./images/pe.png"
          },
          {
            id:2,
            imgUrl:"./images/pe.png"
          },
          {
            id:3,
            imgUrl:"./images/pe.png"
          },
        ]
      },



      {
        id:2,
        type:"likeList",
        data:[
          {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
        ]
      }

    ]
  })
})





router.get("/api/index_list/3/data/1",(req,res)=>{
  res.send({


    data:[


      {
        id:1,
        type:"adList",
        data:[
          {
            id:1,
            imgUrl:"./images/lc.jpg"
          },
          {
            id:2,
            imgUrl:"./images/lc.jpg"
          },
          {
            id:3,
            imgUrl:"./images/lc.jpg"
          },
        ]
      },



      {
        id:2,
        type:"likeList",
        data:[
          {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
        ]
      }

    ]
  })
})

router.get("/api/index_list/6/data/1",(req,res)=>{
  res.send({


    data:[


      {
        id:1,
        type:"adList",
        data:[
          {
            id:1,
            imgUrl:"./images/jh.jpg"
          },
          {
            id:2,
            imgUrl:"./images/jh.jpg"
          },
          {
            id:3,
            imgUrl:"./images/jh.jpg"
          },
        ]
      },



      {
        id:2,
        type:"likeList",
        data:[
          {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
        ]
      }

    ]
  })
})

//搜索商品的接口
router.get("/api/goods/shopList",(req,res)=>{
  let name=req.query.searchName
  const commority_data="select * from goods_list where name like '%"+name+"%'"
  connection.query(commority_data,(err,result)=>{
      res.send({
        code:0,
        data:result
      })

  })


})

router.get("/api/index_list/5/data/1",(req,res)=>{
  res.send({


    data:[


      {
        id:1,
        type:"adList",
        data:[
          {
            id:1,
            imgUrl:"./images/jc.jpg"
          },
          {
            id:2,
            imgUrl:"./images/jc.jpg"
          },
          {
            id:3,
            imgUrl:"./images/jc.jpg"
          },
        ]
      },



      {
        id:2,
        type:"likeList",
        data:[
          {id:1,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:2,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999},
          {id:3,imgUrl:"./images/like.jpeg",name:"建盏茶具套装 红色芝麻毫 12件套",price:2999}
        ]
      }

    ]
  })
})







module.exports = router;
