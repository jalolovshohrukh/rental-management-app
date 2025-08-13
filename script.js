/*
 * Rental Management App
 *
 * This script implements a simple property rental management system
 * completely on the client using plain JavaScript. Data is stored in
 * memory (no backend). It supports multi‑language (English, Russian,
 * Tajik), tenant and property management, rental contract creation with
 * recurring payment schedules, expense tracking, a dashboard with
 * occupancy statistics and cash flow, and a profile page. A search
 * bar is available on every page to quickly find tenants or
 * properties. Modals are used for add/edit forms.
 */

// Current language selection
let currentLanguage = 'en';

// Translation dictionary
const translations = {
  en: {
    dashboard: 'Dashboard',
    properties: 'Properties',
    tenants: 'Tenants',
    rent: 'Rent',
    expenses: 'Expenses',
    profile: 'Profile',
    search_placeholder: 'Search...',
    add_property: 'Add Property',
    edit: 'Edit',
    delete: 'Delete',
    start_rent: 'Start Rent',
    stop_rent: 'End Rent',
    empty: 'Empty',
    filled: 'Filled',
    monthly_cashflow: 'Monthly Cash Flow',
    unpaid_properties: 'Unpaid Properties',
    name: 'Name',
    price: 'Price',
    status: 'Status',
    actions: 'Actions',
    add_tenant: 'Add Tenant',
    phone: 'Phone',
    email: 'Email',
    save: 'Save',
    cancel: 'Cancel',
    start_date: 'Start Date',
    end_date: 'End Date',
    frequency: 'Frequency',
    weekly: 'Weekly',
    biweekly: '2 Weeks',
    monthly: 'Monthly',
    six_months: 'Every 6 Months',
    yearly: 'Yearly',
    rent_price: 'Rent Price',
    tenant: 'Tenant',
    property: 'Property',
    add_expense: 'Add Expense',
    description: 'Description',
    amount: 'Amount',
    date: 'Date',
    update_profile: 'Update Profile',
    email_address: 'Email Address',
    password: 'Password',
    profile_saved: 'Profile updated successfully.',
    no_properties: 'No properties yet. Click Add Property to create one.',
    no_tenants: 'No tenants yet. Click Add Tenant to create one.',
    no_rents: 'No rental history.',
    add: 'Add',
    edit_property: 'Edit Property',
    edit_tenant: 'Edit Tenant',
    add_rent: 'Create Rent',
    add_expenses: 'Add Expense',
    expenses_page: 'Expenses',
    property_details: 'Property Details',
    rents: 'Rental History',
    payments: 'Payments',
    payment_due: 'Due Date',
    payment_status: 'Status',
    paid: 'Paid',
    unpaid: 'Unpaid',
    mark_paid: 'Mark as Paid',
    property_name: 'Property Name',
    tenant_name: 'Tenant Name',
    call: 'Call',
    cash_flow_chart: 'Cash Flow Summary',
    expenses_chart: 'Expenses Summary',
    total_expenses: 'Total Expenses',
    delete_confirm: 'Are you sure?',
    ok: 'OK',
    cancel_btn: 'Cancel',
    required: 'required'
    ,
    latitude: 'Latitude',
    longitude: 'Longitude',
    map: 'Map'
    ,
    unit_performance: 'Unit Performance',
    paid_amount: 'Paid',
    unpaid_amount: 'Unpaid',
    expenses_category_summary: 'Expenses by Category',
    category: 'Category',
    maintenance: 'Maintenance',
    utilities: 'Utilities',
    taxes: 'Taxes',
    insurance: 'Insurance',
    other: 'Other',
    role: 'Role',
    manager: 'Manager',
    accountant: 'Accountant',
    viewer: 'Viewer'
  },
  ru: {
    dashboard: 'Панель',
    properties: 'Объекты',
    tenants: 'Арендаторы',
    rent: 'Аренда',
    expenses: 'Расходы',
    profile: 'Профиль',
    search_placeholder: 'Поиск...',
    add_property: 'Добавить объект',
    edit: 'Редактировать',
    delete: 'Удалить',
    start_rent: 'Начать аренду',
    stop_rent: 'Закончить аренду',
    empty: 'Свободно',
    filled: 'Занято',
    monthly_cashflow: 'Денежный поток',
    unpaid_properties: 'Долги',
    name: 'Имя',
    price: 'Цена',
    status: 'Статус',
    actions: 'Действия',
    add_tenant: 'Добавить арендатора',
    phone: 'Телефон',
    email: 'Эл. почта',
    save: 'Сохранить',
    cancel: 'Отмена',
    start_date: 'Дата начала',
    end_date: 'Дата окончания',
    frequency: 'Периодичность',
    weekly: 'Еженедельно',
    biweekly: '2 недели',
    monthly: 'Ежемесячно',
    six_months: 'Каждые 6 месяцев',
    yearly: 'Ежегодно',
    rent_price: 'Стоимость',
    tenant: 'Арендатор',
    property: 'Объект',
    add_expense: 'Добавить расход',
    description: 'Описание',
    amount: 'Сумма',
    date: 'Дата',
    update_profile: 'Обновить профиль',
    email_address: 'Электронная почта',
    password: 'Пароль',
    profile_saved: 'Профиль обновлен.',
    no_properties: 'Нет объектов. Нажмите Добавить объект.',
    no_tenants: 'Нет арендаторов. Нажмите Добавить арендатора.',
    no_rents: 'Нет истории аренды.',
    add: 'Добавить',
    edit_property: 'Редактировать объект',
    edit_tenant: 'Редактировать арендатора',
    add_rent: 'Создать аренду',
    add_expenses: 'Добавить расход',
    expenses_page: 'Расходы',
    property_details: 'Информация об объекте',
    rents: 'История',
    payments: 'Платежи',
    payment_due: 'Срок',
    payment_status: 'Статус',
    paid: 'Оплачено',
    unpaid: 'Не оплачено',
    mark_paid: 'Отметить оплачено',
    property_name: 'Название объекта',
    tenant_name: 'Имя арендатора',
    call: 'Позвонить',
    cash_flow_chart: 'Поток доходов',
    expenses_chart: 'Сводка расходов',
    total_expenses: 'Общие расходы',
    delete_confirm: 'Вы уверены?',
    ok: 'OK',
    cancel_btn: 'Отмена',
    required: 'обязательно'
    ,
    latitude: 'Широта',
    longitude: 'Долгота',
    map: 'Карта'
    ,
    unit_performance: 'Эффективность объектов',
    paid_amount: 'Оплачено',
    unpaid_amount: 'Не оплачено',
    expenses_category_summary: 'Расходы по категориям',
    category: 'Категория',
    maintenance: 'Обслуживание',
    utilities: 'Коммунальные',
    taxes: 'Налоги',
    insurance: 'Страхование',
    other: 'Другое',
    role: 'Роль',
    manager: 'Менеджер',
    accountant: 'Бухгалтер',
    viewer: 'Наблюдатель'
  },
  tj: {
    dashboard: 'Асосӣ',
    properties: 'Амвол',
    tenants: 'Иҷоранишинҳо',
    rent: 'Иҷора',
    expenses: 'Хароҷот',
    profile: 'Профил',
    search_placeholder: 'Ҷустуҷӯ...',
    add_property: 'Иловаи амвол',
    edit: 'Ислоҳ',
    delete: 'Нест',
    start_rent: 'Оғози иҷора',
    stop_rent: 'Анҷоми иҷора',
    empty: 'Холӣ',
    filled: 'Пур',
    monthly_cashflow: 'Даромади моҳӣ',
    unpaid_properties: 'Пардохт нашуда',
    name: 'Ном',
    price: 'Нарх',
    status: 'Ҳолат',
    actions: 'Амалиётҳо',
    add_tenant: 'Иловаи иҷоранишин',
    phone: 'Телефон',
    email: 'Почта',
    save: 'Нигоҳ доштан',
    cancel: 'Бекор',
    start_date: 'Санаи оғоз',
    end_date: 'Санаи интиҳо',
    frequency: 'Фосила',
    weekly: 'Ҳар ҳафта',
    biweekly: 'Ҳар 2 ҳафта',
    monthly: 'Ҳар моҳ',
    six_months: 'Ҳар 6 моҳ',
    yearly: 'Ҳар сол',
    rent_price: 'Нархи иҷора',
    tenant: 'Иҷоранишин',
    property: 'Амвол',
    add_expense: 'Иловаи хароҷот',
    description: 'Тавсиф',
    amount: 'Маблаг',
    date: 'Сана',
    update_profile: 'Навсозии профил',
    email_address: 'Суроғаи электронӣ',
    password: 'Гузарвожа',
    profile_saved: 'Профил навсозӣ шуд.',
    no_properties: 'Амвол нест. Илова кунед.',
    no_tenants: 'Иҷоранишинҳо нестанд. Илова кунед.',
    no_rents: 'Таърих нест.',
    add: 'Илова',
    edit_property: 'Ислоҳи амвол',
    edit_tenant: 'Ислоҳи иҷоранишин',
    add_rent: 'Создани иҷора',
    add_expenses: 'Иловаи хароҷот',
    expenses_page: 'Хароҷот',
    property_details: 'Тафсилоти амвол',
    rents: 'Таърихи иҷора',
    payments: 'Пардохтҳо',
    payment_due: 'Мӯҳлат',
    payment_status: 'Ҳолат',
    paid: 'Пардохта шуд',
    unpaid: 'Пардохт нашуда',
    mark_paid: 'Ҳамчун пардохта',
    property_name: 'Номи амвол',
    tenant_name: 'Номи иҷоранишин',
    call: 'Занг',
    cash_flow_chart: 'Ҳисоботи даромад',
    expenses_chart: 'Ҳисоботи хароҷот',
    total_expenses: 'Ҳамаги хароҷот',
    delete_confirm: 'Бовар доред?',
    ok: 'OK',
    cancel_btn: 'Бекор',
    required: 'талаб'
    ,
    latitude: 'Паҳноӣ',
    longitude: 'Дарозӣ',
    map: 'Харита'
    ,
    unit_performance: 'Самаранокии амвол',
    paid_amount: 'Пардохта шуд',
    unpaid_amount: 'Пардохт нашуда',
    expenses_category_summary: 'Хароҷот аз рӯи категорияҳо',
    category: 'Категория',
    maintenance: 'Таъмир',
    utilities: 'Хизматрасониҳо',
    taxes: 'Андозҳо',
    insurance: 'Суғурта',
    other: 'Дигар',
    role: 'Нақш',
    manager: 'Мудир',
    accountant: 'Муҳосиб',
    viewer: 'Нозир'
  }
};

