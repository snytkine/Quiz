const express = require('express')
const mongoose = require('mongoose')
const Category = mongoose.model('categories')
const router = express.Router()


router.get('/', (req, res, next) => {
    Category.find((err, result) => {
        if (err) {
            res.json({ error: err })
        } else {
            res.json(result)
            next(err)
        }
    })
})

router.get('/:id', (req, res, next) => {
    Category.find({ slug: req.params.id }, (err, result) => {
        if (err) {
            res.json({ error: err })
        } else {
            if (result.length === 0) {
                res.status(404)
                return res.json({ error: "Category not found" })
            }
            res.json(result)
            next(err)
        }
    })
})



module.exports = router