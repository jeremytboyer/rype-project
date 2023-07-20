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


router.delete('/favorites/:id', async (req, res) => {
    try {

      const recipe = await Favorite.destroy({
        where: {
            recipeId: req.params.id,
        },
    });
      console.log('Recipe ID received:', recipe);
      if (!recipe) {
       
        return res.status(404).json({ message: 'Recipe not found' });
      }
  
  
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting favorite recipe:', error);
      res.status(500).json({ message: 'Error deleting favorite recipe' });
    }
  });




module.exports = router;
