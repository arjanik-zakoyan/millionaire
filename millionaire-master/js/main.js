window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += 'hidden';
  for (let i = 0; i < FinishQuestions.length; i++) {
    const element = FinishQuestions[i];
    element.choosed = false;
  }
  for (let i = 0; i < VeryHardQuestions.length; i++) {
    const element = VeryHardQuestions[i];
    element.choosed = false;
  }
  for (let i = 0; i < HardQuestions.length; i++) {
    const element = HardQuestions[i];
    element.choosed = false;
  }
  for (let i = 0; i < NrmalQuestions.length; i++) {
    const element = NrmalQuestions[i];
    element.choosed = false;
  }
  for (let i = 0; i < EassyQuestions.length; i++) {
    const element = EassyQuestions[i];
    element.choosed = false;
  }
  for (let i = 0; i < VeryEassyQuestions.length; i++) {
    const element = VeryEassyQuestions[i];
    element.choosed = false;
  }
});

// Music
document.getElementById("MusicMenu").pause();
document.getElementById("MusicPlay").pause();
document.getElementById("Music1_5").pause();
document.getElementById("Music6_10").pause();
document.getElementById("Music11").pause();
document.getElementById("Music12_13").pause();
document.getElementById("Music14").pause();
document.getElementById("Music15").pause();
document.getElementById("MusicTrue").pause();
document.getElementById("MusicFalse").pause();
document.getElementById("helps").pause();

function Music(value) {
  if (value === 'up') {
    document.getElementById('Mute').style.display = "block";
    document.getElementById('Up').style.display = "none";
  } else if (value === 'mute') {
    document.getElementById('Up').style.display = "block";
    document.getElementById('Mute').style.display = "none";
  }
}
// Mute
var MusicMenu = document.getElementById("MusicMenu");
var MusicPlay = document.getElementById("MusicPlay");
var Music1_5 = document.getElementById("Music1_5");
var Music6_10 = document.getElementById("Music6_10");
var Music11 = document.getElementById("Music11");
var Music12_13 = document.getElementById("Music12_13");
var Music14 = document.getElementById("Music14");
var Music15 = document.getElementById("Music15");
var MusicTrue = document.getElementById("MusicTrue");
var MusicFalse = document.getElementById("MusicFalse");
var helps = document.getElementById("helps");

// Music local storage
var VolumeValue = localStorage.getItem('Volume');

if (!VolumeValue) {
  document.getElementById('Mute').style.display = "block";
  document.getElementById('Up').style.display = "none";
  MusicMenu.muted = true;
  MusicPlay.muted = true;
  Music1_5.muted = true;
  Music6_10.muted = true;
  Music11.muted = true;
  Music12_13.muted = true;
  Music14.muted = true;
  Music15.muted = true;
  MusicTrue.muted = true;
  MusicFalse.muted = true;
  helps.muted = true;

} else if (VolumeValue) {
  document.getElementById('Up').style.display = "block";
  document.getElementById('Mute').style.display = "none";
  MusicMenu.muted = false;
  MusicPlay.muted = false;
  Music1_5.muted = false;
  Music6_10.muted = false;
  Music11.muted = false;
  Music12_13.muted = false;
  Music14.muted = false;
  Music15.muted = false;
  MusicTrue.muted = false;
  MusicFalse.muted = false;
  helps.muted = false;
}

