const dict = {
  "ا": "әлиф","ب": "бә","ت": "тә","ث": "сә","ج": "жим","ح": "ха","خ": "хо",
  "د": "дәл","ذ": "зәл","ر": "ро","ز": "зәй","س": "син","ش": "шин","ص": "сод",
  "ض": "дод","ط": "то","ظ": "зо","ع": "айн","غ": "ғайн","ف": "фә","ق": "қоф",
  "ك": "кәф","ل": "ләм","م": "мим","ن": "нун","هـ": "һә","و": "уау","ي": "йа"
};

let cards = Object.entries(dict).map(([arabicLetter, transcription]) => ({ arabicLetter, transcription }));

let i = 0;
let showTranscription = false;

const buttonArabicLetter = document.getElementById('arabicLetter');
const buttonTranscription = document.getElementById('transcription');
const buttonPrevious = document.getElementById('previous');
const buttonNext = document.getElementById('next');
const buttonShuffle = document.getElementById('shuffle');
const sectionCounter = document.getElementById('counter');
const sectionCard = document.getElementById('card');

function render(){
  const { arabicLetter, transcription } = cards[i];
  buttonArabicLetter.textContent = arabicLetter;
  buttonTranscription.textContent = transcription;
  buttonArabicLetter.hidden = showTranscription;
  buttonTranscription.hidden = !showTranscription;
  sectionCounter.textContent = `${i+1} / ${cards.length}`;
}
function flip(){ showTranscription = !showTranscription; render(); }
function next(){ i = (i + 1) % cards.length; showTranscription = false; render(); }
function previous(){ i = (i - 1 + cards.length) % cards.length; showTranscription = false; render(); }
function shuffle(){
  for (let j = cards.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    [cards[j], cards[k]] = [cards[k], cards[j]];
  }
  i = 0; showTranscription = false; render();
}

sectionCard.addEventListener('click', flip);
buttonNext.addEventListener('click', next);
buttonPrevious.addEventListener('click', previous);
buttonShuffle.addEventListener('click', shuffle);

render();