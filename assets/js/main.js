/**
 * Kalima Kerala Kitchen Hotel - Main Application Controller
 * High-speed vanilla ES6 module architecture for maximum concurrency & 0 bloat.
 */

import { restaurantInfo } from './data/restaurantData.js';
import { menuCategories, menuItems } from './data/menuData.js';
import { testimonials } from './data/testimonialsData.js';

// Application State
const state = {
  activeCategory: 'all',
  searchQuery: '',
  selectedDiet: 'all'
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderHeroData();
  renderInfoStrip();
  renderSpecials();
  renderCategoryTabs();
  renderMenuItems();
  renderReviews();
  renderContactDetails();
  initSearchAndFilter();
  initBookingModal();
  initSmoothScroll();
});

/* ==========================================================================
   NAVIGATION & UI INTERACTIONS
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-menu-list a');

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   HERO & BUSINESS INFO RENDERING
   ========================================================================== */
function renderHeroData() {
  const hotelNameEl = document.getElementById('heroHotelName');
  const hotelSubEl = document.getElementById('heroSubtitle');
  if (hotelNameEl) hotelNameEl.textContent = restaurantInfo.name;
  if (hotelSubEl) hotelSubEl.textContent = `${restaurantInfo.tagline}. Located at ${restaurantInfo.location.addressLine1}, ${restaurantInfo.location.addressLine2}, Chennai.`;
}

function renderInfoStrip() {
  const addressVal = document.getElementById('infoAddress');
  const phoneVal = document.getElementById('infoPhone');
  const phoneLink = document.getElementById('infoPhoneLink');
  const hoursVal = document.getElementById('infoHours');

  if (addressVal) addressVal.textContent = restaurantInfo.location.fullAddress;
  if (phoneVal) phoneVal.textContent = restaurantInfo.contact.phone;
  if (phoneLink) phoneLink.href = `tel:${restaurantInfo.contact.rawPhone}`;
  if (hoursVal) hoursVal.textContent = restaurantInfo.timings[0].hours;
}

/* ==========================================================================
   CHEF SPECIALS SHOWCASE
   ========================================================================== */
function renderSpecials() {
  const specialsGrid = document.getElementById('specialsGrid');
  if (!specialsGrid) return;

  const specials = menuItems.filter(item => item.isSpecial);

  specialsGrid.innerHTML = specials.map(item => `
    <article class="special-card">
      <div class="special-media">
        <img src="${item.image}" alt="${item.name}" class="special-img" loading="lazy">
        <span class="special-badge">${item.badge || "Chef's Special"}</span>
      </div>
      <div class="special-body">
        <div class="special-top">
          <h3 class="special-title">${item.name}</h3>
          <span class="special-price">₹${item.price}</span>
        </div>
        <p class="special-desc">${item.description}</p>
        <div class="special-footer">
          <span class="diet-pill ${item.diet}">
            ${item.diet === 'veg' ? '🟢 Pure Veg' : '🔴 Halal Non-Veg'}
          </span>
          <button class="btn btn-primary btn-sm btn-order-item" data-item-id="${item.id}">
            Order on WhatsApp
          </button>
        </div>
      </div>
    </article>
  `).join('');

  attachOrderButtons(specialsGrid);
}

/* ==========================================================================
   DYNAMIC MENU EXPLORER & SEARCH
   ========================================================================== */
function renderCategoryTabs() {
  const categoryContainer = document.getElementById('categoryTabs');
  if (!categoryContainer) return;

  categoryContainer.innerHTML = menuCategories.map(cat => `
    <button class="cat-btn ${cat.id === state.activeCategory ? 'active' : ''}" data-cat-id="${cat.id}">
      <span>${cat.name}</span>
    </button>
  `).join('');

  categoryContainer.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const catId = btn.getAttribute('data-cat-id');
      state.activeCategory = catId;
      
      categoryContainer.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderMenuItems();
    });
  });
}

