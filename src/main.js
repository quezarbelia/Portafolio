import confetti from 'canvas-confetti';
import { analyticsProjects } from './data-projects.js';

// Legacy Software & System Projects Database
export const projectsData = [
  {
    id: 'arquitectura_financiera',
    title: 'Arquitectura Analítica & Plataforma de Inteligencia Financiera',
    category: 'Business Intelligence & Cloud',
    summary: 'Arquitectura analítica integral para la ingesta, limpieza, modelado relacional y presentación de métricas financieras clave en tiempo real.',
    tags: ['Power BI', 'Tableau Server', 'Oracle DBA', 'PostgreSQL', 'Python (Pandas)', 'Microsoft Fabric', 'AWS S3', 'Linux'],
    metrics: [
      { value: 'ACID', label: 'Consistencia de datos' },
      { value: '<200ms', label: 'Latencia de consulta' },
      { value: '100%', label: 'Disponibilidad Cloud' }
    ],
    details: 'Diseño de esquemas estrella y copo de nieve para consultas de alta velocidad. Automatización de pipelines ETL con Python para extracción de datos heterogéneos y normalización sin pérdida referencial.',
    repo: 'https://github.com/quezarbelia',
    demo: 'https://public.tableau.com/app/profile/gabriel.quezada5584/vizzes',
    imageType: 'financial'
  },
  {
    id: 'reporteria_transaccional',
    title: 'Sistema Operativo de Reportería & Base de Datos',
    category: 'Data Engineering & SQL',
    summary: 'Gestión de datos transaccionales con formularios avanzados, validaciones estrictas y automatización de conciliaciones operativas.',
    tags: ['SQL Server', 'PostgreSQL', 'Python', 'Power BI', 'FastAPI', 'Docker'],
    metrics: [
      { value: '-75%', label: 'Tiempo de reporte manual' },
      { value: '100k+', label: 'Filas procesadas / día' },
      { value: '0%', label: 'Discrepancia en conciliación' }
    ],
    details: 'Centralización de datos operacionales dispersos mediante esquemas normalizados y procedimientos almacenados de alto rendimiento en SQL Server y Postgres.',
    repo: 'https://github.com/quezarbelia',
    demo: 'https://github.com/quezarbelia',
    imageType: 'database'
  },
  {
    id: 'fintech_ux',
    title: 'Plataforma Fintech & Prototipado UX/UI',
    category: 'Frontend & Heurísticas',
    summary: 'Interfaz financiera multimoneda con conversión segura, heurísticas de usabilidad accesibles y análisis de liquidez en tiempo real.',
    tags: ['JavaScript Moderno', 'Tailwind CSS', 'Supabase', 'REST APIs', 'Vite'],
    metrics: [
      { value: '<150ms', label: 'Latencia de cálculo' },
      { value: 'WCAG AAA', label: 'Estándar Accesibilidad' },
      { value: '100%', label: 'Mobile First Responsive' }
    ],
    details: 'Tableros interactivos para tesorería empresarial, cotizaciones de divisas y flujos de liquidación con alta tolerancia a desconexión y microinteracciones visuales.',
    repo: 'https://github.com/quezarbelia',
    demo: 'https://github.com/quezarbelia',
    imageType: 'fintech'
  },
  {
    id: 'ai_agents',
    title: 'Automatización con Agentes de IA & LLMs Locales',
    category: 'Inteligencia Artificial & Sistemas',
    summary: 'Orquestación de microservicios con modelos de IA de código abierto para extracción documental y flujos analíticos privados on-premise.',
    tags: ['Python', 'LangChain', 'Ollama', 'Vector DB', 'FastAPI', 'Linux VPS'],
    metrics: [
      { value: '100%', label: 'Privacidad On-Premise' },
      { value: '$0', label: 'Costo API recurrente' },
      { value: '8x', label: 'Aceleración de síntesis' }
    ],
    details: 'Arquitectura RAG para consultas sobre volúmenes de manuales técnicos y bases de conocimiento corporativas sin exponer información sensible a servidores de terceros.',
    repo: 'https://github.com/quezarbelia',
    demo: 'https://github.com/quezarbelia',
    imageType: 'ai'
  }
];

