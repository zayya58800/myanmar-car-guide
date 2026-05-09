// ===== Main Application Logic =====

document.addEventListener('DOMContentLoaded', function() {
  // Lang switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchLang(this.dataset.lang);
    });
  });

  // Hamburger menu
  document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-links').classList.remove('active');
    });
  });

  // Render initial content
  renderCarCards();
  renderPriceTable();
  renderGlossary();

  // Glossary search
  document.getElementById('glossary-search').addEventListener('input', function() {
    renderGlossary(this.value);
  });

  // Glossary filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderGlossary(document.getElementById('glossary-search').value, this.dataset.filter);
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Car Listings =====
  loadListings();

  // Image upload handler
  let uploadedImages = [];
  const imageInput = document.getElementById('image-input');
  if (imageInput) {
    imageInput.addEventListener('change', function(e) {
      uploadedImages = [];
      const preview = document.getElementById('upload-preview');
      if (!preview) return;
      preview.innerHTML = '';
      const files = Array.from(e.target.files).slice(0, 3);
      
      files.forEach((file, index) => {
        if (file.size > 2 * 1024 * 1024) {
          alert(currentLang === 'my' ? 'ဓာတ်ပုံအကြီးကြီး။ 2MB အောက်သာရွေးပါ။' : 
                currentLang === 'cn' ? '图片太大，请选2MB以下的' : 'Image too large, choose under 2MB');
          return;
        }
        const reader = new FileReader();
        reader.onload = function(ev) {
          const imgData = ev.target.result;
          const canvas = document.createElement('canvas');
          const img = new Image();
          img.onload = function() {
            const maxW = 300;
            const scale = img.width > maxW ? maxW / img.width : 1;
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressed = canvas.toDataURL('image/jpeg', 0.7);
            uploadedImages.push(compressed);
            const dataInput = document.getElementById('images-data');
            if (dataInput) dataInput.value = JSON.stringify(uploadedImages);
            
            const thumb = document.createElement('div');
            thumb.className = 'upload-thumb';
            thumb.innerHTML = `<img src="${compressed}"><span class="upload-remove" data-index="${index}">✕</span>`;
            thumb.querySelector('.upload-remove').onclick = function() {
              uploadedImages.splice(parseInt(this.dataset.index), 1);
              const di = document.getElementById('images-data');
              if (di) di.value = JSON.stringify(uploadedImages);
              this.parentElement.remove();
            };
            preview.appendChild(thumb);
          };
          img.src = imgData;
        };
        reader.readAsDataURL(file);
      });
    });
  }

  const listingForm = document.getElementById('listing-form');
  if (listingForm) {
    listingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    
    // Get images from the hidden input (already compressed by upload handler)
    let images = [];
    try {
      const raw = document.getElementById('images-data')?.value;
      if (raw) images = JSON.parse(raw);
    } catch(ex) {}

    const listing = {
      id: Date.now(),
      title: data.get('title'),
      year: data.get('year'),
      price: data.get('price'),
      mileage: data.get('mileage'),
      location: data.get('location'),
      description: data.get('description'),
      contact: data.get('contact'),
      images: images,
      date: new Date().toLocaleDateString(),
      timestamp: Date.now()
    };
    saveListing(listing);
    // Reset form + images
    this.reset();
    uploadedImages = [];
    const previewEl = document.getElementById('upload-preview');
    if (previewEl) previewEl.innerHTML = '';
    const dataInput = document.getElementById('images-data');
    if (dataInput) dataInput.value = '';
    alert('✅ ' + (currentLang === 'my' ? 'ကားစာရင်းတင်ပြီးပါပြီ။' : (currentLang === 'cn' ? '车源已发布！' : 'Listing posted!')));
    });
  }

  // ===== Inspection Bookings =====
  loadBookings();
  // Set default date to tomorrow
  const dateInput = document.querySelector('#inspection-form input[type="date"]');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }
  document.getElementById('inspection-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    const booking = {
      id: Date.now(),
      carModel: data.get('car_model'),
      carYear: data.get('car_year'),
      name: data.get('name'),
      phone: data.get('phone'),
      date: data.get('date'),
      timeSlot: data.get('time_slot'),
      notes: data.get('notes'),
      timestamp: Date.now()
    };
    saveBooking(booking);
    this.reset();
    alert('✅ ' + (currentLang === 'my' ? 'စစ်ဆေးရန်စာရင်းသွင်းပြီးပါပြီ။' : (currentLang === 'cn' ? '验车已预约成功！' : 'Inspection booked!')));
  });

  // ===== Comments =====
  loadComments();
  document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    const comment = {
      id: Date.now(),
      name: data.get('comment_name') || 'Anonymous',
      email: data.get('comment_email'),
      text: data.get('comment_text'),
      date: new Date().toLocaleDateString(),
      timestamp: Date.now()
    };
    saveComment(comment);
    this.reset();
    alert('✅ ' + (currentLang === 'my' ? 'မှတ်ချက်တင်ပြီးပါပြီ။' : (currentLang === 'cn' ? '评论已发表！' : 'Comment posted!')));
  });

  // Contact form
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ ' + t('form_send') + ' ✓');
  });
});