function renderMenuItems() {
  const menuGrid = document.getElementById('menuGrid');
  const countBadge = document.getElementById('menuCountBadge');
  if (!menuGrid) return;

  // Filter items
  const filtered = menuItems.filter(item => {
    const matchesCat = state.activeCategory === 'all' 
      ? true 
      : state.activeCategory === 'specials' 
        ? item.isSpecial 
        : item.category === state.activeCategory;

    const matchesSearch = state.searchQuery === '' 
      || item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      || item.description.toLowerCase().includes(state.searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Delicious Items`;
  }

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #64748b;">
        <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">No dishes match your search "${state.searchQuery}"</p>
        <p>Try searching for "Biryani", "Kothu Porotta", "Ayala Meen", or "Veg Thali"</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(item => `
    <div class="menu-card">
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="menu-card-img" loading="lazy">
        ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
      </div>
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h4 class="menu-card-title">${item.name}</h4>
          <span class="menu-card-price">₹${item.price}</span>
        </div>
        <p class="menu-card-desc">${item.description}</p>
        <div class="menu-card-actions">
          <span class="diet-pill ${item.diet}">
            ${item.diet === 'veg' ? '🟢 Pure Veg' : '🔴 Halal'}
          </span>
          <button class="btn btn-whatsapp btn-sm btn-order-item" data-item-id="${item.id}">
            Order Now
          </button>
        </div>
      </div>
    </div>
  `).join('');

  attachOrderButtons(menuGrid);
}

function initSearchAndFilter() {
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderMenuItems();
    });
  }
}

function getEffectiveWhatsappNumber() {
  const params = new URLSearchParams(window.location.search);
  const testPhone = params.get('test_phone');
  if (testPhone) {
    return testPhone.replace(/[^0-9]/g, '');
  }
  return restaurantInfo.contact.whatsappNumber;
}

/* ==========================================================================
   ORDER VIA WHATSAPP ACTION DISPATCHER
   ========================================================================== */
function attachOrderButtons(container) {
  container.querySelectorAll('.btn-order-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const itemId = btn.getAttribute('data-item-id');
      const item = menuItems.find(i => i.id === itemId);
      if (!item) return;

      const targetNumber = getEffectiveWhatsappNumber();
      const msg = `Hello *${restaurantInfo.name}*, I would like to order:%0A%0A🍛 *Item:* ${encodeURIComponent(item.name)}%0A💰 *Price:* ₹${item.price}%0A📍 *Location:* ${encodeURIComponent(restaurantInfo.location.addressLine1 + ', Thousand Lights, Chennai')}%0A%0APlease let me know delivery / dine-in availability.`;
      
      const whatsappUrl = `https://wa.me/${targetNumber}?text=${msg}`;
      window.open(whatsappUrl, '_blank');
    });
  });
}

/* ==========================================================================
   REVIEWS & TESTIMONIALS
   ========================================================================== */
function renderReviews() {
  const reviewsGrid = document.getElementById('reviewsGrid');
  if (!reviewsGrid) return;

  reviewsGrid.innerHTML = testimonials.map(item => `
    <div class="review-card">
      <div class="review-stars">
        ${'★'.repeat(item.rating)}
      </div>
      <p class="review-text">"${item.comment}"</p>
      <div class="review-author-wrap">
        <div class="author-avatar">${item.avatar}</div>
        <div>
          <div class="author-name">${item.name}</div>
          <div class="author-loc">${item.location} • ${item.date}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   CONTACT DETAILS & MAP
   ========================================================================== */
function renderContactDetails() {
  const addrEl = document.getElementById('contactAddress');
  const phoneEl = document.getElementById('contactPhone');
  const mapFrame = document.getElementById('mapFrame');
  const getDirectionsBtn = document.getElementById('getDirectionsBtn');
  const directCallBtn = document.getElementById('directCallBtn');
  const directWhatsappBtn = document.getElementById('directWhatsappBtn');

  if (addrEl) addrEl.textContent = restaurantInfo.location.fullAddress;
  if (phoneEl) phoneEl.textContent = restaurantInfo.contact.phone;
  if (mapFrame) mapFrame.src = restaurantInfo.location.embedMapUrl;
  if (getDirectionsBtn) getDirectionsBtn.href = restaurantInfo.location.googleMapsSearchUrl;
  if (directCallBtn) directCallBtn.href = `tel:${restaurantInfo.contact.rawPhone}`;
  if (directWhatsappBtn) directWhatsappBtn.href = `https://wa.me/${restaurantInfo.contact.whatsappNumber}?text=${encodeURIComponent(restaurantInfo.contact.whatsappDefaultMsg)}`;
}

/* ==========================================================================
   TABLE RESERVATION / PRE-ORDER MODAL
   ========================================================================== */
function initBookingModal() {
  const modal = document.getElementById('bookingModal');
  const openBtns = document.querySelectorAll('.open-booking-modal');
  const closeBtn = document.getElementById('closeBookingModal');
  const bookingForm = document.getElementById('bookingForm');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Handle Form Submission -> Prepares direct WhatsApp Booking Message
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookName').value;
      const phone = document.getElementById('bookPhone').value;
      const date = document.getElementById('bookDate').value;
      const time = document.getElementById('bookTime').value;
      const guests = document.getElementById('bookGuests').value;
      const notes = document.getElementById('bookNotes').value || 'None';

      const bookingMsg = `*TABLE RESERVATION / INQUIRY*%0A` +
        `🏨 *Hotel:* ${encodeURIComponent(restaurantInfo.name)}%0A` +
        `👤 *Name:* ${encodeURIComponent(name)}%0A` +
        `📞 *Contact:* ${encodeURIComponent(phone)}%0A` +
        `📅 *Date:* ${encodeURIComponent(date)}%0A` +
        `⏰ *Time:* ${encodeURIComponent(time)}%0A` +
        `👥 *Guests:* ${encodeURIComponent(guests)} People%0A` +
        `📝 *Special Requests / Dishes:* ${encodeURIComponent(notes)}`;

      const targetNumber = getEffectiveWhatsappNumber();
      const whatsappUrl = `https://wa.me/${targetNumber}?text=${bookingMsg}`;
      window.open(whatsappUrl, '_blank');
      modal.classList.remove('active');
      bookingForm.reset();
    });
  }
}

/* ==========================================================================
   SMOOTH SCROLLING & ACTIVE SECTION HIGHLIGHT
   ========================================================================== */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}