function VolumeUp() {
  MusicMenu.muted = true;
  MusicPlay.muted = true;
  Music1_5.muted = true;
  Music6_10.muted = true;
  Music11.muted = true;
  Music12_13.muted = true;
  Music14.muted = true;
  Music15.muted = true;
  MusicTrue.muted = true;
  MusicFalse.muted = true;
  helps.muted = true;
  localStorage.removeItem('Volume');
}
function VolumeMute() {
  MusicMenu.muted = false;
  MusicPlay.muted = false;
  Music1_5.muted = false;
  Music6_10.muted = false;
  Music11.muted = false;
  Music12_13.muted = false;
  Music14.muted = false;
  Music15.muted = false;
  MusicTrue.muted = false;
  MusicFalse.muted = false;
  helps.muted = false;
  localStorage.setItem('Volume', 'volume');
}
// login local Storage
function login() {
  var name = document.getElementById('name')
  var surname = document.getElementById('surname')
  var age = document.getElementById('age')
  if (name.value !== '' && surname.value !== '') {
    localStorage.setItem('name', name.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('age', age.value);
    document.getElementById("MusicMenu").play();
    document.getElementById("MusicMenu").currentTime = 0;
  }
}
function ClearLocalStorage() {
  localStorage.removeItem('name')
  localStorage.removeItem('surname')
  localStorage.removeItem('age')
}
if (!localStorage.getItem('name')) {
  document.getElementById('LogIn').style.display = "block";
  document.getElementById('Menu').style.display = "none";
} else {
  document.getElementById('LogIn').style.display = "none";
  document.getElementById('Menu').style.display = "block";
}
// Music Index

let MusicIndex = 0

function ChangeMusic() {
  if (MusicIndex === 5) {
    document.getElementById("Music1_5").pause();
    document.getElementById("Music6_10").play();
    document.getElementById("Music6_10").currentTime = 0;
  } else if (MusicIndex === 10) {
    document.getElementById("Music6_10").pause();
    document.getElementById("Music11").play();
    document.getElementById("Music11").currentTime = 0;
  } else if (MusicIndex === 11) {
    document.getElementById("Music11").pause();
    document.getElementById("Music12_13").play();
    document.getElementById("Music12_13").currentTime = 0;
  } else if (MusicIndex === 12) {
  } else if (MusicIndex === 13) {
    document.getElementById("Music12_13").pause();
    document.getElementById("Music14").play();
    document.getElementById("Music14").currentTime = 0;
  } else if (MusicIndex === 14) {
    document.getElementById("Music14").pause();
    document.getElementById("Music15").play();
    document.getElementById("Music15").currentTime = 0;
  } else if (MusicIndex === 15) {
    document.getElementById("Music15").pause();
  }
}


// Money
let MoneyIndex = 0

let money = " ";
let index0 = "500";
let index1 = "1.000";
let index2 = "2.000";
let index3 = "4.000";
let index4 = "8.000";
let index5 = "16.000";
let index6 = "32.000";
let index7 = "64.000";
let index8 = "125.000";
let index9 = "250.000";
let index10 = "500.000";
let index11 = "1.000.000";
let index12 = "2.000.000";
let index13 = "3.000.000";
let index14 = "5.000.000";

function Money() {
  if (MoneyIndex === 0) {
    money = index0
  } else if (MoneyIndex === 1) {
    money = index1
  } else if (MoneyIndex === 2) {
    money = index2
  } else if (MoneyIndex === 3) {
    money = index3
  } else if (MoneyIndex === 4) {
    money = index4
  } else if (MoneyIndex === 5) {
    money = index5
  } else if (MoneyIndex === 6) {
    money = index6
  } else if (MoneyIndex === 7) {
    money = index7
  } else if (MoneyIndex === 8) {
    money = index8
  } else if (MoneyIndex === 9) {
    money = index9
  } else if (MoneyIndex === 10) {
    money = index10
  } else if (MoneyIndex === 11) {
    money = index11
  } else if (MoneyIndex === 12) {
    money = index12
  } else if (MoneyIndex === 13) {
    money = index13
  } else if (MoneyIndex === 14) {
    money = index14
  }
}

//Take Money
let TakeMoneyIndex = 0

let Takemoney = "0";
let Takeindex0 = "0";
let Takeindex1 = "500";
let Takeindex2 = "1.000";
let Takeindex3 = "2.000";
let Takeindex4 = "4.000";
let Takeindex5 = "8.000";
let Takeindex6 = "16.000";
let Takeindex7 = "32.000";
let Takeindex8 = "64.000";
let Takeindex9 = "125.000";
let Takeindex10 = "250.000";
let Takeindex11 = "500.000";
let Takeindex12 = "1.000.000";
let Takeindex13 = "2.000.000";
let Takeindex14 = "3.000.000";
let Takeindex15 = "5.000.000";

function TakeMoney() {
  if (TakeMoneyIndex === 0) {
    Takemoney = Takeindex0
  } else if (TakeMoneyIndex === 1) {
    Takemoney = Takeindex1
  } else if (TakeMoneyIndex === 2) {
    Takemoney = Takeindex2
  } else if (TakeMoneyIndex === 3) {
    Takemoney = Takeindex3
  } else if (TakeMoneyIndex === 4) {
    Takemoney = Takeindex4
  } else if (TakeMoneyIndex === 5) {
    Takemoney = Takeindex5
  } else if (TakeMoneyIndex === 6) {
    Takemoney = Takeindex6
  } else if (TakeMoneyIndex === 7) {
    Takemoney = Takeindex7
  } else if (TakeMoneyIndex === 8) {
    Takemoney = Takeindex8
  } else if (TakeMoneyIndex === 9) {
    Takemoney = Takeindex9
  } else if (TakeMoneyIndex === 10) {
    Takemoney = Takeindex10
  } else if (TakeMoneyIndex === 11) {
    Takemoney = Takeindex11
  } else if (TakeMoneyIndex === 12) {
    Takemoney = Takeindex12
  } else if (TakeMoneyIndex === 13) {
    Takemoney = Takeindex13
  } else if (TakeMoneyIndex === 14) {
    Takemoney = Takeindex14
  }
}

// Quiz
let Qustion = document.getElementById("Question");
let Option1 = document.getElementById("Option1");
let Option2 = document.getElementById("Option2");
let Option3 = document.getElementById("Option3");
let Option4 = document.getElementById("Option4");

let OngoingQuestions

let OngoingQuestionsIndex

function NextQuestion() {
  console.log(OngoingQuestions);
  console.log(OngoingQuestionsIndex);
  console.log('music', MusicIndex);
  var QuestionNow = OngoingQuestions[OngoingQuestionsIndex];
  let question = OngoingQuestions.find(el => el.choosed == false)
  question.choosed = true;
  QuestionNow.choosed = true;
  Qustion.innerText = question["question"];
  Option1.innerText = question["option1"];
  Option2.innerText = question["option2"];
  Option3.innerText = question["option3"];
  Option4.innerText = question["option4"];
  QuestionNow.question = question["question"];
  QuestionNow.option1 = question["option1"];
  QuestionNow.option2 = question["option2"];
  QuestionNow.option3 = question["option3"];
  QuestionNow.option4 = question["option4"];
  QuestionNow.trueOption = question["trueOption"];
  document.getElementById('option1').onclick = () => AnswerQuestion(1)
  document.getElementById('option2').onclick = () => AnswerQuestion(2)
  document.getElementById('option3').onclick = () => AnswerQuestion(3)
  document.getElementById('option4').onclick = () => AnswerQuestion(4)
  document.getElementById('call').onclick = () => HelpCall()
  document.getElementById('hall').onclick = () => HelpHall()
  document.getElementById('fifty-fifty').onclick = () => FiftyFifty()
  document.getElementById('change').onclick = () => ChangeHelp()
  document.getElementById('quit-modal').onclick = () => QuitModal()
  document.getElementById('take-modal').onclick = () => TakeModal()
}
function AnswerQuestion(option) {
  let QuestionNow = OngoingQuestions[OngoingQuestionsIndex];
  let TrueOption = QuestionNow["trueOption"];
  document.getElementById('option1').onclick = null
  document.getElementById('option2').onclick = null
  document.getElementById('option3').onclick = null
  document.getElementById('option4').onclick = null
  document.getElementById('call').onclick = null
  document.getElementById('hall').onclick = null
  document.getElementById('fifty-fifty').onclick = null
  document.getElementById('change').onclick = null
  document.getElementById('quit-modal').onclick = null
  document.getElementById('take-modal').onclick = null
  document.getElementById("option" + option).classList.add('option' + option + '-hover');
  function OptionHover() {
    document.getElementById("option" + option).classList.remove('option' + option + '-hover')
  }
  function OptionDefault() {
    document.getElementById("option" + option).classList.remove('option' + option + '-false')
    document.getElementById("option" + option).classList.remove('option' + option + '-true')
  }
  function OptionMusicTrue() {
    document.getElementById("MusicTrue").play()
    document.getElementById("MusicTrue").currentTime = 0;
  }
  function OptionMusicFalse() {
    document.getElementById("MusicFalse").play();
    document.getElementById("MusicFalse").currentTime = 0;
  }
  function InnerMoney() {
    document.getElementById("money").innerText = money
  }
  function OptionFalse() {
    document.getElementById("option" + TrueOption).classList.add('option' + TrueOption + '-true')
  }
  setTimeout(OptionHover, 2000)
  if (option === TrueOption) {
    if (OngoingQuestionsIndex <= 13) {
      setTimeout(document.getElementById("option" + option).classList.add('option' + option + '-true'), 2000);
      setTimeout(ChangeQuestion, 3000);
      setTimeout(OptionDefault, 3000)
      OngoingQuestionsIndex++;
      TakeMoneyIndex++
      MoneyIndex++
      MusicIndex++
      setTimeout(OptionMusicTrue, 2000);
    } else if (option === TrueOption && OngoingQuestionsIndex >= 13) {
      MusicIndex = 15
      setTimeout(document.getElementById("option" + option).classList.add('option' + option + '-true'), 2000);
      setTimeout(WinResultModal, 3000)
      setTimeout(OptionDefault, 3000)
      setTimeout(OptionMusicTrue, 2000);
      finalResult()
    }
  } else if (option !== TrueOption) {
    setTimeout(document.getElementById("option" + option).classList.add('option' + option + '-false'), 2000);
    setTimeout(OptionFalse, 2000);
    MusicIndex = 15
    setTimeout(OptionDefault, 100000)
    setTimeout(ResultModal, 2000)
    setTimeout(OptionMusicFalse, 2000)
    finalResult()
  }
  ChangeMusic();
  Money();
  TakeMoney();
  setTimeout(InnerMoney, 2000);
}
function ChangeQuestion() {
  if (OngoingQuestionsIndex === 14) {
    OngoingQuestions = FinishQuestions;
    shuffle(FinishQuestions);
  } else if (OngoingQuestionsIndex === 12) {
    OngoingQuestions = VeryHardQuestions;
    shuffle(VeryHardQuestions);
  } else if (OngoingQuestionsIndex === 9) {
    OngoingQuestions = HardQuestions;
    shuffle(HardQuestions);
  } else if (OngoingQuestionsIndex === 5) {
    document.getElementById('change').style.display = 'block'
    OngoingQuestions = NrmalQuestions;
    shuffle(NrmalQuestions);
  } else if (OngoingQuestionsIndex === 2) {
    OngoingQuestions = EassyQuestions;
    shuffle(EassyQuestions);
  } else if (OngoingQuestionsIndex === 0) {
    document.getElementById('change').style.display = 'block'
  }
  NextQuestion();
}
// Shuffle
function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
// Help

// Change
function ChangeHelp() {
  let QuestionNow = OngoingQuestions[OngoingQuestionsIndex];
  document.getElementById('change').onclick = null
  document.getElementById("change").classList.add('Xchange');
  let question = OngoingQuestions.find(el => el.choosed == false)
  question.choosed = true;
  QuestionNow.choosed = true;
  Qustion.innerText = question["question"];
  Option1.innerText = question["option1"];
  Option2.innerText = question["option2"];
  Option3.innerText = question["option3"];
  Option4.innerText = question["option4"];
  QuestionNow.question = question["question"];
  QuestionNow.option1 = question["option1"];
  QuestionNow.option2 = question["option2"];
  QuestionNow.option3 = question["option3"];
  QuestionNow.option4 = question["option4"];
  QuestionNow.trueOption = question["trueOption"];
  document.getElementById("helps").play();
  document.getElementById("helps").currentTime = 0;
}


// Fifty Fifty
function FiftyFifty() {
  let QuestionNow = OngoingQuestions[OngoingQuestionsIndex];
  let TrueOption = QuestionNow["trueOption"];
  document.getElementById('fifty-fifty').onclick = null
  document.getElementById("fifty-fifty").classList.add('Xfifty-fifty');
  console.log(TrueOption)
  if (TrueOption === 1) {
    Option2.innerText = "";
    Option4.innerText = "";
    document.getElementById('option2').onclick = null
    document.getElementById('option4').onclick = null
  } else if (TrueOption === 2) {
    Option1.innerText = "";
    Option3.innerText = "";
    document.getElementById('option1').onclick = null
    document.getElementById('option3').onclick = null
  } else if (TrueOption === 3) {
    Option2.innerText = "";
    Option4.innerText = "";
    document.getElementById('option2').onclick = null
    document.getElementById('option4').onclick = null
  } else if (TrueOption === 4) {
    Option1.innerText = "";
    Option3.innerText = "";
    document.getElementById('option1').onclick = null
    document.getElementById('option3').onclick = null
  }
  document.getElementById("helps").play();
  document.getElementById("helps").currentTime = 0;
}
// Call
function HelpCall() {
  let QuestionNow = OngoingQuestions[OngoingQuestionsIndex];
  let TrueOption = QuestionNow["trueOption"];
  document.getElementById('call').onclick = null
  document.getElementById("call").classList.add('Xcall');
  document.getElementById('HelpCall').style.display = "block";
  if (OngoingQuestionsIndex >= 0 && OngoingQuestionsIndex <= 7) {
    if (TrueOption === 1) {
      document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Ա." + QuestionNow["option1"];
    } else if (TrueOption === 2) {
      document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Բ." + QuestionNow["option2"];
    } else if (TrueOption === 3) {
      document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Գ." + QuestionNow["option3"];
    } else if (TrueOption === 4) {
      document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Դ." + QuestionNow["option4"];
    }
  } else if (OngoingQuestionsIndex >= 8 && OngoingQuestionsIndex <= 12) {
    var Option = Math.floor(Math.random() * (3 - 1) + 1);
    if (Option === 1) {
      if (TrueOption === 1) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Ա." + QuestionNow["option1"];
      } else if (TrueOption === 2) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Բ." + QuestionNow["option2"];
      } else if (TrueOption === 3) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Գ." + QuestionNow["option3"];
      } else if (TrueOption === 4) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Դ." + QuestionNow["option4"];
      }
    } else if (Option === 2) {
      var Option = Math.floor(Math.random() * (5 - 1) + 1);
      if (Option === 1) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Ա." + QuestionNow["option1"];
      } else if (Option === 2) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Բ." + QuestionNow["option2"];
      } else if (Option === 3) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Գ." + QuestionNow["option3"];
      } else if (Option === 4) {
        document.getElementById("HelpCallText").innerText = "Կարծում եմ ճիշտ պատասխանն է տարբերակ Դ." + QuestionNow["option4"];
      }
    }
  } else if (OngoingQuestionsIndex >= 13 && OngoingQuestionsIndex <= 14) {
    var Option = Math.floor(Math.random() * (5 - 1) + 1);
    if (Option === 1) {
      document.getElementById("HelpCallText").innerText = "Վստահ չեմ բայց կարծում եմ որ ճիշտ պատասխանն է տարբերակ Ա." + QuestionNow["option1"];
    } else if (Option === 2) {
      document.getElementById("HelpCallText").innerText = "Վստահ չեմ բայց կարծում եմ որ ճիշտ պատասխանն է տարբերակ Բ." + QuestionNow["option2"];
    } else if (Option === 3) {
      document.getElementById("HelpCallText").innerText = "Վստահ չեմ բայց կարծում եմ որ ճիշտ պատասխանն է տարբերակ Գ." + QuestionNow["option3"];
    } else if (Option === 4) {
      document.getElementById("HelpCallText").innerText = "Վստահ չեմ բայց կարծում եմ որ ճիշտ պատասխանն է տարբերակ Դ." + QuestionNow["option4"];
    }
  }
  document.getElementById("helps").play();
  document.getElementById("helps").currentTime = 0;
}
function AnswerHelpCall() {
  document.getElementById('HelpCall').style.display = "none";
}