// ===== Render Functions =====

function renderCarCards() {
  const grid = document.getElementById('car-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  carModels.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    
    const lang = currentLang;
    let nameDisplay = car.nameEn;
    if (lang === 'my') nameDisplay = car.nameMy;
    else if (lang === 'cn') nameDisplay = car.nameCn;
    
    card.innerHTML = `
      <div class="car-card-icon">${car.image}</div>
      <h3 class="car-card-title">${nameDisplay}</h3>
      <div class="car-card-langs">
        <span class="lang-tag my">${car.nameMy}</span>
        <span class="lang-tag cn">${car.nameCn}</span>
        <span class="lang-tag en">${car.nameEn}</span>
      </div>
      <div class="car-card-details">
        <div class="car-detail"><span class="label">${t('th_year')}:</span> ${car.year}</div>
        <div class="car-detail"><span class="label">${t('th_price')}:</span> <strong>${car.price} MMK</strong></div>
        <div class="car-detail"><span class="label">${t('th_price_usd')}:</span> ${car.priceUsd}</div>
      </div>
      <p class="car-card-desc">${car.desc}</p>
    `;
    grid.appendChild(card);
  });
}

function renderPriceTable() {
  const tbody = document.getElementById('price-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const sectionBreaks = {
    'Vitz|Fit|Jazz|Swift|Wish|Carry|Hilux|Crown|Alphard|Ertiga|Alto|Jimny|Ciaz|Every': 'jdm',
    'Wuling|BYD|Neta|Voyah|EV|Electric|电动车|လျှပ်စစ်': 'ev',
    'Hyundai|Kia|Elantra|Accent|Forte|Santa|Sorento': 'korean'
  };
  
  let currentSection = '';
  
  priceData.forEach((row) => {
    // Determine section dynamically
    let section = 'jdm';
    for (const [pattern, s] of Object.entries(sectionBreaks)) {
      if (new RegExp(pattern, 'i').test(row.model)) {
        section = s;
        break;
      }
    }
    // Last section is Korean
    if (row.model.includes('Hyundai') || row.model.includes('Kia')) section = 'korean';
    // EV detection
    if (row.model.includes('EV') || row.model.includes('Wuling') || row.model.includes('BYD') || row.model.includes('Neta') || row.model.includes('Voyah')) section = 'ev';
    
    if (section !== currentSection) {
      currentSection = section;
      const keyMap = {
        jdm: 'price_section_jdm',
        ev: 'price_section_ev',
        korean: 'price_section_korea'
      };
      const name = t(keyMap[section]);
      const tr = document.createElement('tr');
      tr.className = 'price-section-header';
      tr.innerHTML = `<td colspan="4" style="font-weight:700;font-size:0.95rem;background:var(--primary);color:white;padding:10px 14px;border-radius:6px;text-align:center;">${name}</td>`;
      tbody.appendChild(tr);
    }
    
    const tr = document.createElement('tr');
    const tag = row.tag || '';
    const yearDisplay = row.trim && row.trim !== '—' ? `${row.year}<br><small style="color:#666">[${row.trim}]</small>` : row.year;
    // Trilingual model name
    const modelName = currentLang === 'my' && modelTr[row.model] ? modelTr[row.model].my :
                      currentLang === 'cn' && modelTr[row.model] ? modelTr[row.model].cn :
                      row.model;
    // Auto-calculate USD estimate from MMK
    const mmkStr = row.priceMmk;
    const rate = 4000;
    let usdDisplay = '—';
    const mmkMatch = mmkStr.match(/(\d+)\s*M\s*[-~]\s*(\d+)\s*M/);
    if (mmkMatch) {
      const low = Math.round(parseInt(mmkMatch[1]) * 1000000 / rate);
      const high = Math.round(parseInt(mmkMatch[2]) * 1000000 / rate);
      usdDisplay = `$${low.toLocaleString()} - $${high.toLocaleString()}`;
    } else {
      const singleMatch = mmkStr.match(/[~]?\s*(\d+)\s*M\+?/);
      if (singleMatch) {
        const v = Math.round(parseInt(singleMatch[1]) * 1000000 / rate);
        const suffix = mmkStr.includes('+') ? '+' : '';
        usdDisplay = `$${v.toLocaleString()}${suffix}`;
      }
    }
    tr.innerHTML = `
      <td>${tag ? `${tag} ` : ''}${modelName}</td>
      <td>${yearDisplay}</td>
      <td class="price-mmk">${row.priceMmk}</td>
      <td class="price-usd">${usdDisplay}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderGlossary(search = '', filter = 'all') {
  const tbody = document.getElementById('glossary-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  let terms = glossaryTerms;

  // Filter by category
  if (filter !== 'all') {
    terms = terms.filter(t => t.cat === filter);
  }

  // Search
  if (search.trim()) {
    const q = search.toLowerCase();
    terms = terms.filter(t => 
      t.my.toLowerCase().includes(q) || 
      t.cn.toLowerCase().includes(q) || 
      t.en.toLowerCase().includes(q)
    );
  }

  if (terms.length === 0) {
    const tr = document.createElement('tr');
    const lang = currentLang;
    const msg = lang === 'my' ? 'ရလဒ်မရှိပါ' : (lang === 'cn' ? '没有找到结果' : 'No results found');
    tr.innerHTML = `<td colspan="4" class="no-results">${msg}</td>`;
    tbody.appendChild(tr);
    return;
  }

  terms.forEach(term => {
    const tr = document.createElement('tr');
    const catLabel = currentLang === 'my' 
      ? ({ engine: 'အင်ဂျင်', body: 'ကိုယ်ထည်', interior: 'အတွင်းခန်း', document: 'စာရွက်စာတမ်း' })[term.cat]
      : (currentLang === 'cn' 
        ? ({ engine: '发动机', body: '车身', interior: '内饰', document: '文件' })[term.cat]
        : term.cat.charAt(0).toUpperCase() + term.cat.slice(1));
    
    tr.innerHTML = `
      <td class="my">${term.my}</td>
      <td class="cn">${term.cn}</td>
      <td class="en">${term.en}</td>
      <td><span class="cat-badge">${catLabel}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// ============================================================
// NOTE: The functions below (getListings through renderComments)
// were accidentally nested inside renderGlossary above due to a
// missing closing brace. They've been moved to the global scope.
// ============================================================

// ===== Listings Storage =====
function getListings() {
  try { return JSON.parse(localStorage.getItem('mcg_listings') || '[]'); }
  catch { return []; }
}

function saveListing(listing) {
  const listings = getListings();
  listings.unshift(listing);
  localStorage.setItem('mcg_listings', JSON.stringify(listings));
  renderListings();
}

function deleteListing(id) {
  let listings = getListings();
  listings = listings.filter(l => l.id !== id);
  localStorage.setItem('mcg_listings', JSON.stringify(listings));
  renderListings();
}

function renderListings() {
  const container = document.getElementById('listings-container');
  if (!container) return;
  const listings = getListings();
  container.innerHTML = '';
  
  if (listings.length === 0) {
    container.innerHTML = `<p class="empty-state">${t('listings_empty')}</p>`;
    return;
  }
  
  listings.forEach(l => {
    const div = document.createElement('div');
    div.className = 'listing-card';
    
    // Generate image gallery HTML if images exist
    let imagesHtml = '';
    if (l.images && l.images.length > 0) {
      imagesHtml = '<div class="listing-images">';
      l.images.forEach(img => {
        imagesHtml += `<img src="${img}" class="listing-thumb" onclick="this.classList.toggle('expanded')">`;
      });
      imagesHtml += '</div>';
    }
    
    div.innerHTML = `
      <h4>${l.title}</h4>
      ${imagesHtml}
      <div class="listing-meta">
        <span>📅 ${l.year}</span>
        <span class="price-tag">💰 ${l.price} MMK</span>
        ${l.mileage ? `<span>📏 ${l.mileage} ${t('listings_km')}</span>` : ''}
        ${l.location ? `<span>📍 ${l.location}</span>` : ''}
      </div>
      ${l.description ? `<p class="listing-desc">${l.description}</p>` : ''}
      <p class="listing-contact"><strong>${t('form_name')}:</strong> ${l.contact}</p>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <p class="listing-date">${l.date}</p>
        <button class="btn-cancel" onclick="deleteListing(${l.id})">🗑️ ${t('listings_delete')}</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function loadListings() { renderListings(); }

// ===== Inspection Bookings Storage =====
function getBookings() {
  try { return JSON.parse(localStorage.getItem('mcg_bookings') || '[]'); }
  catch { return []; }
}

function saveBooking(booking) {
  const bookings = getBookings();
  bookings.unshift(booking);
  localStorage.setItem('mcg_bookings', JSON.stringify(bookings));
  renderBookings();
}

function cancelBooking(id) {
  let bookings = getBookings();
  bookings = bookings.filter(b => b.id !== id);
  localStorage.setItem('mcg_bookings', JSON.stringify(bookings));
  renderBookings();
}

function renderBookings() {
  const container = document.getElementById('bookings-container');
  if (!container) return;
  const bookings = getBookings();
  container.innerHTML = '';
  
  if (bookings.length === 0) {
    container.innerHTML = `<p class="empty-state">${t('inspection_empty')}</p>`;
    return;
  }
  
  bookings.forEach(b => {
    const div = document.createElement('div');
    div.className = 'booking-card';
    div.innerHTML = `
      <div class="booking-header">
        <span class="booking-car">${b.carModel} (${b.carYear})</span>
        <span class="booking-badge">✅ ${t('inspection_confirmed')}</span>
      </div>
      <div class="booking-details">
        <span>📅 ${b.date}</span>
        <span>⏰ ${b.timeSlot}</span>
        <span>👤 ${b.name}</span>
        <span>📞 ${b.phone}</span>
      </div>
      ${b.notes ? `<p style="font-size:0.85rem;color:var(--text-light);margin-top:6px;">📝 ${b.notes}</p>` : ''}
      <button class="btn-cancel" onclick="cancelBooking(${b.id})">❌ ${t('inspection_cancel')}</button>
    `;
    container.appendChild(div);
  });
}

function loadBookings() { renderBookings(); }

// ===== Comments Storage =====
function getComments() {
  try { return JSON.parse(localStorage.getItem('mcg_comments') || '[]'); }
  catch { return []; }
}

function saveComment(comment) {
  const comments = getComments();
  comments.unshift(comment);
  localStorage.setItem('mcg_comments', JSON.stringify(comments));
  renderComments();
}

function deleteComment(id) {
  let comments = getComments();
  comments = comments.filter(c => c.id !== id);
  localStorage.setItem('mcg_comments', JSON.stringify(comments));
  renderComments();
}

function renderComments() {
  const container = document.getElementById('comments-container');
  if (!container) return;
  const comments = getComments();
  container.innerHTML = '';
  
  if (comments.length === 0) {
    container.innerHTML = `<p class="empty-state">${t('comments_empty')}</p>`;
    return;
  }
  
  comments.forEach(c => {
    const div = document.createElement('div');
    div.className = 'comment-card';
    const initial = c.name.charAt(0).toUpperCase();
    div.innerHTML = `
      <div class="comment-header">
        <div class="comment-author">
          <span class="comment-avatar">${initial}</span>
          ${c.name}
        </div>
        <span class="comment-date">${c.date}</span>
      </div>
      <p class="comment-text">${c.text}</p>
      <button class="btn-cancel" onclick="deleteComment(${c.id})" style="margin-top:10px;">🗑️ ${t('comments_delete')}</button>
    `;
    container.appendChild(div);
  });
}

function loadComments() { renderComments(); }

