/* ==========================================================================
   Agro - Agriculture & Organic Food Marketplace Logic
   ========================================================================== */

// Products Data
const productsData = [
  {
    id: 1,
    name: "Organic Farm Fresh Bell Peppers",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 4.80,
    oldPrice: 6.00,
    unit: "per kg",
    rating: 4.9,
    reviews: 28,
    isSale: true,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?fm=webp&fit=crop&w=800&q=55",
    farmOrigin: "Green Valley Farms, CA (Certified Organic)",
    description: "Hand-picked, pesticide-free bell peppers rich in vitamins A and C. Perfect for fresh crisp salads, roasting, or stir fry dishes directly harvested this morning."
  },
  {
    id: 2,
    name: "Golden Sweet Honeycomb Jar",
    category: "honey",
    categoryLabel: "Farm Honey & Jams",
    price: 14.50,
    oldPrice: 18.00,
    unit: "500g glass jar",
    rating: 5.0,
    reviews: 45,
    isSale: false,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?fm=webp&fit=crop&w=800&q=55",
    farmOrigin: "Sunny Ridge Apiaries, OR (Raw & Unfiltered)",
    description: "100% natural, raw organic wildflower honey harvested directly with real honeycombs. Rich in antioxidants and authentic seasonal floral aromatics."
  },
  {
    id: 3,
    name: "Heritage Field Fresh Carrots",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 3.20,
    oldPrice: 4.50,
    unit: "per bunch (1kg)",
    rating: 4.8,
    reviews: 32,
    isSale: true,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?fm=webp&fit=crop&w=700&q=35",
    farmOrigin: "Highland Organic Acre, VT",
    description: "Crisp, sweet, heirloom bunch carrots pulled straight from rich organic soil with lush green tops intact. Bursting with natural carotene."
  },
  {
    id: 4,
    name: "Artisanal Pure Whole Farm Milk",
    category: "dairy",
    categoryLabel: "Dairy & Milk",
    price: 5.20,
    oldPrice: null,
    unit: "1 Gallon (Glass Bottle)",
    rating: 4.9,
    reviews: 64,
    isSale: false,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?fm=webp&fit=crop&w=800&q=55",
    farmOrigin: "Meadowland Pasture-Raised Cows, WI",
    description: "Pure pasture-raised grass-fed cow milk, non-homogenized with delicious natural cream on top. Tested antibiotic and hormone-free."
  },
  {
    id: 5,
    name: "Sun-Ripened Organic Strawberries",
    category: "fruits",
    categoryLabel: "Organic Fruits",
    price: 6.90,
    oldPrice: 8.50,
    unit: "500g punnet",
    rating: 4.9,
    reviews: 58,
    isSale: true,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?fm=webp&fit=crop&w=600&q=40",
    farmOrigin: "Coastal Berry Orchard, CA",
    description: "Juicy, naturally sweet, deeply fragrant red strawberries grown without synthetic fertilizers or chemicals. Handpicked at peak maturity."
  },
  {
    id: 6,
    name: "Vine Ripe Heirloom Red Tomatoes",
    category: "vegetables",
    categoryLabel: "Fresh Vegetables",
    price: 4.20,
    oldPrice: 5.40,
    unit: "per kg",
    rating: 4.7,
    reviews: 19,
    isSale: false,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?fm=webp&fit=crop&w=700&q=35",
    farmOrigin: "Sunstone Organic Community, CO",
    description: "Rich, juicy heirloom red tomatoes bursting with garden-fresh flavor. Perfect for caprese salads, homemade pasta sauces, and artisan sandwiches."
  },
  {
    id: 7,
    name: "Cold-Pressed Extra Virgin Olive Oil",
    category: "grains",
    categoryLabel: "Grains & Oils",
    price: 18.90,
    oldPrice: 22.00,
    unit: "750ml dark bottle",
    rating: 5.0,
    reviews: 73,
    isSale: true,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?fm=webp&fit=crop&w=800&q=55",
    farmOrigin: "Ancient Grove Agro Estates, Greece",
    description: "First single cold-press of hand-harvested Koroneiki olives. Notes of green grass, artichoke, and peppery finish. Acidity under 0.2%."
  },
  {
    id: 8,
    name: "Pasture-Raised Free Range Brown Eggs",
    category: "dairy",
    categoryLabel: "Dairy & Milk",
    price: 6.40,
    oldPrice: 7.50,
    unit: "Dozen (12 Eggs)",
    rating: 4.8,
    reviews: 51,
    isSale: false,
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?fm=webp&fit=crop&w=800&q=45",
    farmOrigin: "Rolling Hills Free-Range Coop, PA",
    description: "Nutritious golden yolks from hens roaming open green pastures freely all day, eating fresh grass, seeds, and insects with non-GMO feed."
  }
];