// Data storage
let nextTenantId = 1;
let nextPropertyId = 1;
let nextRentId = 1;
let nextExpenseId = 1;

const tenants = [];
const properties = [];
const rents = [];
const expenses = [];
// User profile stores login details and role for access control. Default role is manager.
const userProfile = { email: '', password: '', role: 'manager' };

// Predefined expense categories. These identifiers map to translation keys
// defined in the `translations` dictionary above. When recording expenses
// the category value will correspond to one of these keys.
const expenseCategories = ['maintenance', 'utilities', 'taxes', 'insurance', 'other'];

// Utility to translate keys
function t(key) {
  const langDict = translations[currentLanguage] || translations.en;
  return langDict[key] || key;
}

// Initialize application
function init() {
  // Set initial language labels
  updateNavLabels();
  document.getElementById('languageSelect').value = currentLanguage;
  document.getElementById('searchInput').placeholder = t('search_placeholder');

  // Event listeners for navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.getAttribute('data-page');
      renderPage(page);
    });
  });

  // Language selector
  document.getElementById('languageSelect').addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });

  // Search input
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    handleSearch(searchInput.value.trim());
  });

  // Set default page
  renderPage('dashboard');
}

// Set language and re-render UI
function setLanguage(lang) {
  currentLanguage = lang;
  updateNavLabels();
  document.getElementById('searchInput').placeholder = t('search_placeholder');
  // Re-render current page
  const active = document.querySelector('.nav-btn.active');
  const currentPage = active ? active.getAttribute('data-page') : 'dashboard';
  renderPage(currentPage);
}

// Update navigation button labels
function updateNavLabels() {
  const pages = ['dashboard', 'properties', 'tenants', 'rent', 'expenses', 'profile'];
  document.querySelectorAll('.nav-btn').forEach((btn, idx) => {
    const key = pages[idx];
    btn.textContent = t(key);
  });
}

// Render specific page
function renderPage(page) {
  // Highlight active button
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.getAttribute('data-page') === page) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Clear search results
  clearSearchResults();

  // Render content
  if (page === 'dashboard') {
    renderDashboard();
  } else if (page === 'properties') {
    renderPropertiesPage();
  } else if (page === 'tenants') {
    renderTenantsPage();
  } else if (page === 'rent') {
    renderRentPage();
  } else if (page === 'expenses') {
    renderExpensesPage();
  } else if (page === 'profile') {
    renderProfilePage();
  }
}