// Hall
function HelpHall() {
  let QuestionNow = OngoingQuestions[OngoingQuestionsIndex];
  let TrueOption = QuestionNow["trueOption"];
  document.getElementById('hall').onclick = null
  document.getElementById("hall").classList.add('Xhall');
  document.getElementById('HelpHall').style.display = "block";
  if (OngoingQuestionsIndex >= 0 && OngoingQuestionsIndex <= 4) {
    function HelpHallRandom(min, max) {
      var True = Math.floor(Math.random() * (max - 70) + 70);
      var aa = 100 - True;
      var b = Math.floor(Math.random() * (aa - min) + min);
      var bb = 100 - (True + b);
      var c = Math.floor(Math.random() * (bb - min) + min);
      var cc = True + b + c;
      var d = 100 - cc;
      if (TrueOption === 1) {
        document.getElementById("HelpHallOption1").value = True;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = True;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 2) {
        document.getElementById("HelpHallOption1").value = b;
        document.getElementById("HelpHallOption2").value = True;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = b;
        document.getElementById("HelpHallOptionPercent2").innerText = True;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 3) {
        document.getElementById("HelpHallOption1").value = c;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = True
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = c;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = True;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 4) {
        document.getElementById("HelpHallOption1").value = d;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = True;
        document.getElementById("HelpHallOptionPercent1").innerText = d;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = True;
      }
    }
    HelpHallRandom(1, 100)
  } else if (OngoingQuestionsIndex >= 5 && OngoingQuestionsIndex <= 9) {
    function HelpHallRandom(min, max) {
      var True = Math.floor(Math.random() * (70 - 50) + 50);
      var aa = 100 - True;
      var b = Math.floor(Math.random() * (aa - min) + min);
      var bb = 100 - (True + b);
      var c = Math.floor(Math.random() * (bb - min) + min);
      var cc = True + b + c;
      var d = 100 - cc;
      if (TrueOption === 1) {
        document.getElementById("HelpHallOption1").value = True;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = True;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 2) {
        document.getElementById("HelpHallOption1").value = b;
        document.getElementById("HelpHallOption2").value = True;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = b;
        document.getElementById("HelpHallOptionPercent2").innerText = True;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 3) {
        document.getElementById("HelpHallOption1").value = c;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = True
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = c;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = True;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 4) {
        document.getElementById("HelpHallOption1").value = d;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = True;
        document.getElementById("HelpHallOptionPercent1").innerText = d;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = True;
      }
    }
    HelpHallRandom(1, 100)
  } else if (OngoingQuestionsIndex >= 10 && OngoingQuestionsIndex <= 14) {
    function HelpHallRandom(min, max) {
      var True = Math.floor(Math.random() * (50 - 40) + 40);
      var aa = 100 - True;
      var b = Math.floor(Math.random() * (aa - min) + min);
      var bb = 100 - (True + b);
      var c = Math.floor(Math.random() * (bb - min) + min);
      var cc = True + b + c;
      var d = 100 - cc;
      if (TrueOption === 1) {
        document.getElementById("HelpHallOption1").value = True;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = True;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 2) {
        document.getElementById("HelpHallOption1").value = b;
        document.getElementById("HelpHallOption2").value = True;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = b;
        document.getElementById("HelpHallOptionPercent2").innerText = True;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 3) {
        document.getElementById("HelpHallOption1").value = c;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = True
        document.getElementById("HelpHallOption4").value = d;
        document.getElementById("HelpHallOptionPercent1").innerText = c;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = True;
        document.getElementById("HelpHallOptionPercent4").innerText = d;
      } else if (TrueOption === 4) {
        document.getElementById("HelpHallOption1").value = d;
        document.getElementById("HelpHallOption2").value = b;
        document.getElementById("HelpHallOption3").value = c;
        document.getElementById("HelpHallOption4").value = True;
        document.getElementById("HelpHallOptionPercent1").innerText = d;
        document.getElementById("HelpHallOptionPercent2").innerText = b;
        document.getElementById("HelpHallOptionPercent3").innerText = c;
        document.getElementById("HelpHallOptionPercent4").innerText = True;
      }
    }
    HelpHallRandom(1, 100)
  }
  document.getElementById("helps").play();
  document.getElementById("helps").currentTime = 0;
}
function AnswerHelpHall() {
  document.getElementById('HelpHall').style.display = "none";
}
//////////////////////////////////////////////////////////
// Pages
function Page(value) {
  if (value === 'Menu') {
    document.getElementById('LogIn').style.display = "none";
    document.getElementById('Menu').style.display = "block";
    document.getElementById("MusicMenu").play();
    document.getElementById("MusicMenu").currentTime = 0;
  } else if (value === 'Login') {
    document.getElementById('LogIn').style.display = "block";
    document.getElementById('Menu').style.display = "none";
    document.getElementById("MusicMenu").pause();
  }
  else if (value === 'NewGame') {
    document.getElementById('NewGame').style.display = "block";
    document.getElementById('Preface').style.display = "block";
    document.getElementById('Menu').style.display = "none";
    document.getElementById('Quiz').style.display = "none";
    document.getElementById('ResultModal').style.display = "none";
    document.getElementById("PrefaceText").innerText = "Հարգելի " + localStorage.getItem('name', name) + " " + localStorage.getItem('surname', surname) + " Բարի գալուստ «Ով է ուզում դառնալ միլիոնատեր» ինտելեկտուալ խաղ:Ձեզ սպասվում է ընդամենը 15 հարց 5.000.000 դրամ ձեռք բերելու համար: Այսպիսով Դուք պատրաստ ե'ք";
    document.getElementById("money").innerText = "500";
    document.getElementById("MusicMenu").pause();
    document.getElementById("MusicPlay").play();
    document.getElementById("MusicPlay").currentTime = 0;
    document.getElementById("call").classList.remove('Xcall');
    document.getElementById('call').onclick = HelpCall
    document.getElementById("hall").classList.remove('Xhall');
    document.getElementById('hall').onclick = HelpHall
    document.getElementById("fifty-fifty").classList.remove('Xfifty-fifty');
    document.getElementById('fifty-fifty').onclick = FiftyFifty
    document.getElementById("change").classList.remove('Xchange');
    document.getElementById('change').onclick = ChangeHelp
    document.getElementById('quit-modal').onclick = () => QuitModal()
    document.getElementById('take-modal').onclick = () => TakeModal()
    document.getElementById("option1").classList.remove('option1-false');
    document.getElementById("option2").classList.remove('option2-false');
    document.getElementById("option3").classList.remove('option3-false');
    document.getElementById("option4").classList.remove('option4-false');
    document.getElementById("option1").classList.remove('option1-true');
    document.getElementById("option2").classList.remove('option2-true');
    document.getElementById("option3").classList.remove('option3-true');
    document.getElementById("option4").classList.remove('option4-true');
    for (let i = 0; i < FinishQuestions.length; i++) {
      const element = FinishQuestions[i];
      element.choosed = false;
    }
    for (let i = 0; i < VeryHardQuestions.length; i++) {
      const element = VeryHardQuestions[i];
      element.choosed = false;
    }
    for (let i = 0; i < HardQuestions.length; i++) {
      const element = HardQuestions[i];
      element.choosed = false;
    }
    for (let i = 0; i < NrmalQuestions.length; i++) {
      const element = NrmalQuestions[i];
      element.choosed = false;
    }
    for (let i = 0; i < EassyQuestions.length; i++) {
      const element = EassyQuestions[i];
      element.choosed = false;
    }
    for (let i = 0; i < VeryEassyQuestions.length; i++) {
      const element = VeryEassyQuestions[i];
      element.choosed = false;
    }
    OngoingQuestionsIndex = 0;
    TakeMoneyIndex = 0
    MoneyIndex = 0
    MusicIndex = 0
    OngoingQuestions = VeryEassyQuestions;
    shuffle(VeryEassyQuestions)
    ChangeQuestion();
  } else if (value === 'Best') {
    document.getElementById('Best').style.display = "block";
    document.getElementById('Menu').style.display = "none";
  } else if (value === 'Settings') {
    document.getElementById('Settings').style.display = "block";
    document.getElementById('Menu').style.display = "none";
  } else if (value === 'AboutGame') {
    document.getElementById('AboutGame').style.display = "block";
    document.getElementById('Menu').style.display = "none";
  } else if (value === 'AuthorGame') {
    document.getElementById('AuthorGame').style.display = "block";
    document.getElementById('Menu').style.display = "none";
  }
}
// Button
function Quit() {
  document.getElementById('Menu').style.display = "block";
  document.getElementById('NewGame').style.display = "none";
  document.getElementById('AboutGame').style.display = "none";
  document.getElementById('Settings').style.display = "none";
  document.getElementById('Best').style.display = "none";
  document.getElementById('AuthorGame').style.display = "none";
  document.getElementById("Music1_5").pause();
  document.getElementById("Music6_10").pause();
  document.getElementById("Music11").pause();
  document.getElementById("Music12_13").pause();
  document.getElementById("Music14").pause();
  document.getElementById("Music15").pause();
  document.getElementById("MusicTrue").pause();
  document.getElementById("MusicFalse").pause();
}
// Modals
function AnswerPrefaceModal(value) {
  if (value === 'yes') {
    document.getElementById('Quiz').style.display = "block";
    document.getElementById('Preface').style.display = "none";
    document.getElementById("Music1_5").play();
    document.getElementById("Music1_5").currentTime = 0;
  } else if (value === 'no') {
    document.getElementById('Menu').style.display = "block";
    document.getElementById('NewGame').style.display = "none";
    document.getElementById('QuitModal').style.display = "none";
    document.getElementById("MusicMenu").play();
    document.getElementById("MusicMenu").currentTime = 0;
    document.getElementById("MusicPlay").pause();
  }
}
// Quit Modal
function QuitModal() {
  document.getElementById('QuitModal').style.display = "block";
}
function AnswerQuitModal(value) {
  if (value === 'yes') {
    document.getElementById('Menu').style.display = "block";
    document.getElementById('NewGame').style.display = "none";
    document.getElementById('QuitModal').style.display = "none";
    document.getElementById("MusicMenu").play();
    document.getElementById("MusicMenu").currentTime = 0;
    document.getElementById("MusicPlay").pause();
    document.getElementById("Music1_5").pause();
    document.getElementById("Music6_10").pause();
    document.getElementById("Music11").pause();
    document.getElementById("Music12_13").pause();
    document.getElementById("Music14").pause();
    document.getElementById("Music15").pause();
  } else if (value === 'no') {
    document.getElementById('QuitModal').style.display = "none";
  }
}
// Take Modal
function TakeModal() {
  document.getElementById('TakeModal').style.display = "block";
  document.getElementById("ResultText").innerText = "Հարգելի " + localStorage.getItem('name', name) + " " + localStorage.getItem('surname', surname) + " շնորհավորում ենք Դուք կարողացաք վաստակել " + Takemoney + "դրամ";
  document.getElementById('take-money').innerText = "Դուք որոշել եք դաթարեցնե՞լ խաղը ու վերցնել գումարը, որը կազմում է " + Takemoney + 'դրամ'
}
function AnswerTakeModal(value) {
  if (value === 'yes') {
    document.getElementById('ResultModal').style.display = "block";
    document.getElementById('TakeModal').style.display = "none";
    document.getElementById("MusicFalse").play();
    document.getElementById("MusicFalse").currentTime = 0;
    document.getElementById("MusicPlay").pause();
    document.getElementById("Music1_5").pause();
    document.getElementById("Music6_10").pause();
    document.getElementById("Music11").pause();
    document.getElementById("Music12_13").pause();
    document.getElementById("Music14").pause();
    document.getElementById("Music15").pause();
    document.getElementById("p").innerHTML = '+'
    document.getElementById("take-modal").onclick = null
    finalResultTake();
  } else if (value === 'no') {
    document.getElementById('TakeModal').style.display = "none";
  }
}

