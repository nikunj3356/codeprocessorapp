const redis = require("redis");

const client = redis.createClient({
  password: "password",
  socket: {
    host: "redis-10078.c212.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 10078,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect().then(() => {
  console.log("Connected to Redis successfully");
});

module.exports = client;
