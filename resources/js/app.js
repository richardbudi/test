// Init All Restaurant
const restaurant = new Restaurant;
// Init UI
const ui = new UI;
// Init Detailed information for each restaurant
const detail = new DetailedRestaurant;
// Get Show More Button
let button = document.getElementsByClassName("show-more");

restaurant.getRestaurant()
  .then(data => {
    ui.showRestaurants(data);
  });


let id = button.id;

console.log(id);  
detail.getDetail(id).then(data => {
  console.log(id);
});




// // Search input event listener
// searchUser.addEventListener('keyup', (e) => {
//   // Get input text
//   const userText = e.target.value;

//   if(userText !== ''){
//    // Make http call
//    github.getUser(userText)
//     .then(data => {
//       if(data.profile.message === 'Not Found') {
//         // Show alert
//         ui.showAlert('User not found', 'alert alert-danger');
//       } else {
//         // Show profile
//         ui.showProfile(data.profile);
//         ui.showRepos(data.repos);
//       }
//     })
//   } else {
//     // Clear profile
//     ui.clearProfile();
//   }
// }); 