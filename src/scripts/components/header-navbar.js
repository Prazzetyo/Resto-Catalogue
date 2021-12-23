class HeaderNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="app-bar">
            <div class="app-bar__menu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div class="app-bar__brand">
                <h1><a href="/">Resto Catalogue</a></h1>
            </div>
            <nav id="navigationDrawer" class="app-bar__navigation" style="z-index: 99;">
                <ul>
                <li><a href="#/home">Home</a></li>
                <!-- <li><a href="#/upcoming">Upcoming</a></li> -->
                <li><a href="#/like">Liked Resto</a></li>
                <li><a href="https://linkedin.com/in/muhammad-dwi-prasetyo-33203721b"
                    target="_blank"
                    rel="noopener noreferrer">About Us</a></li>
                </ul>
            </nav>
        </header>
      `;
  }
}

customElements.define('header-navbar', HeaderNavbar);
