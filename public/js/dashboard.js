const inputElement = document.getElementById("userImage");
const previewImage = document.getElementById("previewImage");

// check to see if there is already an image
const storedImageURL = localStorage.getItem("userImageURL");
if (storedImageURL) {
  previewImage.src = storedImageURL;
}

// Add an event listener to input listening for change
inputElement.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newImageURL = e.target.result;
      previewImage.src = newImageURL;
    //  save image to local storage
      localStorage.setItem("userImageURL", newImageURL);
    };
    reader.readAsDataURL(file);
  }
});