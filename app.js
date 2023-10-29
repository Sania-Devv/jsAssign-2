//chap 3
// prac 3.1
// Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.
               //solution 3.1

// let arr=["Milk","Bread","Apples"];
//  console.log("List length",arr.length);
//  arr[1]="Bananas";
//  console.log("updated list",arr);


//  prac 3.2
//  1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.

    // solution
// let shoppingList=[];
// shoppingList.push("Milk","Bread","Apples");
// shoppingList[1]=["Bananas","Eggs"];
// let lastItem=shoppingList.pop();
// console.log("removed item:", lastItem);
// shoppingList.sort();
// console.log("Index of milk is:",shoppingList.indexOf("Milk"));
// let bananasIndex = shoppingList.indexOf("Bananas");
// shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
// let newItem=["Juice "," Pop"];
// shoppingList=shoppingList.concat(newItem,newItem);
// let popLastIndex=shoppingList.indexOf("Pop");
// console.log("Last ndex of 'pop'",popLastIndex);
// console.log("Final shopping list:", shoppingList);

// prac 3.3
// 1.Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.
         
// const Array = [1, 2, 3];

// const nestedArrays = [Array, Array, Array];

// console.log("Value 2 from one of the arrays:", nestedArrays[0][1]);
// // prac 3.4
// // solution
// const myCar = {
//     make: "Honda",
//     model: "Civic",
//   };
//   let propertyName = "color";
//   myCar[propertyName] = "Blue";
 
//   propertyName = "forSale";
//   myCar[propertyName] = true; 
  
//   console.log("Make:", myCar.make);
//   console.log("Model:", myCar.model);
  
//   console.log("Is it for sale?", myCar.forSale);
//   prac 3.5

//   Create an object named people that contains an empty array that is called
// friends.
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.
            //    solution
            const people ={
                friends:[]
            };
            const friend1 ={
                firstName: "Misbah",
                lastName: "kanwal" , 
                ID: 31
            };
            const friend2 ={
                firstName: "Namita",
                lastName: "kumari" , 
                ID: 6
            };
            const friend3 ={
                firstName: "Fasiha",
                lastName: "Maryam",
                ID: 12
            };
        people.friends.push(friend1,friend2,friend3);
        console.log(people);

        // Chapter projects
        // Manipulating an array
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.

        const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift("FIRST");
theList[3]="hello world";
theList[2]="Middle";
theList.push("LAST");
console.log(theList);
  
               // Company product catalog
// In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.

const inventory =[];
const item1 ={
    model: "iPhone 11",
    cost: 699,
    quantity: 15
};
const item2 = {
    model: "iPhone 12",
    cost: 799,
    quantity: 20
  };
  
  const item3 = {
    model: "iPhone 13",
    cost: 799,
    quantity: 25
  };
  inventory.push(item1, item2, item3);
  console.log("Inventory:", inventory);

  const thirdItemQuantity = inventory[2].quantity;
console.log("Quantity of the third item:", thirdItemQuantity);
 
  
//   chap 4
  //prac 4.1
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable){
// //action
// }
// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.
let myVariable = "true";
console.log(myVariable);
if(myVariable){
    console.log("myVariable is true");
}
if(!myVariable){
console.log("my variable is not true");
}
else{
    console.log("my variable is true");
}
 myVariable = "false";
 console.log(myVariable);
if(myVariable){
    console.log("my variable is true");
    }
    else{
        console.log("my variable is not true");
    }
//     Practice exercise 4.2
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
// 7. Output the response message variable to the console
                // solution
// let userAge = prompt("Enter your age");
// userAge = parseInt(userAge);
// var message;
// if(userAge >= 21){
//     message="Confirmed entry to the venue and you can purchase alcohol";
// }
// else if(userAge >= 19){
//     message="Confirmed entry to the venue but you cannot purchase alcohol";
// }
// else{
//     message="Sorry! Denied entry to the venue";
// }
// console.log(message);

// Practice exercise 4.3
// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check whether
// their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console

                    //  SOLUTION
// var isIDValid = "true";
// var message = isIDValid ? "You are allowed" : "Not allowed into the venue";
// console.log(message);



//Practice exercise 4.4
// Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.

// solution

// var randomValue = Math.floor(Math.random() * 6);

// var userQuestion = prompt("Ask a question:");

// var response;
// switch (randomValue) {
//     case 0:
//         response = "It is certain.";
//         break;
//     case 1:
//         response = "You may rely on it.";
//         break;
//     case 2:
//         response = "Outlook not so good.";
//         break;
//     case 3:
//         response = "Don't count on it.";
//         break;
//     case 4:
//         response = "Try again.";
//         break;
//     case 5:
//         response = "Cannot predict now.";
//         break;
//     default:
//         response = "Sorry!! I'm not sure.";
// }

// var finalResponse = "You asked: " + userQuestion + "\nMagic 8-Ball says: " + response;
// console.log(finalResponse);

// Practice exercise 4.5
// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string

                // solution
var prizes =prompt("Select a number between 0 to 10");
prizes =parseInt(prizes);
var message = "My Selection:";
switch(prizes){
    case 0:
        prizemessage="Congratulation!! you have a won a turkey visa.";
        break;
    case 1:
         prizemessage="Wow!you have won a brand new car";
         break;  
    case 2:
         prizemessage="Nice!you have won a laptop";
         break;  
   case 3:
   case 4:
   case 5:
        prizemessage="GREAT! you have won a million dollars.";
        break;
   case 6:
   case 7:
   case 8:
        prizemessage="Wow!!you have won 1 dollars.";
        break;  
    case 9:
        prizemessage="you are lucky you have won 1 dollars.";
        break;   
       case 10:
        prizemessage="You've won a gift card to your favorite restaurant!";
       break; 
    default: 
        prizemessage="Sorry Your selection is not valid." 

}
let finalResponse= message + prizemessage;
console.log(finalResponse);
   
// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

let dynamicNumber = 10;
let userNumber =prompt("Enter a number");
userNumber = parseFloat(userNumber);

   if(isNaN(userNumber)){
    console.log("Invalid response!please enter another number");

}
   else if(userNumber>dynamicNumber){
         console.log("your number is greater than a dynamic number which was"+dynamicNumber+".");
}
    else if(userNumber<dynamicNumber){
    console.log("your number is less than a dynamic number which was"+dynamicNumber+".");
}
    else{
        console.log("Great! your number is equal to dynamic number which was"+dynamicNumber+".");
 }

//  Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console.

let userInput=prompt("Enter a name");
switch (userInput) {
    case "fasii":
        console.log("Fasii is your friend.");
        break;
    case "nimi":
        console.log("nimi is your friend.");
        break;
    case "misbii":
        console.log("misbii is your friend.");
        break;
    default:
        console.log("You don't know this person.");
}

// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.

let choices = ["Rock", "Paper", "Scissors"];

let playerIndex = Math.floor(Math.random() * 3);
let computerIndex = Math.floor(Math.random() * 3);

let playerChoice = choices[playerIndex];
let computerChoice = choices[computerIndex];
let result;

if (playerChoice === computerChoice) {
    result = "It's a tie!";
} else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
) {
    result = "Player wins!";
} else {
    result = "Computer wins!";
}
console.log("Player selected: " + playerChoice);
console.log("Computer selected: " + computerChoice);
console.log(result);