// Shopping Cart State
let cart = [];
let wishlist = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterPills = document.querySelectorAll('.filter-pill');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartBadge = document.getElementById('cartBadge');
const wishlistBadge = document.getElementById('wishlistBadge');
const cartItemsContainer = document.getElementById('cartItems');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const toastContainer = document.getElementById('toastContainer');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productsData);
  setupFilterPills();
  setupCartEvents();
  setupModalEvents();
  setupCountdown();
  setupStickyHeader();
  setupMobileMenu();
  setupNewsletterForm();
  setupLogin();
  setupSignup();
  setupLoginPage();
  setupDashboardGuard();
  setupDashboardMobileMenu();
  setupStoryScroll();
  setupParallax();
  setupImpactCounters();
  setupTextReveal();
  setupCardStagger();
  setupImageZoomReveal();
  setupBgZoom();

  // Recalculate trigger positions once every asset (images/fonts) has loaded.
  window.addEventListener('load', () => {
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  });
});

// Render Product Cards
function renderProducts(items) {
  if (!productsGrid) return;
  productsGrid.innerHTML = '';

  items.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;

    const badgeHTML = product.isSale ? `<span class="product-badge sale">Sale</span>` : `<span class="product-badge">Organic</span>`;
    const oldPriceHTML = product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : '';

    card.innerHTML = `
      <div class="product-img-wrapper">
        ${badgeHTML}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-actions">
          <button class="action-btn" title="Quick View" onclick="openQuickView(${product.id})">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-btn" title="Add to Wishlist" onclick="toggleWishlist(${product.id}, this)">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryLabel}</span>
        <h4 class="product-title">${product.name}</h4>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span class="rating-count">(${product.reviews})</span>
        </div>
        <p class="product-origin"><i class="fas fa-map-marker-alt"></i> ${product.farmOrigin.split(',')[0]}</p>
        <div class="product-bottom">
          <div class="price-box">
            <span class="current-price">$${product.price.toFixed(2)}</span>
            ${oldPriceHTML}
            <span class="unit">/${product.unit}</span>
          </div>
          <button class="add-cart-btn" title="Add to Basket" onclick="addToCart(${product.id})">
            <i class="fas fa-shopping-basket"></i>
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });

  // Newly rendered product images get the zoom-out reveal too.
  setupImageZoomReveal();
}

// Category Pill Filter
function setupFilterPills() {
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;
      if (filter === 'all') {
        renderProducts(productsData);
      } else {
        const filtered = productsData.filter(item => item.category === filter);
        renderProducts(filtered);
      }
    });
  });
}

// Cart Drawer Handling
function setupCartEvents() {
  if (openCartBtn) {
    openCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCart();
    });
  }
  if (closeCartBtn) {
    closeCartBtn.addEventListener('click', closeCart);
  }
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
  }
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast("Your cart is empty! Add farm produce to checkout.");
      } else {
        showToast("Directing to Secure Farm Checkout... Thank you!");
        setTimeout(() => {
          cart = [];
          updateCartUI();
          closeCart();
        }, 1200);
      }
    });
  }
}

function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function addToCart(productId) {
  const item = productsData.find(p => p.id === productId);
  if (!item) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCartUI();
  showToast(`Added "${item.name}" to your basket!`);
}

function updateCartQty(productId, delta) {
  const item = cart.find(c => c.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== productId);
  }
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updateCartUI();
  showToast("Item removed from basket.");
}

function updateCartUI() {
  // Update badge
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) {
    cartBadge.textContent = totalCount;
  }

  // Update Drawer items
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fas fa-shopping-basket"></i>
        <h4>Your basket is empty</h4>
        <p>Browse fresh vegetables, organic fruits, and artisan pantry items to start filling it.</p>
      </div>
    `;
    if (cartSubtotalEl) cartSubtotalEl.textContent = '$0.00';
    return;
  }

  let subtotal = 0;
  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-details">
        <h5 class="cart-item-name">${item.name}</h5>
        <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.qty} = $${itemTotal.toFixed(2)}</div>
        <div class="cart-qty-control">
          <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item-btn" title="Remove" onclick="removeFromCart(${item.id})">
        <i class="fas fa-trash-alt"></i>
      </button>
    `;
    cartItemsContainer.appendChild(row);
  });

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  }
}

// Wishlist Handling
function toggleWishlist(productId, btnElement) {
  const item = productsData.find(p => p.id === productId);
  if (!item) return;

  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    btnElement.style.color = 'inherit';
    showToast(`Removed "${item.name}" from wishlist.`);
  } else {
    wishlist.push(productId);
    btnElement.style.color = '#e63946';
    showToast(`Saved "${item.name}" to wishlist!`);
  }

  if (wishlistBadge) {
    wishlistBadge.textContent = wishlist.length;
  }
}

// Quick View Modal
function setupModalEvents() {
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}

function openQuickView(productId) {
  const item = productsData.find(p => p.id === productId);
  if (!item || !modalOverlay) return;

  const modalBody = document.getElementById('modalContent');
  modalBody.innerHTML = `
    <div class="modal-img-wrapper">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="modal-details">
      <span class="modal-category">${item.categoryLabel}</span>
      <h3>${item.name}</h3>
      <div class="product-rating" style="margin-bottom: 12px;">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        <span class="rating-count">(${item.reviews} verified customer reviews)</span>
      </div>
      <div class="modal-price">$${item.price.toFixed(2)} <span class="unit" style="font-size: 1rem; color: #888;">/${item.unit}</span></div>
      <p>${item.description}</p>
      <div class="modal-farm-origin">
        <i class="fas fa-check-circle"></i>
        <span>Harvest Origin: ${item.farmOrigin}</span>
      </div>
      <div style="display: flex; gap: 14px; margin-top: auto;">
        <button class="btn btn-primary" onclick="addToCart(${item.id}); closeModal();">
          <i class="fas fa-shopping-basket"></i> Add to Cart
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (modalOverlay) modalOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Deal Countdown Timer
function setupCountdown() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // Set target date 14 days in future
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minutesEl.innerText = "00";
      secondsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minutesEl.innerText = String(minutes).padStart(2, '0');
    secondsEl.innerText = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Sticky Header
