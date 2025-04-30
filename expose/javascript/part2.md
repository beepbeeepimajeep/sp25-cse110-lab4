1. Line 13 prints '3'. Because `var` is function-scoped, `i` is still accessible after the loop ends. Therefore, `i = prices.length = 3`.

2. Line 13 will print `150`, the last value stored in `discountedPrice`, because `var` is function-scoped and not block-scoped — so `discountedPrice` is accessible after the loop finishes.

3. Line 14 prints `150`, which is the last value assigned to `finalPrice` during the loop.

4. The function call will return `[50, 100, 150]`. The function loops through the array `[100, 200, 300]`, performs a few operations, and appends the results to the `discounted` array.

5. Line 12 will cause a `ReferenceError` because `let` is block-scoped and was declared within the `for` loop. It is being accessed outside of the loop's block.

6. Line 13 will cause a `ReferenceError` because `let` is block-scoped, meaning it is not accessible from outside the `for` loop it was declared in.

7. Line 14 will print `150` because `let` is block-scoped and retains its value within the enclosing scope.

8. The function will return `[50, 100, 150]`. The function takes an array of prices, applies a discount factor, and pushes the results to a `discounted` array. The final state of the array is returned by the function.

9. `i` is not defined outside of the `for` loop. Therefore, line 11 will cause a `ReferenceError` because `let` is block-scoped and line 11 is outside the loop block.

10. Line 12 will print `3` because `length` is declared as a `const` variable, which is function-scoped. The `prices` array contains 3 elements: `[100, 200, 300]`.

11. The function will run correctly and return the expected discounted values. The final array it returns contains 3 elements: `[50, 100, 150]`.

12. 
    A. `student.name`
    B. `student["Grad Year"]`
    C. `student.greeting()`
    D. `student["Favorite Teacher"].name`
    E. `student.courseLoad[0]`

13. 
    a. output: `'32'`. If either operand is a string, the `+` operator concatenates both operands as strings.
    b. output: `1`. The `-` operator converts string `'3'` to numeric `3`, so `3 - 2 = 1`.
    c. output: `3`. Because `null` is coerced to `0`, therefore `3 + 0 = 3`.
    d. Output: `'3null'`. This is string concatenation again. `'3' + null` becomes `'3' + 'null' → '3null'`.
    e. output: `4`. Because `true` is coerced to numerical value `1`, so `1 + 3 = 4`.
    f. output: `0`. `false` becomes numerical `0` and `null` becomes numerical `0`.
    g. output: `'3undefined'`. `'3'` is a string, so `undefined` is coerced to `'undefined'`, and they are concatenated.
    h. output: `NaN`. `'3'` becomes numerical `3`, `undefined` becomes `NaN`. `3 - NaN = NaN`.

14. 
    a. `'2' > 1` output: `true`. `'2'` is coerced to numerical `2`. `2 > 1 = true`.
    b. `'2' < '12'` output: `false`. Strings are compared lexicographically. `'2' < '12' → false`.
    c. `2 == '2'` output: `true`. `==` allows type conversion. `'2'` becomes numerical `2`.
    d. `2 === '2'` output: `false`. `===` checks both type and value. `2` is numeric, `'2'` is string → not equal.
    e. `true == 2` output: `false`. `true` converts to numeric value `1`. Therefore, `1 == 2 → false`.
    f. `true === Boolean(2)` output: `true`. `2` is considered 'truthy', so `Boolean(2)` evaluates to `true`.

15. The function will return array with values [2,4,6]. The modifyArray function takes two parameter an array of values and a callback function, (doSomething). Inside the function, we loop over every element in the input array and a pply callback(array[i]) — which means doSomething(array[i]) in this case. All results are pushed into newArr, the return object, which becomes [2, 4, 6].
    
19. output: 1,4,3,2.