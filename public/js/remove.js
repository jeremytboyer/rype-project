// Use the correct class selector for the delete buttons
const deleteButtons = document.querySelectorAll('.remove-button');

// Loop through each delete button and attach the event listener
deleteButtons.forEach(deleteButton => {
  deleteButton.addEventListener('click', async (event) => {
    event.preventDefault(); 
    const recipeCard = deleteButton.parentElement;
    const recipeId = recipeCard.querySelector('a').getAttribute('href').split('/recipe/')[1];

    const response = await fetch(`/favorites/${recipeId}`, {
      method: 'DELETE',
    });
    if (response.ok){
        document.location.replace('/favorites')
    } else {
        alert('Failed to delete favorite');
    }
  });
    
});