function setupStickyHeader() {
  const header = document.querySelector('.header-main');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Pinned Horizontal Story Scroller
function setupStoryScroll() {
  const sections = document.querySelectorAll('[data-story-scroll]');
  if (!sections.length) return;

  const desktop = () => window.matchMedia('(min-width: 901px)').matches;
  let ticking = false;

  function layout() {
    sections.forEach(section => {
      const track = section.querySelector('.story-track');
      if (!track) return;
      if (!desktop()) {
        section.style.height = '';
        section.dataset.distance = 0;
        track.style.transform = '';
        return;
      }
      // Horizontal distance is derived from the actual rendered track width.
      const distance = Math.max(track.scrollWidth - window.innerWidth, 0);
      section.dataset.distance = distance;
      section.style.height = `${window.innerHeight + distance}px`;
    });
  }

  function update() {
    ticking = false;
    sections.forEach(section => {
      const track = section.querySelector('.story-track');
      if (!track) return;
      const distance = parseFloat(section.dataset.distance) || 0;
      if (!distance) return;
      const top = section.getBoundingClientRect().top;
      const progress = Math.min(Math.max(-top / distance, 0), 1);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      const bar = section.querySelector('.story-progress-bar');
      if (bar) bar.style.width = `${progress * 100}%`;
    });
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', () => { layout(); update(); });
  layout();
  update();
}

// Parallax Hero / Page Banner
function setupParallax() {
  const sections = document.querySelectorAll('.has-parallax');
  if (!sections.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const STRENGTH = 0.15; // max shift as a fraction of the section height
  let ticking = false;

  function update() {
    ticking = false;
    const vh = window.innerHeight;
    sections.forEach(section => {
      const bg = section.querySelector('.parallax-bg');
      if (!bg) return;
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;

      // -1 when the section is entering from the bottom, +1 when leaving the top.
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const shift = Math.max(Math.min(progress, 1), -1) * rect.height * STRENGTH;
      bg.style.transform = `translate3d(0, ${shift}px, 0)`;
    });
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
}

// Impact Counters (GSAP scroll-scrubbed line + values)
function setupImpactCounters() {
  const section = document.querySelector('.impact-counters');
  if (!section) return;

  const counters = section.querySelectorAll('[data-counter-target]');
  const fill = section.querySelector('.impact-line-fill');
  const fmt = value => Math.round(value).toLocaleString('en-US');
  const suffixOf = el => el.dataset.counterSuffix || '';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counters.forEach(el => {
      el.textContent = fmt(parseFloat(el.dataset.counterTarget) || 0) + suffixOf(el);
    });
    if (fill) fill.style.transform = 'scaleX(1)';
    return;
  }

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  if (fill) {
    gsap.fromTo(fill,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true
        }
      }
    );
  }

  counters.forEach(el => {
    const target = parseFloat(el.dataset.counterTarget) || 0;
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('.stat-counter-card') || el,
        start: 'top 90%',
        end: 'top 45%',
        scrub: true
      },
      onUpdate: () => { el.textContent = fmt(state.value) + suffixOf(el); }
    });
  });
}

