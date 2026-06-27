const plans = [
  {
    key: "orrido",
    emoji: "🏞️",
    title: "Mood Orrido, ma romantico",
    short: "Canyon, cascate e poi gelato/bibita.",
    description: "Se troviamo posto, ti porto dentro un canyon a due passi da Trento: acqua, roccia, passerelle e atmosfera da mini avventura. Poi torniamo persone normali con gelato o bibita fresca.",
    time: "Ideale nel pomeriggio, ma dipende dagli orari/slot disponibili.",
    budget: "Basso/medio: biglietto visita + eventuale gelato o bibita.",
    dress: "Scarpe comode, niente outfit troppo delicato: è pur sempre un orrido.",
    backup: "Se non troviamo posto o il meteo rompe, facciamo shopping easy o piano VR in centro.",
    linkTitle: "Controlliamo disponibilità e info?",
    links: [
      { label: "Sito Orrido", url: "https://www.orrido.trento.it/" },
      { label: "Indicazioni Maps", url: "https://www.google.com/maps/search/Orrido+di+Ponte+Alto+Trento" },
    ],
  },
  {
    key: "lido",
    emoji: "🏊",
    title: "Mood lido e sopravvivenza al caldo",
    short: "Piscina, telo, relax e gelatino dopo.",
    description: "Piano semplice e molto estivo: costume, telo, un paio d’ore a mollo e zero pensieri. Se ci va, dopo prendiamo qualcosa di fresco e chiudiamo il pomeriggio con calma.",
    time: "Perfetto dopo le 16:00, così evitiamo il sole peggiore.",
    budget: "Medio-basso: ingresso piscina + eventuale gelato/bibita.",
    dress: "Costume, telo, ciabatte e voglia di non morire di caldo.",
    backup: "Se il tempo gira male, niente tragedie: shopping o bar fresco.",
    linkTitle: "Scegliamo la piscina?",
    links: [
      { label: "ASIS Piscine", url: "https://www.asis.trento.it/impianti/piscine/" },
      { label: "Lido Fogazzaro", url: "https://www.google.com/maps/search/Lido+Fogazzaro+Trento" },
      { label: "Trento Nord", url: "https://www.google.com/maps/search/Centro+Sportivo+Trento+Nord+Gardolo" },
    ],
  },
  {
    key: "shopping",
    emoji: "🛍️",
    title: "Mood shopping tranquillo",
    short: "Scegli tu: Adigeo, centro Trento o Top Center.",
    description: "Facciamo un giro easy senza programmi strani: guardiamo due negozi, ci prendiamo qualcosa di fresco e scegli tu dove andare. Opzione perfetta se vogliamo stare leggeri e avere anche un piano coperto se il meteo non collabora.",
    time: "Quando vuoi dopo le 16:00, super flessibile.",
    budget: "Variabile: può essere anche quasi zero se facciamo solo un giro.",
    dress: "Normale da uscita comoda, con libertà di provare cose se ti va.",
    backup: "Questo è già il piano B intelligente se fuori fa troppo caldo o piove.",
    linkTitle: "Dove vuoi andare?",
    links: [
      { label: "Adigeo", url: "https://www.adigeo.com/" },
      { label: "Centro Trento", url: "https://www.google.com/maps/search/negozi+centro+Trento" },
      { label: "Top Center TN", url: "https://www.google.com/maps/search/Top+Center+Trento" },
    ],
  },
  {
    key: "lago",
    emoji: "🌊",
    title: "Mood lago ma chill",
    short: "Caldonazzo o Calceranica, aria estiva e gelatino.",
    description: "Partiamo senza fretta, ci facciamo un giro sul lago, due passi, gelato o bibita fresca e poi decidiamo se restare per il tramonto. Se ci va possiamo anche passare dalla zona della Color Run per respirare un po’ di vibe estiva.",
    time: "Ritrovo verso le 16:00, così recuperiamo con calma dopo pranzo.",
    budget: "Basso: gelato/bibita e benzina, senza aperitivi pesanti.",
    dress: "Comoda, scarpe tranquille, magari costume o telo se ti va.",
    backup: "Se il cielo minaccia, restiamo più vicini a Trento e trasformiamo tutto in gelato + passeggiata coperta.",
    linkTitle: "Vuoi farti un’idea migliore?",
    links: [
      { label: "Color Run", url: "https://www.visittrentino.info/it/guida/cosa-fare/eventi/calceranica-lake-color-run-2026_e_131826492" },
    ],
  },
  {
    key: "easy",
    emoji: "🍦",
    title: "Mood gelatino e coccole urbane",
    short: "Centro, Albere, gelato e chiacchiere lente.",
    description: "Facciamo una cosa semplice ma fatta bene: gelato, passeggiata alle Albere o in centro, panchina tattica e zero pressione. Il piano perfetto quando conta più stare insieme che fare mille cose.",
    time: "Dalle 16:00 in poi, super elastico.",
    budget: "Molto basso: 3–7€ a testa circa.",
    dress: "Outfit libero, basta essere in mood passeggiata.",
    backup: "Se piove ci rifugiamo in un bar e facciamo finta che fosse il piano principale.",
  },
  {
    key: "picnic",
    emoji: "🧺",
    title: "Mood picnic povero ma romantico",
    short: "Telo, focaccia, frutta e piano da bravo ragazzo.",
    description: "Prendiamo due cosine al supermercato, ci sediamo in un posto tranquillo e facciamo un mini picnic senza pretese. Economico, carino e con altissima probabilità di sembrare più organizzato di quanto sia davvero.",
    time: "Io passo a recuperare le provviste e ci vediamo verso le 16:15.",
    budget: "Basso: 5–8€ a testa, dipende da quanto ci sentiamo gourmet.",
    dress: "Comoda da prato/parco, niente scarpe che odiano l’erba.",
    backup: "Se arriva il temporale, picnic indoor improvvisato o bar tranquillo.",
  },
  {
    key: "natura",
    emoji: "🌲",
    title: "Mood scappiamo dal caldo",
    short: "Bondone o Viote, fresco e mini passeggiata.",
    description: "Se il meteo ci concede tregua, saliamo un po’ e cerchiamo fresco. Mini passeggiata, aria pulita, foto carine e rientro quando ci va. Molto da coppietta sana, ma senza dirlo troppo forte.",
    time: "Partenza intorno alle 16:00, così non corriamo.",
    budget: "Quasi gratis: solo benzina e magari merenda. Se entriamo al Giardino Botanico, budget comunque tranquillo.",
    dress: "Scarpe comode e felpina leggera se saliamo.",
    backup: "Se il meteo è brutto, niente eroismi: scegliamo il mood gelato o VR in centro.",
    linkTitle: "Vuoi farti un’idea migliore?",
    links: [
      { label: "Viote", url: "https://www.muse.it/home/scopri-il-museo/il-muse-sul-territorio/giardino-botanico-alpino/" },
    ],
  },
  {
    key: "strano",
    emoji: "🥽",
    title: "Mood sorpresa strana ma carina",
    short: "Cappella Vantini VR + giro in centro.",
    description: "Facciamo una cosina diversa dal solito: esperienza VR a Cappella Vantini, poi giretto in centro e gelato. È il piano perfetto se vogliamo dire: ‘non sapevamo cosa fare, quindi abbiamo fatto una cosa buffa’.",
    time: "Perfetto dalle 16:00 in poi.",
    budget: "Molto basso: attività gratuita + gelato/bibita.",
    dress: "Normale da centro, ma con mentalità da esploratrice.",
    backup: "È già abbastanza piano B, perché resta in città e vicino ai posti coperti.",
    linkTitle: "Vuoi farti un’idea migliore?",
    links: [
      { label: "Cappella Vantini VR", url: "https://www.visittrento.it/it/eventi/antiche-storie-d-acqua-a-cappella-vantini-torna-la-realta-virtuale" },
    ],
  },
  {
    key: "random",
    emoji: "🎲",
    title: "Mood Gio decide",
    short: "Scelta random, responsabilità sentimentale mia.",
    description: "Hai scelto la modalità pericolosa: decido io una delle idee migliori in base a meteo, energia e voglia di fare strada. Tu devi solo essere carina come sempre, il che purtroppo ti riesce facile.",
    time: "Ti aggiorno io appena esco da pranzo, target 15:45/16:00.",
    budget: "Promessa solenne: budget chill.",
    dress: "Comoda e pronta a un minimo di sorpresa.",
    backup: "Se il cielo fa il drammatico, scelgo qualcosa vicino e coperto.",
  },
];