// Dashboard page
function renderDashboard() {
  const container = document.getElementById('content');
  container.innerHTML = '';

  // Stats: empty vs filled
  const emptyCount = properties.filter(p => p.status === 'available').length;
  const filledCount = properties.filter(p => p.status === 'rented').length;

  // Stats card
  const statsCard = document.createElement('div');
  statsCard.className = 'card';
  statsCard.innerHTML = `<h3>${t('dashboard')}</h3>`;
  const statsContent = document.createElement('div');
  statsContent.style.display = 'flex';
  statsContent.style.gap = '20px';
  statsContent.innerHTML = `
    <div><strong>${t('properties')}</strong><br>${properties.length}</div>
    <div><strong>${t('empty')}</strong><br>${emptyCount}</div>
    <div><strong>${t('filled')}</strong><br>${filledCount}</div>
  `;
  statsCard.appendChild(statsContent);
  container.appendChild(statsCard);

  // Map card (if Leaflet loaded)
  const mapCard = document.createElement('div');
  mapCard.className = 'card';
  mapCard.innerHTML = `<h3>${t('map')}</h3>`;
  const mapDiv = document.createElement('div');
  mapDiv.id = 'map';
  mapDiv.className = 'map-container';
  mapCard.appendChild(mapDiv);
  container.appendChild(mapCard);

  // Cash flow summary card
  const cashFlowData = computeCashFlow();
  const cashCard = document.createElement('div');
  cashCard.className = 'card';
  cashCard.innerHTML = `<h3>${t('cash_flow_chart')}</h3>`;
  const cashTable = document.createElement('table');
  const cashHeader = document.createElement('tr');
  cashHeader.innerHTML = `<th>${t('date')}</th><th>${t('amount')}</th>`;
  cashTable.appendChild(cashHeader);
  cashFlowData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.month}</td><td>${item.amount.toFixed(2)}</td>`;
    cashTable.appendChild(row);
  });
  cashCard.appendChild(cashTable);
  container.appendChild(cashCard);

  // Expenses summary card
  const expenseSummary = computeExpenseSummary();
  const expCard = document.createElement('div');
  expCard.className = 'card';
  expCard.innerHTML = `<h3>${t('expenses_chart')}</h3>`;
  const expTable = document.createElement('table');
  const expHeader = document.createElement('tr');
  expHeader.innerHTML = `<th>${t('date')}</th><th>${t('amount')}</th>`;
  expTable.appendChild(expHeader);
  expenseSummary.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${item.month}</td><td>${item.amount.toFixed(2)}</td>`;
    expTable.appendChild(row);
  });
  expCard.appendChild(expTable);
  container.appendChild(expCard);

  // Unpaid properties card
  // Due payments card (overdue or upcoming)
  const dueList = computeDuePayments();
  const unpaidCard = document.createElement('div');
  unpaidCard.className = 'card';
  unpaidCard.innerHTML = `<h3>${t('unpaid_properties')}</h3>`;
  if (dueList.length === 0) {
    const p = document.createElement('p');
    p.textContent = '-';
    unpaidCard.appendChild(p);
  } else {
    const table = document.createElement('table');
    const header = document.createElement('tr');
    header.innerHTML = `<th>${t('property_name')}</th><th>${t('tenant_name')}</th><th>${t('amount')}</th><th>${t('date')}</th><th>${t('actions')}</th>`;
    table.appendChild(header);
    // Sort overdue first then upcoming
    dueList.sort((a, b) => {
      const order = { overdue: 0, upcoming: 1 };
      return order[a.status] - order[b.status];
    });
    dueList.forEach(item => {
      const row = document.createElement('tr');
      row.className = item.status;
      const callBtn = document.createElement('a');
      callBtn.href = `tel:${item.phone}`;
      callBtn.textContent = t('call');
      row.appendChild(createCell(item.propertyName));
      row.appendChild(createCell(item.tenantName));
      row.appendChild(createCell(item.amount.toFixed(2)));
      row.appendChild(createCell(item.dueDate));
      const actionCell = document.createElement('td');
      actionCell.appendChild(callBtn);
      row.appendChild(actionCell);
      table.appendChild(row);
    });
    unpaidCard.appendChild(table);
  }
  container.appendChild(unpaidCard);

  // Unit performance card
  const perfCard = document.createElement('div');
  perfCard.className = 'card';
  perfCard.innerHTML = `<h3>${t('unit_performance')}</h3>`;
  const perfCanvas = document.createElement('canvas');
  perfCanvas.id = 'unitChart';
  perfCanvas.height = 250;
  perfCard.appendChild(perfCanvas);
  container.appendChild(perfCard);

  // Expenses by category card
  const catCard = document.createElement('div');
  catCard.className = 'card';
  catCard.innerHTML = `<h3>${t('expenses_category_summary')}</h3>`;
  const catCanvas = document.createElement('canvas');
  catCanvas.id = 'expenseCategoryChart';
  catCanvas.height = 250;
  catCard.appendChild(catCanvas);
  container.appendChild(catCard);

  // After DOM update, render charts and map
  setTimeout(() => {
    renderMap();
    renderUnitChart();
    renderExpenseCategoryChart();
  }, 0);
}

// Global variable for Leaflet map instance
let leafletMap;

/**
 * Render an interactive map on the dashboard using Leaflet.
 *
 * This function initializes a Leaflet map (if not already created) inside
 * the element with id="map" on the dashboard. It clears any existing map
 * instance, sets a default view, and adds markers for each property that
 * has latitude and longitude specified. Clicking a marker shows the
 * property name in a popup. If no properties have coordinates, the map
 * centers on a default location (Dushanbe) to avoid an empty view.
 */
function renderMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;
  // If a map instance already exists, remove it to avoid duplicates
  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }
  // Initialize map with default center (Dushanbe) and zoom
  const defaultCenter = [38.5598, 68.7870];
  leafletMap = L.map(mapContainer).setView(defaultCenter, 12);
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(leafletMap);
  // Filter properties with coordinates
  const coords = properties.filter(p => typeof p.lat === 'number' && typeof p.lng === 'number');
  if (coords.length > 0) {
    // Compute average center for zooming
    let sumLat = 0;
    let sumLng = 0;
    coords.forEach(prop => {
      sumLat += prop.lat;
      sumLng += prop.lng;
      // Create marker with popup
      L.marker([prop.lat, prop.lng]).addTo(leafletMap)
        .bindPopup(`<strong>${prop.name}</strong><br>${t('price')}: ${prop.price.toFixed(2)}`);
    });
    const avgLat = sumLat / coords.length;
    const avgLng = sumLng / coords.length;
    leafletMap.setView([avgLat, avgLng], 12);
  }
}

// Global Chart instances to allow destroying/recreating
let unitChartInstance;
let expenseCategoryChartInstance;

/**
 * Compute performance metrics for each property. Returns an array of objects
 * with name, paid (total paid rent), and unpaid (total outstanding rent).
 */
function computeUnitPerformance() {
  return properties.map(prop => {
    let paidTotal = 0;
    let unpaidTotal = 0;
    rents.forEach(r => {
      if (r.propertyId === prop.id) {
        r.payments.forEach(pay => {
          if (pay.paid) {
            paidTotal += r.price;
          } else {
            unpaidTotal += r.price;
          }
        });
      }
    });
    return { name: prop.name, paid: paidTotal, unpaid: unpaidTotal };
  });
}

/**
 * Render a bar chart showing paid vs unpaid amounts for each property.
 */
