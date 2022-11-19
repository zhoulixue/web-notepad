const Rebridge = require("rebridge");
const redis = require("redis");

const client = redis.createClient();
const db = new Rebridge(client, {
    mode: "deasync"
});

db.users = [];
db.users.push({
    username: "johndoe",
    email: "johndoe@domain.com"
});
db.users.push({
    username: "foobar",
    email: "foobar@domain.com"
});
db.users.push({
    username: "CapacitorSet",
    email: "CapacitorSet@users.noreply.github.com"
});
console.log("Users:", db.users._value); // Prints the list of users
const [me] = db.users.filter(user => user.username === "CapacitorSet");
console.log("Me:", me); // Prints [{username: "CapacitorSet", email: "..."}]
client.quit();
