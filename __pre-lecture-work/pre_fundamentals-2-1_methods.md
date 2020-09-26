# Fundamentals: JavaScript Methods

Methods have to be the most exciting part of JavaScript!

- Methods are special functions that reference the values of the data stored in the object.
- Methods are called with dot notation `object.method(arguments)`. _The period between object and method is the dot in dot notation._

> Because ALL of the data types we've learned about are actually objects, they all have a bunch of built-in methods and special properties.

For example, all objects have `toString` methods.

```js
let num = 3;
num.toString(); // "3"

let bool = true;
bool.toString(); // "true"

let str = 'hello';
str.toString();
('hello');

let arr = [1, 2, 'three'];
arr.toString(); // "1,2,three"

let dip = { value: 3 };
dip.toString(); // "[object Object]"
```

That last one is weird and we'll address it a later lecture. Suffice it to say that the method does exist, and does do _something_.

- When programming with JavaScript we don't generally care that booleans, numbers and functions are objects. Their methods aren't that useful most of the time.

- The most helpful built-in methods are on strings, arrays and object. _We'll talk more about objects and their methods later when we talk about creating our own methods._

## String Methods

Strings have a bunch of methods and properties that will be immediately useful. 😉

- `.length`
- `.replace()`
- `.slice()`
- `.concat()`
- `split()`
- `indexOf()`

📝 None of these methods **mutate** the string; strings are **immutable**.
📝 They return a new version of the string which you can then work with as you like.

In the following examples use each method in the example and write out the expected outcome. _We will go over some of your answers in class._

### [`.length`](https://www.w3schools.com/jsreF/jsref_length_string.asp)

`.length` is a property that holds the # of characters in the string.

```js
// Example 1
const sentiment = 'I love programming';
sentiment.length; 18
```

---

### [`.replace()`](https://www.w3schools.com/jsreF/jsref_replace.asp)

The `.replace()` method replaces a specified value with another value in a string.

It takes 2 parameters, the value to replace and the new value.

```js
// Example 2
const food = 'I love bacon';
const otherFood = food.replace('bacon', 'avocado');
console.log(otherFood);
```

---

### [`.slice()`](https://www.w3schools.com/jsreF/jsref_slice_string.asp)

`.slice()` extracts a part of a string and returns the extracted part in a new string.

- The method takes 2 parameters: the start position, and the end position.

```js
// Example 3
const sentence = 'Bingo was his name.';
const name = sentence.slice(0, 5);
console.log(name);
```

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_string.asp)

The `.concat()` method is used to join two or more strings.

```js
// Example 4
let partOne = 'Do or do not.';
let partTwo = 'There is no try.';
let fullSentence = partOne.concat(' ' + partTwo);
console.log(fullSentence);
```

---

### [`.split()`](https://www.w3schools.com/jsreF/jsref_split.asp)

The `.split()` method "split" a string into an array of _substrings_.

```js
// Example 5
const truth = 'The greatest teacher, failure is.';
console.log(truth.split(','));
```

---

### [`.indexOf()`](https://www.w3schools.com/jsreF/jsref_indexof.asp)

The `.indexOf()` method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

```js
// Example 6
let yodaSpeak =
  'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.';
console.log(yodaSpeak.indexOf('dark side'));
```

🤔*Why does JavaScript decide to return `-1` instead of some other value? like `0`?*

**More String Methods here:** https://www.w3schools.com/jsreF/jsref_obj_string.asp

---

## Array Methods

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

### Common Array methods

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example 7
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo); 
console.log(newArray);
["think", "dream", "learn", "write", "thought", "dreams", "knowledge", "truth"]
```

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.

```js
// Example 8
const lexicon = [
  'The',
  'large',
  'shaggy',
  'dog',
  'barked',
  'at',
  'the',
  'silence',
];

let sentence = lexicon.join(); 
console.log(sentence);
The,large,shaggy,dog,barked,at,the,silence

let sentence = lexicon.join(' '); 
console.log(sentence);
The large shaggy dog barked at the silence
```

There are many many more array methods. Here are a few that you should look up and become familiar with. We will go over them together in class.

- `.includes()`, `.slice()`
- `.indexOf()`, `.push()`
- `.pop()`, `.sort()`
- `.shift()`, `.unshift()`
- `.reverse()`, `.lastIndexOf()`
- `.splice()`, `.toString()`

---

## Exercises

Turn an input string into another string

---

```js
// Exercise 1
const longSentence = 'I am a really long sentence, look how many words I have!';

// output: "sentence, look how"
console.log(longSentence.slice(19, 37));
```

```js
// Exercise 2
const greeting = 'Hi World!';

// output: "Hello world!"
const newGreeting = greeting.replace('Hi', 'Hello');
console.log(newGreeting);
```

---

```js
// Exercise 3
const age = 'I am 23 years old!';

// output: "I am old!"
console.log(age.replace(' 23 years ', ' '));
```

```js
// Exercise 4
const ask = 'How are you today?';

// output: ["how", "are", "you", "yesterday?"]
console.log(ask.replace('today', 'yesterday').split(' '));
```