const screens = {
  start: document.querySelector("#screen-start"),
  mood: document.querySelector("#screen-mood"),
  result: document.querySelector("#screen-result"),
};

const moodGrid = document.querySelector("#moodGrid");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const backToStart = document.querySelector("#backToStart");
const changeMoodBtn = document.querySelector("#changeMoodBtn");
const rerollBtn = document.querySelector("#rerollBtn");
const toast = document.querySelector("#toast");
const whatsappBtn = document.querySelector("#whatsappBtn");

const resultEmoji = document.querySelector("#resultEmoji");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#resultDescription");
const resultTime = document.querySelector("#resultTime");
const resultBudget = document.querySelector("#resultBudget");
const resultDress = document.querySelector("#resultDress");
const resultBackup = document.querySelector("#resultBackup");
const experienceLinkBox = document.querySelector("#experienceLinkBox");
const experienceLinkTitle = document.querySelector("#experienceLinkTitle");
const experienceLinks = document.querySelector("#experienceLinks");

let lastPlanKey = null;

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMoodCards() {
  moodGrid.innerHTML = plans.map((plan) => `
    <button class="mood-card" data-key="${plan.key}" aria-label="Scegli ${plan.title}">
      <span class="mood-emoji">${plan.emoji}</span>
      <h3>${plan.title}</h3>
      <p>${plan.short}</p>
    </button>
  `).join("");

  moodGrid.querySelectorAll(".mood-card").forEach((card) => {
    card.addEventListener("click", () => selectPlan(card.dataset.key));
  });
}

