let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
//Remove the last string
secretMessage.push('to', 'Program');
//add the words 'to' and 'program' 
secretMessage[7] = 'right';
//changes the world 'easily' into 'right'
secretMessage.shift();
//removes first string
secretMessage.unshift('Programming');
//add the string 'programming' at the beginning of the array
secretMessage.splice(6, 5, 'know');
//remove string get, right, the, first, time, and replace them with 'know'
console.log(secretMessage.join(' '));
//stampa la frase segreta aggiungendo gli spazi