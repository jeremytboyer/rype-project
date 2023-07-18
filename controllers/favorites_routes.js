const Favorite = require('../models/Favorite')
const router = require('express').Router();

router.post('/favorites', async (req, res) => {
    console.log(req.session.user_id);
    await Favorite.create({
        title: req.body.title,
        image: req.body.image,
        recipeId: req.body.recipeId,
        userId: req.session.user_id
    })

    res.redirect('/favorites')
})

module.exports = router;
