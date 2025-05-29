class TheHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">CyberAlex</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="index.html">> Home</a></li>
                    <li><a href="contact.html">> Contact</a></li>
                    <li><a href="about.html">> About</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
  }
}

class TheFooter extends HTMLElement {
  connectedCallback() {
  const currentYear = new Date().getFullYear();
    this.innerHTML = `
      <footer class="footer">
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <h4>Resources</h4>
                      <ul class="list-unstyled">
                          <li>> <a href="privacypolicy.html">Privacy Policy</a></li>
                          <li>> <a href="termsandconditions.html">Terms and Conditions</a></li>
                          <li>> <a href="copyright.html">Copyright</a></li>
                          <li>> <a href="licences.html">Licences</a></li>
                          <li>> <a href="references.html">Cite This CRAAP</a></li>
                          <li>> <a href="affiliated.html">Affiliated Websites</a></li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <h4>Quick Links</h4>
                      <ul class="list-unstyled">
                          <li>> <a href="index.html">Home</a></li>
                          <li>> <a href="projects.html">Projects</a></li>
                          <li>> <a href="photography.html">Photography Portfolios</a></li>
                          <li>> <a href="documents.html">Documents</a></li>
                          <li>> <a href="blog.html">Blog</a></li>
                          <li>> <a href="contact.html">Contact</a></li>
                          <li>> <a href="about.html">About</a></li>
                      </ul>
                  </div>
                  <div class="col-md-4">
                      <h4>Info</h4>
                      <ul class="list-unstyled">
                          <li>Copyright &#169; <span id="current-year">${currentYear}</span> www.cyberalex.uk - All rights reserved.</li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
    `;
  }
}

// Apply layout styles to make footer stick to bottom
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.minHeight = '100vh';

// Target #main to grow and push footer down
window.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  if (main) {
    main.style.flex = '1';
  }
});

customElements.define("the-header", TheHeader);
customElements.define("the-footer", TheFooter);
