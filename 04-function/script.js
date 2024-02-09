
      // TODO: Create a function called "adder" that takes three arguments (x, y, z) and returns their sum
      function adder(x, y, z) {
        return x + y + z;
      }

      // TODO: Create a function called "multiplier" that takes three arguments (x, y, z) and returns their product
      function multiplier(x, y, z) {
        return x * y * z;
      }

      // TODO: Create a function called "isString" that takes three arguments (x, y, z) and checks if the type of all three is a string
      function isString(x, y, z) {
        // Checks if each argument is a string using typeof
        if (
          typeof x === 'string' &&
          typeof y === 'string' &&
          typeof z === 'string'
        ) {
          // If they are strings, it will log that message
          return 'Yep. They are all strings!';
        }
        // If any one of them is NOT a string, it will log that message
        else {
          return "No... I don't believe these are strings.";
        }
      }

      // TODO: Create a function called "vowelChecker" that takes one argument (x) and checks if the first letter is a vowel
      function vowelChecker(x) {
        // charAt(0) will grab the first letter (character) and convert it toLowerCase()
        var firstChar = x.toLowerCase().charAt(0);

        // Checks if that first letter is a vowel
        if (
          firstChar === 'a' ||
          firstChar === 'e' ||
          firstChar === 'i' ||
          firstChar === 'o' ||
          firstChar === 'u'
        ) {
          // If it is a vowel, it will log that message
          return 'Yes, the first letter is a vowel!';
        } else {
          // If it is NOT a vowel, it will log that message
          return 'First letter is NOT a vowel.';
        }
      }

      // Check the browser console to see if the following is logged correctly
      var sum = adder(1, 2, 3);

      console.log('The result of adder() is ' + sum);

      var product = multiplier(2, 3, 4);

      console.log('The result of multiplier() is ' + product);

      var stringCheckOne = isString('Jared', 'Bad', 'Monkey');

      console.log(stringCheckOne);

      var stringCheckTwo = isString(2, 'Way', 'Street');

      console.log(stringCheckTwo);

      var vowelCheckOne = vowelChecker('Eek');

      console.log(vowelCheckOne);

      var vowelCheckTwo = vowelChecker('Nah');

      console.log(vowelCheckTwo);
    