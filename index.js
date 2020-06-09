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

const titleCased = (e) => {
  return tutorials.map( line => {
    let strings = line.split(' ')
    let capitalizedStrings =
      strings.map( string => string.charAt(0).toUpperCase() + string.slice(1) )
    let newArray = capitalizedStrings.join(' ')
    return newArray
  })
}