// Carousel State
let currentSlide = 0;

export function updateCarousel(index) {
  if (index < 0) index = projectsData.length - 1;
  if (index >= projectsData.length) index = 0;
  currentSlide = index;

  const project = projectsData[currentSlide];
  const titleEl = document.getElementById('carousel-title');
  const catEl = document.getElementById('carousel-category');
  const summaryEl = document.getElementById('carousel-summary');
  const tagsEl = document.getElementById('carousel-tags');
  const detailsBtn = document.getElementById('carousel-details-btn');
  const indicatorEl = document.getElementById('carousel-indicator');

  if (titleEl) titleEl.textContent = project.title;
  if (catEl) catEl.textContent = project.category;
  if (summaryEl) summaryEl.textContent = project.summary;
  
  if (tagsEl) {
    tagsEl.innerHTML = project.tags.slice(0, 4).map(t => 
      `<span class="px-2 py-0.5 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">${t}</span>`
    ).join('');
  }

  if (detailsBtn) {
    detailsBtn.onclick = () => openProjectModal(project.id);
  }

  if (indicatorEl) {
    indicatorEl.textContent = `${currentSlide + 1} / ${projectsData.length}`;
  }
}

export function prevProject() {
  updateCarousel(currentSlide - 1);
}

export function nextProject() {
  updateCarousel(currentSlide + 1);
}