// Result Modal
function ResultModal() {
  document.getElementById('ResultModal').style.display = "block";
  document.getElementById("Music1_5").pause();
  document.getElementById("Music6_10").pause();
  document.getElementById("Music11").pause();
  document.getElementById("Music12_13").pause();
  document.getElementById("Music14").pause();
  if (MoneyIndex <= 4) {
    document.getElementById("ResultText").innerText = "Հարգելի " + localStorage.getItem('name', name) + " " + localStorage.getItem('surname', surname) + " ցավոք սրտի Ձեր պատասխանը սխալ է: Մի հուսահատվեք և փորձեք մյուս անգամ";
  } else if (
    MoneyIndex === 5 ||
    MoneyIndex === 6 ||
    MoneyIndex === 7 ||
    MoneyIndex === 8 ||
    MoneyIndex === 9
  ) {
    document.getElementById("ResultText").innerText = "Հարգելի " + localStorage.getItem('name', name) + " " + localStorage.getItem('surname', surname) + " ցավոք սրտի Ձեր պատասխանը սխալ է: Դուք կարողացաք վաստակել " + index4 + "դրամ";
  } else if (
    MoneyIndex === 10 ||
    MoneyIndex === 11 ||
    MoneyIndex === 12 ||
    MoneyIndex === 13 ||
    MoneyIndex === 14 ||
    MoneyIndex === 15
  ) {
    document.getElementById("ResultText").innerText = "Հարգելի " + localStorage.getItem('name', name) + " " + localStorage.getItem('surname', surname) + " ցավոք սրտի Ձեր պատասխանը սխալ է: Դուք կարողացաք վաստակել " + index9 + "դրամ";
  }
}
// Win Result Modal
function WinResultModal() {
  document.getElementById('ResultModal').style.display = "block";
  if (MoneyIndex === 14 || MoneyIndex === 15) {
    document.getElementById("ResultText").innerText = "Հարգելի " + localStorage.getItem('name', name) + " " + localStorage.getItem('surname', surname) + " շնորհավորում ենք դուք Հաղթեցիք վաստակել " + index14 + "դրամ";
  }
}