// Word-by-word scroll reveal / text highlighting
function canScroll() {
  return (document.documentElement.scrollHeight - window.innerHeight) > 40;
}

function isAboveFold(el, ratio = 0.9) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * ratio && rect.bottom > 0;
}

// True when scrolling can actually bring the element's trigger point on screen.
function triggerReachable(el, startRatio = 0.88) {
  const rect = el.getBoundingClientRect();
  const docTop = rect.top + window.pageYOffset;
  const startScroll = docTop - window.innerHeight * startRatio;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return startScroll <= maxScroll + 2;
}

function splitIntoWords(el) {
  if (el.dataset.wordsSplit) return el.querySelectorAll('.reveal-word');
  el.dataset.wordsSplit = '1';

  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach(node => {
    const parts = node.nodeValue.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    parts.forEach(part => {
      if (part === '') return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        return;
      }
      const span = document.createElement('span');
      span.className = 'reveal-word';
      span.textContent = part;
      frag.appendChild(span);
    });
    if (node.parentNode) node.parentNode.replaceChild(frag, node);
  });

  return el.querySelectorAll('.reveal-word');
}

function setupTextReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.section-title, .section-subtitle, .title-tagline, .page-banner h1, .hero-title')
    .forEach(el => {
      if (el.dataset.textRevealBound) return;
      el.dataset.textRevealBound = '1';

      const words = splitIntoWords(el);
      if (!words.length) return;

      // Show immediately for content already on screen or on non-scrollable pages
      // so text can never get stuck in the dimmed state.
      if (!canScroll() || isAboveFold(el) || !triggerReachable(el, 0.88)) {
        gsap.set(words, { autoAlpha: 1, y: 0, clearProps: 'transform' });
        return;
      }

      gsap.fromTo(words,
        { autoAlpha: 0.2, y: 10 },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'none',
          stagger: 0.35,
          scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 55%', scrub: true }
        }
      );
    });
}

// Staggered fade-up cards
function setupCardStagger() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const selector = '.feature-card, .category-card, .product-card, .blog-card, ' +
    '.farmer-card, .cert-card, .stat-counter-card, .service-card, .testi-card, ' +
    '.contact-method-card, .pricing-card, .address-card, .stat-card, .product-card-mini, ' +
    '.about-content, .about-image-wrapper, .hero-stat-item';

  const groups = new Map();
  gsap.utils.toArray(selector).forEach(card => {
    if (card.dataset.staggerBound) return;
    card.dataset.staggerBound = '1';
    const parent = card.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(card);
  });

  groups.forEach(list => {
    const trigger = list[0].parentElement;
    const from = { autoAlpha: 0, y: 50 };
    const to = {
      autoAlpha: 1,
      y: 0,
      duration: 0.65,
      ease: 'power3.out',
      stagger: 0.12,
      clearProps: 'transform'
    };

    // Play immediately when the page cannot scroll or the group is already on
    // screen, so cards never remain stuck at opacity 0.
    if (!canScroll() || isAboveFold(trigger, 0.85) || !triggerReachable(trigger, 0.88)) {
      gsap.fromTo(list, from, to);
      return;
    }

    // NOTE: must use fromTo (not from) here — gsap.from() combined with a
    // scrollTrigger leaves the cards stuck at autoAlpha:0.
    gsap.fromTo(list, from, Object.assign({}, to, {
      scrollTrigger: { trigger, start: 'top 88%', once: true }
    }));
  });
}

