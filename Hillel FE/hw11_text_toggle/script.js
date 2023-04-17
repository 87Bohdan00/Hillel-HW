const paragraph = document.getElementById('paragraph');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.addEventListener('click', hideText);
function hideText() {
   paragraph.classList.toggle('hide-text');
   button2.classList.toggle('hide-text');
   button3.classList.toggle('hide-text');

   if (button1.textContent.includes('Show text')) {
      button1.textContent = 'Hide text';
   } else {
      button1.textContent = 'Show text';
   }
}

function changeFontSize(id, valueToChange) {
   const text = document.getElementById(id);
   const textFontSize = parseInt(window.getComputedStyle(text, null).getPropertyValue('font-size'));
   text.style.fontSize = (textFontSize + valueToChange) + 'px';
}