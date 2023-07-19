// Use the correct class selector for the delete buttons
const deleteButtons = document.querySelectorAll('.remove-button');
// console.log('button delete:', deleteButtons);
// Loop through each delete button and attach the event listener
deleteButtons.forEach(deleteButton => {
  deleteButton.addEventListener('click', async (event) => {
    event.preventDefault(); 
     if (event.target.classList.contains('remove-button')) {
        const recipeId = event.target.getAttribute('data-recipe-id');
        console.log('Recipe ID to delete:', recipeId);
 
    const response = await fetch(`/custom/${recipeId}`, {
      method: 'DELETE',
    });
    if (response.ok){
        document.location.replace('/custom')
    } else {
        alert('Failed to delete recipe');
    }
    }
  });
    
});

