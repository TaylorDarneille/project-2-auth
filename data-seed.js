const db = require('./models')

async function createEvent() {
    try {
        await db.event.findOrCreate({
            where: {
                event_type: "Bohmeia",
                event_description:"Bohemia is actually in town these days, and posted a video on his Instagram story with his crew in Bahrain. The video shows he’s gathered with his friends after more than 10 years!",
                event_date:22-22-2022,
                price:100,
                event_type: "hey",
                event_description:"Bohemia is actually in town these days, and posted a video on his Instagram story with his crew in Bahrain. The video shows he’s gathered with his friends after more than 10 years!",
                event_date:22-22-2022,
                price:100
            }
        })
        console.log("nigga"+event_type[2],event_description,event_date,price)
    } catch(err) {
        console.log(err)
    }
}
createEvent()


