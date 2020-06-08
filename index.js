const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => titleCase(sentence))
}

function titleCase(sentence) {
    const words = sentence.split(" ")
    const capitalLetters = words.map(word => word.charAt(0).toUpperCase()) 
    const lowercaseLetters = words.map(word => word.slice(1))
    const newWords = []

    for (let x = 0; x < capitalLetters.length; x++) {
      const word = (capitalLetters[x] + lowercaseLetters[x])
      newWords.push(word)
    }

    const newSentence = newWords.join(' ')

    return newSentence 
  }
  

console.log(titleCased())