// localStorage result

let stats = [];
let localStorageKey = "millionaire-result";
seeResults()

function finalResult() {
  if (
    MoneyIndex === 0 ||
    MoneyIndex === 1 ||
    MoneyIndex === 2 ||
    MoneyIndex === 3 ||
    MoneyIndex === 4
  ) {
    localmoney = '0'
  } else if (
    MoneyIndex === 5 ||
    MoneyIndex === 6 ||
    MoneyIndex === 7 ||
    MoneyIndex === 8 ||
    MoneyIndex === 9
  ) {
    localmoney = '8.000'
  } else if (
    MoneyIndex === 10 ||
    MoneyIndex === 11 ||
    MoneyIndex === 12 ||
    MoneyIndex === 13 ||
    MoneyIndex === 14
  ) {
    localmoney = '250.000'
  } else if (MoneyIndex === 15) {
    localmoney = '5.000.000'
  }
  let statObject = {
    localName: localStorage.getItem('name'),
    localSurname: localStorage.getItem('surname'),
    localMoney: localmoney,
    date: new Date()
  };
  console.log(statObject);
  stats.push(statObject);
  while (stats.length >= 10) {
    stats.shift();
  }
  let statsSting = JSON.stringify(stats);
  localStorage.setItem(localStorageKey, statsSting);

  addString(statObject);
}

function finalResultTake() {
  let statObject = {
    localName: localStorage.getItem('name'),
    localSurname: localStorage.getItem('surname'),
    localMoney: Takemoney,
    date: new Date()
  };
  console.log(statObject);
  stats.push(statObject);
  while (stats.length >= 10) {
    stats.shift();
  }
  let statsSting = JSON.stringify(stats);
  localStorage.setItem(localStorageKey, statsSting);

  addString(statObject);
}

function seeResults() {
  let statsSting = localStorage.getItem(localStorageKey);
  stats = JSON.parse(statsSting) || [];

  for (let i = 0; i < stats.length; i++) {
    let statObject = stats[i];
    addString(statObject);
  }
}

function addString(info) {
  let statsTable = document.getElementById("quiz-stats");

  let stringTr = statsTable.insertRow(1);

  nameTd = stringTr.insertCell(0);
  nameTd.innerText = info["localName"];

  surnameTd = stringTr.insertCell(1);
  surnameTd.innerText = info["localSurname"];

  moneyTd = stringTr.insertCell(2);
  moneyTd.innerText = info["localMoney"];

  let day = new Date(info["date"]);
  let dateTd = stringTr.insertCell(3);
  dateTd.innerText = day.toDateString() + " " + day.getHours() + ":" + day.getMinutes();
}


