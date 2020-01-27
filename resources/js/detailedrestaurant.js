class DetailedRestaurant {

  async getDetail(id) {
    const response = await fetch(`http://localhost:3000/api/restaurant/${id}`);
    
    const restaurant = await response.json();

    return restaurant;
    
  }
}