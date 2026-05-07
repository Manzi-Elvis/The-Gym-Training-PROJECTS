/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

var facebookProfile = {
    name : "James Bond",
    friends: 12,
    messages: ["Hello, world!","Good morning!","Don't forget to code today!","Keep learning new things!","Have a great day!"],
    postMessage : function(message){
        this.messages.push(message)
        console.log(`Message added: "${message}"`);
    },
    deleteMessage : function(index){
        if (index >= 0 && index < this.messages.length) {
            const removed = this.messages.splice(index,1)
            console.log(`Message at index ${removed[0]} removed`)
        }
        else{
            console.log("Invalid index! No message removed!")
        }
        
    },
    addFriend : function(){
        this.friends += 1
        console.log(`Friend added! Total friends: ${this.friends}`);
    },
    removeFriend : function(){
        if(this.friends > 0){
           this.friends -= 1
           console.log(`Friend removed! Total friends: ${this.friends}`);
        }
        else{
            console.log("No friends to remove!");
        }
    }
}


facebookProfile.postMessage("Learning JavaScript is fun!");
facebookProfile.deleteMessage(2);
facebookProfile.addFriend();
facebookProfile.removeFriend();

console.log(facebookProfile);

/*
Thanks for completing that!

What Went Well
- Your code should have a variable `facebookProfile`
- The variable `facebookProfile` should be an object
- Your `facebookProfile` object should have a `name` property
- Your `facebookProfile` object should have a `friends` property
- Your `facebookProfile` object should have a `messages` property
- Your object's `name` property should be string
- Your object's `friends` property should be a number
- Your object's `messages` property should be an array
- Your `facebookProfile` object should have a `postMessage()` method
- Your `facebookProfile` object should have a `deleteMessage()` method
- Your `facebookProfile` object should have a `addFriend()` method
- Your `facebookProfile` object should have a `removeFriend()` method
- Your object's `postMessage()` method should add messages to the `messages` array
- Your object's `deleteMessage()` method should remove messages from the `messages` array
- Your object's `addFriend()` method should increment the `friends` variable
- Your object's `removeFriend()` method should decrement the `friends` variable
Feedback
Your answer passed all our tests! Awesome job!
*/