// Render Analytics Projects Grid
export function renderAnalyticsGrid(filterType = 'all') {
  const container = document.getElementById('analytics-projects-grid');
  if (!container) return;

  const filtered = filterType === 'all' 
    ? analyticsProjects 
    : analyticsProjects.filter(p => p.type === filterType);

  container.innerHTML = filtered.map(p => `
    <article class="spotlight-card rounded-3xl p-6 border border-white/10 bg-[#12141c]/80 flex flex-col justify-between group transition-all duration-300 hover:border-white/25">
      <div>
        <div class="flex items-center justify-between gap-2 mb-4">
          <span class="px-3 py-1 rounded-full text-xs font-mono font-medium border ${p.typeColor}">
            ${p.typeBadge}
          </span>
          ${p.isLive 
            ? '<span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>En Vivo</span>' 
            : '<span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-slate-400 border border-white/10">Próximamente</span>'
          }
        </div>

        <div class="flex items-start gap-3 mb-3">
          <span class="text-2xl mt-0.5">${p.icon}</span>
          <h3 class="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors leading-snug">
            ${p.title}
          </h3>
        </div>

        <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
          ${p.summary}
        </p>

        <!-- Metric Badges -->
        <div class="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/40 border border-white/5 mb-5">
          ${p.metrics.map(m => `
            <div class="text-center">
              <span class="block text-xs font-bold text-white font-mono">${m.value}</span>
              <span class="text-[9px] text-slate-400 font-medium block truncate">${m.label}</span>
            </div>
          `).join('')}
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${p.tags.map(t => `
            <span class="px-2 py-0.5 text-[11px] font-mono rounded-lg bg-white/5 text-slate-300 border border-white/10">${t}</span>
          `).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <button onclick="window.openAnalyticsModal('${p.id}')" class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors">
          <span>Ver Detalles & Métricas</span>
          <span>➔</span>
        </button>

        <div class="flex items-center gap-2">
          ${p.downloadPath 
            ? `<a href="${p.downloadPath}" download class="pill-btn text-xs py-1.5 px-3 flex items-center gap-1.5" title="Descargar archivo .xlsx">
                <span>.xlsx</span>
                <span>📥</span>
              </a>`
            : ''
          }
          ${p.link.startsWith('http') 
            ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="pill-btn-white text-xs py-1.5 px-3 flex items-center gap-1.5" title="Abrir recurso">
                <span>${p.type === 'tableau' ? 'Tableau' : p.type === 'excel' ? 'Google Sheets' : 'Abrir'}</span>
                <span>↗</span>
              </a>`
            : `<button onclick="window.openAnalyticsModal('${p.id}')" class="pill-btn text-xs py-1.5 px-3">
                <span>Detalles</span>
              </button>`
          }
        </div>
      </div>
    </article>
  `).join('');

  initSpotlight();
}

// Setup Analytics Filter Tabs
function initAnalyticsFilters() {
  const buttons = document.querySelectorAll('.analytics-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-white', 'text-black', 'font-bold');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('bg-white', 'text-black', 'font-bold');
      btn.classList.remove('text-slate-400');
      
      const filter = btn.getAttribute('data-filter') || 'all';
      renderAnalyticsGrid(filter);
    });
  });
}

// Open Analytics Modal
export function openAnalyticsModal(projectId) {
  const project = analyticsProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('analytics-modal');
  if (!modal) return;

  document.getElementById('analytics-modal-badge').textContent = project.typeBadge;
  document.getElementById('analytics-modal-title').textContent = project.title;
  document.getElementById('analytics-modal-summary').textContent = project.summary;
  document.getElementById('analytics-modal-objective').textContent = project.objective;
  document.getElementById('analytics-modal-dataset').textContent = project.dataset;

  const metricsContainer = document.getElementById('analytics-modal-metrics');
  metricsContainer.innerHTML = project.metrics.map(m => `
    <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
      <div class="text-base sm:text-lg font-bold text-white font-space">${m.value}</div>
      <div class="text-[11px] text-slate-400 mt-0.5">${m.label}</div>
    </div>
  `).join('');

  const tagsContainer = document.getElementById('analytics-modal-tags');
  tagsContainer.innerHTML = project.tags.map(t => `
    <span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-200">${t}</span>
  `).join('');

  const liveActionBtn = document.getElementById('analytics-modal-action-btn');
  const downloadActionBtn = document.getElementById('analytics-modal-download-btn');

  if (downloadActionBtn) {
    if (project.downloadPath) {
      downloadActionBtn.href = project.downloadPath;
      downloadActionBtn.classList.remove('hidden');
    } else {
      downloadActionBtn.classList.add('hidden');
    }
  }

  if (project.link && project.link.startsWith('http')) {
    liveActionBtn.href = project.link;
    liveActionBtn.target = '_blank';
    liveActionBtn.rel = 'noopener noreferrer';
    liveActionBtn.classList.remove('hidden');
    liveActionBtn.querySelector('span').textContent = project.type === 'tableau' 
      ? 'Abrir en Tableau Public' 
      : project.type === 'excel'
      ? 'Abrir en Google Sheets'
      : 'Abrir Proyecto';
  } else {
    liveActionBtn.href = '#contacto';
    liveActionBtn.removeAttribute('target');
    liveActionBtn.onclick = () => { closeAnalyticsModal(); };
    liveActionBtn.querySelector('span').textContent = 'Solicitar Acceso / Archivo';
  }

  // Embed Preview if Tableau
  const embedContainer = document.getElementById('analytics-modal-embed');
  if (project.type === 'tableau' && project.embedUrl) {
    embedContainer.classList.remove('hidden');
    embedContainer.innerHTML = `
      <div class="w-full h-80 rounded-2xl overflow-hidden border border-white/15 bg-black/60 relative">
        <iframe src="${project.embedUrl}" class="w-full h-full border-0" allowfullscreen></iframe>
      </div>
    `;
  } else {
    embedContainer.classList.add('hidden');
    embedContainer.innerHTML = '';
  }

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('.modal-content').classList.remove('scale-95', 'opacity-0');
  }, 10);
  document.body.style.overflow = 'hidden';
}

export function closeAnalyticsModal() {
  const modal = document.getElementById('analytics-modal');
  if (!modal) return;
  modal.classList.add('opacity-0');
  modal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    const embedContainer = document.getElementById('analytics-modal-embed');
    if (embedContainer) embedContainer.innerHTML = '';
  }, 250);
}

// Toast Notification
export function showToast(message) {
  const toast = document.getElementById('apple-toast');
  const text = document.getElementById('apple-toast-text');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.remove('opacity-0', '-translate-y-6', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-6', 'pointer-events-none');
    toast.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
  }, 3200);
}

// Copy Email with Confetti
export function copyEmail() {
  const email = 'gabrielqva.10@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Correo copiado: gabrielqva.10@gmail.com');
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#58A6FF', '#1F6FEB', '#ffffff', '#38D9A9']
    });
  }).catch(() => {
    showToast('gabrielqva.10@gmail.com');
  });
}

// Legacy Project Modal
export function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-overview').textContent = project.summary;
  document.getElementById('modal-details').textContent = project.details;
  
  const metricsContainer = document.getElementById('modal-metrics');
  metricsContainer.innerHTML = project.metrics.map(m => `
    <div class="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
      <div class="text-xl font-bold text-white font-space">${m.value}</div>
      <div class="text-[11px] text-slate-400 mt-0.5">${m.label}</div>
    </div>
  `).join('');

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = project.tags.map(t => `
    <span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-200">${t}</span>
  `).join('');

  document.getElementById('modal-repo-btn').href = project.repo;
  document.getElementById('modal-demo-btn').href = project.demo;

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('.modal-content').classList.remove('scale-95', 'opacity-0');
  }, 10);
  document.body.style.overflow = 'hidden';
}

export function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.add('opacity-0');
  modal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
}

// CV Modal
export function openCvModal() {
  const modal = document.getElementById('cv-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modal.querySelector('.modal-content').classList.remove('scale-95', 'opacity-0');
  }, 10);
  document.body.style.overflow = 'hidden';
}

export function closeCvModal() {
  const modal = document.getElementById('cv-modal');
  if (!modal) return;
  modal.classList.add('opacity-0');
  modal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
}

// Spotlight Mouse Tracker
function initSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

// Work Table Interactive Row Selection
function initWorkTable() {
  const rows = document.querySelectorAll('.work-table-row');
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      rows.forEach(r => r.classList.remove('active'));
      row.classList.add('active');
    });
  });
}

// Contact Form
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name']?.value?.trim() || '';
    const email = form.elements['email']?.value?.trim() || '';
    const message = form.elements['message']?.value?.trim() || '';

    if (!name || !email || !message) {
      showToast('Por favor llena los campos requeridos');
      return;
    }

    const body = `Hola Gabriel,\n\nSoy ${name} (${email}).\n\nMensaje:\n${message}\n\n---\nEnviado desde tu portafolio personal https://gabriel-quezada-avila.link`;
    const mailto = `mailto:gabrielqva.10@gmail.com?subject=${encodeURIComponent('Contacto Profesional desde Portafolio')}&body=${encodeURIComponent(body)}`;

    showToast('Abriendo cliente de correo...');
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.5 } });

    setTimeout(() => {
      window.location.href = mailto;
    }, 400);
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
      menu.classList.add('hidden');
    }
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSpotlight();
  initWorkTable();
  initContactForm();
  initAnalyticsFilters();
  renderAnalyticsGrid('all');
  updateCarousel(0);

  // Global bindings
  window.showToast = showToast;
  window.copyEmail = copyEmail;
  window.openProjectModal = openProjectModal;
  window.closeProjectModal = closeProjectModal;
  window.openCvModal = openCvModal;
  window.closeCvModal = closeCvModal;
  window.openAnalyticsModal = openAnalyticsModal;
  window.closeAnalyticsModal = closeAnalyticsModal;
  window.prevProject = prevProject;
  window.nextProject = nextProject;

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCvModal();
      closeAnalyticsModal();
    }
  });
});
