import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">Your Liked Resto</h2>
        <div id="restos" class="restos">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });

    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('.content__heading').focus();
      }
    });
  },
};

export default Like;
