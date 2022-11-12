const db = require('./models')

async function createEvent() {
    try {
        await db.event.bulkCreate(
            [{
                name:"Ali",
                event_type: "Bohmeia",
                event_description:"Bohemia is actually in town these days, and posted a video on his Instagram story with his crew in Bahrain. The video shows he’s gathered with his friends after more than 10 years!",
                event_date:22-22-2022,
                price:100 },
                {
                name:"Ahmed",
                event_type: "hey",
                event_description:"Bohemia is actually in town these days, and posted a video on his Instagram story with his crew in Bahrain. The video shows he’s gathered with his friends after more than 10 years!",
                event_date:22-22-2022,
                price:100 },
                {

                name:"Salman",
                event_type: "HALLOWEEN PARTY",
                event_description:"Halloween is celebrated each year the night before All Saints on October 31st.The ancient Celtic festival of Samhain build the foundation of Halloween when people wear costumes to scare off ghosts and would light bonfires.",
                event_date: 28-10-2022,
                price:20
            }]
        )
        // console.log("nigga"+event_type[2],event_description,event_date,price)
    } catch(err) {
        console.log(err)
    }
}
createEvent()




