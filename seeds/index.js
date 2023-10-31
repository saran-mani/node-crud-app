const mongoose = require("mongoose");
const Book = require("../models/book");
const dataToSeed = require("./books.js");

mongoose.connect("mongodb://127.0.0.1:27017/Books");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  const collection = db.collection("books");

  // Insert the data into the collection
  const result = await collection.insertMany(dataToSeed);
};

seedDB().then(() => {
  mongoose.connection.close();
});

// async function seedDatabase() {
//   const uri = "mongodb://localhost:27017/your_database_name";
//   const client = new MongoClient(uri, { useUnifiedTopology: true });

//   try {
//     await client.connect();
//     const db = client.db();

//     // Specify the target collection
//     const collection = db.collection("your_collection_name");

//     // Insert the data into the collection
//     const result = await collection.insertMany(dataToSeed);

//     console.log(`Seeded ${result.insertedCount} documents.`);
//   } catch (error) {
//     console.error("Error seeding data:", error);
//   } finally {
//     client.close();
//   }
// }

// seedDatabase();
