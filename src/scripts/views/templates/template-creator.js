import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
    <div class="menu_row">
      <div class="menu_column">
        <div class="img-container">
          <img class="detail-img" alt="${resto.name}" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"/>
        </div>
      </div>

      <div class="menu_column">
        <ul class="detail-info" style="list-style-type:none;">
          <li>
            <p class="detail-name" tabindex="0">${resto.name}</p>
          </li>
          <li>
            <i class="fa fa-map-marker fa-lg" style="color: red;"></i>
            <p class="detail-name-address-rating">${resto.address}</p>
          </li>

          <li>
            <i class="fa fa-industry fa-lg" style="color:black;"></i>
            <p class="detail-name-address-rating">${resto.city}</p>
          </li>

          <li>
            <i class="fa fa-star fa-lg" style="color: #FFCE45;"></i>
            <p class="detail-name-address-rating">${resto.rating}</p>
          </li>
          <li>
          <p class="detail-category">Category</p>
          <br>
          ${resto.categories
    .map(
      (category) => `
                <span class="category">${category.name}</span>
              `,
    )
    .join('')}
          </li>  
        </ul>
    </div>
  </div>
  <div class="movie__overview">
    <h3 tabindex="0">Description</h3>
    <p>${resto.description}</p>
  </div>
  <div class="menu_row">
      <div class="menu_column">
        <h4>
          <i class="fa fa-cutlery fa-lg" style="color: black;"></i> Food
        </h4>
        <ol>
          ${resto.menus.foods
    .map(
      (food) => `
                <li><p>${food.name}</p></li>
              `,
    )
    .join('')}
        <ol>
      </div>

      <div class="menu_column">
        <h4>
        <i class="fa fa-glass fa-lg" style="color: black;"></i> Drink
        </h4>
        <ol>
          ${resto.menus.drinks
    .map(
      (drink) => `
                <li><p>${drink.name}</p></li>
              `,
    )
    .join('')}
        <ol>
      </div>
  </div>

  <h4>Reviews</h4>
  <div class="detail-review">
    ${resto.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}
    </div>

  <h4>Send Feedback</h4>
  <div class="container_form">
    <form>
      <label for="fname">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Your name..">

      <label for="subject">Subject</label>
      <textarea id="review" name="review" placeholder="Write something.." style="height:200px"></textarea>

      <input type="submit" id="submit-review" value="Submit">
    </form>
  </div>
  <div class="notifAddReview"></div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster" alt="${resto.name || '-'}"
            src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}">
        <div class="resto-item__header__city">
            <p>${resto.city}</span></p>
        </div>
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating || '-'}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto__title"><a href="${`/#/detail/${resto.id}`}">${resto.name || '-'}</a></h3>
        <p>${resto.description || '-'}</p>
    </div>
  </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
