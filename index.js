function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toUpperCase() === string) {
    return "YES INDEED!";
  } elseif (string.toLowerCase() === string)
    return "I can\'t hear you!";
  } elseif (string.toUpperCase() != string && string.toLowerCase() != string) {
    return "I love you, too.";
  } else {
    return "What did you say?"
  }
}
