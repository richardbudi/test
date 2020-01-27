class Restaurant {

  async getRestaurant(id) {
    const responseAll = await fetch('http://localhost:3000/api/list');
    
    const allRestaurants = await responseAll.json();

    return allRestaurants;
    
  }
}