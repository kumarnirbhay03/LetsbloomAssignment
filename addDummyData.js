// Adding dummy data
const Book = require("./BookModel");
const dummyData = require("./dummyData");

const addDummy = async () => {

    const existingData = await Book.find();

    if (existingData.length === 0) {
        await Book.insertMany(dummyData);
        console.log("database is seeded");
    } else {
        console.log("Database have some data");
    }
};

module.exports = addDummy;