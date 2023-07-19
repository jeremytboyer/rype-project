const router = require('express').Router();
const Thought = require('../models/Thought');


function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;

  if (!isAuthenticated) return res.redirect('/login');

  next();
}

// Add a thought
router.post('/thought', isAuthenticated, async (req, res) => {
  await Thought.create({
    title: req.body.title,
    text: req.body.text,
    userId: req.session.user_id,
  });

  res.redirect('/dashboard');

});

router.delete('/dashboard/:id', async (req, res) => {
  try {
  //   const recipeId = req.params.id;
  //   console.log('Recipe ID received:', recipeId);

    const recipe = await Thought.destroy({
      where: {
          id: req.params.id,
          // user_id: req.session.user_id,
      },
  });
    console.log('Recipe ID received:', recipe);
    if (!recipe) {
     
      return res.status(404).json({ message: 'Recipe not found' });
    }

  //   await recipe.destroy();

    res.status(204).end();
  } catch (error) {
    console.error('Error deleting favorite recipe:', error);
    res.status(500).json({ message: 'Error deleting favorite recipe' });
  }
});


module.exports = router;
