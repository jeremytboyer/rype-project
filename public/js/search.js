const searchInput = document.querySelector('#search-input')
const searchBtn = document.querySelector('#search-button')
const recipeOutput = document.querySelector('.recipes')


async function handleSearchClick() {
    const searchVal = searchInput.value
    const apiKey = 'bf17265d1aff42a7a5827171b8812ecd'
    const api = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchVal}&apiKey=${apiKey}`
    const response = await fetch(api)

    const data = await response.json()
    data.forEach(recipe => {
        recipeOutput.insertAdjacentHTML('beforeend', 
        `
        <div class="recipe-card flex flex-col justify-center align-center">
            <a href="/recipe/${recipe.id}">
                <img src="${recipe.image}" width="312" height="231" class="m-auto" alt="">
                <h3 class="text-center text-xl">${recipe.title}</h3>
            </a>
        </div>
        `)
    });
}

const menuButton = document.getElementById('user-menu-button');
  const userMenu = document.getElementById('user-menu');
 

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    userMenu.classList.remove('hidden');
  });

  // Close the dropdown menu when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInside = menuButton.contains(event.target) || userMenu.contains(event.target);
    if (!isClickInside) {
      menuButton.setAttribute('aria-expanded', 'false');
      userMenu.classList.add('hidden');
    }
  });

searchBtn.addEventListener('click', handleSearchClick)