function toggleMobileNav() {
    const mobileNav = document.getElementById('mobile-nav');
    const logo = document.getElementById('logo');
    const heading = document.querySelector('h1');
    
    if (mobileNav.style.display === 'flex') {
      mobileNav.style.display = 'none';
      logo.style.marginBottom = '5px';
      heading.style.bottom = '0';
    } else {
      mobileNav.style.display = 'flex';
      logo.style.marginBottom = '40px';
      heading.style.bottom = '35px';
    }
  }

  function checkWidth() {
    const mobileNav = document.getElementById('mobile-nav');
    if (window.innerWidth === 600 && mobileNav.style.display === 'flex') {
      toggleMobileNav();
    }
  }
  
  window.addEventListener('resize', checkWidth);