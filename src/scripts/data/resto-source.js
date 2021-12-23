import API_ENDPOINT from '../globals/api-endpoint';

class RestoSource {
  static async RestoList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async RestoListUpcoming() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async reviewResto(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }

  static async searchResto(search) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(search));
      return response.json();
    } catch (err) {
      return {};
    }
  }
}

export default RestoSource;
