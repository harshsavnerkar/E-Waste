/**
 * ============================================================================
 * EWEM Student Assignment & Academic Repository Dashboard
 * Vanilla JavaScript Implementation
 * ============================================================================
 */

// Strict Mode
'use strict';

/**
 * Verified Document Manifest (Exact files from project repository)
 */
const DOCUMENTS_DATA = [
  // --- ISA (In-Semester Assessments) ---
  {
    id: 'isa-assignment-0',
    category: 'isa',
    title: 'Assignment 0 - EWEM Introduction',
    filename: 'Assignment 0 EWEM.docx',
    path: 'documents/isa/Assignment 0 EWEM.docx',
    extension: 'docx',
    size: '62.2 KB',
    sizeBytes: 63662,
    type: 'Word Document',
    tags: ['Assignment', 'Introductory', 'Coursework'],
    description: 'Introductory coursework submission outlining foundational e-waste management principles, statutory norms, and baseline definitions.'
  },
  {
    id: 'isa-bihar-report',
    category: 'isa',
    title: 'Bihar E-Waste Assessment Report',
    filename: 'Bihar EWaste Report.pdf',
    path: 'documents/isa/Bihar EWaste Report.pdf',
    extension: 'pdf',
    size: '157.1 KB',
    sizeBytes: 160918,
    type: 'PDF Document',
    tags: ['Field Study', 'Regional Policy', 'E-Waste Hubs'],
    description: 'Analytical field report examining electronic scrap collection flow, formal recycling capacity, and informal sector dynamics across Bihar.'
  },
  {
    id: 'isa-bihar-blueprint',
    category: 'isa',
    title: 'Bihar E-Waste Strategic Blueprint',
    filename: 'Bihar_E-Waste_Strategic_Blueprint.pptx',
    path: 'documents/isa/Bihar_E-Waste_Strategic_Blueprint.pptx',
    extension: 'pptx',
    size: '18.1 MB',
    sizeBytes: 18952511,
    type: 'PowerPoint Presentation',
    tags: ['Executive Strategy', 'Policy Roadmap', 'Infrastructure'],
    description: 'Comprehensive presentation deck proposing decentralized collection hubs, formal recycling infrastructure, and EPR enforcement timelines.'
  },
  {
    id: 'isa-class-test',
    category: 'isa',
    title: 'In-Semester Class Test Paper & Solution',
    filename: 'Class test.pdf',
    path: 'documents/isa/Class test.pdf',
    extension: 'pdf',
    size: '304.0 KB',
    sizeBytes: 311288,
    type: 'PDF Document',
    tags: ['Class Test', 'Internal Evaluation', 'Graded'],
    description: 'Internal continuous assessment test paper focusing on toxic substance classification, EPR regulations, and material recovery workflows.'
  },
  {
    id: 'isa-e-waste-notes',
    category: 'isa',
    title: 'E-Waste Technical Overview & Toxicology',
    filename: 'E_Waste.pdf',
    path: 'documents/isa/E_Waste.pdf',
    extension: 'pdf',
    size: '120.3 KB',
    sizeBytes: 123173,
    type: 'PDF Document',
    tags: ['Fundamentals', 'Toxicology', 'Material Flow'],
    description: 'Fundamental technical study reviewing hazardous constituents (Pb, Cd, Hg, BFRs), printed circuit board degradation, and leachate risks.'
  },

  // --- ESE (End-Semester Evaluation) ---
  {
    id: 'ese-carbon-footprint',
    category: 'ese',
    title: 'Carbon Footprint & Lifecycle Assessment',
    filename: 'Carbon footprint.pdf',
    path: 'documents/ese/Carbon footprint.pdf',
    extension: 'pdf',
    size: '60.4 KB',
    sizeBytes: 61853,
    type: 'PDF Document',
    tags: ['Carbon Footprint', 'LCA', 'GHG Emissions'],
    description: 'Comprehensive lifecycle assessment evaluating carbon abatement, energy offsets, and net greenhouse gas emissions from circular electronics recycling.'
  },
  {
    id: 'ese-design-patent',
    category: 'ese',
    title: 'Design Patent Application & Specification',
    filename: 'Document Format for Design Patent (1).docx',
    path: 'documents/ese/Document Format for Design Patent (1).docx',
    extension: 'docx',
    size: '163.0 KB',
    sizeBytes: 166932,
    type: 'Word Document',
    tags: ['Patent Draft', 'Intellectual Property', 'Invention'],
    description: 'Formal intellectual property submission format detailing novel design claims, schematic embodiments, and legal specifications for an e-waste separator.'
  },
  {
    id: 'ese-novelty-deck',
    category: 'ese',
    title: 'E-Waste Novelty Innovation Presentation',
    filename: 'E-Waste Novelty Idea PPT OM.pdf',
    path: 'documents/ese/E-Waste Novelty Idea PPT OM.pdf',
    extension: 'pdf',
    size: '400.9 KB',
    sizeBytes: 410481,
    type: 'PDF Document',
    tags: ['Innovation', 'Pitch Deck', 'Circular Economy'],
    description: 'Executive project pitch showcasing proprietary sorting mechanism, automated sensor segregation, and economic viability projections.'
  },
  {
    id: 'ese-compliance-checklist',
    category: 'ese',
    title: 'E-Waste Statutory Compliance Checklist',
    filename: 'E-Waste_Compliance_Checklist.docx',
    path: 'documents/ese/E-Waste_Compliance_Checklist.docx',
    extension: 'docx',
    size: '26.9 KB',
    sizeBytes: 27588,
    type: 'Word Document',
    tags: ['Audit', 'Statutory Norms', 'EPR Checklist'],
    description: 'Verification audit checklist indexing compliance metrics across CPCB guidelines, RoHS thresholds, and authorization criteria for dismantling facilities.'
  },
  {
    id: 'ese-ewaste-comparison',
    category: 'ese',
    title: 'Comparative Analysis of Recovery Technologies',
    filename: 'ewaste_comparison.docx',
    path: 'documents/ese/ewaste_comparison.docx',
    extension: 'docx',
    size: '20.7 KB',
    sizeBytes: 21152,
    type: 'Word Document',
    tags: ['Comparative Study', 'Metallurgy', 'Efficiency'],
    description: 'Comparative technological benchmark evaluating pyrometallurgy, hydrometallurgy, and bioleaching in terms of capital cost, yield, and pollution index.'
  },
  {
    id: 'ese-leed-scoring',
    category: 'ese',
    title: 'LEED Green Building Weightage & Scoring',
    filename: 'LEED_Buildings_Weightage_and_Scoring.xlsx',
    path: 'documents/ese/LEED_Buildings_Weightage_and_Scoring.xlsx',
    extension: 'xlsx',
    size: '18.2 KB',
    sizeBytes: 18677,
    type: 'Excel Spreadsheet',
    tags: ['LEED Rating', 'Scoring Model', 'Green Architecture'],
    description: 'Interactive computational scoring model for LEED Materials & Resources (MR) credits, waste diversion ratios, and green facility benchmarks.'
  },
  {
    id: 'ese-pyrometallurgy-schematic',
    category: 'ese',
    title: 'Pyrometallurgical Flowsheet & Process Chart',
    filename: 'pyrometallurgy (1).png',
    path: 'documents/ese/pyrometallurgy (1).png',
    extension: 'png',
    size: '1.88 MB',
    sizeBytes: 1966554,
    type: 'Image Asset',
    tags: ['Flowsheet', 'Process Schematic', 'Smelting'],
    description: 'High-resolution chemical engineering flowsheet depicting furnace feeds, slag phases, gas cleaning, and high-purity copper/gold cathode recovery.'
  },
  {
    id: 'ese-demo-video',
    category: 'ese',
    title: 'Laboratory Disassembly & Sorting Trial Video',
    filename: 'VID-20260907-WA0002.mp4',
    path: 'documents/ese/VID-20260907-WA0002.mp4',
    extension: 'mp4',
    size: '1.80 MB',
    sizeBytes: 1882483,
    type: 'Video Media',
    tags: ['Lab Video', 'Demonstration', 'Practical Trial'],
    description: 'Practical laboratory video demonstration showcasing physical device teardown, hazardous component segregation, and safety handling protocols.'
  },

  // --- Extras (Research & Supplementary) ---
  {
    id: 'extra-ieee-paper',
    category: 'extra',
    title: 'IEEE Research Paper: Advanced E-Waste Recovery',
    filename: 'IEEE_Ewaste_updated.pdf',
    path: 'documents/extra/IEEE_Ewaste_updated.pdf',
    extension: 'pdf',
    size: '231.6 KB',
    sizeBytes: 237153,
    type: 'PDF Document',
    tags: ['IEEE Publication', 'Academic Paper', 'Circular Tech'],
    description: 'Peer-reviewed IEEE standard academic paper exploring circular economy paradigms, mineral preservation, and urban mining economics.'
  },
  {
    id: 'extra-case-studies',
    category: 'extra',
    title: 'Technical Engineering Case Studies Report',
    filename: 'TE_Case_Studies_Report 1.docx',
    path: 'documents/extra/TE_Case_Studies_Report 1.docx',
    extension: 'docx',
    size: '782.6 KB',
    sizeBytes: 801386,
    type: 'Word Document',
    tags: ['Case Studies', 'Industrial Plants', 'Field Benchmarks'],
    description: 'In-depth engineering dossier surveying industrial case studies, formal dismantling plants, recovery yields, and financial sustainability models.'
  }
];

