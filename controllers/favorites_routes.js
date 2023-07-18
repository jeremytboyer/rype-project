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

router.delete('/favorites:id', async (req, res) => {
 try{   
    const deleteResult = await Favorite.destroy({
        where: {
        title: req.body.title,
        image: req.body.image,
        recipeId: req.body.recipeId,
        userId: req.session.user_id
        },
    });

    res.redirect('/favorites');
} catch (error) {
    console.error(' Error deleting favorite recipe:', error);
    
}
});

module.exports = router;
