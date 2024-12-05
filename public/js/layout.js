// Header ve Footer'ı yükleme
function loadHeaderAndFooter() {
    fetch('header.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById('header').innerHTML = data;
      });
  
    fetch('footer.html')
      .then((response) => response.text())
      .then((data) => {
        document.getElementById('footer').innerHTML = data;
      });
  }
  
  // Sayfa içeriğini yükleme
  function loadPage(page) {
    fetch(page)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Page not found');
        }
        return response.text();
      })
      .then((html) => {
        document.getElementById('main-content').innerHTML = html;
      })
      .catch((error) => {
        document.getElementById('main-content').innerHTML = '<h1>Page not found</h1>';
        console.error(error);
      });
  }
  
  // Başlangıçta header, footer ve varsayılan sayfa yüklensin
  window.addEventListener('DOMContentLoaded', () => {
    loadHeaderAndFooter();
    loadPage('home.html');
  
    // Linklere tıklamayı dinle
    document.body.addEventListener('click', (event) => {
      if (event.target.matches('[data-link]')) {
        event.preventDefault();
        const page = event.target.getAttribute('href');
        loadPage(page);
        history.pushState(null, '', page);
      }
    });
  });
  
  // Tarayıcı geri ve ileri butonları
  window.addEventListener('popstate', () => {
    const path = location.pathname.substring(1) || 'home.html';
    loadPage(path);
  });
  