function renderUnitChart() {
  const canvas = document.getElementById('unitChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = computeUnitPerformance();
  const labels = data.map(item => item.name);
  const paidData = data.map(item => item.paid);
  const unpaidData = data.map(item => item.unpaid);
  // Destroy previous chart if exists
  if (unitChartInstance) {
    unitChartInstance.destroy();
  }
  unitChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: t('paid_amount'),
          data: paidData,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: t('unpaid_amount'),
          data: unpaidData,
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

/**
 * Compute total expenses grouped by category. Returns array of objects
 * with category key and amount.
 */
function computeExpenseByCategory() {
  const totals = {};
  expenses.forEach(exp => {
    const key = exp.category || 'other';
    totals[key] = (totals[key] || 0) + exp.amount;
  });
  return Object.entries(totals).map(([category, amount]) => ({ category, amount }));
}

/**
 * Render a pie chart summarizing expenses by category.
 */
function renderExpenseCategoryChart() {
  const canvas = document.getElementById('expenseCategoryChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = computeExpenseByCategory();
  const labels = data.map(item => t(item.category));
  const values = data.map(item => item.amount);
  // Colors for categories; extend as needed
  const colors = [
    'rgba(255, 159, 64, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(75, 192, 192, 0.6)'
  ];
  if (expenseCategoryChartInstance) {
    expenseCategoryChartInstance.destroy();
  }
  expenseCategoryChartInstance = new Chart(ctx, {
    type: 'pie',
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: colors.slice(0, values.length),
          borderColor: '#ffffff',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// Helper to create a table cell
function createCell(text) {
  const td = document.createElement('td');
  td.textContent = text;
  return td;
}

// Compute monthly cash flow from paid payments
function computeCashFlow() {
  // map of month (YYYY-MM) to total amount
  const totals = {};
  rents.forEach(rent => {
    rent.payments.forEach(pay => {
      if (pay.paid) {
        const d = new Date(pay.dueDate);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
        totals[key] = (totals[key] || 0) + rent.price;
      }
    });
  });
  const entries = Object.entries(totals).map(([month, amount]) => ({ month, amount }));
  // Sort by month ascending
  entries.sort((a, b) => (a.month > b.month ? 1 : -1));
  return entries;
}

// Compute monthly expense summary
function computeExpenseSummary() {
  const totals = {};
  expenses.forEach(exp => {
    const d = new Date(exp.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    totals[key] = (totals[key] || 0) + exp.amount;
  });
  const entries = Object.entries(totals).map(([month, amount]) => ({ month, amount }));
  entries.sort((a, b) => (a.month > b.month ? 1 : -1));
  return entries;
}

// Compute list of unpaid properties with due payments
// Compute list of due payments (overdue or upcoming) for dashboard alerts.
// Returns an array of objects with propertyName, tenantName, amount, dueDate, phone, and status ('overdue' or 'upcoming').
function computeDuePayments() {
  const list = [];
  const today = new Date();
  rents.forEach(rent => {
    const property = properties.find(p => p.id === rent.propertyId);
    const tenant = tenants.find(tn => tn.id === rent.tenantId);
    if (!property || !tenant) return;
    if (property.status !== 'rented') return;
    rent.payments.forEach(pay => {
      if (pay.paid) return;
      const due = new Date(pay.dueDate);
      const diffDays = (due - today) / (1000 * 60 * 60 * 24);
      let status;
      if (due < today) {
        status = 'overdue';
      } else if (diffDays <= 7) {
        status = 'upcoming';
      } else {
        return;
      }
      list.push({
        propertyName: property.name,
        tenantName: tenant.name,
        amount: rent.price,
        dueDate: pay.dueDate,
        phone: tenant.phone || '',
        status
      });
    });
  });
  return list;
}

/**
 * Determine due status of a property based on its current rent.
 * Returns 'overdue' if any unpaid payment is past due, 'upcoming' if the nearest unpaid payment is within 7 days,
 * otherwise null.
 */
function computePropertyDueStatus(prop) {
  if (!prop || prop.status !== 'rented') return null;
  const rent = rents.find(r => r.propertyId === prop.id);
  if (!rent) return null;
  let nearestDue = null;
  rent.payments.forEach(pay => {
    if (!pay.paid) {
      if (!nearestDue || new Date(pay.dueDate) < new Date(nearestDue.dueDate)) {
        nearestDue = pay;
      }
    }
  });
  if (!nearestDue) return null;
  const dueDate = new Date(nearestDue.dueDate);
  const today = new Date();
  const diffDays = (dueDate - today) / (1000 * 60 * 60 * 24);
  if (dueDate < today) return 'overdue';
  if (diffDays <= 7) return 'upcoming';
  return null;
}

// Properties page
function renderPropertiesPage() {
  const container = document.getElementById('content');
  container.innerHTML = '';
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  const title = document.createElement('h2');
  title.textContent = t('properties');
  const addBtn = document.createElement('button');
  addBtn.className = 'action-btn';
  addBtn.textContent = t('add_property');
  addBtn.addEventListener('click', () => {
    openPropertyForm();
  });
  header.appendChild(title);
  // Only allow adding properties if role is manager
  if (userProfile.role === 'manager') {
    header.appendChild(addBtn);
  }
  container.appendChild(header);

  if (properties.length === 0) {
    const p = document.createElement('p');
    p.textContent = t('no_properties');
    container.appendChild(p);
    return;
  }

  const table = document.createElement('table');
  const thead = document.createElement('tr');
  // Table headers: Name, Price, Status, Tenant, Actions
  thead.innerHTML = `<th>${t('name')}</th><th>${t('price')}</th><th>${t('status')}</th><th>${t('tenant')}</th><th>${t('actions')}</th>`;
  table.appendChild(thead);
  // Build array with due status for sorting
  const list = properties.map(prop => {
    return { prop, status: computePropertyDueStatus(prop) };
  });
  const order = { overdue: 0, upcoming: 1, null: 2, undefined: 2 };
  list.sort((a, b) => order[a.status] - order[b.status]);
  list.forEach(item => {
    const prop = item.prop;
    const dueStatus = item.status;
    const row = document.createElement('tr');
    if (dueStatus) row.className = dueStatus;
    row.appendChild(createCell(prop.name));
    row.appendChild(createCell(prop.price.toFixed(2)));
    row.appendChild(createCell(t(prop.status === 'available' ? 'empty' : 'filled')));
    // Tenant info
    let tenantInfo = '-';
    if (prop.status === 'rented') {
      const rentObj = rents.find(r => r.propertyId === prop.id);
      if (rentObj) {
        const tenant = tenants.find(tn => tn.id === rentObj.tenantId);
        if (tenant) {
          tenantInfo = `${tenant.name}`;
          if (tenant.phone) tenantInfo += ` (${tenant.phone})`;
        }
      }
    }
    row.appendChild(createCell(tenantInfo));
    // Actions
    const actions = document.createElement('td');
    // Manager-only actions
    if (userProfile.role === 'manager') {
      // Edit button
      const editBtn = document.createElement('button');
      editBtn.className = 'action-btn';
      editBtn.textContent = t('edit');
      editBtn.addEventListener('click', () => {
        openPropertyForm(prop);
      });
      actions.appendChild(editBtn);
      // Delete button
      const delBtn = document.createElement('button');
      delBtn.className = 'action-btn delete-btn';
      delBtn.textContent = t('delete');
      delBtn.addEventListener('click', () => {
        if (confirm(t('delete_confirm'))) {
          deleteProperty(prop.id);
        }
      });
      actions.appendChild(delBtn);
      // Start or stop rent
      if (prop.status === 'available') {
        const startBtn = document.createElement('button');
        startBtn.className = 'action-btn';
        startBtn.textContent = t('start_rent');
        startBtn.addEventListener('click', () => {
          openRentForm({ propertyId: prop.id });
        });
        actions.appendChild(startBtn);
      } else {
        const rentObj = rents.find(r => r.propertyId === prop.id && prop.status === 'rented');
        const stopBtn = document.createElement('button');
        stopBtn.className = 'action-btn';
        stopBtn.textContent = t('stop_rent');
        stopBtn.addEventListener('click', () => {
          if (rentObj) {
            endRent(rentObj);
          }
        });
        actions.appendChild(stopBtn);
      }
    }
    // Details button (available to all roles)
    const detailBtn = document.createElement('button');
    detailBtn.className = 'action-btn';
    detailBtn.textContent = 'Details';
    detailBtn.addEventListener('click', () => {
      renderPropertyDetail(prop.id);
    });
    actions.appendChild(detailBtn);
    row.appendChild(actions);
    table.appendChild(row);
  });
  container.appendChild(table);
}

// Render individual property detail with rental history and payments
function renderPropertyDetail(propertyId) {
  const property = properties.find(p => p.id === propertyId);
  if (!property) return;
  const container = document.getElementById('content');
  container.innerHTML = '';
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-between';
  const title = document.createElement('h2');
  title.textContent = `${t('property_details')}: ${property.name}`;
  const backBtn = document.createElement('button');
  backBtn.className = 'action-btn';
  backBtn.textContent = '←';
  backBtn.addEventListener('click', () => {
    renderPage('properties');
  });
  header.appendChild(title);
  header.appendChild(backBtn);
  container.appendChild(header);

  // Property info
  const info = document.createElement('p');
  info.textContent = `${t('price')}: ${property.price.toFixed(2)} | ${t('status')}: ${t(property.status === 'available' ? 'empty' : 'filled')}`;
  container.appendChild(info);

  // Rental history
  const rentHistory = rents.filter(r => r.propertyId === property.id);
  const rentSection = document.createElement('div');
  rentSection.innerHTML = `<h3>${t('rents')}</h3>`;
  if (rentHistory.length === 0) {
    const p = document.createElement('p');
    p.textContent = t('no_rents');
    rentSection.appendChild(p);
  } else {
    rentHistory.forEach(rent => {
      const tenant = tenants.find(tn => tn.id === rent.tenantId);
      const card = document.createElement('div');
      card.style.border = '1px solid #ccc';
      card.style.padding = '10px';
      card.style.marginBottom = '10px';
      card.style.borderRadius = '4px';
      const tenantName = tenant ? tenant.name : '';
      const tenantPhone = tenant && tenant.phone ? tenant.phone : '-';
      card.innerHTML = `<strong>${t('tenant')}: ${tenantName}</strong><br>
        ${t('phone')}: ${tenantPhone}<br>
        ${t('start_date')}: ${rent.startDate}<br>
        ${t('end_date')}: ${rent.endDate || '-'}<br>
        ${t('frequency')}: ${t(rent.frequency)}<br>
        ${t('rent_price')}: ${rent.price.toFixed(2)}`;
      // Payments table
      const paymentsTable = document.createElement('table');
      const paymentHeader = document.createElement('tr');
      paymentHeader.innerHTML = `<th>${t('payment_due')}</th><th>${t('payment_status')}</th><th>${t('actions')}</th>`;
      paymentsTable.appendChild(paymentHeader);
      rent.payments.forEach(pay => {
        const pr = document.createElement('tr');
        const statusText = pay.paid ? t('paid') : t('unpaid');
        pr.appendChild(createCell(pay.dueDate));
        pr.appendChild(createCell(statusText));
        const actionCell = document.createElement('td');
        if (!pay.paid && (userProfile.role === 'manager' || userProfile.role === 'accountant')) {
          const markBtn = document.createElement('button');
          markBtn.className = 'action-btn';
          markBtn.textContent = t('mark_paid');
          markBtn.addEventListener('click', () => {
            pay.paid = true;
            renderPropertyDetail(propertyId);
          });
          actionCell.appendChild(markBtn);
        }
        pr.appendChild(actionCell);
        paymentsTable.appendChild(pr);
      });
      card.appendChild(paymentsTable);
      rentSection.appendChild(card);
    });
  }
  container.appendChild(rentSection);

  // Expenses for this property
  const propertyExpenses = expenses.filter(e => e.propertyId === property.id);
  const expSection = document.createElement('div');
  expSection.innerHTML = `<h3>${t('expenses')}</h3>`;
  const addExpBtn = document.createElement('button');
  addExpBtn.className = 'action-btn';
  addExpBtn.textContent = t('add_expense');
  addExpBtn.addEventListener('click', () => {
    openExpenseForm({ propertyId: property.id });
  });
  // Only show add expense button for manager or accountant
  if (userProfile.role === 'manager' || userProfile.role === 'accountant') {
    expSection.appendChild(addExpBtn);
  }
  if (propertyExpenses.length === 0) {
    const p = document.createElement('p');
    p.textContent = '-';
    expSection.appendChild(p);
  } else {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `<th>${t('date')}</th><th>${t('category')}</th><th>${t('description')}</th><th>${t('amount')}</th>`;
    table.appendChild(headerRow);
    propertyExpenses.forEach(exp => {
      const row = document.createElement('tr');
      const catName = exp.category ? t(exp.category) : '';
      row.innerHTML = `<td>${exp.date}</td><td>${catName}</td><td>${exp.description}</td><td>${exp.amount.toFixed(2)}</td>`;
      table.appendChild(row);
    });
    expSection.appendChild(table);
  }
  container.appendChild(expSection);
}

// Delete a property
function deleteProperty(id) {
  const index = properties.findIndex(p => p.id === id);
  if (index >= 0) {
    // Remove any rents related to this property
    for (let i = rents.length - 1; i >= 0; i--) {
      if (rents[i].propertyId === id) {
        rents.splice(i, 1);
      }
    }
    // Remove any expenses related to this property
    for (let i = expenses.length - 1; i >= 0; i--) {
      if (expenses[i].propertyId === id) {
        expenses.splice(i, 1);
      }
    }
    properties.splice(index, 1);
    renderPage('properties');
  }
}

// End rent (stop)
function endRent(rent) {
  const today = new Date();
  rent.endDate = today.toISOString().split('T')[0];
  // Mark property available
  const property = properties.find(p => p.id === rent.propertyId);
  if (property) property.status = 'available';
  renderPage('properties');
}

// Tenants page
function renderTenantsPage() {
  const container = document.getElementById('content');
  container.innerHTML = '';
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  const title = document.createElement('h2');
  title.textContent = t('tenants');
  const addBtn = document.createElement('button');
  addBtn.className = 'action-btn';
  addBtn.textContent = t('add_tenant');
  addBtn.addEventListener('click', () => {
    openTenantForm();
  });
  header.appendChild(title);
  // Only allow adding tenants for manager role
  if (userProfile.role === 'manager') {
    header.appendChild(addBtn);
  }
  container.appendChild(header);
  if (tenants.length === 0) {
    const p = document.createElement('p');
    p.textContent = t('no_tenants');
    container.appendChild(p);
    return;
  }
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `<th>${t('name')}</th><th>${t('phone')}</th><th>${t('email')}</th><th>${t('actions')}</th>`;
  table.appendChild(headerRow);
  tenants.forEach(tenant => {
    const row = document.createElement('tr');
    row.appendChild(createCell(tenant.name));
    row.appendChild(createCell(tenant.phone || ''));
    row.appendChild(createCell(tenant.email || ''));
    const actions = document.createElement('td');
    // Edit button available for manager
    if (userProfile.role === 'manager') {
      const editBtn = document.createElement('button');
      editBtn.className = 'action-btn';
      editBtn.textContent = t('edit');
      editBtn.addEventListener('click', () => {
        openTenantForm(tenant);
      });
      actions.appendChild(editBtn);
      // Delete
      const delBtn = document.createElement('button');
      delBtn.className = 'action-btn delete-btn';
      delBtn.textContent = t('delete');
      delBtn.addEventListener('click', () => {
        if (confirm(t('delete_confirm'))) {
          deleteTenant(tenant.id);
        }
      });
      actions.appendChild(delBtn);
    }
    row.appendChild(actions);
    table.appendChild(row);
  });
  container.appendChild(table);
}

// Delete tenant
function deleteTenant(id) {
  const index = tenants.findIndex(t => t.id === id);
  if (index >= 0) {
    // Remove rents for this tenant
    for (let i = rents.length - 1; i >= 0; i--) {
      if (rents[i].tenantId === id) {
        // free property
        const prop = properties.find(p => p.id === rents[i].propertyId);
        if (prop) prop.status = 'available';
        rents.splice(i, 1);
      }
    }
    tenants.splice(index, 1);
    renderPage('tenants');
  }
}

// Rent page (create new rental contract)
function renderRentPage() {
  const container = document.getElementById('content');
  container.innerHTML = '';
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  const title = document.createElement('h2');
  title.textContent = t('rent');
  const addBtn = document.createElement('button');
  addBtn.className = 'action-btn';
  addBtn.textContent = t('add_rent');
  addBtn.addEventListener('click', () => {
    openRentForm();
  });
  header.appendChild(title);
  header.appendChild(addBtn);
  container.appendChild(header);
  // List current rents
  if (rents.length === 0) {
    const p = document.createElement('p');
    p.textContent = t('no_rents');
    container.appendChild(p);
    return;
  }
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `<th>${t('property')}</th><th>${t('tenant')}</th><th>${t('start_date')}</th><th>${t('end_date')}</th><th>${t('price')}</th><th>${t('frequency')}</th><th>${t('status')}</th>`;
  table.appendChild(headerRow);
  rents.forEach(rent => {
    const prop = properties.find(p => p.id === rent.propertyId);
    const tenant = tenants.find(tn => tn.id === rent.tenantId);
    const row = document.createElement('tr');
    row.appendChild(createCell(prop ? prop.name : ''));
    row.appendChild(createCell(tenant ? tenant.name : ''));
    row.appendChild(createCell(rent.startDate));
    row.appendChild(createCell(rent.endDate || '-'));
    row.appendChild(createCell(rent.price.toFixed(2)));
    row.appendChild(createCell(t(rent.frequency)));
    // status: if property available (ended) or rented
    const status = prop && prop.status === 'rented' && (!rent.endDate || new Date(rent.endDate) >= new Date()) ? t('filled') : t('empty');
    row.appendChild(createCell(status));
    table.appendChild(row);
  });
  container.appendChild(table);
}

// Expenses page
function renderExpensesPage() {
  const container = document.getElementById('content');
  container.innerHTML = '';
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  const title = document.createElement('h2');
  title.textContent = t('expenses');
  const addBtn = document.createElement('button');
  addBtn.className = 'action-btn';
  addBtn.textContent = t('add_expense');
  addBtn.addEventListener('click', () => {
    openExpenseForm();
  });
  header.appendChild(title);
  // Only allow adding expenses for manager or accountant roles
  if (userProfile.role === 'manager' || userProfile.role === 'accountant') {
    header.appendChild(addBtn);
  }
  container.appendChild(header);
  if (expenses.length === 0) {
    const p = document.createElement('p');
    p.textContent = '-';
    container.appendChild(p);
    return;
  }
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `<th>${t('property')}</th><th>${t('date')}</th><th>${t('category')}</th><th>${t('description')}</th><th>${t('amount')}</th>`;
  table.appendChild(headerRow);
  expenses.forEach(exp => {
    const prop = properties.find(p => p.id === exp.propertyId);
    const row = document.createElement('tr');
    const categoryName = exp.category ? t(exp.category) : '';
    row.innerHTML = `<td>${prop ? prop.name : ''}</td><td>${exp.date}</td><td>${categoryName}</td><td>${exp.description}</td><td>${exp.amount.toFixed(2)}</td>`;
    table.appendChild(row);
  });
  container.appendChild(table);
}

// Profile page
function renderProfilePage() {
  const container = document.getElementById('content');
  container.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = t('profile');
  container.appendChild(title);
  const form = document.createElement('form');
  // Build form fields individually so we can attach event handlers later
  // Email
  const emailLabel = document.createElement('label');
  emailLabel.innerHTML = `${t('email_address')}<br>`;
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.required = true;
  emailInput.value = userProfile.email;
  emailLabel.appendChild(emailInput);
  form.appendChild(emailLabel);
  // Password
  const passLabel = document.createElement('label');
  passLabel.innerHTML = `${t('password')}<br>`;
  const passInput = document.createElement('input');
  passInput.type = 'password';
  passInput.name = 'password';
  passInput.required = true;
  passInput.value = userProfile.password;
  passLabel.appendChild(passInput);
  form.appendChild(passLabel);
  // Role select
  const roleLabel = document.createElement('label');
  roleLabel.innerHTML = `${t('role')}<br>`;
  const roleSelect = document.createElement('select');
  roleSelect.name = 'role';
  ['manager', 'accountant', 'viewer'].forEach(roleKey => {
    const opt = document.createElement('option');
    opt.value = roleKey;
    opt.textContent = t(roleKey);
    if (userProfile.role === roleKey) opt.selected = true;
    roleSelect.appendChild(opt);
  });
  roleLabel.appendChild(roleSelect);
  form.appendChild(roleLabel);
  // Actions
  const actions = document.createElement('div');
  actions.className = 'form-actions';
  const saveBtn = document.createElement('button');
  saveBtn.type = 'submit';
  saveBtn.className = 'save-btn';
  saveBtn.textContent = t('save');
  actions.appendChild(saveBtn);
  form.appendChild(actions);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    userProfile.email = emailInput.value;
    userProfile.password = passInput.value;
    userProfile.role = roleSelect.value;
    alert(t('profile_saved'));
    // Re-render current page to apply role changes
    const active = document.querySelector('.nav-btn.active');
    const currentPage = active ? active.getAttribute('data-page') : 'dashboard';
    renderPage(currentPage);
  });
  container.appendChild(form);
}

// Open property form (add/edit)
function openPropertyForm(property) {
  const isEdit = !!property;
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = isEdit ? t('edit_property') : t('add_property');
  modalContent.appendChild(title);
  const form = document.createElement('form');
  form.innerHTML = '';
  // Name
  const nameLabel = document.createElement('label');
  nameLabel.innerHTML = `${t('name')}<br>`;
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.required = true;
  nameInput.value = property ? property.name : '';
  nameLabel.appendChild(nameInput);
  form.appendChild(nameLabel);
  // Price
  const priceLabel = document.createElement('label');
  priceLabel.innerHTML = `${t('price')}<br>`;
  const priceInput = document.createElement('input');
  priceInput.type = 'number';
  priceInput.step = '0.01';
  priceInput.name = 'price';
  priceInput.required = true;
  priceInput.value = property ? property.price : '';
  priceLabel.appendChild(priceInput);
  form.appendChild(priceLabel);
  // Latitude
  const latLabel = document.createElement('label');
  latLabel.innerHTML = `${t('latitude')}<br>`;
  const latInput = document.createElement('input');
  latInput.type = 'number';
  latInput.step = '0.000001';
  latInput.name = 'latitude';
  latInput.value = property && property.lat !== undefined ? property.lat : '';
  latLabel.appendChild(latInput);
  form.appendChild(latLabel);
  // Longitude
  const lngLabel = document.createElement('label');
  lngLabel.innerHTML = `${t('longitude')}<br>`;
  const lngInput = document.createElement('input');
  lngInput.type = 'number';
  lngInput.step = '0.000001';
  lngInput.name = 'longitude';
  lngInput.value = property && property.lng !== undefined ? property.lng : '';
  lngLabel.appendChild(lngInput);
  form.appendChild(lngLabel);
  // Actions
  const actions = document.createElement('div');
  actions.className = 'form-actions';
  const saveBtn = document.createElement('button');
  saveBtn.type = 'submit';
  saveBtn.className = 'save-btn';
  saveBtn.textContent = t('save');
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'cancel-btn';
  cancelBtn.textContent = t('cancel');
  cancelBtn.addEventListener('click', () => closeModal());
  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);
  form.appendChild(actions);
  // Submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = nameInput.value.trim();
    const priceVal = parseFloat(priceInput.value);
    const latVal = latInput.value !== '' ? parseFloat(latInput.value) : undefined;
    const lngVal = lngInput.value !== '' ? parseFloat(lngInput.value) : undefined;
    if (isEdit) {
      property.name = nameVal;
      property.price = priceVal;
      property.lat = latVal;
      property.lng = lngVal;
    } else {
      const newProp = {
        id: nextPropertyId++,
        name: nameVal,
        price: priceVal,
        status: 'available',
        lat: latVal,
        lng: lngVal
      };
      properties.push(newProp);
    }
    closeModal();
    renderPage('properties');
  });
  modalContent.appendChild(form);
  modal.classList.remove('hidden');
}

// Open tenant form (add/edit)
function openTenantForm(tenant) {
  const isEdit = !!tenant;
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = isEdit ? t('edit_tenant') : t('add_tenant');
  modalContent.appendChild(title);
  const form = document.createElement('form');
  form.innerHTML = `
    <label>${t('name')}<br><input type="text" name="name" value="${tenant ? tenant.name : ''}" required></label>
    <label>${t('phone')}<br><input type="tel" name="phone" value="${tenant ? tenant.phone || '' : ''}"></label>
    <label>${t('email')}<br><input type="email" name="email" value="${tenant ? tenant.email || '' : ''}"></label>
    <div class="form-actions">
      <button type="submit" class="save-btn">${t('save')}</button>
      <button type="button" class="cancel-btn">${t('cancel')}</button>
    </div>
  `;
  form.querySelector('.cancel-btn').addEventListener('click', () => closeModal());
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    const phone = data.get('phone').trim();
    const email = data.get('email').trim();
    if (isEdit) {
      tenant.name = name;
      tenant.phone = phone;
      tenant.email = email;
    } else {
      const newTenant = { id: nextTenantId++, name, phone, email };
      tenants.push(newTenant);
    }
    closeModal();
    renderPage('tenants');
  });
  modalContent.appendChild(form);
  modal.classList.remove('hidden');
}