/**
 * Application State
 */
const state = {
  documents: [...DOCUMENTS_DATA],
  activeCategory: 'all', // 'all', 'isa', 'ese', 'extra'
  activeType: 'all',     // 'all', 'pdf', 'docx', 'pptx', 'xlsx', 'media'
  searchQuery: '',
  sortBy: 'name-asc',    // 'name-asc', 'name-desc', 'size-desc', 'size-asc', 'type-asc'
  viewMode: 'grid',      // 'grid', 'table'
  activeModalDoc: null
};

/**
 * Icons Map (Lightweight, crisp SVG paths)
 */
const ICONS = {
  pdf: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  docx: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="14 9 12 9 10 9"></polyline></svg>`,
  pptx: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  xlsx: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>`,
  image: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
  video: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`,
  download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  view: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  external: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  copy: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
};

/**
 * Format Helpers
 */
function getFormatIcon(ext) {
  switch (ext.toLowerCase()) {
    case 'pdf': return { icon: ICONS.pdf, cls: 'fmt-pdf-icon', label: 'PDF' };
    case 'docx': return { icon: ICONS.docx, cls: 'fmt-docx-icon', label: 'DOCX' };
    case 'pptx': return { icon: ICONS.pptx, cls: 'fmt-pptx-icon', label: 'PPTX' };
    case 'xlsx': return { icon: ICONS.xlsx, cls: 'fmt-xlsx-icon', label: 'XLSX' };
    case 'png':
    case 'jpg':
    case 'jpeg': return { icon: ICONS.image, cls: 'fmt-media-icon', label: 'PNG' };
    case 'mp4': return { icon: ICONS.video, cls: 'fmt-media-icon', label: 'MP4' };
    default: return { icon: ICONS.pdf, cls: 'fmt-pdf-icon', label: ext.toUpperCase() };
  }
}

function getCategoryMeta(cat) {
  switch (cat.toLowerCase()) {
    case 'isa':
      return { label: 'ISA Submissions', badgeClass: 'cat-isa', shortName: 'ISA' };
    case 'ese':
      return { label: 'ESE Dossier', badgeClass: 'cat-ese', shortName: 'ESE' };
    case 'extra':
      return { label: 'Research & Extras', badgeClass: 'cat-extra', shortName: 'Extra' };
    default:
      return { label: cat.toUpperCase(), badgeClass: 'cat-isa', shortName: cat.toUpperCase() };
  }
}

/**
 * DOM Elements Selection
 */
const elements = {
  themeToggle: document.getElementById('theme-toggle-btn'),
  searchInput: document.getElementById('search-input'),
  searchClearBtn: document.getElementById('search-clear-btn'),
  sortSelect: document.getElementById('sort-select'),
  viewGridBtn: document.getElementById('view-grid-btn'),
  viewTableBtn: document.getElementById('view-table-btn'),
  categoryPills: document.querySelectorAll('.pill-btn[data-category]'),
  typeBadges: document.querySelectorAll('.type-badge-btn[data-type]'),
  categoryCards: document.querySelectorAll('.category-hero-card[data-category-target]'),
  documentsGrid: document.getElementById('documents-grid'),
  documentsTable: document.getElementById('documents-table-container'),
  documentsTableBody: document.getElementById('documents-table-body'),
  emptyState: document.getElementById('empty-state'),
  resultsCount: document.getElementById('results-count'),
  resetFiltersBtn: document.getElementById('reset-filters-btn'),
  
  // Modal Elements
  modalOverlay: document.getElementById('modal-overlay'),
  modalCloseBtn: document.getElementById('modal-close-btn'),
  modalDocTitle: document.getElementById('modal-doc-title'),
  modalDocPath: document.getElementById('modal-doc-path'),
  modalTypeBadge: document.getElementById('modal-type-badge'),
  modalBody: document.getElementById('modal-body'),
  modalDownloadBtn: document.getElementById('modal-download-btn'),
  modalNewTabBtn: document.getElementById('modal-newtab-btn'),
  modalCopyPathBtn: document.getElementById('modal-copypath-btn'),

  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),

  // Dynamic Badges
  isaCountBadge: document.getElementById('count-isa-badge'),
  eseCountBadge: document.getElementById('count-ese-badge'),
  extraCountBadge: document.getElementById('count-extra-badge'),
  allCountBadge: document.getElementById('count-all-badge')
};

/**
 * Filter & Sort Logic
 */
function getFilteredAndSortedDocuments() {
  let list = [...state.documents];

  // 1. Category Filter
  if (state.activeCategory !== 'all') {
    list = list.filter(doc => doc.category === state.activeCategory);
  }

  // 2. Type / Format Filter
  if (state.activeType !== 'all') {
    if (state.activeType === 'media') {
      list = list.filter(doc => ['png', 'jpg', 'jpeg', 'mp4'].includes(doc.extension));
    } else {
      list = list.filter(doc => doc.extension === state.activeType);
    }
  }

  // 3. Search Query
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(doc => {
      const matchTitle = doc.title.toLowerCase().includes(q);
      const matchFilename = doc.filename.toLowerCase().includes(q);
      const matchDesc = doc.description.toLowerCase().includes(q);
      const matchType = doc.type.toLowerCase().includes(q);
      const matchCategory = doc.category.toLowerCase().includes(q);
      const matchTags = doc.tags.some(tag => tag.toLowerCase().includes(q));
      return matchTitle || matchFilename || matchDesc || matchType || matchCategory || matchTags;
    });
  }

  // 4. Sorting
  list.sort((a, b) => {
    switch (state.sortBy) {
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      case 'size-desc':
        return b.sizeBytes - a.sizeBytes;
      case 'size-asc':
        return a.sizeBytes - b.sizeBytes;
      case 'type-asc':
        return a.extension.localeCompare(b.extension);
      default:
        return 0;
    }
  });

  return list;
}

/**
 * Render Functions
 */
function renderUI() {
  const filteredDocs = getFilteredAndSortedDocuments();
  const totalCount = state.documents.length;
  const filteredCount = filteredDocs.length;

  // Update Result Count text
  if (elements.resultsCount) {
    if (filteredCount === totalCount) {
      elements.resultsCount.innerHTML = `Showing all <strong>${totalCount}</strong> documents`;
    } else {
      elements.resultsCount.innerHTML = `Showing <strong>${filteredCount}</strong> of <strong>${totalCount}</strong> documents`;
    }
  }

  // Handle empty state
  if (filteredCount === 0) {
    if (elements.emptyState) elements.emptyState.style.display = 'block';
    if (elements.documentsGrid) elements.documentsGrid.style.display = 'none';
    if (elements.documentsTable) elements.documentsTable.style.display = 'none';
    return;
  } else {
    if (elements.emptyState) elements.emptyState.style.display = 'none';
  }

  // View Mode: Grid vs Table
  if (state.viewMode === 'grid') {
    if (elements.documentsGrid) elements.documentsGrid.style.display = 'grid';
    if (elements.documentsTable) elements.documentsTable.style.display = 'none';
    renderGridView(filteredDocs);
  } else {
    if (elements.documentsGrid) elements.documentsGrid.style.display = 'none';
    if (elements.documentsTable) elements.documentsTable.style.display = 'block';
    renderTableView(filteredDocs);
  }
}

/**
 * Render Grid View Cards
 */
function renderGridView(docs) {
  if (!elements.documentsGrid) return;
  elements.documentsGrid.innerHTML = '';

  docs.forEach(doc => {
    const fmt = getFormatIcon(doc.extension);
    const cat = getCategoryMeta(doc.category);
    const encodedPath = encodeURI(doc.path);

    const card = document.createElement('article');
    card.className = 'doc-card';
    card.setAttribute('data-id', doc.id);

    // Tags list
    const tagsHtml = doc.tags.map(t => `<span class="doc-chip">${t}</span>`).join('');

    card.innerHTML = `
      <div class="doc-top-wrapper">
        <header class="doc-header">
          <div class="doc-type-icon ${fmt.cls}" title="${doc.type}">
            ${fmt.icon}
          </div>
          <div class="doc-meta-tags">
            <span class="category-tag ${cat.badgeClass}">${cat.shortName}</span>
            <span class="size-tag">${doc.size}</span>
          </div>
        </header>

        <div class="doc-body">
          <h3 class="doc-title">${escapeHtml(doc.title)}</h3>
          <div class="doc-filename" title="${escapeHtml(doc.path)}">${escapeHtml(doc.filename)}</div>
          <p class="doc-desc">${escapeHtml(doc.description)}</p>
          <div class="doc-tags-list">
            ${tagsHtml}
          </div>
        </div>
      </div>

      <footer class="doc-actions">
        <button type="button" class="btn btn-secondary view-trigger-btn" data-doc-id="${doc.id}" title="View / Inspect document">
          ${ICONS.view}
          <span>View</span>
        </button>
        <a href="${encodedPath}" download="${escapeHtml(doc.filename)}" class="btn btn-primary download-link-btn" title="Download ${escapeHtml(doc.filename)}">
          ${ICONS.download}
          <span>Download</span>
        </a>
        <button type="button" class="btn btn-icon-only copy-path-btn" data-path="${doc.path}" title="Copy file path">
          ${ICONS.copy}
        </button>
      </footer>
    `;

    elements.documentsGrid.appendChild(card);
  });
}

/**
 * Render Table / List View
 */
function renderTableView(docs) {
  if (!elements.documentsTableBody) return;
  elements.documentsTableBody.innerHTML = '';

  docs.forEach(doc => {
    const fmt = getFormatIcon(doc.extension);
    const cat = getCategoryMeta(doc.category);
    const encodedPath = encodeURI(doc.path);

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <div class="doc-type-icon ${fmt.cls}" style="width:2.2rem;height:2.2rem;font-size:0.7rem;" title="${doc.type}">
          ${fmt.icon}
        </div>
      </td>
      <td>
        <div class="table-doc-title">${escapeHtml(doc.title)}</div>
        <div class="table-doc-file">${escapeHtml(doc.filename)}</div>
      </td>
      <td>
        <span class="category-tag ${cat.badgeClass}">${cat.shortName}</span>
      </td>
      <td>
        <span class="size-tag">${doc.size}</span>
      </td>
      <td style="color:var(--text-muted); font-size:0.82rem;">
        ${doc.type}
      </td>
      <td>
        <div class="table-actions">
          <button type="button" class="btn btn-secondary view-trigger-btn" style="padding:0.4rem 0.75rem; font-size:0.8rem;" data-doc-id="${doc.id}">
            ${ICONS.view}
            <span>View</span>
          </button>
          <a href="${encodedPath}" download="${escapeHtml(doc.filename)}" class="btn btn-primary download-link-btn" style="padding:0.4rem 0.75rem; font-size:0.8rem;">
            ${ICONS.download}
            <span>Download</span>
          </a>
          <button type="button" class="btn btn-icon-only copy-path-btn" style="width:2rem;height:2rem;" data-path="${doc.path}" title="Copy file path">
            ${ICONS.copy}
          </button>
        </div>
      </td>
    `;

    elements.documentsTableBody.appendChild(row);
  });
}

