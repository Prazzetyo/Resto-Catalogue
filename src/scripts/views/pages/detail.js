import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto" tabindex="0"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        rating: resto.rating,
      },
    });

    const btnSubmitReview = document.getElementById('submit-review');
    const notifReview = document.querySelector('.notifAddReview');

    btnSubmitReview.addEventListener('click', (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const reviewInput = document.getElementById('review');
      const review = {
        id: resto.id,
        name: nameInput.value,
        review: reviewInput.value,
      };
      if (nameInput.value === '') {
        notifReview.innerHTML = '';
        notifReview.innerHTML += `
            Failed To Add New Review
        `;
      } else {
        RestoSource.reviewResto(review);
        notifReview.innerHTML = '';
        notifReview.innerHTML += `
          Succesfully Add New Review
        `;
        nameInput.value = '';
        reviewInput.value = '';
      }
    });

    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('.detail-name').focus();
      }
    });
  },
};

export default Detail;