function renderLinks(plan) {
  const links = plan.links || (plan.linkUrl ? [{ label: plan.linkText || "Apri il sito", url: plan.linkUrl }] : []);

  if (!links.length) {
    experienceLinkBox.hidden = true;
    experienceLinks.innerHTML = "";
    return;
  }

  experienceLinkBox.hidden = false;
  experienceLinkTitle.textContent = plan.linkTitle || "Vuoi farti un’idea migliore?";
  experienceLinks.innerHTML = links.map((link) => `
    <a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>
  `).join("");
}

function selectPlan(key) {
  const plan = key === "random" ? getRandomPlan() : plans.find((item) => item.key === key);
  if (!plan) return;

  lastPlanKey = plan.key;
  resultEmoji.textContent = plan.emoji;
  resultTitle.textContent = plan.title;
  resultDescription.textContent = plan.description;
  resultTime.textContent = plan.time;
  resultBudget.textContent = plan.budget;
  resultDress.textContent = plan.dress;
  resultBackup.textContent = plan.backup;
  renderLinks(plan);

  const message = `Ho scelto ${plan.emoji} ${plan.title}. Organizzati amore, mi devi portare via ❤️`;
  whatsappBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  showScreen("result");
  softHeart();
}

function getRandomPlan() {
  const realPlans = plans.filter((plan) => plan.key !== "random" && plan.key !== lastPlanKey);
  return realPlans[Math.floor(Math.random() * realPlans.length)];
}

function moveNoButton() {
  const maxX = Math.min(160, window.innerWidth * 0.28);
  const maxY = Math.min(120, window.innerHeight * 0.18);
  const x = Math.round((Math.random() - 0.5) * 2 * maxX);
  const y = Math.round((Math.random() - 0.5) * 2 * maxY);
  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.round(Math.random() * 18 - 9)}deg)`;
  showToast();
}

function showToast() {
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 1600);
}

function softHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-pop";
  heart.textContent = "❤️";
  document.body.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}

yesBtn.addEventListener("click", () => {
  showScreen("mood");
  softHeart();
});

["mouseenter", "touchstart", "focus", "click"].forEach((eventName) => {
  noBtn.addEventListener(eventName, (event) => {
    event.preventDefault();
    moveNoButton();
  }, { passive: false });
});

backToStart.addEventListener("click", () => showScreen("start"));
changeMoodBtn.addEventListener("click", () => showScreen("mood"));
rerollBtn.addEventListener("click", () => selectPlan("random"));

renderMoodCards();
