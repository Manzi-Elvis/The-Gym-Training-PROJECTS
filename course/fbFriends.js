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