// Open rent form
function openRentForm(options = {}) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = t('add_rent');
  modalContent.appendChild(title);
  // Build form
  const form = document.createElement('form');
  // Property dropdown
  let propertyOptions = properties.filter(p => p.status === 'available');
  // If propertyId provided, filter to that property
  if (options.propertyId) {
    propertyOptions = properties.filter(p => p.id === options.propertyId);
  }
  const propSelect = document.createElement('select');
  propSelect.name = 'property';
  propertyOptions.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    propSelect.appendChild(opt);
  });
  // Tenant dropdown
  const tenantSelect = document.createElement('select');
  tenantSelect.name = 'tenant';
  // Add option for new tenant
  const newOpt = document.createElement('option');
  newOpt.value = 'new';
  newOpt.textContent = t('add_tenant');
  tenantSelect.appendChild(newOpt);
  tenants.forEach(tnt => {
    const opt = document.createElement('option');
    opt.value = tnt.id;
    opt.textContent = tnt.name;
    tenantSelect.appendChild(opt);
  });

  // Frequency select
  const freqSelect = document.createElement('select');
  freqSelect.name = 'frequency';
  ['weekly','biweekly','monthly','six_months','yearly'].forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = t(key);
    freqSelect.appendChild(opt);
  });

  form.innerHTML = '';
  // Compose form fields using template string is tricky due to inserts; instead we append children
  const propLabel = document.createElement('label');
  propLabel.textContent = t('property');
  propLabel.appendChild(document.createElement('br'));
  propLabel.appendChild(propSelect);
  form.appendChild(propLabel);

  const tenantLabel = document.createElement('label');
  tenantLabel.textContent = t('tenant');
  tenantLabel.appendChild(document.createElement('br'));
  tenantLabel.appendChild(tenantSelect);
  form.appendChild(tenantLabel);

  // New tenant fields (hidden initially)
  const newTenantContainer = document.createElement('div');
  newTenantContainer.style.display = 'none';
  newTenantContainer.innerHTML = `
    <label>${t('name')}<br><input type="text" name="newTenantName" /></label>
    <label>${t('phone')}<br><input type="tel" name="newTenantPhone" /></label>
    <label>${t('email')}<br><input type="email" name="newTenantEmail" /></label>
  `;
  form.appendChild(newTenantContainer);

  tenantSelect.addEventListener('change', () => {
    if (tenantSelect.value === 'new') {
      newTenantContainer.style.display = 'block';
    } else {
      newTenantContainer.style.display = 'none';
    }
  });

  // Start date
  const startLabel = document.createElement('label');
  startLabel.textContent = t('start_date');
  startLabel.appendChild(document.createElement('br'));
  const startInput = document.createElement('input');
  startInput.type = 'date';
  startInput.name = 'startDate';
  // default to today
  const today = new Date().toISOString().split('T')[0];
  startInput.value = today;
  startLabel.appendChild(startInput);
  form.appendChild(startLabel);

  // End date (optional)
  const endLabel = document.createElement('label');
  endLabel.textContent = t('end_date');
  endLabel.appendChild(document.createElement('br'));
  const endInput = document.createElement('input');
  endInput.type = 'date';
  endInput.name = 'endDate';
  endLabel.appendChild(endInput);
  form.appendChild(endLabel);

  // Price
  const priceLabel = document.createElement('label');
  priceLabel.textContent = t('rent_price');
  priceLabel.appendChild(document.createElement('br'));
  const priceInput = document.createElement('input');
  priceInput.type = 'number';
  priceInput.step = '0.01';
  priceInput.name = 'price';
  priceInput.required = true;
  priceLabel.appendChild(priceInput);
  form.appendChild(priceLabel);

  // Frequency
  const freqLabel = document.createElement('label');
  freqLabel.textContent = t('frequency');
  freqLabel.appendChild(document.createElement('br'));
  freqLabel.appendChild(freqSelect);
  form.appendChild(freqLabel);

  // Actions
  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'form-actions';
  const saveBtn = document.createElement('button');
  saveBtn.type = 'submit';
  saveBtn.className = 'save-btn';
  saveBtn.textContent = t('save');
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'cancel-btn';
  cancelBtn.textContent = t('cancel');
  cancelBtn.addEventListener('click', () => closeModal());
  actionsDiv.appendChild(saveBtn);
  actionsDiv.appendChild(cancelBtn);
  form.appendChild(actionsDiv);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Gather data
    const propertyId = parseInt(propSelect.value);
    let tenantId;
    if (tenantSelect.value === 'new') {
      // Create new tenant
      const newName = form.elements['newTenantName'].value.trim();
      if (!newName) {
        alert(t('name') + ' ' + t('required') || 'required');
        return;
      }
      const newPhone = form.elements['newTenantPhone'].value.trim();
      const newEmail = form.elements['newTenantEmail'].value.trim();
      const newTenant = { id: nextTenantId++, name: newName, phone: newPhone, email: newEmail };
      tenants.push(newTenant);
      tenantId = newTenant.id;
    } else {
      tenantId = parseInt(tenantSelect.value);
    }
    const startDate = startInput.value;
    const endDateVal = endInput.value || null;
    const price = parseFloat(priceInput.value);
    const frequency = freqSelect.value;
    // Create rent record
    const rent = {
      id: nextRentId++,
      propertyId,
      tenantId,
      startDate,
      endDate: endDateVal,
      frequency,
      price,
      payments: []
    };
    // Generate payment schedule for one year from start date (12 occurrences)
    rent.payments = generatePayments(startDate, frequency, 12);
    rents.push(rent);
    // Update property status
    const property = properties.find(p => p.id === propertyId);
    if (property) {
      property.status = 'rented';
    }
    closeModal();
    renderPage('rent');
  });

  modalContent.appendChild(form);
  modal.classList.remove('hidden');
}

