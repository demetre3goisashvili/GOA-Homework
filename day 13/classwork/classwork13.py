num1 = int(input("please enter a number: "))
if num1 > 0:
    print("this number is positive")
elif num1 < 0:
    print("this number is negative")
else:
    print("this number is 0") 

age = int(input("please enter your age: "))
if age >= 0 and age < 18:
    print("you are a kid")
elif age >= 18 and age < 50:
    print("you are an adult")
else:
    print("you are too old")
