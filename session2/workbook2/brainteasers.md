1. **Palindrome Checker** - Write a function that checks if a given word or phrase is a palindrome. 

2. **Factorial Function** - Write a function that calculates the factorial of a number.

3. **Fibonacci Sequence** - Write a function that generates the first N numbers in the Fibonacci sequence.

4. **Prime Number Checker** - Write a function that checks if a given number is prime.

5. **Sum of Multiples** - Write a function that calculates the sum of all multiples of 3 or 5 below a given number.

6. **Reverse a String** - Write a function that takes a string and returns it reversed.

7. **Count the Vowels** - Write a function that takes a string and returns the number of vowels.

8. **Multiplication Table** - Write a function that displays a multiplication table up to 10 for a given number.

9. **Longest Word** - Write a function that takes a sentence and returns the longest word.

10. **Count the Words** - Write a function that takes a sentence and returns the number of words.

11. **Sort an Array** - Write a function that takes an array of numbers and returns it sorted in ascending order.

12. **FizzBuzz** - Write a function that prints the numbers from 1 to 100. But for multiples of three, it prints “Fizz” instead of the number and for the multiples of five, it prints “Buzz”. For numbers which are multiples of both three and five, it prints “FizzBuzz”.

13. **Even or Odd** - Write a function that checks if a number is even or odd.

14. **Collatz Conjecture** - Write a function that calculates the number of steps it takes to reach 1 if the Collatz Conjecture is followed (if the number is even, divide it by 2, if it's odd, multiply by 3 and add 1).

15. **Guess the Number**: Write a script where the computer randomly selects a number between 1 and 100 and the user has to guess what the number is. After every guess, the computer should tell the user if the guess is higher, lower, or correct. Bonus bonus: keep track of the number of guesses, make it possible to play multiple rounds and display the average number of guesses.

16. **Lucky Numbers**: A number is called lucky if the sum of its digits, as well as the sum of the squares of its digits, are both prime numbers. Write a function that determines if a number is lucky or not.

For example, **23**:*
* The sum of its digits is 2 + 3 = 5. 
* The sum of the squares of its digits is 2² + 3² = 4 + 9 = 13.
Both 5 and 13 are prime numbers. So, 23 is a lucky number. 

17. **Happy Numbers**: A number is called happy if it leads to 1 after a sequence of steps where in each step number is replaced by sum of squares of its digit. Write a function that determines if a number is happy or not.

For example, **19**:
* Step 1: 1² + 9² = 82
* Step 2: 8² + 2² = 68
* Step 3: 6² + 8² = 100
* Step 4: 1² + 0² + 0² = 1

16. **Armstrong Numbers**: For example, 153 is an Armstrong number since 1³ + 5³ + 3³ = 153.

17. **String Repeater**: For example, given the string "abc" and the number 3, the function should return "abcabcabc".

18. **Find the Missing Number**: For example, given the array [1, 2, 3, 4, 6, 7, 8, 9, 10], the function should return 5.

19. **Temperature Converter**: For example, given the temperature 32 degrees Fahrenheit, the function should return 0 degrees Celsius.

20. **Ceaser Cipher**: For example, given the string "abc" and a shift of 3, the function should return "def".

21. **DNA Complement**: For example, given the sequence "ATCG", the function should return "TAGC".

22. **Anagram Checker**: For example, the words "listen" and "silent" are anagrams, so the function should return true.

23. **Sum of Array Elements**: For example, given the array [1, 2, 3, 4], the function should return 10.

24. **Second Largest Number**: For example, given the array [1, 2, 3, 4], the function should return 3.

25. **Array Elements Counter**: For example, given the array [1, 1, 2, 3, 3, 3], the function should return an object like this: {1: 2, 2: 1, 3: 3}.

26. **Leap Year Checker**: For example, the year 2000 was a leap year, so the function should return true.

27. **Credit Card Validator**: For example, given the card number 4532015112830366, the function should return true as it's a valid number according to the Luhn algorithm.

28. **Number to Words**: For example, given the number 123, the function should return the string "one hundred and twenty-three".

29. **Remove Duplicates**: For example, given the array [1, 2, 2, 3, 4, 4, 4], the function should return [1, 2, 3, 4].

30. **Pascal’s Triangle**: For example, given the number 5, the function should print:
```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

31. **Manual Case Converter**: Write two functions, `toManualLowerCase` and `toManualUpperCase`, that convert a given string to all lowercase or all uppercase respectively, without using the built-in `toLowerCase` or `toUpperCase` methods. You may consider using ASCII values for this purpose. Given the string "AbcDeF", the `toManualLowerCase` function should return "abcdef" and `toManualUpperCase` should return "ABCDEF".

32. **Occurrences Finder**: Write a function that takes two strings as parameters: the first string is the text to search within, and the second string is what we want to search for. The function should return an array containing the starting positions of all occurrences of the second string within the first string. Given the strings "banana" and "an", the function should return [1, 3] since "an" occurs at those positions in the string "banana".

33. **Regex Replace vs Substring Concat Performance**: This isn't a coding exercise per se, but a research one. Investigate whether there's a difference in performance between using regex replace methods and using substring concatenation to replace parts of a string in JavaScript. Write a report summarizing your findings, and explain why one might be faster than the other.

