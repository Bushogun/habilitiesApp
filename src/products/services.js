const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');

const COLLECTION = 'products';


const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}
  
const getById = async (id) => {
    console.log('id', id);
    if (!ObjectId.isValid(id)) {
        throw new Error('Invalid ObjectId'); 
      }
    const collection = await Database(COLLECTION);
    return await collection.findOne({ _id: new ObjectId(id) }); //find one es de MONGODB
}

const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

module.exports.ProductsService = {
    getAll,
    getById,
    create
}