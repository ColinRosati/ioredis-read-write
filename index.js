import Redis from "ioredis";

const redisDemo = async () => {
  const redisClient = new Redis(
    "11355",
    "redis-11355.c135.eu-central-1-1.ec2.cloud.redislabs.com",
    {
      username: "default",
      password: "2Pz2QCD3ihIjTeWs0tAqD6RSSpY8Ak4j",
    }
  );

  await redisClient.set("sanity", "test");

  const value = await redisClient.get("sanity");
  console.log(value);

  // Disconnect from Redis.
  redisClient.quit();
};

redisDemo();
