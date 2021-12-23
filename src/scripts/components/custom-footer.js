class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Resto Catalogue</a></p>
        </footer>
      `;
  }
}

customElements.define('custom-footer', CustomFooter);
