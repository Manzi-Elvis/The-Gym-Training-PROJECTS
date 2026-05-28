/*Quiz: Using Sets
Directions:
Make a variable with the name myFavoriteFlavors and give it the value of an empty Set object.
 Then use the .add() method to add the following strings to it:

"chocolate chip"
"cookies and cream"
"strawberry"
"vanilla"
Then use the .delete() method to remove "strawberry" from the set.

*/

/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Make a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */

 const myFavoriteFlavors = new Set();
 
 myFavoriteFlavors.add("chocolate chip")
 myFavoriteFlavors.add("cookies and cream")
 myFavoriteFlavors.add("strawberry")
 myFavoriteFlavors.add("vanilla")
 myFavoriteFlavors.delete("strawberry")

 /// OR ///
 ["chocolate chip", "cookies and cream", "strawberry", "vanilla"]
  .forEach(flavor => myFavoriteFlavors.add(flavor));
