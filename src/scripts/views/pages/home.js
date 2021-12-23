import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="heroku_image">
        <img src="images/heros/hero-image_2.jpg" alt="Gambar hero" srcset="">  
        <div class="text_image">Find Your Restaurant</div>
      </div>
      <div class="content">
        <h2 class="content__heading" id="content_heading" tabindex="0">Resto List</h2>
        <form class="example">
          <input type="text" placeholder="Search.." id="elmSearchRestaurant">
          <button type="submit" id="submitSearch"><i class="fa fa-search"></i></button>
        </form>
        <div class="loader"></div>
        <div class="notifIfEmpty"> </div>
        <div id="restos" class="restos">

        </div>
      </div>
      `;
  },

  async afterRender() {
    const loader = document.querySelector('.loader');
    const restos = await RestoSource.RestoList();
    const restosContainer = document.querySelector('#restos');
    restos.innerHTML = '';
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });

    restosContainer.style.display = 'none';
    loader.innerHTML = `
        <div class="loader"></div>
    `;
    
    try {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
      loader.style.display = 'none';
      restosContainer.style.display = 'inline-grid';
    } catch (err) {
      restosContainer.style.display = 'inline-grid';
      loader.style.display = 'none';
      restosContainer.innerHTML = `
      <h1> Failed to Request DATA  </h1> 
      `;
    }

    try {
      const buttonSearchClick = document.querySelector('#submitSearch');
      buttonSearchClick.addEventListener('click', async (event) => {
        event.preventDefault();
        const getValueSearch = document.getElementById('elmSearchRestaurant').value;
        const notifIfEmpty = document.querySelector('.notifIfEmpty');
        const searchRestaurants = await RestoSource.searchResto(getValueSearch);
        if (searchRestaurants.founded === 0) {
          notifIfEmpty.innerHTML = '';
          notifIfEmpty.innerHTML = '<div> Data Not Found !</div> ';
          restosContainer.innerHTML = '';
        } else if (getValueSearch === '') {
          notifIfEmpty.innerHTML = '';
          restosContainer.innerHTML = '';
          restos.forEach((resto) => {
            restosContainer.innerHTML += createRestoItemTemplate(resto);
          });
          loader.style.display = 'none';
          restosContainer.style.display = 'inline-grid';
        } else {
          restosContainer.innerHTML = '';
          notifIfEmpty.innerHTML = '';
          searchRestaurants.restaurants.forEach((search) => {
            restosContainer.innerHTML += createRestoItemTemplate(search);
          });
          loader.style.display = 'none';
          restosContainer.style.display = 'inline-grid';
        }
      });
    } catch (err) {
      restosContainer.style.display = 'block';
      loader.style.display = 'none';
      restosContainer.innerHTML = `
      <h1> Failed to Request Data  </h1> 
      `;
    }

    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('#content_heading').focus();
      }
    });
  },
};

export default Home;
