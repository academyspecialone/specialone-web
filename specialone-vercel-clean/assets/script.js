
const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];
window.addEventListener('scroll',()=>$('.nav')?.classList.toggle('scrolled',scrollY>20));
$('.mobile-toggle')?.addEventListener('click',()=>$('.nav').classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.15});$$('.reveal').forEach(el=>io.observe(el));
function openTally(id){ if(window.Tally){Tally.openPopup(id,{layout:'modal',width:760,emoji:{text:'⚽',animation:'wave'}})} else {window.open('https://tally.so/r/'+id,'_blank')} }
window.openTally=openTally;
$('.chat-launch')?.addEventListener('click',()=>$('.chatbot').classList.toggle('open'));
const answers={
  es:{
    programas:'Tenemos tres líneas: Special One Training, Special One Experience e International Experience. Puedes solicitar información desde cada programa o hablar por WhatsApp.',
    horarios:'Los horarios dependen de categoría, nivel, posición y disponibilidad del grupo. Te orientamos personalmente para colocar al jugador/a donde mejor encaje.',
    ubicacion:'La sede principal de entrenamientos es Club Río Grande, Mairena del Aljarafe, Sevilla.',
    international:'International Experience es una experiencia personalizada en Sevilla para futbolistas internacionales, con sesiones individuales, entrenamientos grupales y partido en ligas privadas según el paquete.',
    clinics:'Los clinics y eventos se activan durante vacaciones, puentes, festivos o fechas especiales. Cuando haya convocatoria abriremos inscripción.',
    whatsapp:'Puedes escribirnos directamente por WhatsApp en el botón verde o desde aquí: +34 614 80 60 29.'
  },
  en:{
    programas:'We offer three programs: Special One Training, Special One Experience and International Experience. You can request information from each program or contact us on WhatsApp.',
    horarios:'Schedules depend on the player category, level, position and group availability. We will guide you personally to find the best option.',
    ubicacion:'Our main training venue is Club Río Grande, Mairena del Aljarafe, Seville.',
    international:'International Experience is a personalized football experience in Seville for international players, including individual sessions, group training and a private league match depending on the package.',
    clinics:'Clinics and events open during holidays, long weekends, festive periods or special dates. Registrations will open when a new event is active.',
    whatsapp:'You can contact us directly on WhatsApp using the green button or here: +34 614 80 60 29.'
  }
};
$$('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const a=$('.chat-answer');a.style.display='block';const lang=localStorage.getItem('soaLang')||'es'; a.textContent=(answers[lang]?.[b.dataset.answer])||answers[lang]?.programas||answers.es.programas;}));
$('#chatSend')?.addEventListener('click',()=>{const v=$('#chatInput').value.trim();const a=$('.chat-answer');a.style.display='block';const lang=localStorage.getItem('soaLang')||'es'; a.innerHTML=(lang==='en'?'Thank you. For a personalized answer, contact us on WhatsApp and we will guide you toward the best program.':'Gracias. Para darte una respuesta personalizada, escríbenos por WhatsApp y te orientamos sobre el programa más adecuado.')+' <br><br><b>+34 614 80 60 29</b>';});
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.target);const msg=`Hola Special One Academy, soy ${fd.get('nombre')}. Programa: ${fd.get('programa')}. Teléfono: ${fd.get('telefono')}. Email: ${fd.get('email')}. Mensaje: ${fd.get('mensaje')}`;window.open('https://wa.me/34614806029?text='+encodeURIComponent(msg),'_blank')});
if(!localStorage.getItem('soaCookies')) setTimeout(()=>$('.cookie')?.classList.add('show'),900);
$$('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('soaCookies',b.dataset.cookie);$('.cookie')?.classList.remove('show')}));


/* ES/EN real language switch - keeps v6 design untouched */
const SOA_I18N = {
  es: {
    htmlLang: 'es',
    title: 'Special One Academy | Academia de tecnificación en Sevilla',
    description: 'Special One Academy es una academia de tecnificación en Sevilla para futbolistas y porteros desde prebenjamín hasta juvenil. Entrenamientos, clinics y experiencias internacionales.',
    nav: ['Quiénes Somos','Metodología','Programas','Galería','Contacto'],
    navCta: 'Contacta con nosotros',
    lang: 'ES⌄',
    heroEyebrow: 'Academia de tecnificación en Sevilla',
    heroTitle: 'Formamos jugadores.<br><span class="gold">Creamos futuro.</span>',
    heroText: 'En Special One Academy ayudamos a futbolistas y porteros a mejorar su juego con entrenamientos profesionales, metodología propia y entrenadores cualificados.',
    heroBtns: ['Conoce nuestros programas →','Quiénes somos ▶'],
    features: [
      ['Desde prebenjamín hasta juvenil','Programas adaptados a cada etapa formativa.'],
      ['Masculino, femenino, jugadores y porteros','Entrenamiento específico y personalizado.'],
      ['Grupos reducidos y entrenadores especializados','Atención individual y máxima calidad.']
    ],
    aboutEyebrow:'Quiénes somos',
    aboutTitle:'Una academia para mejorar de verdad.',
    aboutText:'Special One Academy es una academia de tecnificación y formación futbolística orientada al desarrollo real del jugador. Complementamos el trabajo de los clubes con sesiones específicas, corrección cercana y una metodología diseñada para mejorar el rendimiento, la comprensión del juego y la confianza dentro del campo.',
    aboutTags:['Trabajo individualizado','Exigencia adaptada','Entorno cercano','Aprendizaje desde la experiencia'],
    programsEyebrow:'Programas',
    programsTitle:'Elige tu programa',
    programsLead:'Tres formas de vivir el fútbol con Special One Academy: tecnificación permanente, clinics/eventos e International Experience.',
    programCards:[
      {
        title:'Special One<br>Training',
        text:'Programa permanente de tecnificación durante la temporada para jugadores, jugadoras y porteros que quieren mejorar con sesiones específicas y grupos reducidos.',
        list:['Tecnificación semanal','Corrección individualizada','Grupos por edad, categoría y nivel'],
        btns:['Formulario Training →','Resolver dudas']
      },
      {
        title:'Special One<br>Experience',
        text:'Clinics y eventos deportivos de varios días, organizados durante vacaciones, puentes, festivos o fechas especiales.',
        list:['Entrenamientos específicos','Competiciones y dinámicas','Correcciones individualizadas'],
        btns:['Próximas inscripciones →','Consultar clinics']
      },
      {
        title:'International<br>Experience',
        text:'Experiencia formativa en Sevilla para futbolistas internacionales que quieren entrenar, competir y conocer el fútbol español desde dentro.',
        list:['Experiencia personalizada','Sesiones individuales y grupales','Partido en ligas privadas'],
        btns:['Formulario International →','Hablar con nosotros']
      }
    ],
    values:[
      ['Metodología propia','Desarrollada por entrenadores profesionales.'],
      ['Entrenadores cualificados','Especialistas en formación y desarrollo.'],
      ['Mejora continua','Evolución real y seguimiento cercano.'],
      ['Sevilla, España','Academia de tecnificación en Sevilla.']
    ],
    methodEyebrow:'Metodología',
    methodTitle:'Corrección, sentido y evolución.',
    methodLead:'Una forma de entrenar basada en la atención cercana, la repetición con sentido, la exigencia adaptada y el aprendizaje desde la experiencia.',
    methods:[
      ['Corrección cercana','Observamos detalles técnicos y de comportamiento en el juego para acompañar al futbolista durante su proceso de mejora.'],
      ['Repetición con sentido','Diseñamos tareas para mejorar el gesto técnico, la coordinación y la seguridad del jugador sin convertir el entrenamiento en ejercicios vacíos.'],
      ['Exigencia adaptada','El nivel de dificultad se ajusta a la edad, categoría, nivel y objetivos del futbolista para generar progreso real.'],
      ['Aprendizaje desde la experiencia','Entrenar, competir, equivocarse, corregir y volver a intentarlo. Esa es la base de nuestra forma de trabajar.']
    ],
    galleryEyebrow:'Galería',
    galleryTitle:'Entrenar. Aprender. Competir.',
    galleryLead:'Imágenes reales de sesiones, clinics y experiencias de Special One Academy.',
    contactEyebrow:'Contacto',
    contactTitle:'Contacta con nosotros',
    contactLead:'Cuéntanos qué programa te interesa y te orientamos sobre la mejor opción para el jugador.',
    formLabels:['Nombre','Teléfono','Email','Programa','Mensaje'],
    formPlaceholders:['Tu nombre','+34...','tu@email.com','Cuéntanos edad, categoría y qué necesitas.'],
    formOptions:['Special One Training','Special One Experience','International Experience','Consulta general'],
    formBtn:'Enviar consulta por WhatsApp →',
    footer:'© Special One Academy · Asociación Deportiva Andalucía Activa',
    legal:['Aviso legal','Privacidad','Cookies','Términos'],
    chatbotTitle:'¡Hola! Soy Special One 👋',
    chatbotSub:'Te ayudo a resolver dudas rápidas',
    chatbotIntro:'¿Sobre qué necesitas información?',
    quick:['Programas disponibles','Horarios y grupos','Ubicación','International Experience','Clinics y eventos','Hablar por WhatsApp'],
    chatPlaceholder:'Escribe tu mensaje...',
    cookiesTitle:'Cookies',
    cookiesText:'Utilizamos cookies técnicas y de análisis para mejorar la experiencia de navegación. Puedes aceptar o rechazar su uso.',
    cookiesBtns:['Aceptar','Rechazar','Ver política']
  },
  en: {
    htmlLang: 'en',
    title: 'Special One Academy | Football training academy in Seville',
    description: 'Special One Academy is a football training academy in Seville for players and goalkeepers from Pre-Benjamin to Juvenil. Training, clinics and international experiences.',
    nav: ['About Us','Methodology','Programs','Gallery','Contact'],
    navCta: 'Contact us',
    lang: 'EN⌄',
    heroEyebrow: 'Football training academy in Seville',
    heroTitle: 'We develop players.<br><span class="gold">We create future.</span>',
    heroText: 'At Special One Academy we help football players and goalkeepers improve their game through professional training, our own methodology and qualified coaches.',
    heroBtns: ['Explore our programs →','About us ▶'],
    features: [
      ['From Pre-Benjamin to Juvenil','Programs adapted to every development stage.'],
      ['Boys, girls, players and goalkeepers','Specific and personalized training.'],
      ['Small groups and specialized coaches','Individual attention and maximum quality.']
    ],
    aboutEyebrow:'About us',
    aboutTitle:'A football academy built for real improvement.',
    aboutText:'Special One Academy is a football training and development academy focused on the real growth of the player. We complement club training with specific sessions, close correction and a methodology designed to improve performance, game understanding and confidence on the pitch.',
    aboutTags:['Individualized work','Adapted intensity','Close environment','Learning through experience'],
    programsEyebrow:'Programs',
    programsTitle:'Choose your program',
    programsLead:'Three ways to experience football with Special One Academy: permanent training, clinics/events and International Experience.',
    programCards:[
      {
        title:'Special One<br>Training',
        text:'Permanent football development program during the season for players and goalkeepers who want to improve through specific sessions and small groups.',
        list:['Weekly technical training','Individual correction','Groups by age, category and level'],
        btns:['Training Form →','Ask questions']
      },
      {
        title:'Special One<br>Experience',
        text:'Multi-day football clinics and sports events organized during holidays, long weekends, festive periods or special dates.',
        list:['Specific training sessions','Competitions and dynamics','Individual corrections'],
        btns:['Next registrations →','Ask about clinics']
      },
      {
        title:'International<br>Experience',
        text:'Football training experience in Seville for international players who want to train, compete and discover Spanish football from the inside.',
        list:['Personalized experience','Individual and group sessions','Private league match'],
        btns:['International Form →','Talk to us']
      }
    ],
    values:[
      ['Own methodology','Developed by professional coaches.'],
      ['Qualified coaches','Specialists in player development.'],
      ['Continuous improvement','Real evolution and close follow-up.'],
      ['Seville, Spain','Football training academy in Seville.']
    ],
    methodEyebrow:'Methodology',
    methodTitle:'Correction, purpose and evolution.',
    methodLead:'A training approach based on close attention, purposeful repetition, adapted intensity and learning through experience.',
    methods:[
      ['Close correction','We observe technical and behavioral details in the game to support the player throughout the improvement process.'],
      ['Purposeful repetition','We design tasks to improve technical execution, coordination and confidence without turning training into empty exercises.'],
      ['Adapted intensity','The level of difficulty is adapted to the player’s age, category, level and objectives to generate real progress.'],
      ['Learning through experience','Training, competing, making mistakes, correcting and trying again. That is the base of our methodology.']
    ],
    galleryEyebrow:'Gallery',
    galleryTitle:'Train. Learn. Compete.',
    galleryLead:'Real images from sessions, clinics and experiences at Special One Academy.',
    contactEyebrow:'Contact',
    contactTitle:'Contact us',
    contactLead:'Tell us which program you are interested in and we will guide you toward the best option for the player.',
    formLabels:['Name','Phone','Email','Program','Message'],
    formPlaceholders:['Your name','+34...','your@email.com','Tell us the player age, category and what you need.'],
    formOptions:['Special One Training','Special One Experience','International Experience','General enquiry'],
    formBtn:'Send enquiry via WhatsApp →',
    footer:'© Special One Academy · Asociación Deportiva Andalucía Activa',
    legal:['Legal notice','Privacy','Cookies','Terms'],
    chatbotTitle:'Hi! I’m Special One 👋',
    chatbotSub:'I can help you with quick questions',
    chatbotIntro:'What do you need information about?',
    quick:['Available programs','Schedules and groups','Location','International Experience','Clinics and events','Talk on WhatsApp'],
    chatPlaceholder:'Write your message...',
    cookiesTitle:'Cookies',
    cookiesText:'We use technical and analytics cookies to improve your browsing experience. You can accept or reject their use.',
    cookiesBtns:['Accept','Reject','View policy']
  }
};

function setText(el, value){ if(el && value!==undefined) el.textContent=value; }
function setHTML(el, value){ if(el && value!==undefined) el.innerHTML=value; }

function applySOALanguage(lang){
  const t = SOA_I18N[lang] || SOA_I18N.es;
  document.documentElement.lang = t.htmlLang;
  document.title = t.title;
  const desc = document.querySelector('meta[name="description"]'); if(desc) desc.setAttribute('content', t.description);
  $$('.links a').forEach((a,i)=>setText(a,t.nav[i]));
  setText($('.nav-cta'), t.navCta);
  setText($('.lang'), t.lang);
  setText($('.hero .eyebrow'), t.heroEyebrow);
  setHTML($('.hero h1'), t.heroTitle);
  setText($('.hero-copy p'), t.heroText);
  $$('.hero-actions a').forEach((a,i)=>setText(a,t.heroBtns[i]));
  $$('.hero-feature').forEach((card,i)=>{setText(card.querySelector('h3'),t.features[i]?.[0]);setText(card.querySelector('p'),t.features[i]?.[1]);});
  setText($('#quienes .eyebrow'), t.aboutEyebrow);
  setText($('#quienes h3'), t.aboutTitle);
  setText($('#quienes .glass-card p'), t.aboutText);
  $$('#quienes .tag').forEach((el,i)=>setText(el,t.aboutTags[i]));
  setText($('#programas .eyebrow'), t.programsEyebrow);
  setText($('#programas h2'), t.programsTitle);
  setText($('#programas .lead'), t.programsLead);
  $$('.program-card').forEach((card,i)=>{
    const p=t.programCards[i]; if(!p) return;
    setHTML(card.querySelector('h3'),p.title);
    setText(card.querySelector('p'),p.text);
    card.querySelectorAll('li').forEach((li,j)=>setText(li,p.list[j]));
    card.querySelectorAll('.program-actions button,.program-actions a').forEach((b,j)=>setText(b,p.btns[j]));
  });
  $$('.value').forEach((card,i)=>{setText(card.querySelector('h4'),t.values[i]?.[0]);setText(card.querySelector('p'),t.values[i]?.[1]);});
  setText($('#metodologia .eyebrow'), t.methodEyebrow);
  setText($('#metodologia h2'), t.methodTitle);
  setText($('#metodologia .lead'), t.methodLead);
  $$('.method-card').forEach((card,i)=>{setText(card.querySelector('h3'),t.methods[i]?.[0]);setText(card.querySelector('p'),t.methods[i]?.[1]);});
  setText($('#galeria .eyebrow'), t.galleryEyebrow);
  setText($('#galeria h2'), t.galleryTitle);
  setText($('#galeria .lead'), t.galleryLead);
  setText($('#contacto .eyebrow'), t.contactEyebrow);
  setText($('#contacto h2'), t.contactTitle);
  setText($('#contacto .lead'), t.contactLead);
  $$('#contactForm label').forEach((l,i)=>setText(l,t.formLabels[i]));
  const inputs=$$('#contactForm input, #contactForm textarea');
  inputs.forEach((inp,i)=>{ if(t.formPlaceholders[i]) inp.placeholder=t.formPlaceholders[i]; });
  $$('#contactForm select option').forEach((o,i)=>setText(o,t.formOptions[i]));
  setText($('#contactForm button[type="submit"]'), t.formBtn);
  setText($('.footer-inner > div:first-child'), t.footer);
  $$('.legal a').forEach((a,i)=>setText(a,t.legal[i]));
  setHTML($('.chat-head strong'), t.chatbotTitle);
  setText($('.chat-head small'), t.chatbotSub);
  setText($('.bot-bubble'), t.chatbotIntro);
  $$('.quick button').forEach((b,i)=>setText(b,t.quick[i]));
  const ci=$('#chatInput'); if(ci) ci.placeholder=t.chatPlaceholder;
  setText($('.cookie strong'), t.cookiesTitle);
  setText($('.cookie p'), t.cookiesText);
  $$('.cookie-actions button,.cookie-actions a').forEach((b,i)=>setText(b,t.cookiesBtns[i]));
  localStorage.setItem('soaLang',lang);
}
window.applySOALanguage = applySOALanguage;

document.addEventListener('DOMContentLoaded',()=>{
  applySOALanguage(localStorage.getItem('soaLang') || 'es');
  $('.lang')?.addEventListener('click',()=>{
    const next=(localStorage.getItem('soaLang') || 'es') === 'es' ? 'en' : 'es';
    applySOALanguage(next);
  });
});
