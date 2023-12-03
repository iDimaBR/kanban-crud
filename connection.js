const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "kanban-crud";

async function connection() {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(dbName);

      const categoriesCollection = await db.createCollection('categories');
      await categoriesCollection.createIndex({name: 1},{unique:true});
      await db.createCollection('tasks');
      
      return db;
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
}

module.exports = connection;