var name = prompt("What if you were a Starbucks coffee? Enter your name.");
temp = name.split(' ');

var firstName = temp[0];
var lastName = temp[1];
var firstNameSplit = firstName.split('');
var lastNameSplit = lastName.split('');
var firstInitial = firstNameSplit[0];
var lastInitial = lastNameSplit[0];
var newFirst = "";
var newLast = "";

//console.log("*******");
//console.log(firstName);
//console.log(lastName);
//console.log(firstInitial);
//console.log(lastInitial);

switch(lastInitial) {
    
    case "A":
        newLast = "Latte";
        break;
        
    case "B":
        newLast = "Latte";
        break;
                
    case "C":
        newLast = "Latte";
        break;
           
    case "D":
        newLast = "Latte";
        break;
           
    case "E":
        newLast = "Latte";
        break;
           
    case "F":
        newLast = "Mocha";
        break;
            
    case "G":
        newLast = "Mocha";
        break;
           
    case "H":
        newLast = "Mocha";
        break;
           
    case "I":
        newLast = "Mocha";
        break;
           
    case "J":
        newLast = "Mocha";
        break;
           
    case "K":
        newLast = "Frappuccino";
        break;
           
    case "L":
        newLast = "Frappuccino";
        break;
           
    case "M":
        newLast = "Frappuccino";
        break;
         
    case "N":
        newLast = "Frappuccino";
        break;
           
    case "O":
        newLast = "Frappuccino";
        break;
        
    case "P":
        newLast = "Frappuccino";
        break;
         
    case "Q":
        newLast = "Frappuccino";
        break;
         
    case "R":
        newLast = "Frappuccino";
        break;
          
    case "S":
        newLast = "Frappuccino";
        break;
        
    case "T":
        newLast = "Green Tea";
        break;
         
    case "U":
        newLast = "Green Tea";
        break;
              
    case "V":
        newLast = "Green Tea";
        break;

    case "W":
        newLast = "Green Tea";
        break;
               
    case "X":
        newLast = "Green Tea";
        break;
    
    case "Y":
        newLast = "Green Tea";
        break;
    
    case "Z":
        newLast = "Green Tea";
        break;
        
    default:
    result = "Oops, we haven't gotten that far yet!";
    
}

switch(firstInitial) {
        case "A":
        newFirst = "Tall";
        break;
        
    case "B":
        newFirst = "Tall";
        break;
                
    case "C":
        newFirst = "Tall";
        break;
           
    case "D":
        newFirst = "Tall";
        break;
           
    case "E":
        newFirst = "Tall";
        break;
           
    case "F":
        newFirst = "Tall";
        break;
            
    case "G":
        newFirst = "Tall";
        break;
           
    case "H":
        newFirst = "Tall";
        break;
           
    case "I":
        newFirst = "Tall";
        break;
           
    case "J":
        newFirst = "Grande";
        break;
           
    case "K":
        newFirst = "Grande";
        break;
           
    case "L":
        newFirst = "Grande";
        break;
           
    case "M":
        newFirst = "Grande";
        break;
         
    case "N":
        newFirst = "Grande";
        break;
           
    case "O":
        newFirst = "Grande";
        break;
        
    case "P":
        newFirst = "Grande";
        break;
         
    case "Q":
        newFirst = "Grande";
        break;
         
    case "R":
        newFirst = "Grande";
        break;
          
    case "S":
        newFirst = "Venti";
        break;
        
    case "T":
        newFirst = "Venti";
        break;
         
    case "U":
        newFirst = "Venti";
        break;
              
    case "V":
        newFirst = "Venti";
        break;

    case "W":
        newFirst = "Venti";
        break;
               
    case "X":
        newFirst = "Venti";
        break;
    
    case "Y":
        newFirst = "Venti";
        break;
    
    case "Z":
        newFirst = "Venti";
        break;
    
    default:
    result = "Oops, we haven't gotten that far yet!";
    
}
function printName () {
console.log("Your new name is " + newFirst + " " + newLast + "!");
}
printName();