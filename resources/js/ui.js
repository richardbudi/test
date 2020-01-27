class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.current_id = '';
  }
// 
  showMore(id){
    console.log(id);
    this.current_id = id;
  }
  
  // Display profile in UI
  showRestaurants(restaurant) {
    // Interface fot the opening hours
    let output = '';
    
    restaurant.forEach(element => {
      let dollars = `<i class="fas fa-dollar-sign"></i>`.repeat(element.price_level);

      output += `
      <div >
        <div>
          <h2 class="bg-primary px-3">
            ${element.name}
          </h2>      
        </div>
        <div class="description p-1 bg-light">
            <div class="description-img px-1">              
              <img src="${element.photo}" alt="food">
            </div>
            <div class="description-detail">
              <h4>Price: ${dollars}</h4>
              <h4>Rating: ${element.rating}</h4>            
              <button onclick="${this.showMore(element.id)}" id="${element.id}" class="show-more btn btn-light">Show More</button>
            </div>
        </div>
      </div>   
      `
    });
    this.profile.innerHTML = output;

    let buttonDetail = document.getElementById(this.current_id);
    buttonDetail.onclick = function(){
      console.log(this.current_id)
    } 
  }


    // Display profile in UI
    showDetailRestaurant(detail) {
      let dollars = `<i class="fas fa-dollar-sign"></i>`.repeat(restaurant.price_level);
      let openingHours = restaurant.opening_hours;
      // Interface fot the opening hours
      let output = '' 
      openingHours.forEach(element => output += `<li> ${element}</li>`);
  
      this.profile.innerHTML = `
      <div id="detail-${restaurant.id}">
        <div>
          <h2 class="bg-primary px-3">
            ${restaurant.id}. ${restaurant.name}
          </h2>      
        </div>
        <div class="description p-1 bg-light">
            <div class="description-img px-1">              
              <img src="${restaurant.photo}" alt="food">
            </div>
            <div class="description-detail">
              <h4>Price: ${dollars}</h4>
              <h4>Rating: ${restaurant.rating}</h4>
              <h4>Phone Number: ${restaurant.phone_number}</h4>
              <h4 >Opening Hours: </h4>
              <ul class = "px-1">
                ${output}
              </ul>
              <a href="${restaurant.google_maps_url}" target="_blank" class="btn">Open Location</a>
              <a href="${restaurant.website}" target="_blank" class="btn">Website</a>
            </div>
        </div>
      </div>   
      `
    }
}