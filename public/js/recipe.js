const form = document.getElementById('form');
const submitButton = document.getElementById('addToFav');

submitButton.addEventListener('click', function(e) {
  e.preventDefault();
    form.submit();
});