// Image zoom-out reveal for content card images
// Starts slightly enlarged (scale 1.15) while fading in, settling to 1 over 1.5s.
function setupImageZoomReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const selector = '.blog-thumb img, .product-img-wrapper img, .farmer-img-box img, ' +
    '.cat-img-box img, .story-card-media img';

  gsap.utils.toArray(selector).forEach(img => {
    if (img.dataset.zoomRevealBound) return;
    img.dataset.zoomRevealBound = '1';

    const trigger = img.closest('.blog-thumb, .product-img-wrapper, .farmer-img-box, .cat-img-box, .story-card-media') || img.parentElement;

    const from = { autoAlpha: 0, scale: 1.15 };
    const to = {
      autoAlpha: 1,
      scale: 1,
      duration: 1.5,
      ease: 'power2.out',
      // Freeze the CSS hover transition (and clear transforms at the end) so it
      // doesn't fight GSAP's per-frame transform updates.
      onStart: () => { img.style.transition = 'none'; },
      onComplete: () => {
        gsap.set(img, { clearProps: 'transform' });
        img.style.transition = '';
      }
    };

    // Play immediately when the page cannot scroll or the image is already on
    // screen, so images never remain stuck hidden.
    if (!canScroll() || isAboveFold(trigger, 0.9) || !triggerReachable(trigger, 0.9)) {
      gsap.fromTo(img, from, to);
      return;
    }

    // NOTE: fromTo (not from) — gsap.from() + scrollTrigger stays stuck hidden.
    gsap.fromTo(img, from, Object.assign({}, to, {
      scrollTrigger: { trigger, start: 'top 90%', once: true }
    }));
  });
}

// Scroll-linked background zoom / parallax
function setupBgZoom() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.page-banner, .deal-section').forEach(section => {
    if (section.dataset.bgZoomBound) return;
    if (section.classList.contains('has-parallax') || section.classList.contains('has-bg-zoom')) return;

    const bg = window.getComputedStyle(section).backgroundImage;
    const match = bg.match(/url\((?:"([^"]+)"|'([^']+)'|([^)]+))\)/);
    if (!match) return;
    const url = (match[1] || match[2] || match[3]).trim();
    const overlay = bg.replace(/,\s*url\((?:"[^"]*"|'[^']*'|[^)]*)\)\s*/, '').trim();

    section.dataset.bgZoomBound = '1';
    section.style.backgroundImage = 'none';

    const layer = document.createElement('span');
    layer.className = 'bg-zoom';
    layer.setAttribute('aria-hidden', 'true');
    layer.style.backgroundImage = `url("${url}")`;
    section.insertBefore(layer, section.firstChild);
    section.classList.add('has-bg-zoom');
    section.style.setProperty('--bg-overlay', overlay || 'rgba(17, 26, 17, 0.7)');

    gsap.fromTo(layer,
      { scale: 1 },
      {
        scale: 1.18,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
      }
    );
  });
}

// Mobile Menu
function setupMobileMenu() {
  if (!menuToggle || !navLinks) return;

  let navOverlay = document.getElementById('navOverlay');
  if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.id = 'navOverlay';
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
  }

  const toggleMenu = (forceState) => {
    const shouldOpen = forceState !== undefined ? forceState : !navLinks.classList.contains('active');
    navLinks.classList.toggle('active', shouldOpen);
    navOverlay.classList.toggle('active', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';

    const icon = menuToggle.querySelector('i');
    if (icon) {
      if (shouldOpen) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navOverlay.addEventListener('click', () => {
    toggleMenu(false);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMenu(false);
    }
  });
}

// Toast Notifications
function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Newsletter form
function setupNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        window.location.href = '404.html';
      }
    });
  }
}

// ==========================================================================
// Role-Based Login (User / Admin)
// ==========================================================================

const LOGIN_DEMO_CREDENTIALS = {
  user: { email: 'user@agro-farm.com', password: 'user123' },
  admin: { email: 'admin@agro-farm.com', password: 'admin123' }
};

