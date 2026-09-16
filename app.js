(() => {
  const site = document.querySelector('#site-content');
  const gate = document.querySelector('#language-gate');
  const base = 'assets/media/';
  const savedLanguage = (() => {
    try {
      const language = window.localStorage.getItem('portfolio-language');
      return ['pt', 'en'].includes(language) ? language : null;
    } catch {
      return null;
    }
  })();
  let currentLanguage = savedLanguage || 'pt';

  const ui = {
    pt: {
      lang: 'pt-BR',
      pageTitle: 'Pedro Augusto — Portfólio',
      description: 'Portfólio de Pedro Augusto — web design, UX/UI, motion, 3D e tratamento de imagens.',
      navLabel: 'Navegação principal',
      nav: ['Lab', 'Web', 'Motion', '3D', 'Imagem', 'Contato'],
      switchLabel: 'PT / EN',
      switchAria: 'Alterar idioma',
      eyebrow: 'Portfólio profissional · 2026',
      heroTitle: 'Pedro Augusto.<br><em>Designer digital.</em>',
      heroCopy: 'Designer com experiência em e-commerce, conteúdo digital e melhoria de processos de criação. Reúno aqui projetos de web design, UX/UI, motion, 3D e tratamento de imagens desenvolvidos para comunicação, produto e varejo digital.',
      projects: 'Ver projetos <span aria-hidden="true">↓</span>',
      portraitAlt: 'Retrato abstrato de Pedro Augusto',
      current: 'Atuação atual',
      role: 'Assistente de Marketing<br>Martins Distribuições',
      enriched: 'Conteúdo enriquecido',
      resumeEyebrow: 'Perfil profissional',
      resumeTitle: 'Design aplicado a conteúdo, operação e experiência digital.',
      resumeCopy: 'Atuação em web design, conteúdo enriquecido, tratamento de imagens e organização de fluxos para e-commerce B2C e B2B. Formação em Produção Publicitária e especialização contínua em Adobe, UX/UI, HTML, CSS, SEO e motion design.',
      resumeLink: 'Consultar currículo <span aria-hidden="true">↗</span>',
      resumeHref: 'assets/media/Pedro%20Augusto%20-%20Curr%C3%ADculo.pdf',
      footer: '© 2026 Pedro Augusto. Portfólio local.',
      footerAreas: 'Web · UX/UI · Motion · 3D · Imagem',
      projectImage: 'Imagem do projeto',
      projectVideo: 'Vídeo do projeto',
      videoTag: 'Vídeo',
      viewExample: 'Ver página de exemplo ↗',
      code: 'Código',
      viewProduct: 'Ver página do produto ↗',
      file: 'Arquivo',
      portfolioMedia: 'Mídia do portfólio',
      closeViewer: 'Fechar visualização',
      gateTitle: 'Escolha seu idioma.',
      gateCopy: 'Escolha o idioma para acessar o portfólio.',
    },
    en: {
      lang: 'en',
      pageTitle: 'Pedro Augusto — Portfolio',
      description: 'Pedro Augusto’s portfolio — web design, UX/UI, motion design, 3D and image processing.',
      navLabel: 'Primary navigation',
      nav: ['Lab', 'Web', 'Motion', '3D', 'Image', 'Contact'],
      switchLabel: 'PT / EN',
      switchAria: 'Change language',
      eyebrow: 'Professional portfolio · 2026',
      heroTitle: 'Pedro Augusto.<br><em>Digital designer.</em>',
      heroCopy: 'Designer with experience in e-commerce, digital content and creative-process improvement. This portfolio brings together web design, UX/UI, motion, 3D and image-processing projects for communication, products and digital retail.',
      projects: 'View projects <span aria-hidden="true">↓</span>',
      portraitAlt: 'Abstract portrait of Pedro Augusto',
      current: 'Current role',
      role: 'Marketing Assistant<br>Martins Distribuições',
      enriched: 'Enriched content',
      resumeEyebrow: 'Professional profile',
      resumeTitle: 'Design applied to content, operations and digital experience.',
      resumeCopy: 'Work across web design, enriched content, image processing and workflow organization for B2C and B2B e-commerce. Degree studies in Advertising Production and ongoing specialization in Adobe, UX/UI, HTML, CSS, SEO and motion design.',
      resumeLink: 'View resume <span aria-hidden="true">↗</span>',
      resumeHref: 'assets/media/Pedro%20Augusto%20-%20Resume.pdf',
      footer: '© 2026 Pedro Augusto. Local portfolio.',
      footerAreas: 'Web · UX/UI · Motion · 3D · Image',
      projectImage: 'Project image',
      projectVideo: 'Project video',
      videoTag: 'VIDEO',
      viewExample: 'View example page ↗',
      code: 'Code',
      viewProduct: 'View product page ↗',
      file: 'File',
      portfolioMedia: 'Portfolio media',
      closeViewer: 'Close viewer',
      gateTitle: 'Choose your language.',
      gateCopy: 'Choose a language to enter the portfolio.',
    },
  };

  const escapeHtml = value => String(value).replace(/[&<>'"]/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[character]));
  const copyCatalogs = value => JSON.parse(JSON.stringify(value));

  function sourceCatalogs() {
    const legacy = document.querySelector('script[type="application/x-portfolio-reference"]').textContent;
    const start = legacy.indexOf('const files =');
    const end = legacy.indexOf('const ext =');
    if (start < 0 || end < 0) throw new Error('Portfolio catalog source is unavailable.');
    return Function(`${legacy.slice(start, end)}; return catalogs;`)();
  }

  const catalogsPt = sourceCatalogs();

  function catalogsInEnglish() {
    const catalogs = copyCatalogs(catalogsPt);
    const [lab, web, motion, threeD, image] = catalogs;
    const translateItems = mapper => catalogs.forEach(section => section.groups.forEach(group => {
      if (group.items) group.items.forEach(mapper);
      if (group.folders) group.folders.forEach(folder => folder.items.forEach(mapper));
    }));

    lab.eyebrow = 'Layout Lab · UX · UI · Team System';
    lab.description = 'An innovation-management initiative that makes enriched-content production more organized, consistent and accessible to the team. The system centralizes assembly, visual review and responsive validation, reducing operational steps and supporting delivery quality. I applied this workflow to the enriched content for the Metalfrio 572 L beverage cooler (P2221116).';
    lab.reference.label = 'View example page';
    lab.groups[0].title = 'Framework and Hub';

    web.eyebrow = 'Static Design · Web Design · HTML · CSS · Adobe Photoshop';
    web.title = 'Enriched content & web design';
    web.description = 'Selected product pages and visual materials for e-commerce, organized by code to present examples of deliverables in their product context. These are a small selection: I have produced more than 2,175 enriched-content pages individually, while the team’s total output has exceeded 14,000 pieces over two years.';
    web.groups[0].title = 'Projects by product code';
    const products = web.groups[0].folders;
    [
      'Kellthine SC25 Aerosol Insecticide 500 ml',
      'OMO Laundry Powder 700 g',
      'Mondial E-10 Turbo Premium 250 W Fruit Extractor',
      'AOC 50-inch 4K UHD DLED Smart TV',
      'Pokémon Mega Evolution Cards - Triple Blister',
      'Negresco Nevado Strawberry Filled Cookies 90 g',
      'Surpresa Chocolate Filled Cookies 130 g',
      'Pulgoes Deltamethrin Insecticide 10 g',
    ].forEach((title, index) => { products[index].title = title; });

    motion.description = 'Motion design for e-commerce journeys and personal studies. Commercial headers introduce enriched content, creating continuity between product, brand and information.';
    motion.groups[0].title = 'Studies and compositions';
    motion.groups[0].description = 'Explorations of visual language, rendering and process that document technical development in animation and audiovisual work.';
    motion.groups[1].title = 'Enriched-content headers';
    motion.groups[1].description = 'Opening pieces for product pages: an initial visual read that introduces the brand and guides the customer to the complete content.';

    threeD.eyebrow = '3D Environment · Blender';
    threeD.title = '3D studies';
    threeD.description = 'Modeling, posing, rendering and animation process brought together from the original study files.';
    threeD.groups[0].title = 'Characters and Basket';
    threeD.groups[0].description = 'From character experimentation to an original interpretation of Basket, these materials bring together modeling, posing, rendering and process records.';

    image.eyebrow = 'eFácil Image Processing · Adobe Photoshop';
    image.title = 'Image processing';
    image.description = 'Work for eFácil and Martins Distribuições has surpassed 20,000 carousel image treatments. Hero images and promotional layouts are prepared for clarity, consistency and a strong presence in the digital storefront.';
    image.groups[0].title = 'E-commerce hero images and layouts';

    const titleMap = {
      'Imagem do projeto': 'Project image',
      'Vídeo do projeto': 'Project video',
      'Imagem principal': 'Main image',
      'Interface do Framework': 'Framework interface',
      'Interface do Hub': 'Hub interface',
      'Visão geral do Framework': 'Framework overview',
      'DipLoko — Making Of': 'DipLoko — making of',
      'DipLoko — render 1': 'DipLoko — render 1',
      'DipLoko — render 2': 'DipLoko — render 2',
      'Cestinha — composição alternativa': 'Basket — alternative composition',
      'Cestinha — composição final': 'Basket — final composition',
      'Gato — print 1': 'Cat — render 1',
      'Gato — print 2': 'Cat — render 2',
      'Gato — print 3': 'Cat — render 3',
      'Gato — print 4': 'Cat — render 4',
      'Gato — pose': 'Cat — pose',
      'Macaquinho — pose': 'Little monkey — pose',
      'Macaquinho — T pose': 'Little monkey — T pose',
      'Cestinha — print': 'Basket — render',
      'Cestinha — making of': 'Basket — making of',
      'Cestinha — render': 'Basket — render',
      'Hero e-commerce — exemplo 1': 'E-commerce hero — example 1',
      'Hero e-commerce — exemplo 2': 'E-commerce hero — example 2',
      'Hero e-commerce — exemplo 3': 'E-commerce hero — example 3',
      'Hero e-commerce — exemplo 4': 'E-commerce hero — example 4',
      'Hero e-commerce — exemplo 5': 'E-commerce hero — example 5',
      'Hero horizontal — exemplo': 'Horizontal hero — example',
      'Hero vertical — exemplo': 'Vertical hero — example',
      'Black Friday — horizontal': 'Black Friday — horizontal',
      'Black Friday — vertical': 'Black Friday — vertical',
    };
    translateItems(item => { item.title = titleMap[item.title] || item.title; });
    return catalogs;
  }

  const ext = file => file.split('.').pop().toLowerCase();
  const isVideo = file => ['mp4', 'mov', 'mkv', 'webm'].includes(ext(file));
  const url = file => encodeURI(base + file);

  function card(item, text) {
    const video = isVideo(item.file);
    const title = escapeHtml(item.title);
    const source = url(item.file);
    const poster = item.poster ? ` poster="${url(item.poster)}"` : '';
    const kind = video ? text.projectVideo : text.projectImage;
    return `<article class="media-card"><button class="media-preview" type="button" data-file="${source}" data-title="${title}" data-kind="${escapeHtml(kind)}" data-video="${video}">${video ? `<video muted playsinline preload="metadata"${poster} src="${source}"></video>` : `<img src="${source}" alt="${title}" loading="lazy">`}<span class="type ${video ? 'video' : ''}">${video ? text.videoTag : ext(item.file)}</span></button><div class="media-card-info"><strong title="${title}">${title}</strong>${item.link ? `<a href="${item.link}" target="_blank" rel="noreferrer">${text.viewExample}</a>` : ''}</div></article>`;
  }

  function productFolder(folder, text) {
    return `<details class="product-folder" open><summary><span class="product-folder-title"><strong>${escapeHtml(folder.title)}</strong><span>${text.code} ${escapeHtml(folder.code)}</span></span><span class="product-folder-meta"><a href="${folder.link}" target="_blank" rel="noreferrer">${text.viewProduct}</a></span></summary><div class="folder-media"><div class="gallery">${folder.items.map(item => card(item, text)).join('')}</div></div></details>`;
  }

  function groupMarkup(group, text) {
    const content = group.items ? `<div class="gallery">${group.items.map(item => card(item, text)).join('')}</div>` : `<div class="product-folders">${group.folders.map(folder => productFolder(folder, text)).join('')}</div>`;
    return `<div class="group"><div class="group-header"><h3>${escapeHtml(group.title)}</h3></div>${group.description ? `<p class="group-copy">${escapeHtml(group.description)}</p>` : ''}${content}</div>`;
  }

  function renderCatalog(text) {
    const catalogs = currentLanguage === 'en' ? catalogsInEnglish() : copyCatalogs(catalogsPt);
    return catalogs.map(section => {
      const layoutLab = section.id === 'layout-lab';
      return `<section class="gallery-section anchor ${layoutLab ? 'layout-lab-section' : ''}" id="${section.id}"><div class="shell"><div class="section-top"><div><p class="eyebrow">${escapeHtml(section.eyebrow)}</p><h2>${escapeHtml(section.title)}</h2>${section.reference ? `<div class="resources"><a class="resource" href="${section.reference.href}" target="_blank" rel="noreferrer">↗ ${escapeHtml(section.reference.label)}</a></div>` : ''}</div>${layoutLab ? '' : `<div><p>${escapeHtml(section.description)}</p></div>`}</div>${section.groups.map(group => groupMarkup(group, text)).join('')}${layoutLab ? `<p class="section-summary">${escapeHtml(section.description)}</p>` : ''}</div></section>`;
    }).join('');
  }

  function renderSite() {
    const text = ui[currentLanguage];
    document.documentElement.lang = text.lang;
    document.title = text.pageTitle;
    document.querySelector('meta[name="description"]').setAttribute('content', text.description);
    site.innerHTML = `<header id="top"><nav class="nav shell" aria-label="${text.navLabel}"><a class="brand" href="#top"><span class="brand-mark">P</span>Pedro Augusto</a><div class="nav-links"><a href="#layout-lab">${text.nav[0]}</a><a href="#estatico">${text.nav[1]}</a><a href="#motion">${text.nav[2]}</a><a href="#tresd">${text.nav[3]}</a><a href="#tratativa">${text.nav[4]}</a><a href="#curriculo">${text.nav[5]}</a><button class="language-switch" type="button" data-open-language aria-label="${text.switchAria}">${text.switchLabel}</button></div></nav></header><main><section class="hero"><div class="shell hero-grid"><div><p class="eyebrow">${text.eyebrow}</p><h1>${text.heroTitle}</h1><p class="copy">${text.heroCopy}</p><div class="actions"><a class="button button-primary" href="#layout-lab">${text.projects}</a><a class="button" href="mailto:cactusrustinc@gmail.com">cactusrustinc@gmail.com</a><a class="button" href="https://www.linkedin.com/in/pedro-augusto-ba0465381" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div><div class="hero-aside"><img class="hero-portrait" src="assets/media/Pedro Augusto.jpg" alt="${text.portraitAlt}"><aside class="hero-card"><p>${text.current}</p><strong>${text.role}</strong><div class="tags"><span class="tag">UX/UI</span><span class="tag">${text.enriched}</span><span class="tag">Motion</span><span class="tag">Blender</span><span class="tag">Photoshop</span></div></aside></div></div></section>${renderCatalog(text)}<section class="resume anchor" id="curriculo"><div class="shell resume-box"><div><p class="eyebrow">${text.resumeEyebrow}</p><h2>${text.resumeTitle}</h2><p>${text.resumeCopy}</p></div><div class="actions" style="margin-top:0"><a class="button button-primary" href="${text.resumeHref}" target="_blank" rel="noreferrer">${text.resumeLink}</a><a class="button" href="https://www.linkedin.com/in/pedro-augusto-ba0465381" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></div></div></section></main><footer><div class="shell"><span>${text.footer}</span><span>${text.footerAreas}</span></div></footer><dialog id="viewer" aria-labelledby="viewer-title"><div class="dialog-media" id="viewer-media"></div><div class="dialog-info"><div><strong id="viewer-title">${text.file}</strong><span id="viewer-type">${text.portfolioMedia}</span></div><div class="dialog-actions"><button class="close" type="button" id="viewer-close" aria-label="${text.closeViewer}">×</button></div></div></dialog>`;
    updateHeader();
  }

  function updateHeader() {
    const header = document.querySelector('#site-content header');
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
  }

  function updateGateText() {
    const text = ui[currentLanguage];
    document.querySelector('#language-title').textContent = text.gateTitle;
    document.querySelector('#language-title + p').textContent = text.gateCopy;
  }

  function openLanguageMenu() {
    updateGateText();
    gate.hidden = false;
    document.body.classList.add('language-select-open');
    site.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => document.querySelector(`[data-language="${currentLanguage}"]`).focus(), 0);
  }

  function chooseLanguage(language) {
    currentLanguage = language;
    try {
      window.localStorage.setItem('portfolio-language', language);
    } catch {
      // The portfolio remains usable when browser storage is unavailable.
    }
    renderSite();
    gate.hidden = true;
    document.body.classList.remove('language-select-open');
    site.removeAttribute('aria-hidden');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  document.addEventListener('click', event => {
    const option = event.target.closest('[data-language]');
    if (option) {
      chooseLanguage(option.dataset.language);
      return;
    }
    if (event.target.closest('[data-open-language]')) {
      openLanguageMenu();
      return;
    }
    if (event.target.closest('#viewer-close')) {
      document.querySelector('#viewer')?.close();
      return;
    }
    const trigger = event.target.closest('.media-preview');
    if (!trigger) {
      const viewer = document.querySelector('#viewer');
      if (viewer?.open && event.target === viewer) viewer.close();
      return;
    }
    const viewer = document.querySelector('#viewer');
    const media = document.querySelector('#viewer-media');
    const title = document.querySelector('#viewer-title');
    const type = document.querySelector('#viewer-type');
    const video = trigger.dataset.video === 'true';
    media.innerHTML = video ? `<video controls autoplay playsinline src="${trigger.dataset.file}"></video>` : `<img src="${trigger.dataset.file}" alt="${trigger.dataset.title}">`;
    title.textContent = trigger.dataset.title;
    type.textContent = trigger.dataset.kind;
    viewer.showModal();
  });

  document.addEventListener('close', event => {
    if (event.target.matches('#viewer')) document.querySelector('#viewer-media').innerHTML = '';
  }, true);
  window.addEventListener('scroll', updateHeader, { passive: true });

  renderSite();
  updateGateText();
  if (savedLanguage) {
    gate.hidden = true;
    document.body.classList.remove('language-select-open');
    site.removeAttribute('aria-hidden');
  } else {
    window.setTimeout(() => document.querySelector('[data-language="pt"]').focus(), 0);
  }
})();
