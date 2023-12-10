const express = require('express');
const router = express.Router();
const Book = require("./BookModel");
const { body, validationResult } = require('express-validator');

//Router 1: fetch all books
router.get('/GET/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        // catch error
        res.status(500).send("Internal server error");
    }
});

//Router 2: add book
router.post(
    "/POST/api/books",
    [
        body("title", "Enter Title").trim().notEmpty(),
        body("author", "Enter Author").trim().notEmpty(),
        body("edition", "Enter edition of book").trim().notEmpty(),
        body("ISBN", "Enter edition of book").trim().notEmpty(),
    ],
    async (req, res) => {
        //checking if input are valid or not.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, author, edition, ISBN } = req.body;

        try {

            // checking if a book already exist
            const findBook = await Book.findOne({ ISBN });
            if (findBook) return res.status(400).send("book already exists");
            // Otherwise it will add the book
            const book = new Book({
                title,
                author,
                edition,
                ISBN,
            });
            const savedBook = await book.save();
            res.json({ savedBook });

        } catch (error) {
            res.status(500).send("errror occured");
        }
    }
);

// //Router 3: update book
router.put(
    "/PUT/api/books/:id",
    async (req, res) => {

        const { isAvialable } = req.body;

        try {
            //finding if book is present or not
            let book = await Book.findById(req.params.id);
            //updating book details
            if (book) {
                book.isAvialable = isAvialable;
                let updatedbook = await Book.findByIdAndUpdate(req.params.id, { $set: book }, { new: true });
                res.json({ updatedbook });
            }

        } catch (error) {
            res.status(400).send("Book not found");
        }
    }
);

module.exports = router;