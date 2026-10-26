
const $=(s,c=document)=>c.querySelector(s);const $$=(s,c=document)=>[...c.querySelectorAll(s)];
function openTally(id){ if(window.Tally){Tally.openPopup(id,{layout:'modal',width:760,emoji:{text:'⚽',animation:'wave'}})} else {window.open('https://tally.so/r/'+id,'_blank')} }
window.openTally=openTally;
const answers={
  es:{
    programas:'Tenemos cuatro programas: Special One Training, Special One Experience, Special One International Experience y Special One Individual Training. Puedes solicitar información desde cada programa o hablar por WhatsApp.',
    horarios:'Los horarios dependen de categoría, nivel, posición y disponibilidad del grupo. Te orientamos personalmente para colocar al jugador/a donde mejor encaje.',
    ubicacion:'La sede principal de entrenamientos es Club Río Grande, Mairena del Aljarafe, Sevilla.',
    international:'International Experience es una experiencia personalizada en Sevilla para futbolistas internacionales, con sesiones individuales, entrenamientos grupales y partido en ligas privadas según el paquete.',
    clinics:'Los clinics y eventos se activan durante vacaciones, puentes, festivos o fechas especiales. Cuando haya convocatoria abriremos inscripción.',
    individual:'Special One Individual Training son entrenamientos totalmente personalizados para jugadores y porteros que buscan una mejora específica, con sesiones de 60 o 90 minutos según disponibilidad.',
    whatsapp:'Puedes escribirnos directamente por WhatsApp en el botón verde o desde aquí: +34 614 80 60 29.'
  },
  en:{
    programas:'We offer four programs: Special One Training, Special One Experience, Special One International Experience and Special One Individual Training. You can request information from each program or contact us on WhatsApp.',
    horarios:'Schedules depend on the player category, level, position and group availability. We will guide you personally to find the best option.',
    ubicacion:'Our main training venue is Club Río Grande, Mairena del Aljarafe, Seville.',
    international:'International Experience is a personalized football experience in Seville for international players, including individual sessions, group training and a private league match depending on the package.',
    clinics:'Clinics and events open during holidays, long weekends, festive periods or special dates. Registrations will open when a new event is active.',
    individual:'Special One Individual Training offers fully personalized sessions for players and goalkeepers who need specific improvement, with 60 or 90 minute sessions depending on availability.',
    whatsapp:'You can contact us directly on WhatsApp using the green button or here: +34 614 80 60 29.'
  }
};
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.target);const msg=`Hola Special One Academy, soy ${fd.get('nombre')}. Programa: ${fd.get('programa')}. Mensaje: ${fd.get('mensaje')}`;window.open('https://wa.me/34614806029?text='+encodeURIComponent(msg),'_blank')});
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
    heroTitle: 'Academia de tecnificación de fútbol en Sevilla',
    heroText: 'Entrenamiento específico, atención cercana y entrenadores cualificados para complementar el trabajo que el futbolista hace en su club.',
    heroBtns: ['Ver programas','Hablar por WhatsApp'],
    features: [
      ['De prebenjamín a juvenil','Programas adaptados a cada etapa.'],
      ['Jugadores, jugadoras y porteros','Trabajo específico para cada perfil.'],
      ['Grupos reducidos','Atención individual en cada sesión.']
    ],
    aboutEyebrow:'Quiénes somos',
    aboutTitle:'Una academia para seguir mejorando.',
    aboutText:'Special One Academy es una academia de tecnificación y formación futbolística enfocada en la progresión del futbolista.',
    aboutTags:['Trabajo individualizado','Exigencia adaptada','Entorno cercano','Aprendizaje desde la experiencia'],
    programsEyebrow:'Programas',
    programsTitle:'Elige tu programa',
    programsLead:'Cuatro programas para seguir mejorando: entrenamiento en grupo reducido, sesiones individuales, experiencias en vacaciones y un programa para futbolistas internacionales.',
    programCards:[
      {
        title:'SO Training<br>Grupal',
        text:'SO Training Grupal es el programa de tecnificación permanente de la academia, con entrenamientos en grupos reducidos durante la temporada.',
        list:['Tecnificación durante la temporada','Grupos reducidos por edad, categoría y nivel','Corrección individualizada','Entorno exigente y cercano'],
        btns:['Solicitar información','WhatsApp']
      },
      {
        title:'SO Training<br>Individual',
        text:'SO Training Individual es el programa de entrenamientos individuales de la academia, dirigido a jugadores, jugadoras y porteros que buscan un trabajo personalizado y adaptado a sus necesidades.',
        list:['Sesiones individuales o muy personalizadas','Para jugadores, jugadoras y porteros','Trabajo adaptado por edad, nivel, posición y objetivos','Corrección directa durante toda la sesión'],
        btns:['Solicitar información','WhatsApp']
      },
      {
        title:'SO<br>Experience',
        text:'SO Experience reúne los clinics y eventos formativos de la academia durante vacaciones y fechas señaladas.',
        list:['Clinics y eventos formativos','Entrenamientos específicos','Competiciones y dinámicas adaptadas','Correcciones individualizadas'],
        btns:['Solicitar información','WhatsApp']
      },
      {
        title:'SO International<br>Experience',
        text:'SO International Experience es un programa dirigido a futbolistas internacionales que quieren vivir una experiencia formativa dentro del fútbol español.',
        list:['Experiencia personalizada en Sevilla','Sesiones individuales y entrenamientos colectivos','Evaluación por entrenadores de la academia','Convivencia y aprendizaje en entorno futbolístico español'],
        btns:['Solicitar información','WhatsApp']
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
      ['Exigencia adaptada','El nivel de dificultad se ajusta a la edad, categoría, nivel y objetivos del futbolista.'],
      ['Aprendizaje desde la experiencia','Entrenar, competir, equivocarse, corregir y volver a intentarlo. Esa es la base de nuestra forma de trabajar.']
    ],
    galleryEyebrow:'Galería',
    galleryTitle:'Entrenar. Aprender. Competir.',
    galleryLead:'Imágenes reales de sesiones, clinics y experiencias de Special One Academy.',
    contactEyebrow:'Contacto',
    contactTitle:'Contacta con nosotros',
    contactLead:'Cuéntanos qué programa te interesa y te orientamos sobre la mejor opción para el jugador.',
    formLabels:['Nombre','Programa','Mensaje'],
    formPlaceholders:['Tu nombre','Cuéntanos edad, categoría y qué necesitas.'],
    formOptions:['SO Training Grupal','SO Training Individual','SO Experience','SO International Experience','Consulta general'],
    formBtn:'Enviar consulta por WhatsApp →',
    footer:'© Special One Academy · Asociación Deportiva Andalucía Activa',
    legal:['Aviso legal','Privacidad','Cookies','Términos'],
    chatbotTitle:'¡Hola! Soy Special One 👋',
    chatbotSub:'Te ayudo a resolver dudas rápidas',
    chatbotIntro:'¿Sobre qué necesitas información?',
    quick:['Programas disponibles','Horarios y grupos','Ubicación','Individual Training','International Experience','Clinics y eventos','Hablar por WhatsApp'],
    chatPlaceholder:'Escribe tu mensaje…',
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
    heroTitle: 'Football training academy in Seville',
    heroText: 'Specific training, close attention and qualified coaches to complement the work the player does at their club.',
    heroBtns: ['See programs','Talk on WhatsApp'],
    features: [
      ['From Pre-Benjamin to Juvenil','Programs adapted to every stage.'],
      ['Players and goalkeepers','Specific work for each profile.'],
      ['Small groups','Individual attention in every session.']
    ],
    aboutEyebrow:'About us',
    aboutTitle:'An academy to keep improving.',
    aboutText:"Special One Academy is a football training and development academy focused on the player's progress.",
    aboutTags:['Individualized work','Adapted intensity','Close environment','Learning through experience'],
    programsEyebrow:'Programs',
    programsTitle:'Choose your program',
    programsLead:'Four programs to keep improving: small-group training, individual sessions, holiday experiences and a program for international players.',
    programCards:[
      {
        title:'SO Training<br>Group',
        text:"SO Training Group is the academy's permanent training program, with small-group sessions throughout the season.",
        list:['Training throughout the season','Small groups by age, category and level','Individual feedback','A demanding, close environment'],
        btns:['Request information','WhatsApp']
      },
      {
        title:'SO Training<br>Individual',
        text:"SO Training Individual is the academy's individual training program, for players and goalkeepers who want a personalized approach adapted to their needs.",
        list:['Individual or highly personal sessions','For players and goalkeepers','Work adapted to age, level, position and goals','Direct feedback throughout the session'],
        btns:['Request information','WhatsApp']
      },
      {
        title:'SO<br>Experience',
        text:"SO Experience brings together the academy's clinics and training events during holidays and special dates.",
        list:['Training clinics and events','Targeted training','Games and activities adapted to players','Individual feedback'],
        btns:['Request information','WhatsApp']
      },
      {
        title:'SO International<br>Experience',
        text:'SO International Experience is a program for international players who want a training experience within Spanish football.',
        list:['A personal experience in Sevilla','Individual sessions and group training','Assessment by academy coaches','Shared learning in Spanish football'],
        btns:['Request information','WhatsApp']
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
      ['Adapted intensity','The level of difficulty is adapted to the player’s age, category, level and objectives.'],
      ['Learning through experience','Training, competing, making mistakes, correcting and trying again. That is the base of our methodology.']
    ],
    galleryEyebrow:'Gallery',
    galleryTitle:'Train. Learn. Compete.',
    galleryLead:'Real images from sessions, clinics and experiences at Special One Academy.',
    contactEyebrow:'Contact',
    contactTitle:'Contact us',
    contactLead:'Tell us which program you are interested in and we will guide you toward the best option for the player.',
    formLabels:['Name','Program','Message'],
    formPlaceholders:['Your name','Tell us the player age, category and what you need.'],
    formOptions:['SO Training Group','SO Training Individual','SO Experience','SO International Experience','General enquiry'],
    formBtn:'Send enquiry via WhatsApp →',
    footer:'© Special One Academy · Asociación Deportiva Andalucía Activa',
    legal:['Legal notice','Privacy','Cookies','Terms'],
    chatbotTitle:'Hi! I’m Special One 👋',
    chatbotSub:'I can help you with quick questions',
    chatbotIntro:'What do you need information about?',
    quick:['Available programs','Schedules and groups','Location','Individual Training','International Experience','Clinics and events','Talk on WhatsApp'],
    chatPlaceholder:'Write your message…',
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
  $$('.links a').forEach((a,i)=>{if(t.nav[i])setText(a,t.nav[i]);});
  setText($('.nav-cta'), t.navCta);
  setText($('.lang'), t.lang);
  setHTML($('.hero h1'), t.heroTitle);
  setText($('.hero-copy p'), t.heroText);
  $$('.hero-actions .btn').forEach((a,i)=>setText(a,t.heroBtns[i]));
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
    card.querySelectorAll('.check-list li').forEach((li,j)=>{if(p.list[j])setText(li,p.list[j]);});
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
  $$('[data-es][data-en]').forEach(el=>{const text=el.dataset[lang==='en'?'en':'es'];if(el.hasAttribute('data-rich'))setHTML(el,text);else setText(el,text);});
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

(function(){
  const banner = document.getElementById('season-floating-banner');
  if (banner && !localStorage.getItem('seasonBannerClosedV14')) banner.classList.add('show');
})();

document.getElementById('season-close')?.addEventListener('click', function(){
  document.getElementById('season-floating-banner')?.classList.remove('show');
  localStorage.setItem('seasonBannerClosedV14', '1');
});
