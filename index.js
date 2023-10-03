//random number generator from 0
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  };

// storage for messages
const messageStorage = {
    advice: [],
    fortunateOutput:[],
    whoYouAre:[]
};

// personal message array
let personalMessage = [];

// random message loop
for(let prop in messageStorage) {
    let option = generateRandomNumber(messageStorage[prop].length)

// The first part of a message and the message from the object added to create personal message  
    switch(prop) {
      case 'advice':
        messageStorage.push(`You should: "${messageStorage[prop][option]}".`)
        break
      case 'fortunateOutput':
        messageStorage.push(`You are having: "${messageStorage[prop][option]}".`)
        break
      case 'whoYouAre':
        messageStorage.push(`You are: "${messageStorage[prop][option]}".`)
        break
      default:
        messageStorage.push('There is not enough info.')
        
    };
};