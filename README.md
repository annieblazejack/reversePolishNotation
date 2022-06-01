## Reverse Polish Notation Calculator


A calculator that takes can add, subtract, multiply, and divide. 

Operators follow their operands, so adding three and four would require this input: ' 3 4 + '

The calculator can perform a series of operations. This input ' 3 4 5 × − ' instructs the calculator to multiply four by five and then subtract three. 

It works with a cache array: Numbers are pushed onto the end of the array until we encounter an operator. Then the operator and the last two numbers are popped off the array and a sub-calculation is performed. The result is added to the array, and we continue recursively until there's just one number (the answer) left in the array. 