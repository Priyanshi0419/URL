import {MongoClient} from "mongodb";
import {env} from "./env.js";

console.log("MongoDB URI:", env.MONGODB_URI); // Debugging step
export const dbClient=new MongoClient(env.MONGODB_URI);
