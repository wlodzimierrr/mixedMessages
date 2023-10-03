//random number generator from 0
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  };

// storage for messages
const messageStorage = {
    whoYouAre:['king', 'clown', 'prince', 'god', 'batman'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one'],
    fortunateOutput:['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck']
};

// personal message array
let personalMessage = [];

// random message loop
for(let prop in messageStorage) {
    let option = generateRandomNumber(messageStorage[prop].length)

// The first part of a message and the message from the object added to create personal message  
    switch(prop) {
      case 'advice':
        personalMessage.push(`You should: "${messageStorage[prop][option]}".`)
        break
      case 'fortunateOutput':
        personalMessage.push(`You are having: "${messageStorage[prop][option]}".`)
        break
      case 'whoYouAre':
        personalMessage.push(`You are: "${messageStorage[prop][option]}".`)
        break
      default:
        personalMessage.push('There is not enough info.')
        
    };
};

console.log(personalMessage);