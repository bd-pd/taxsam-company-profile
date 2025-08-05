console.log('Script mulai dijalankan');

// Fungsi animasi counting
function animateValue(obj, start, end, duration) {
  console.log('Memulai animasi untuk:', obj, 'dari', start, 'ke', end);
  let startTimestamp = null;
  
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    
    // Format number dengan titik untuk ribuan jika >= 1000
    let formattedValue;
    if (value >= 1000) {
      formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      formattedValue = value.toString();
    }
    
    obj.innerHTML = formattedValue + '+';
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      console.log('Animasi selesai untuk:', obj);
    }
  };
  window.requestAnimationFrame(step);
}

function startAnimation() {
  console.log('Memulai animasi stats');
  const stats = document.querySelectorAll('.clients-stat-main');
  console.log('Ditemukan', stats.length, 'elemen stats');
  
  stats.forEach((stat, index) => {
    const targetValue = parseInt(stat.getAttribute('data-target'));
    console.log('Element', index, '- Target:', targetValue, 'Element:', stat);
    if (!isNaN(targetValue)) {
      animateValue(stat, 0, targetValue, 2000);
    } else {
      console.error('Target value tidak valid untuk element:', stat);
    }
  });
}

// Fungsi untuk check apakah element sudah terlihat
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Inisialisasi setelah DOM ready
function initializeStatsAnimation() {
  console.log('Inisialisasi animasi stats');
  
  const statsSection = document.querySelector('.clients-stats-row');
  if (!statsSection) {
    console.error('Stats section tidak ditemukan!');
    return;
  }
  
  console.log('Stats section ditemukan:', statsSection);
  
  // Cek apakah IntersectionObserver tersedia
  if ('IntersectionObserver' in window) {
    console.log('Menggunakan IntersectionObserver');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log('IntersectionObserver triggered:', entry.isIntersecting);
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(statsSection);
  } else {
    console.log('IntersectionObserver tidak tersedia, menggunakan scroll event');
    
    // Fallback untuk browser yang tidak support IntersectionObserver
    function checkScroll() {
      if (isElementInViewport(statsSection)) {
        startAnimation();
        window.removeEventListener('scroll', checkScroll);
      }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check immediately
  }
}

// Animasi fade-in untuk partner-section dan logo partner
function animatePartnerSection() {
  const partnerSection = document.querySelector('.partner-section');
  if (!partnerSection) return;
  partnerSection.classList.add('fade-in');

  // Trigger animasi logo partner
  const logos = partnerSection.querySelectorAll('.partner-logo');
  logos.forEach((logo, i) => {
    // Force reflow supaya animasi bisa diulang jika perlu
    logo.classList.remove('partner-logo-animate');
    void logo.offsetWidth;
    logo.classList.add('partner-logo-animate');
  });
}

function initializePartnerAnimation() {
  const partnerSection = document.querySelector('.partner-section');
  if (!partnerSection) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatePartnerSection();
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(partnerSection);
  } else {
    // Fallback: langsung animasi
    animatePartnerSection();
  }
}

// Multiple ways to ensure DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initializeStatsAnimation();
    initializePartnerAnimation();
  });
} else {
  // DOM already loaded
  initializeStatsAnimation();
  initializePartnerAnimation();
}

// Fallback dengan timeout
setTimeout(() => {
  if (document.querySelector('.clients-stats-row')) {
    console.log('Fallback: Memulai animasi setelah 2 detik');
    initializeStatsAnimation();
  }
}, 2000);
