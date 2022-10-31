const db = require('./models')

async function seedAccounts() {
    await db.accounts.bulkCreate([
        {
            money: 100,
            accountNumber: 10908365
        },
        {},
        {},
        {},
        {},
    ])
}

seedAccounts()