const loginModalHTML = `
  <div class="modal-overlay" id="loginModalOverlay">
    <div class="login-modal">
      <button class="modal-close-btn" id="closeLoginModal" aria-label="Close login">&times;</button>
      <div class="login-modal-header">
        <a href="index.html" class="login-logo-link" title="Agro Home">
          <img src="logo.webp" alt="Agro - Organic Farm" class="login-brand-logo">
        </a>
        <h3>Welcome Back</h3>
        <p>Sign in to your Agro account</p>
      </div>

      <div class="role-switch" id="roleSwitch">
        <button type="button" class="role-btn active" data-role="user">
          <i class="fas fa-user"></i> Customer
        </button>
        <button type="button" class="role-btn" data-role="admin">
          <i class="fas fa-user-shield"></i> Admin
        </button>
      </div>

      <form id="loginForm">
        <div class="form-group">
          <label for="loginEmail">Email Address</label>
          <input type="email" class="form-control" id="loginEmail" placeholder="you@agro-farm.com" required autocomplete="email">
        </div>
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <div class="password-input-wrap">
            <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password" required autocomplete="current-password">
            <button type="button" class="password-toggle-btn" id="modalTogglePassword" aria-label="Show password">
              <i class="far fa-eye-slash"></i>
            </button>
          </div>
        </div>
        <div class="auth-options-row">
          <label class="remember-me-label" for="modalRememberMe">
            <input type="checkbox" id="modalRememberMe">
            <span>Remember me</span>
          </label>
          <a href="404.html" class="forgot-password-link" id="modalForgotLink">Forgot password?</a>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%;">
          <span>Sign In</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </form>

      <div class="login-divider" style="display: flex; align-items: center; gap: 12px; margin: 20px 0 12px;">
        <span style="flex: 1; height: 1px; background: var(--border-color);"></span>
        <span style="font-size: 0.85rem; color: var(--text-muted);">New to Agro?</span>
        <span style="flex: 1; height: 1px; background: var(--border-color);"></span>
      </div>
      <a href="create-account.html" class="btn btn-outline-dark" style="width: 100%;">
        <i class="fas fa-user-plus"></i> Create Account
      </a>

      <p class="login-hint" id="loginHint">
        <i class="fas fa-info-circle"></i> Demo: use <strong>user@agro-farm.com</strong> / <strong>user123</strong> for Customer, <strong>admin@agro-farm.com</strong> / <strong>admin123</strong> for Admin.
      </p>
    </div>
  </div>
`;

function setupLogin() {
  if (!document.querySelector('#loginModalOverlay')) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = loginModalHTML;
    document.body.appendChild(wrapper.firstElementChild);
  }
  const overlay = document.getElementById('loginModalOverlay');
  const closeBtn = document.getElementById('closeLoginModal');
  const roleButtons = document.querySelectorAll('#roleSwitch .role-btn');
  const form = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const togglePassBtn = document.getElementById('modalTogglePassword');
  const rememberCheckbox = document.getElementById('modalRememberMe');
  let selectedRole = 'user';

  // Pre-fill remembered email if saved
  const savedEmail = localStorage.getItem('agroRememberedEmail');
  if (savedEmail && emailInput) {
    emailInput.value = savedEmail;
    if (rememberCheckbox) rememberCheckbox.checked = true;
    if (savedEmail.toLowerCase().includes('admin')) {
      selectedRole = 'admin';
      roleButtons.forEach(b => b.classList.remove('active'));
      const adminBtn = document.querySelector('#roleSwitch .role-btn[data-role="admin"]');
      if (adminBtn) adminBtn.classList.add('active');
    }
  }

  // Show / Hide Password toggle: if visible eye should open, if hidden eye should close
  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const willBeVisible = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', willBeVisible ? 'text' : 'password');
      const icon = togglePassBtn.querySelector('i');
      if (icon) {
        icon.className = willBeVisible ? 'far fa-eye' : 'far fa-eye-slash';
      }
      togglePassBtn.setAttribute('aria-label', willBeVisible ? 'Hide password' : 'Show password');
      passwordInput.focus();
    });
  }

  function getSession() {
    return JSON.parse(localStorage.getItem('agroUser') || 'null');
  }

  function renderLoginState() {
    const session = getSession();
    if (!loginBtn) return;
    if (session) {
      loginBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
      loginBtn.title = session.role === 'admin' ? 'Admin - Logged In' : 'Customer - Logged In';
      loginBtn.style.color = 'var(--primary)';
    } else {
      loginBtn.innerHTML = `<i class="fas fa-user"></i>`;
      loginBtn.title = 'Login / Account';
      loginBtn.style.color = '';
    }
  }

  renderLoginState();

  function openLogin() {
    const session = getSession();
    if (session) {
      window.location.href = session.role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
      return;
    }
    window.location.href = 'login.html';
  }

  function closeLogin() {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openLogin();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeLogin);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLogin();
    });
  }

  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRole = btn.dataset.role;
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput ? emailInput.value.trim() : '';
      const password = passwordInput ? passwordInput.value.trim() : '';

      if (email === LOGIN_DEMO_CREDENTIALS.user.email && password === LOGIN_DEMO_CREDENTIALS.user.password && selectedRole === 'user') {
        if (rememberCheckbox && rememberCheckbox.checked) {
          localStorage.setItem('agroRememberedEmail', email);
        } else {
          localStorage.removeItem('agroRememberedEmail');
        }
        localStorage.setItem('agroUser', JSON.stringify({ role: 'user', email }));
        closeLogin();
        window.location.href = 'user-dashboard.html';
      } else if (email === LOGIN_DEMO_CREDENTIALS.admin.email && password === LOGIN_DEMO_CREDENTIALS.admin.password && selectedRole === 'admin') {
        if (rememberCheckbox && rememberCheckbox.checked) {
          localStorage.setItem('agroRememberedEmail', email);
        } else {
          localStorage.removeItem('agroRememberedEmail');
        }
        localStorage.setItem('agroUser', JSON.stringify({ role: 'admin', email }));
        closeLogin();
        window.location.href = 'admin-dashboard.html';
      } else {
        showToast('Invalid credentials. Please try the demo login details shown below.');
      }
    });
  }
}

