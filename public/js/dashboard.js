

const previewImage = document.getElementById("previewImage");
const myWidget = cloudinary.createUploadWidget({
     cloudName: 'dqi6kwuaw', 
     uploadPreset: 'e1vsvhsf'}, (error, result) => { 
       if (!error && result && result.event === "success") { 
         console.log('Done! Here is the image info: ', result.info.url);
         sessionStorage.setItem('image_url', result.info.url); 
         fetch('/api/image', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_url: result.info.url
            })

         }).then(()=>{
            previewImage.setAttribute('src', result.info.url);
            profileIcon.setAttribute('src', result.info.url);
            
            alert('Image updated successfully!');
         })
       }
     }
   )
function handleImagePreview(event) {
  
    myWidget.open();
}

  
  // Add event listener to the file input to trigger the image preview
  const userImageInput = document.getElementById('userImage');
  userImageInput.addEventListener('click', handleImagePreview);

  // Function to update the image src
function updateImageSrcFromSessionStorage() {
  console.log('updateImageSrcFromSessionStorage() called');
  // Retrieve the image URL from sessionStorage
  const imageUrl = sessionStorage.getItem('image_url');

  if (imageUrl) {
    // If the image URL exists in sessionStorage, update the image src
    const previewImage = document.getElementById("previewImage");
    previewImage.setAttribute('src', imageUrl);
    const profileIcon = document.getElementById("profileIcon");
    profileIcon.setAttribute('src', imageUrl);

    
  }
}


// Call the function to update the image src when the page loads or when needed
document.addEventListener('DOMContentLoaded', updateImageSrcFromSessionStorage);

function handleLogout() {
  // Remove the image_url session key from sessionStorage
  sessionStorage.removeItem('image_url');

  // Perform any other logout-related tasks if needed
  // ...

  // Redirect the user to the logout page or any other desired page
  window.location.href = '/logout'; // Change '/logout' to the appropriate logout URL
}

// Add event listener to the logout button or link
const logoutButton = document.getElementById('logoutButton'); // Replace 'logoutButton' with the actual ID of your logout button or link
logoutButton.addEventListener('click', handleLogout);


