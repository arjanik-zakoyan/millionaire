let menuPage = document.getElementById("menu-page");

let quizPage = document.getElementById("quiz-page");
let yerajshtutyanElement = document.getElementById("yerajshtutyun");

let quizPageQuestion = document.getElementById("quiz-page-question");
let quizPageOption1 = document.getElementById("quiz-page-option-1");
let quizPageOption2 = document.getElementById("quiz-page-option-2");
let quizPageOption3 = document.getElementById("quiz-page-option-3");
let quizPageOption4 = document.getElementById("quiz-page-option-4");

let answerPage = document.getElementById("answer-page");
let answerText = document.getElementById("answer-text");

let finishPage = document.getElementById("finish-page");
let finishText = document.getElementById("finish-text");

yerajshtutyanElement.volume = 0.01;
yerajshtutyanElement.pause();

let musicHarcer = [
  {
    harc: "M Inchpisine yexanaky aysor?",
    t1: "Arevot",
    t2: "Andzrevot",
    t3: "Qamot",
    t4: "Dznot",
    chisht: 2
  },
  {
    harc: "M Inchpisine tramadrutyuny aysor?",
    t1: "Drakan",
    t2: "Anorosh",
    t3: "Voch drakan",
    t4: "Anhaskanali",
    chisht: 4
  },
  {
    harc: "M Inchpisine energian aysor?",
    t1: "Shat",
    t2: "Qich",
    t3: "El chkaaaaaaa!",
    t4: "Mijin",
    chisht: 3
  }
];

let paintingHarcer = [
  {
    harc: "P Inchpisine yexanaky aysor?",
    t1: "Arevot",
    t2: "Andzrevot",
    t3: "Qamot",
    t4: "Dznot",
    chisht: 2
  },
  {
    harc: "P Inchpisine tramadrutyuny aysor?",
    t1: "Drakan",
    t2: "Anorosh",
    t3: "Voch drakan",
    t4: "Anhaskanali",
    chisht: 4
  },
  {
    harc: "P Inchpisine energian aysor?",
    t1: "Shat",
    t2: "Qich",
    t3: "El chkaaaaaaa!",
    t4: "Mijin",
    chisht: 3
  }
];

let filmHarcer = [
  {
    harc: "F Inchpisine yexanaky aysor?",
    t1: "Arevot",
    t2: "Andzrevot",
    t3: "Qamot",
    t4: "Dznot",
    chisht: 2
  },
  {
    harc: "F Inchpisine tramadrutyuny aysor?",
    t1: "Drakan",
    t2: "Anorosh",
    t3: "Voch drakan",
    t4: "Anhaskanali",
    chisht: 4
  },
  {
    harc: "F Inchpisine energian aysor?",
    t1: "Shat",
    t2: "Qich",
    t3: "El chkaaaaaaa!",
    t4: "Mijin",
    chisht: 3
  }
];

let yntacikHarcer = [];
let yntacikHarciIndex = 0;
let harceriQanak = 2;
let jishtPatasxanneriQanak = 0;
let quizCategory = "";

let localStorageBanali = "quiz-stats-bagrat-kirakosyan";

let stats = [];

kardalArdyunqnery();

function skselQuiz(tesak) {
  yntacikHarciIndex = 0;
  jishtPatasxanneriQanak = 0;

  if (tesak === "music") {
    yntacikHarcer = musicHarcer;
  } else if (tesak === "painting") {
    yntacikHarcer = paintingHarcer;
  } else if (tesak === "film") {
    yntacikHarcer = filmHarcer;
  } else {
    yntacikHarcer = [];
    quizCategory = "";
    alert("Unknown Quiz");
    return;
  }

  quizCategory = tesak;

  shuffle(yntacikHarcer);

  yerajshtutyanElement.currentTime = 0;
  // yerajshtutyanElement.play();

  cuycTalYntacikHarcy();
}

function pakelQuiz() {
  quizPage.style.display = "none";
  answerPage.style.display = "none";
  finishPage.style.display = "none";
  menuPage.style.display = "block";
  yerajshtutyanElement.pause();
}

function cuycTalYntacikHarcy() {
  menuPage.style.display = "none";
  quizPage.style.display = "block";
  answerPage.style.display = "none";
  finishPage.style.display = "none";

  let himikvaHarc = yntacikHarcer[yntacikHarciIndex];

  quizPageQuestion.innerText = himikvaHarc["harc"];
  quizPageOption1.innerText = himikvaHarc["t1"];
  quizPageOption2.innerText = himikvaHarc["t2"];
  quizPageOption3.innerText = himikvaHarc["t3"];
  quizPageOption4.innerText = himikvaHarc["t4"];
}

function patasxanelTarberak(tarberak) {
  let himikvaHarc = yntacikHarcer[yntacikHarciIndex];
  let jishtTarberak = himikvaHarc["chisht"];

  if (tarberak === jishtTarberak) {
    jishtPatasxanneriQanak++;
    answerText.innerText = "BRAVO";
    answerText.style.color = "green";
  } else {
    answerText.innerText = "WRONG";
    answerText.style.color = "red";
  }

  answerPage.style.display = "block";

  setTimeout(arachGnal, 2 * 1000);
}

function arachGnal() {
  answerPage.style.display = "none";

  if (yntacikHarciIndex < harceriQanak - 1) {
    poxelHarcy();
  } else {
    pahpanelVerchnakanArdyunqnery();
    cuycTalVerchnakanEj();
  }
}

function cuycTalVerchnakanEj() {
  let text =
    "Duq jisht eq patasxanel " +
    harceriQanak +
    " harcic " +
    jishtPatasxanneriQanak +
    " harcin";
  finishText.innerText = text;
  finishPage.style.display = "block";
}

function poxelHarcy() {
  yntacikHarciIndex++;
  cuycTalYntacikHarcy();
}

function pahpanelVerchnakanArdyunqnery() {
  let himikvaPahy = new Date();
  let statObject = {
    questionsCount: harceriQanak,
    correctCount: jishtPatasxanneriQanak,
    category: quizCategory,
    date: himikvaPahy
  };
  stats.push(statObject);

  while (stats.length > 10) {
    stats.shift();
  }

  let statsSting = JSON.stringify(stats);
  localStorage.setItem(localStorageBanali, statsSting);

  avelacnelTox(statObject);
}

function kardalArdyunqnery() {
  let statsSting = localStorage.getItem(localStorageBanali);
  stats = JSON.parse(statsSting) || [];

  for (let i = 0; i < stats.length; i++) {
    let statObject = stats[i];
    avelacnelTox(statObject);
  }
}

function avelacnelTox(info) {
  let statsTable = document.getElementById("quiz-stats");

  let toxTr = statsTable.insertRow(1);

  let ardyunqTd = toxTr.insertCell(0);
  ardyunqTd.innerText = info["correctCount"] + "/" + info["questionsCount"];

  let kategoriaTd = toxTr.insertCell(1);
  kategoriaTd.innerText = info["category"];

  let or = new Date(info["date"]);

  let amsativTd = toxTr.insertCell(2);
  amsativTd.innerText =
    or.toDateString() + " " + or.getHours() + ":" + or.getMinutes();
}