// Generate payment schedule from start date, given frequency and count
function generatePayments(startDateStr, frequency, count) {
  const list = [];
  let date = new Date(startDateStr);
  for (let i = 0; i < count; i++) {
    // Clone date string as YYYY-MM-DD
    const dueDate = date.toISOString().split('T')[0];
    list.push({ dueDate, paid: false });
    // Increment date according to frequency
    if (frequency === 'weekly') {
      date.setDate(date.getDate() + 7);
    } else if (frequency === 'biweekly') {
      date.setDate(date.getDate() + 14);
    } else if (frequency === 'monthly') {
      date.setMonth(date.getMonth() + 1);
    } else if (frequency === 'six_months') {
      date.setMonth(date.getMonth() + 6);
    } else if (frequency === 'yearly') {
      date.setFullYear(date.getFullYear() + 1);
    }
  }
  return list;
}

// Open expense form
function openExpenseForm(options = {}) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = '';
  const title = document.createElement('h2');
  title.textContent = t('add_expense');
  modalContent.appendChild(title);
  const form = document.createElement('form');
  // Property select
  const propSelect = document.createElement('select');
  propSelect.name = 'property';
  properties.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    if (options.propertyId && p.id === options.propertyId) opt.selected = true;
    propSelect.appendChild(opt);
  });
  // Description
  const descInput = document.createElement('input');
  descInput.type = 'text';
  descInput.name = 'description';
  descInput.required = true;
  // Amount
  const amountInput = document.createElement('input');
  amountInput.type = 'number';
  amountInput.step = '0.01';
  amountInput.name = 'amount';
  amountInput.required = true;
  // Date
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'date';
  dateInput.required = true;
  dateInput.value = new Date().toISOString().split('T')[0];

  // Category select
  const catSelect = document.createElement('select');
  catSelect.name = 'category';
  expenseCategories.forEach(catKey => {
    const opt = document.createElement('option');
    opt.value = catKey;
    opt.textContent = t(catKey);
    catSelect.appendChild(opt);
  });
  // Build form structure
  const propLabel = document.createElement('label');
  propLabel.textContent = t('property');
  propLabel.appendChild(document.createElement('br'));
  propLabel.appendChild(propSelect);
  form.appendChild(propLabel);
  const descLabel = document.createElement('label');
  descLabel.textContent = t('description');
  descLabel.appendChild(document.createElement('br'));
  descLabel.appendChild(descInput);
  form.appendChild(descLabel);
  const amountLabel = document.createElement('label');
  amountLabel.textContent = t('amount');
  amountLabel.appendChild(document.createElement('br'));
  amountLabel.appendChild(amountInput);
  form.appendChild(amountLabel);
  const dateLabel = document.createElement('label');
  dateLabel.textContent = t('date');
  dateLabel.appendChild(document.createElement('br'));
  dateLabel.appendChild(dateInput);
  form.appendChild(dateLabel);

  // Category label
  const categoryLabel = document.createElement('label');
  categoryLabel.textContent = t('category');
  categoryLabel.appendChild(document.createElement('br'));
  categoryLabel.appendChild(catSelect);
  form.appendChild(categoryLabel);
  // Actions
  const actions = document.createElement('div');
  actions.className = 'form-actions';
  const saveBtn = document.createElement('button');
  saveBtn.type = 'submit';
  saveBtn.className = 'save-btn';
  saveBtn.textContent = t('save');
  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'cancel-btn';
  cancelBtn.textContent = t('cancel');
  cancelBtn.addEventListener('click', () => closeModal());
  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);
  form.appendChild(actions);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const propertyId = parseInt(propSelect.value);
    const desc = descInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const dateVal = dateInput.value;
    const categoryVal = catSelect.value;
    const exp = {
      id: nextExpenseId++,
      propertyId,
      description: desc,
      amount,
      date: dateVal,
      category: categoryVal
    };
    expenses.push(exp);
    closeModal();
    renderPage('expenses');
  });
  modalContent.appendChild(form);
  modal.classList.remove('hidden');
}

