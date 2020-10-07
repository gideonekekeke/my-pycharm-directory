# this is a QUADRATIC EQUATION
# finding the root of an equation (x^2 - x - 6 )= 0
# using this method x = -b +||- square root of b^2 - 4ac to find the root


#importing math module to use for the operation.
import math

# declaring user input variables
first_value = int(input('Enter your first x value: '))
second_value = int(input('Enter your secont x value: '))
constant_value = int(input('Enter the constant value: '))


numerator = (second_value ** 2) - (4 * first_value * constant_value)
# converting the numerator type from int to float.
y = float(numerator)
solution1 = (-second_value + math.sqrt(y)) / (2 * first_value)
solution2 = (-second_value - math.sqrt(y)) / (2 * first_value)

# prints the result to the screen
print("The root of the equation = x^2 - x - 6  are: ", solution1,'and', solution2)