// ==========================================================================
// Create Account (Sign Up)
// ==========================================================================

function setupSignup() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    const confirm = document.getElementById('signupConfirm').value.trim();

    if (password !== confirm) {
      showToast('Passwords do not match. Please try again.');
      return;
    }

    showToast('Account created! Welcome to Agro.');
    setTimeout(() => { window.location.href = '404.html'; }, 900);
  });
}

// ==========================================================================
// Login Page (standalone login.html)
// ==========================================================================

function setupLoginPage() {
  const form = document.getElementById('loginPageForm');
  if (!form) return;

  const emailInput = document.getElementById('loginPageEmail');
  const passwordInput = document.getElementById('loginPagePassword');
  const rememberCheckbox = document.getElementById('loginPageRememberMe');
  const togglePassBtn = document.getElementById('loginPageTogglePassword');

  let selectedRole = 'user';
  const roleButtons = document.querySelectorAll('#loginPageRoleSwitch .role-btn');

  // Pre-fill remembered email if saved
  const savedEmail = localStorage.getItem('agroRememberedEmail');
  if (savedEmail && emailInput) {
    emailInput.value = savedEmail;
    if (rememberCheckbox) rememberCheckbox.checked = true;
    if (savedEmail.toLowerCase().includes('admin')) {
      selectedRole = 'admin';
      roleButtons.forEach(b => b.classList.remove('active'));
      const adminBtn = document.querySelector('#loginPageRoleSwitch .role-btn[data-role="admin"]');
      if (adminBtn) adminBtn.classList.add('active');
    }
  }

  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRole = btn.dataset.role;
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // 1. Show / Hide Password toggle: if visible eye should open, if hidden eye should close
  if (togglePassBtn && passwordInput) {
    togglePassBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const willBeVisible = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', willBeVisible ? 'text' : 'password');
      const icon = togglePassBtn.querySelector('i');
      if (icon) {
        icon.className = willBeVisible ? 'far fa-eye' : 'far fa-eye-slash';
      }
      togglePassBtn.setAttribute('aria-label', willBeVisible ? 'Hide password' : 'Show password');
      passwordInput.focus();
    });
  }

  // 2. Remember Me functionality on form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput ? emailInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';

    if (email === LOGIN_DEMO_CREDENTIALS.user.email && password === LOGIN_DEMO_CREDENTIALS.user.password && selectedRole === 'user') {
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('agroRememberedEmail', email);
      } else {
        localStorage.removeItem('agroRememberedEmail');
      }
      localStorage.setItem('agroUser', JSON.stringify({ role: 'user', email }));
      showToast('Welcome back! Redirecting to your dashboard...');
      setTimeout(() => { window.location.href = 'user-dashboard.html'; }, 300);
    } else if (email === LOGIN_DEMO_CREDENTIALS.admin.email && password === LOGIN_DEMO_CREDENTIALS.admin.password && selectedRole === 'admin') {
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('agroRememberedEmail', email);
      } else {
        localStorage.removeItem('agroRememberedEmail');
      }
      localStorage.setItem('agroUser', JSON.stringify({ role: 'admin', email }));
      showToast('Welcome back, Admin! Redirecting to dashboard...');
      setTimeout(() => { window.location.href = 'admin-dashboard.html'; }, 300);
    } else {
      showToast('Invalid credentials. Please try the demo login details shown below.');
    }
  });
}

