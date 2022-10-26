const db = require('./models')

db.product.bulkCreate(
    [
        {description: 'A dark and moody bouquet juxtaposed with some light hues. This bouquet will feature a varied mix of flowers and fillers that will differ from the image, based on what is best that day!',
        price: 25,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/image_d38aaa81-02ec-4930-8440-cbaab4ca2ba6_672x672.jpg?v=1632134319'
    },
        {description: 'A cheerful and zesty mix of happy blooms selected by our florists! Our florist mix bouquets showcase the best blooms of the day and will not match the image..',
        price: 30,
        photo:'https://cdn.shopify.com/s/files/1/1356/3981/products/IMG_1828_672x672.jpg?v=1615292808'    
    },
        {description: 'A collection of spray roses with seasonal fillers and foliage! This bouquet is delivered hand-tied in water in a bag bouquet. Timeless mini roses are our fav!',
        price: 15,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/image_aaab29db-0841-4d26-80cb-35cc21a4d18a_672x896.jpg?v=1641309190'
    },
        {description: 'This arrangement is fully dried … meaning it is everlasting! This arrangement is created with dried lavender, in a straw basket.',
        price: 25,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/image_9157b52e-c179-4aa7-abdc-cc071e495c8f_672x896.jpg?v=1661756250'
    },
        {description: 'Strelitzia plants are tropical green plants with minimal green leaves. Once this plants finds a home it is comfortable in',
        price: 18,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/image_e290d71c-9b0d-446c-b9b0-b0f4b02aa1d8_672x672.jpg?v=1643613888'
    },
        {description: 'An opaque vase of blue aster, daisies and craspedia blooms. This bouquet is delivered hand-tied in water in a vase and is approx 45 cm tall x 30 cm wide.',
        price: 20,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/image_e237d7ab-7907-4b41-9b77-330c7ec6a12a_672x672.jpg?v=1646560979'
    },
        {description: 'A wildflower collection featuring a range of delicate seasonal fillers in shades of white, blue and purple. The featured fillers are subject to variation as they are seasonal and vary weekly.',
        price: 31,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/IMG_6510_672x672.jpg?v=1622452079'
    },
        {description: 'A stunning and large statuesque plant. The sansevieria cylindrica plant is one of our favs for several reasons: Itis s the easiest to care for, an excellent air purifier according to NASA and survives in a low light environment. ',
        price: 29,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/image_a134aab3-9999-4c03-a258-503ae43bc21e_672x672.jpg?v=1627554241'
    }, 
        {description: 'This handsome Neprolepis fern comes as pictured in a lIgor ceramic pot without a drainage hole. The plant has not been potted directly. ',
        price: 17,
        photo: 'https://cdn.shopify.com/s/files/1/1356/3981/products/image_2ccaac8d-cfc5-4a4b-959e-86b4b3547359_672x896.jpg?v=1663831488'
    }
]
 ).then(() => console.log('user data created!'))