/**
 * Document Preview Modal Handling
 */
function openDocumentModal(docId) {
  const doc = state.documents.find(d => d.id === docId);
  if (!doc) return;

  state.activeModalDoc = doc;
  const encodedPath = encodeURI(doc.path);
  const fmt = getFormatIcon(doc.extension);
  const cat = getCategoryMeta(doc.category);

  // Set modal header
  if (elements.modalDocTitle) elements.modalDocTitle.textContent = doc.title;
  if (elements.modalDocPath) elements.modalDocPath.textContent = doc.path;
  if (elements.modalTypeBadge) {
    elements.modalTypeBadge.className = `doc-type-icon ${fmt.cls}`;
    elements.modalTypeBadge.style.width = '2.4rem';
    elements.modalTypeBadge.style.height = '2.4rem';
    elements.modalTypeBadge.innerHTML = fmt.icon;
  }

  // Set top actions
  if (elements.modalDownloadBtn) {
    elements.modalDownloadBtn.href = encodedPath;
    elements.modalDownloadBtn.setAttribute('download', doc.filename);
  }
  if (elements.modalNewTabBtn) {
    elements.modalNewTabBtn.href = encodedPath;
  }

  // Generate appropriate preview content
  renderModalContent(doc, encodedPath, fmt, cat);

  // Show modal
  elements.modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderModalContent(doc, encodedPath, fmt, cat) {
  if (!elements.modalBody) return;
  elements.modalBody.innerHTML = '';

  const ext = doc.extension.toLowerCase();

  if (ext === 'pdf') {
    // PDF: Native embedded viewer
    elements.modalBody.innerHTML = `
      <iframe src="${encodedPath}#toolbar=1&navpanes=1" class="modal-iframe-preview" title="${escapeHtml(doc.title)}"></iframe>
    `;
  } else if (['png', 'jpg', 'jpeg'].includes(ext)) {
    // Image Preview
    elements.modalBody.innerHTML = `
      <img src="${encodedPath}" alt="${escapeHtml(doc.title)}" class="modal-image-preview">
    `;
  } else if (ext === 'mp4') {
    // Video Preview
    elements.modalBody.innerHTML = `
      <video src="${encodedPath}" controls autoplay playsinline class="modal-video-preview">
        Your browser does not support HTML5 video preview.
      </video>
    `;
  } else {
    // Office Formats (DOCX, PPTX, XLSX)
    // Detailed, professional dossier sheet with direct application actions
    let appName = 'Office Suite';
    if (ext === 'docx') appName = 'Microsoft Word / Google Docs / LibreOffice Writer';
    if (ext === 'pptx') appName = 'Microsoft PowerPoint / Google Slides / Keynote';
    if (ext === 'xlsx') appName = 'Microsoft Excel / Google Sheets / LibreOffice Calc';

    elements.modalBody.innerHTML = `
      <div class="office-preview-dossier">
        <div class="office-icon-giant ${fmt.cls}">
          ${fmt.icon}
        </div>
        <h3 class="office-dossier-title">${escapeHtml(doc.title)}</h3>
        <p class="office-dossier-desc">${escapeHtml(doc.description)}</p>

        <div class="office-meta-table">
          <div class="meta-row">
            <span class="meta-key">Original File</span>
            <span class="meta-val">${escapeHtml(doc.filename)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-key">Academic Category</span>
            <span class="meta-val">${cat.label}</span>
          </div>
          <div class="meta-row">
            <span class="meta-key">File Format</span>
            <span class="meta-val">${doc.type} (.${doc.extension.toUpperCase()})</span>
          </div>
          <div class="meta-row">
            <span class="meta-key">Exact File Size</span>
            <span class="meta-val">${doc.size} (${doc.sizeBytes.toLocaleString()} bytes)</span>
          </div>
          <div class="meta-row">
            <span class="meta-key">Standard Software</span>
            <span class="meta-val" style="font-family:var(--font-sans);font-size:0.8rem;">${appName}</span>
          </div>
        </div>

        <div class="office-actions-row">
          <a href="${encodedPath}" download="${escapeHtml(doc.filename)}" class="btn btn-primary" style="padding:0.75rem 1.5rem;font-size:0.95rem;">
            ${ICONS.download}
            <span>Download Original File</span>
          </a>
          <a href="${encodedPath}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding:0.75rem 1.25rem;">
            ${ICONS.external}
            <span>Open Raw in Browser</span>
          </a>
        </div>
      </div>
    `;
  }
}

function closeModal() {
  if (!elements.modalOverlay) return;
  elements.modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  // Stop any playing video or clear iframe memory
  setTimeout(() => {
    if (elements.modalBody) elements.modalBody.innerHTML = '';
  }, 200);
  state.activeModalDoc = null;
}

/**
 * Toast Notification Utility
 */
let toastTimeout;
function showToast(message) {
  if (!elements.toast || !elements.toastMessage) return;
  elements.toastMessage.textContent = message;
  elements.toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 2800);
}