// Question
let FinishQuestions = [
  {
    choosed: false,
    question: "Քանի՞ ծովեր են ողողում Բալկանյան Թերակղզին:",
    option1: "6",
    option2: "3",
    option3: "5",
    option4: "4",
    trueOption: 1,
  },
  {
    choosed: false,
    question: "Ի՞նչ անուն չի ընդունել Հռոմի ոչ մի պապ",
    option1: "Վալենտին",
    option2: "Գեորգի ",
    option3: "Եվգենի",
    option4: "Վիկտոր",
    trueOption: 2
  },
  {
    choosed: false,
    question: "1718 թվականին ո՞ր ծովահենն է զոհվել ներկայիս Հյուսիսային Կարոլինայի ափերի մոտ ճակատամարտում:",
    option1: "Կալիկո Ջեկ",
    option2: "Բարթոլոմյու Ռոբերթս",
    option3: "Բլեքբերդ ",
    option4: "Կապիտան Քիդդ",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Ո՞ր քիմիական տարրի հայտնագործման պատվին են Ֆրանսիայում 19-րդ դարում հատել Ապոլոնի պատկերով մեդալ:",
    option1: "Տիտան",
    option2: "Ջրածին ",
    option3: "Ռադիում",
    option4: "Հելիում ",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Ավանդաբար ի՞նչ են անում երաժիշտները Հայդնի «Հրաժեշտի սիմֆոնիան» նվագելիս:",
    option1: "Հանգցնում են մոմերը",
    option2: "երգում են ",
    option3: "Գլխարկ են հագնում",
    option4: "Օդային համբույրներ են ուղարկում",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Ինչպե՞ս է կոչվում Երկրի մակերեւույթի ամենախորը կետը, որը գտնվում է Մարիանայի խոռոչի հատակին:",
    option1: "Սև Բույն",
    option2: "Չելլենջերի Անդունդը",
    option3: "Ֆիլիպինյան ափսե",
    option4: "Կերմադեկ",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Ի՞նչ ֆիգուրներով են սկսվում քաղաքային սպորտի մրցումները:",
    option1: "Ժամացույցի",
    option2: "Հրետանային",
    option3: "Ատրճանակ",
    option4: "Մեքենայաընթեռնելի բույն",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Ո՞վ է միակ բրիտանացի քաղաքական գործիչը, ով իր կարիերայի ինչ-որ պահի զբաղեցրել է բոլոր չորս «Մեծ Պետական Պաշտոնները»:",
    option1: "Հարոլդ Ուիլսոն",
    option2: "Դեյվիդ Լլոյդ Ջորջ",
    option3: "Ջոն Մեյջոր",
    option4: "Ջեյմս Կալագան",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Այս կետերի տեսակներից ով է պատկանում «ատամնավոր կետերի» կատեգորիային:",
    option1: "Կաշալոտ ",
    option2: "Փոքր գծավոր",
    option3: "Մոխրագույն կետ",
    option4: "Սապատավոր կետ",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "Հետևյալ հայտնի շինարարություններից, ո՞ր մեկն է կառուցվել առաջինը:",
    option1: "Թագավորական Ալբերտ Հոլլ",
    option2: "Բիգ Բեն Ժամացույցի Աշտարակը",
    option3: "Էյֆելյան աշտարակ",
    option4: "Էմփայր սթեյթ բիլդինգ",
    trueOption: 2
  },
  {
    choosed: false,
    question:
      "Ինչպե՞ս է կոչվում այն թիվը, որին հաջորդում է 100 հատ զրո թվանշան:",
    option1: "Մեգատրոն",
    option2: "Գիգաբիթ",
    option3: "Գուգոլ ",
    option4: "Նանոմոլ",
    trueOption: 3
  },
  {
    choosed: false,
    question:
      "Հետևյալներից ո՞ր գիտական մեծություն է անվանվել իտալական ազնվականի պատվին:",
    option1: "Պասկալ",
    option2: "Օմ",
    option3: "Հերց",
    option4: "Վոլտ ",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Սկովիլի սանդղակը - դա սանդղակ է, որը գնահատում է ...",
    option1: "Պղպեղի կծուությունը",
    option2: "Մթնոլորտային օդի որակը",
    option3: "Կանանց գրավչությունը",
    option4: "Ծովի մակարդակը",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "Եվրոպայի միայն երեք քազաքների գրադարաններում են պահպանվել մայաների քաղաքակրթության իսկական ձեռագրեր: Անվանեք ավելորդը.",
    option1: "Փարիզ",
    option2: "Դրեզդեն",
    option3: "Հռոմ",
    option4: "Մադրիդ",
    trueOption: 3
  },
  {
    choosed: false,
    question:
      "Նշվածներից ո՞րն է Գլխավոր Լիգայի Բեյսբոլի թիմ",
    option1: "Նյու Յորք Նիքս",
    option2: "Նյու Յորք Գիանտ",
    option3: "Նյու Յորք Մետս",
    option4: "Նյու Յորք Ռանջեր",
    trueOption: 2
  }
];
let VeryHardQuestions = [
  {
    choosed: false,
    question:
      "Իսպանիայի ֆուտբոլի առաջնության թիմերից որ՞ը համանուն քաղաքից չէ.",
    option1: "Սոսիեդան",
    option2: "Վալենսիա",
    option3: "Վալյադոլիդ",
    option4: "Գրանադա",
    trueOption: 1
  },
  {
    choosed: false,
    question: "«Միլիոնատերը հենախորշից» օսկարակիր ֆիլմի ռեժիսորն է.",
    option1: "Գարեթ Բեյլ",
    option2: "Դենին Բոյլ",
    option3: "Դենին Բոյլ-Մարիոթ",
    option4: "Դեն Դերիմոր",
    trueOption: 2
  },
  {
    choosed: false,
    question:
      "2014թ. շախմատի մինչև 10 տարեկանների մրցաշարում Եվրոպայի չեմպիոն է դարձել.",
    option1: "Արամ Հակոբյան",
    option2: "Մարիամ Մկրտչյան",
    option3: "Մամիկոն Ղարիբյան",
    option4: "Հայկ Մարտիրոսյան",
    trueOption: 3
  },
  {
    choosed: false,
    question:
      "Ավ. Իսահակյան «Կեսգիշերին գետի ափին / Ես նստած եմ սիրավառ / Գետն հոսում է և հոսանքին / Ես նայում եմ ...»",
    option1: "Զինավառ",
    option2: "Անդադար",
    option3: "Բոցավառ",
    option4: "Միալար",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Նշված հայ երևելիներից ու՞մ 100-ամյակը չի լրացել 2014թ.",
    option1: "Արշիլ գորկի",
    option2: "Հովհաննես Շիրազ",
    option3: "Հունան Ավետիսյան",
    option4: "Համո Սահյան",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "17թ. Կապադովկիայի մաժաք տեղավայրը դարձավ հռոմեկական պրովինցիա և վերանվանվեց ...",
    option1: "Մալաթիա",
    option2: "Կեսարիա",
    option3: "Բութանիա",
    option4: "Սեբաստիա",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Ամենափոքր տառատեսակը",
    option1: "Պետիտ",
    option2: "Մինյոն",
    option3: "Բրիլիանտ",
    option4: "Ցիցերո",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Այս գործիքներից ո՞րն է ստեղնաշարային լարային կամիթավոր",
    option1: "Դաշնամուր",
    option2: "Տավիղ",
    option3: "Չելեստա",
    option4: "Կլավեսին",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Գրականության ոլորտում 2014թ. նոբելյան մրցանակակիր է Պատրիկ",
    option1: "Մոդիանոն",
    option2: "Մոդիլյանին",
    option3: "Զյուսկինդը",
    option4: "Գոդարը",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "1957թ. Վենետիկի կինոփառատոնում ո՞ր մուլտֆիլմը հնչյունավորելու համար Արտեմի Այվազյանը ստացավ մրցանակ:",
    option1: "Երեք հսկաները",
    option2: "Ձյունե թագուհին",
    option3: "Կարմիր գլխարկը",
    option4: "Ձյունանուշն ու մարդը",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Նկարիչների ո՞ր խմբակի անդամ էր Մ. Սարյանը:",
    option1: "«Սինի Վսադնիկ»",
    option2: "«Բուբնովի Վալետ»",
    option3: "«Գոլուբայա ռոզա»",
    option4: "«Չեռվոննայա դամա»",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Թռչուններից որ՞ի անվանումով համաստեղություն չկա.",
    option1: "Սիրամարգ",
    option2: "Կռունկ",
    option3: "Տուկան",
    option4: "Արագիլ",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Նշվածներից ո՞վ է արժանացել «Օսկար»-ի և քառակի ներկայացվել «Էմմի»-ի",
    option1: "Վուփի Գոլդբերգ",
    option2: "Գոլդի Հոուն",
    option3: "Բեթ Դևիս",
    option4: "Մերիլ Սթրիփ",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Միջին դարերում հայերը 10.000-ը նշանակում էին այդ տառով",
    option1: "Ֆ",
    option2: "Ք",
    option3: "ԵՎ",
    option4: "Օ",
    trueOption: 4
  }
];
let HardQuestions = [
  {
    choosed: false,
    question: "Բորենին այդպիսի ձայն է արձակում",
    option1: "Քրքջոց",
    option2: "Մրմնջոց",
    option3: "Քթի տակ ծիծաղ",
    option4: "Մլավոց",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "Սարդուրի Ա-ն, միավորելով Արածանին միջին և ստորին ավազանի «երկրները», սահմանը հասցրեց մինչև ...",
    option1: "Մեկոնգ գետը",
    option2: "Եփրատ գետը",
    option3: "Սևանա լիճը",
    option4: "Ուրմիա լիճը",
    trueOption: 2
  },
  {
    choosed: false,
    question:
      "Ե՛վ «ընդհանուր», և՛ «սեփական», և՛ «մասնավոր», և՛ «անչափ» կարող է լինել",
    option1: "Անուշադրությունը",
    option2: "Ընկերությունը",
    option3: "Կարծիքը",
    option4: "Հյուրընկալությունը",
    trueOption: 3
  },
  {
    question:
      "Մ. Ցետաևա. «Պոետը կարող է ստեղծագործել նաև անմարդաբնակ կղզում, իսկ ահա դերասանը ...»:",
    option1: "Կմահանա",
    option2: "Կբոցավառվի",
    option3: "Մենակ չի գնա",
    option4: "Կմարի",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Հայոց արքա Աշոտ երկաթի աները:",
    option1: "Սահակ Սևադա",
    option2: "Վասակ Սյուն",
    option3: "Վասակ Սևադա",
    option4: "Սահակ Պարթև",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Իտալական Comedia dell'arte-ի գործող անձ",
    option1: "Պոլինա",
    option2: "Կոլոմբինա",
    option3: "Ալբինա",
    option4: "Սիլիբիլինա",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Երեքը աշխարհահռչակ օպերային երգիչներ են, մեկը՝ երգահան",
    option1: "Կարերաս",
    option2: "Դել Մոմակո",
    option3: "Սկարլատի",
    option4: "Պավարոտի",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Անցումային դարաշրջան՝ հնագույն քարե դարից նոր քարե դար",
    option1: "Պրոտերոիթ",
    option2: "Մեգալիթ",
    option3: "Նեոլիթ",
    option4: "Մեզոլիթ",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Նշվածներից երեքի 200-ամյակը լրանում է այս տարի, մեկինը՝ ոչ:",
    option1: "Թոմաս Ջեֆերսոն",
    option2: "Ռիխարդ Վագներ",
    option3: "Դավիթ Լիվինգստոն",
    option4: "Գևորգ IV կաթողիկոս",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Բիոնիկայի խորհրդանիշն է...",
    option1: "Սիգմա",
    option2: "Ինտեգրալը",
    option3: "Լոգարիթմը",
    option4: "Հավասարման նշանը",
    trueOption: 2
  },
  {
    choosed: false,
    question:
      "Աստղեր, որոնց զանգվածն Արեգակի զանգվածի, իսկ շառավիղը՝ Երկրի շառավղի կարգի մեծություններ են:",
    option1: "Աստղակերպեր",
    option2: "Երկրակերպեր",
    option3: "Սպիտակ թզուկներ",
    option4: "Կարմիր գիգանտներ",
    trueOption: 3
  },
  {
    choosed: false,
    question:
      "Հ. Սահյան. «Պիտի հավատամ իմաստուն հասկին, Որ ... աշխարհը պահում է աշխարհից ոչինչ չի շահում»",
    option1: "Իր իմաստությամբ",
    option2: "Փթթելով է",
    option3: "Իր կյանքով է",
    option4: "Մեռնելով է",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Հին Հայաստանում ինչպե՞ս են կոչվել պետության սահմաններում գտնվող մեծածավալ նահանգները",
    option1: "Բդեշխություններ",
    option2: "Քուստակներ",
    option3: "Կալվածքներ",
    option4: "Ստրատեգիաներ",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Ո՞րն է ամելատաք ծովը",
    option1: "Դեղին",
    option2: "Կարմիր",
    option3: "Մեռյալ",
    option4: "Սև",
    trueOption: 2
  }
];
let NrmalQuestions = [
  {
    choosed: false,
    question: "Խնդիր-փոխուկ. փետակ + ա + կերոն = ...",
    option1: "Մեղրամոմ",
    option2: "Մեղրակից",
    option3: "Մեղրակեր",
    option4: "Մոմակալ",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Խնդիր-փոխուկ. արթրիտ + (ուրարտական քաղաք - ն) + 1/4 կայծ = ...",
    option1: "Ակնարկ",
    option2: "Հոդված",
    option3: "Հարված",
    option4: "Ոտնակ",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Խնդիր-փոխուկ. ժամ + անիվ = ...",
    option1: "Վայրկյանաչափ",
    option2: "Ժամանց",
    option3: "Զանգակ",
    option4: "Օրինակ",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Հնում ձեռագիր գրքերը պատկերազարդողներին անվանում էին ...",
    option1: "Նկարող",
    option2: "Հղկող",
    option3: "Բարգավաճող",
    option4: "Ծաղկող",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Անատոմիայի նշանաբանն է. Mortius vivos docent: Ովքե՞ր են սովորեցնում ողջերին:",
    option1: "Մեռածները",
    option2: "Կենդանիները",
    option3: "Հերոսները",
    option4: "Հիվանդները",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "In vino veritas. ըստ հռոմիացիների հայտնի աֆորիզմի ինչի՞ է գինու մեջ.",
    option1: "Հաճույքը",
    option2: "Ճշմարտությունը",
    option3: "Կյանքի իմաստը",
    option4: "Կատարելիությունը",
    trueOption: 2
  },

  {
    choosed: false,
    question: "Ե՛վ քազաքի, և՛ նահանգի, և՛ երկրի ղեկավարի ազգանուն.",
    option1: "Քլիվլենդ",
    option2: "Լինկոլ",
    option3: "Վաշինգտոն",
    option4: "Բիսմարկ",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Ե՛վ «խնայողական», և՛ «հրադադարի», և՛ «բռնատիրական» ...",
    option1: "Հասարակարգ",
    option2: "Ավանդ",
    option3: "Անցուդարձ",
    option4: "Ռեժիմ",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Չերչիլն ասել է.«Ես միշտ ուրախ եմ սովորել, սակայն ինձ միշտ չէ, որ դուր է գալիս, երբ ...»:",
    option1: "Ինձ փորձում են սովորեցնել",
    option2: "Մի բան չեմ հասկանում",
    option3: "Դասավանդում են",
    option4: "Ստալինն է խոսում",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "Ինրպե՞ս է կոչվում Ռուսաստանի ազգային ժողովը",
    option1: "Ռադա",
    option2: "Դումա",
    option3: "Սենատ",
    option4: "Ժողով",
    trueOption: 2
  },
  {
    choosed: false,
    question: "3 հատ «2»-ով ստացվող ամենամեծ թիվը.",
    option1: "222",
    option2: "2*2*2",
    option3: "2-ի 22 աստիճան",
    option4: "22-ի քառակուսի",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Նեֆրիտ կամ այլ կերպ ասած՝ ...",
    option1: "Թոքաբորբ",
    option2: "Լեզվաբորբ",
    option3: "Աղիքաբորբ",
    option4: "Երիկամաբորբ",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Երկրի մակերևույթի անհարթությունների ամբողջությունը կոչվում է",
    option1: "Ռելիեֆ",
    option2: "Փոս",
    option3: "Հոր",
    option4: "Պլատֆորմ",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Ո՞ր թագուհին է հիմնել Սանահինի և Հաղպատի վանքերը",
    option1: "Թամար",
    option2: "Խոսրովանուշ",
    option3: "Փառանձեմ",
    option4: "Կատրամինդե",
    trueOption: 2
  }
];
let EassyQuestions = [
  {
    choosed: false,
    question: "Ի՞նչ է նշանակում լատինական «Alter ego» արտահայտությունը",
    option1: "Երկրորդ ես",
    option2: "Երրորդ ավելորդ",
    option3: "Հինգերորդ տարի",
    option4: "Առաջին հանդիպում",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Ինչի՞ չափման միավոր է վատտը",
    option1: "Աշխատանքի",
    option2: "Հոսանքի հզորության",
    option3: "Հզորության",
    option4: "Երկարության",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Ո՞ր չափման միավորն է օգտագործվում աստղագիտության մեջ",
    option1: "Սև ժամ",
    option2: "Խուլ րոպե",
    option3: "Լուսատարի",
    option4: "Փայլուն ամիս",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Մորզայի այբուբենում ո՞ր նշանն է օգտագործվում",
    option1: "Հարցական նշան",
    option2: "Չակերտներ",
    option3: "Կետ-ստորակետ",
    option4: "Գծիկ",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Ինչպե՞ս են հեռանում անգլիական ձևով.",
    option1: "Առանց հրաժեշտ տալու",
    option2: "Դուռը շրխկացնելուվ",
    option3: "Գրկախառնվելով",
    option4: "Առանց ճաշելու",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Ո՞ր սպորտաձևը չի կիրառվում տրիատլոնում",
    option1: "Մարաթոնյան վազք",
    option2: "Դահուկավազք",
    option3: "Լող",
    option4: "Հեծանվավազք",
    trueOption: 2
  },
  {
    choosed: false,
    question:
      "Տարբերակներից մեկը չի հանդիպում ճարտարապետության եզրույթների մեջ:",
    option1: "Խորաքանդակ",
    option2: "Բարձրաքանդակ",
    option3: "Որսաքանդակ",
    option4: "Որմնաքանդակ",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Նշվածներից, որն է «երեսագիրքը»",
    option1: "Face to Face",
    option2: "Fashion Book",
    option3: "Jungle Book",
    option4: "Facebook",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Հայոց ո՞ր թագավորն է ստացել «երկաթ» մականունը",
    option1: "Աշոտ",
    option2: "Մխիթար",
    option3: "Գուրգեն",
    option4: "Թորգոմ",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Հին Հռոմում իրար դեմ մարտնչող մարդկանց անվանում էին",
    option1: "Կալկուլիատոր",
    option2: "Գլադիատոր",
    option3: "Ռադիատոր",
    option4: "Ալիգատոր",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Հունական այբուբենի «փոքրիկ օ»-ն կոչվում է",
    option1: "Օգրեկ",
    option2: "Օճստիկ",
    option3: "Օմիկրոն",
    option4: "Օպստիկ",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Ո՞ր մարզն է գտնվում Ապարան քաղաքը",
    option1: "Կոտայքի",
    option2: "Գեղարքունիքի",
    option3: "Շիրակի",
    option4: "Արագածոտնի",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Ի՞նչ էր «Մաուգլի»-ի ընկեր օձի անունը",
    option1: "Կաա",
    option2: "Բալու",
    option3: "Չախկալ",
    option4: "Բագիրա",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Ո՞վ է գլխավորում գողերին «Մաֆիա» խաղում",
    option1: "Շերիֆը",
    option2: "Վարողը",
    option3: "Դոնը",
    option4: "Օրենքը",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Windows համակարգում կան",
    option1: "Դռներ",
    option2: "Տանիքներ",
    option3: "Առաստաղներ",
    option4: "Պատուհաններ",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Ինտերնետային հայտնի դիտարկիչը կոչվում է Google...",
    option1: "Atom",
    option2: "Chrome",
    option3: "Com",
    option4: "Brome",
    trueOption: 2
  },
];
let VeryEassyQuestions = [
  {
    choosed: false,
    question:
      "Որպես կանոն ի՞նչ պատասխան են տալիս հետևյալ հանելուկին. «Ե՛վ ձմռանը, և՛ ամռանը նույն գույնի է»:",
    option1: "Եղևնի",
    option2: "Դաշնամուր",
    option3: "Գլխարկ",
    option4: "Սառնարան",
    trueOption: 1
  },
  {
    choosed: false,
    question: "Ֆուտբոլի դաշտում խաղի ժամանակ ո՞վ սովորաբար չի լինում",
    option1: "Հարձակվող",
    option2: "Իրավապաշտպան",
    option3: "Կիսապաշտպան",
    option4: "Պաշտպան",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Ըստ նախապատմության՝ Մոսկվան չի հավատում...",
    option1: "Կեղծիքին",
    option2: "Աչքերին",
    option3: "Արցունքներին",
    option4: "Ճշմարտությանը",
    trueOption: 3
  },
  {
    choosed: false,
    question: "Ինչը սովորաբար չեն անվանում վայրի",
    option1: "Անտառ",
    option2: "Մեղր",
    option3: "Արևմուտք",
    option4: "Կիթառ",
    trueOption: 4
  },
  {
    choosed: false,
    question: "Ինչպե՞ս է կոչբվում 90 աստիճանի անկյունը",
    option1: "Ուղիղ",
    option2: "Թեք",
    option3: "Բութ",
    option4: "Սուր",
    trueOption: 1
  },
  {
    choosed: false,
    question: "«Կոկորդիլոս Գենա»-ի երգում ի՞նչ պաղպաղակ է նվիրում հրաշագործը",
    option1: "Շոկոլադե",
    option2: "Էսկիմո",
    option3: "Մրգային",
    option4: "Վանիլային",
    trueOption: 2
  },
  {
    choosed: false,
    question: "Խաղողի վնասատի թիթեռ",
    option1: "Ընկուզակեր",
    option2: "Ձրիակեր",
    option3: "Ողկույզակեր",
    option4: "Մսակեր",
    trueOption: 3
  },
  {
    choosed: false,
    question:
      "Ո՞ր բառն է հանդիպում և՛ նարդու, և՛ «մեկի գլխին մի բան բերել» նշանակուղ դարձվածքի մեջ:",
    option1: "Պլուտոն",
    option2: "Մարս",
    option3: "Օյին-զոյին",
    option4: "Օյին",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Տնային կենդանի չէ",
    option1: "Վարազ",
    option2: "Ձի",
    option3: "Կով",
    option4: "Աքաղաղ",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "Թվարկվածներից ո՞ր հեքիաթը չի գրել Թումանյանը",
    option1: "Ձախորդ Փանոսը",
    option2: "Մոխրոտիկը",
    option3: "Կացին ախպերը",
    option4: "Ալխելք մարդը",
    trueOption: 2
  },
  {
    choosed: false,
    question:
      "Գրենական պիտույք է",
    option1: "ՙՄաղարիչ",
    option2: "Չամիչ",
    option3: "Սրիչ",
    option4: "Սադրիչ",
    trueOption: 3
  },
  {
    choosed: false,
    question:
      "Քան՞ի միլիմետր է 1 մետրը",
    option1: "100",
    option2: "10",
    option3: "0,1",
    option4: "1000",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Որտե՞ղ էր բնակվում Կարլսոնը",
    option1: "Տանիքում",
    option2: "Բաղնիքում",
    option3: "Քարերի արանքում",
    option4: "Սյունիքում",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "Ին՞չ է ածում հավը",
    option1: "Կատու",
    option2: "Ձու",
    option3: "Մոլախոտ",
    option4: "Բողկ",
    trueOption: 2
  },
  {
    choosed: false,
    question:
      "Թվարկվածներից ո՞ր մեկը նոտա չի",
    option1: "Ռե",
    option2: "Դո",
    option3: "Կա",
    option4: "Մի",
    trueOption: 3
  },
  {
    choosed: false,
    question:
      "Թվարկվածներից ո՞ր մեկը նոտա չի",
    option1: "Ռե",
    option2: "Դո",
    option3: "Մի",
    option4: "Կա",
    trueOption: 4
  },
  {
    choosed: false,
    question:
      "Ավտոմեքենայի մակնիշ է",
    option1: "Նիվա",
    option2: "Հավալա",
    option3: "Հալալա",
    option4: "Նիմա",
    trueOption: 1
  },
  {
    choosed: false,
    question:
      "Ժողովրդական ասացվածք. «Յոթը չափի, մեկը ...»",
    option1: "Նայի",
    option2: "Կտրի",
    option3: "Վերցրու",
    option4: "Խզարի",
    trueOption: 2
  }
];