// ==========================================================================
// Dashboard Access Control (Role-Based)
// ==========================================================================

function setupDashboardGuard() {
  const path = window.location.pathname.split('/').pop();
  const session = JSON.parse(localStorage.getItem('agroUser') || 'null');

  if (path === 'user-dashboard.html') {
    if (!session || session.role !== 'user') {
      window.location.href = 'index.html';
      return;
    }
    const emailEls = document.querySelectorAll('.user-meta strong');
    emailEls.forEach(el => { if (el.textContent.includes('@')) el.textContent = session.email; });
  }

  if (path === 'admin-dashboard.html') {
    if (!session || session.role !== 'admin') {
      window.location.href = 'index.html';
      return;
    }
    const emailEls = document.querySelectorAll('.user-meta strong');
    emailEls.forEach(el => { if (el.textContent.includes('@')) el.textContent = session.email; });
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('agroUser');
      window.location.href = 'index.html';
    });
  }
}

// ==========================================================================
// Dashboard Mobile Off-Canvas Drawer & Controls
// ==========================================================================

function setupDashboardMobileMenu() {
  const sidebar = document.querySelector('.dashboard-sidebar');
  if (!sidebar) return;

  // 1. Ensure close button exists in sidebar-brand
  let closeBtn = document.getElementById('dashSidebarClose');
  if (!closeBtn) {
    const brand = sidebar.querySelector('.sidebar-brand');
    if (brand) {
      closeBtn = document.createElement('button');
      closeBtn.id = 'dashSidebarClose';
      closeBtn.className = 'dash-sidebar-close';
      closeBtn.setAttribute('aria-label', 'Close sidebar navigation');
      closeBtn.innerHTML = '&times;';
      brand.appendChild(closeBtn);
    }
  }

  // 2. Ensure mobile hamburger toggle button exists in dashboard-topbar
  let toggleBtn = document.getElementById('dashMenuToggle');
  const topbar = document.querySelector('.dashboard-topbar');

  if (!toggleBtn && topbar) {
    let headerRow = topbar.querySelector('.dash-topbar-header');
    if (!headerRow) {
      headerRow = document.createElement('div');
      headerRow.className = 'dash-topbar-header';

      const leftWrap = document.createElement('div');
      leftWrap.className = 'dash-header-left';

      toggleBtn = document.createElement('button');
      toggleBtn.id = 'dashMenuToggle';
      toggleBtn.className = 'dash-menu-toggle';
      toggleBtn.setAttribute('aria-label', 'Open dashboard navigation');
      toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      leftWrap.appendChild(toggleBtn);

      const logoLink = document.createElement('a');
      logoLink.href = 'index.html';
      logoLink.className = 'dash-mobile-logo';
      logoLink.innerHTML = '<img src="logo.webp" alt="Agro - Organic Farm">';
      leftWrap.appendChild(logoLink);

      headerRow.appendChild(leftWrap);

      const userChip = topbar.querySelector('.user-chip');
      if (userChip) {
        headerRow.appendChild(userChip);
      }

      // Check if there is an existing title block to wrap
      const titleEl = topbar.querySelector('h1');
      if (titleEl && titleEl.parentElement && titleEl.parentElement !== topbar) {
        titleEl.parentElement.classList.add('dash-topbar-title');
      }

      topbar.prepend(headerRow);
    } else {
      toggleBtn = document.getElementById('dashMenuToggle');
    }
  }

  // 3. Ensure backdrop overlay exists
  let dashOverlay = document.getElementById('dashOverlay');
  if (!dashOverlay) {
    dashOverlay = document.createElement('div');
    dashOverlay.id = 'dashOverlay';
    dashOverlay.className = 'dash-overlay';
    document.body.appendChild(dashOverlay);
  }

  // Open/Close toggle function
  const toggleDashboardMenu = (forceState) => {
    const shouldOpen = forceState !== undefined ? forceState : !sidebar.classList.contains('active');
    sidebar.classList.toggle('active', shouldOpen);
    dashOverlay.classList.toggle('active', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';

    if (toggleBtn) {
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = shouldOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDashboardMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDashboardMenu(false);
    });
  }

  dashOverlay.addEventListener('click', () => {
    toggleDashboardMenu(false);
  });

  // Close when clicking any menu link in sidebar
  sidebar.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        toggleDashboardMenu(false);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
      toggleDashboardMenu(false);
    }
  });
}
