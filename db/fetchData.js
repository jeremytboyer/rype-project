const User = require('../models/User'); // Adjust the path as needed

// Function to fetch profile image URL by username
async function getProfileImageUrlByUsername(username) {
  try {
    const user = await User.findOne({
      where: { email: username },
      attributes: ['profileImageUrl'], // Limit the returned attributes to profileImageUrl only
    });

    if (user) {
      return user.profileImageUrl;
    } else {
      return null; // User not found
    }
  } catch (error) {
    console.error('Error fetching profile image URL:', error);
    throw error;
  }
}

module.exports = getProfileImageUrlByUsername;