/**
 * Copy to Clipboard Utility
 */
function copyTextToClipboard(text, label = 'Path') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      fallbackCopy(text, label);
    });
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard!`);
  } catch (e) {
    showToast(`Could not copy: ${text}`);
  }
  document.body.removeChild(ta);
}

/**
 * String Escape Utility
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Theme Toggle Utility
 */
function initTheme() {
  const savedTheme = localStorage.getItem('ewem-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    // Default light theme
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('ewem-theme', newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme} theme`);
}

function updateThemeIcon(theme) {
  if (!elements.themeToggle) return;
  elements.themeToggle.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
  elements.themeToggle.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

/**
 * Calculate dynamic badge counts
 */
function updateCategoryBadges() {
  const counts = {
    all: state.documents.length,
    isa: state.documents.filter(d => d.category === 'isa').length,
    ese: state.documents.filter(d => d.category === 'ese').length,
    extra: state.documents.filter(d => d.category === 'extra').length
  };

  if (elements.allCountBadge) elements.allCountBadge.textContent = counts.all;
  if (elements.isaCountBadge) elements.isaCountBadge.textContent = counts.isa;
  if (elements.eseCountBadge) elements.eseCountBadge.textContent = counts.ese;
  if (elements.extraCountBadge) elements.extraCountBadge.textContent = counts.extra;
}

/**
 * Event Listeners & Interactions
 */
function setupEventListeners() {
  // Theme Toggle
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener('click', toggleTheme);
  }

  // Search Input
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (elements.searchClearBtn) {
        if (state.searchQuery.length > 0) {
          elements.searchClearBtn.classList.add('visible');
        } else {
          elements.searchClearBtn.classList.remove('visible');
        }
      }
      renderUI();
    });
  }

  // Search Clear Button
  if (elements.searchClearBtn) {
    elements.searchClearBtn.addEventListener('click', () => {
      if (elements.searchInput) {
        elements.searchInput.value = '';
        state.searchQuery = '';
        elements.searchClearBtn.classList.remove('visible');
        elements.searchInput.focus();
        renderUI();
      }
    });
  }

  // Keyboard shortcut '/' to focus search
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== elements.searchInput) {
      e.preventDefault();
      if (elements.searchInput) {
        elements.searchInput.focus();
      }
    } else if (e.key === 'Escape' && elements.modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Sort Dropdown
  if (elements.sortSelect) {
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderUI();
    });
  }

  // View Mode Buttons (Grid vs Table)
  if (elements.viewGridBtn) {
    elements.viewGridBtn.addEventListener('click', () => {
      state.viewMode = 'grid';
      elements.viewGridBtn.classList.add('active');
      elements.viewTableBtn.classList.remove('active');
      renderUI();
    });
  }

  if (elements.viewTableBtn) {
    elements.viewTableBtn.addEventListener('click', () => {
      state.viewMode = 'table';
      elements.viewTableBtn.classList.add('active');
      elements.viewGridBtn.classList.remove('active');
      renderUI();
    });
  }

  // Category Pills
  elements.categoryPills.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      state.activeCategory = cat;

      elements.categoryPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Highlight active category hero card
      updateCategoryHeroCards(cat);

      renderUI();
    });
  });

  // Category Hero Cards (Clicking jumps and filters)
  elements.categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetCat = card.getAttribute('data-category-target');
      state.activeCategory = targetCat;

      // Update pill buttons
      elements.categoryPills.forEach(b => {
        if (b.getAttribute('data-category') === targetCat) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      updateCategoryHeroCards(targetCat);
      renderUI();

      // Smooth scroll to documents section
      const docSection = document.getElementById('documents-repository');
      if (docSection) {
        docSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Type Badges Filter
  elements.typeBadges.forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.getAttribute('data-type');
      state.activeType = t;

      elements.typeBadges.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderUI();
    });
  });

  // Reset Filters Button
  if (elements.resetFiltersBtn) {
    elements.resetFiltersBtn.addEventListener('click', () => {
      state.activeCategory = 'all';
      state.activeType = 'all';
      state.searchQuery = '';
      if (elements.searchInput) elements.searchInput.value = '';
      if (elements.searchClearBtn) elements.searchClearBtn.classList.remove('visible');

      elements.categoryPills.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-category') === 'all');
      });
      elements.typeBadges.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-type') === 'all');
      });
      updateCategoryHeroCards('all');

      renderUI();
      showToast('Filters reset to default');
    });
  }

  // Delegated Clicks for Documents Container (Handles View, Download, Copy)
  document.addEventListener('click', (e) => {
    // View Trigger
    const viewBtn = e.target.closest('.view-trigger-btn');
    if (viewBtn) {
      const docId = viewBtn.getAttribute('data-doc-id');
      openDocumentModal(docId);
      return;
    }

    // Copy Path
    const copyBtn = e.target.closest('.copy-path-btn');
    if (copyBtn) {
      const path = copyBtn.getAttribute('data-path');
      copyTextToClipboard(path, 'Relative path');
      return;
    }

    // Download feedback
    const dlLink = e.target.closest('.download-link-btn');
    if (dlLink) {
      const filename = dlLink.getAttribute('download') || 'File';
      showToast(`Initiating download for ${filename}`);
    }
  });

  // Modal Close Listeners
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closeModal);
  }

  if (elements.modalOverlay) {
    elements.modalOverlay.addEventListener('click', (e) => {
      if (e.target === elements.modalOverlay) {
        closeModal();
      }
    });
  }

  // Modal Copy Path Button
  if (elements.modalCopyPathBtn) {
    elements.modalCopyPathBtn.addEventListener('click', () => {
      if (state.activeModalDoc) {
        copyTextToClipboard(state.activeModalDoc.path, 'Document path');
      }
    });
  }
}

function updateCategoryHeroCards(activeCat) {
  elements.categoryCards.forEach(card => {
    const target = card.getAttribute('data-category-target');
    if (activeCat === 'all' || activeCat === target) {
      card.classList.toggle('active-category', activeCat === target);
    } else {
      card.classList.remove('active-category');
    }
  });
}

/**
 * Initialize Application
 */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateCategoryBadges();
  setupEventListeners();
  renderUI();
});

