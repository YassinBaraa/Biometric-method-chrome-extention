console.log("Chrome extention go!");

//document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.getElementsByTagName("p");

  for (let i = 0; i < paragraphs.length; i++) {
    line = paragraphs[i].textContent;
    convert = format(line);
    paragraphs[i].innerHTML = convert;
  }
//});


//u pravoj apk line ce biti jednak tekstu svih html elemenata koje u sebi imaju tekst
//ili mozda samo paragrafi
function format(line) {
  const words = line.split(" ");
  const formattedWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 0 && word.length <= 3) {
      formattedWords.push(formatLessThanThree(word));
    } else if (word.length > 3 && word.length % 2 === 0) {
      formattedWords.push(formatMoreThanThree(word));
    } else {
      formattedWords.push(formatMoreThanThree(word));
    }
  }

    //console.log(formattedWords.join(" "));
    return formattedWords.join(" ");
};


function formatLessThanThree(word) {
  const boldPart = word.substring(0, 1);
  const regularPart = word.substring(1);

  //return `<b>${boldPart}</b>${regularPart}`;
  return "<b>" + boldPart + "</b>" + regularPart;
}

function formatMoreThanThree(word) {
  const boldPart = word.substring(0, Math.ceil(word.length / 2));
  const regularPart = word.substring(Math.ceil(word.length / 2));

  //return `<b>${boldPart}</b>${regularPart}`;
  return "<b>" + boldPart + "</b>" + regularPart;
}

//ways to improve:  not just <p> include <spans>,etc.
//                  the program runs onClick of a button not automaticly