// Close modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
}

// Search function
function handleSearch(query) {
  const resultsContainerId = 'searchResults';
  let resultsContainer = document.getElementById(resultsContainerId);
  if (!query) {
    clearSearchResults();
    return;
  }
  const lower = query.toLowerCase();
  const results = [];
  // Search properties
  properties.forEach(p => {
    if (p.name.toLowerCase().includes(lower)) {
      results.push({ type: 'property', id: p.id, name: p.name });
    }
  });
  tenants.forEach(tn => {
    if (tn.name.toLowerCase().includes(lower)) {
      results.push({ type: 'tenant', id: tn.id, name: tn.name });
    }
  });
  if (!resultsContainer) {
    resultsContainer = document.createElement('div');
    resultsContainer.id = resultsContainerId;
    resultsContainer.style.position = 'absolute';
    // Position it below search input
    const searchInput = document.getElementById('searchInput');
    const rect = searchInput.getBoundingClientRect();
    resultsContainer.style.left = rect.left + 'px';
    resultsContainer.style.top = (rect.bottom + window.scrollY) + 'px';
    resultsContainer.style.width = rect.width + 'px';
    document.body.appendChild(resultsContainer);
  }
  resultsContainer.innerHTML = '';
  results.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} (${item.type})`;
    div.addEventListener('click', () => {
      clearSearchResults();
      if (item.type === 'property') {
        renderPropertyDetail(item.id);
      } else if (item.type === 'tenant') {
        // Navigate to tenants page and maybe highlight
        renderPage('tenants');
      }
    });
    resultsContainer.appendChild(div);
  });
}

function clearSearchResults() {
  const container = document.getElementById('searchResults');
  if (container) {
    container.parentElement.removeChild(container);
  }
}

// Initialize after DOM is ready
window.addEventListener('DOMContentLoaded', init);