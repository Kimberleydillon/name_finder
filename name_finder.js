var text = ' this is a story about a girl named  Kim  who was pretty thin but not very dim this was Kim  she explored the rim of the world in a plane, Kim';
var myName = 'girl'
var hits = [
];
for (var i = 0; i < text.length; i++) { //search whole text one letter at a time
 if(text[i] === myName[0]){//if current letter is first letter if name
   var nameMatch = false;
   
   for (var j = 0; j < myName.length;j++) {//loop through name
     
     if (text[i + j] !== myName[j]) {//if any letter doesn match break
       break;
     }
     
     if(j === myName.length-1)//matched all letters
      {
       nameMatch = true;   
      }
   }
   
   
   if (nameMatch === true){//if name matched
     hits.push(i);// shows name location     
   }
 }
    

}
console.log

for ( var hitCount = 0; hitCount < hits.length; hitCount++){
  console.log(hits[hitCount])
}

true;
/*
Exception: ReferenceError: hitsCount is not defined
@Scratchpad/1:19:49
*/
/*
Exception: SyntaxError: missing ( before condition
@Scratchpad/1:11
*/
/*
undefined
*/
/*
true
*/
/*
true
*/