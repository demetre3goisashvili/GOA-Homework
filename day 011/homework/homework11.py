for i in range(1,51):
    if i % 5 == 0:
        print(i)

for d in range(2,21):
    if d % 2 == 0:
        print(d)

for c in range(5,11):
    print(c * c)

num1 = int(input("please enter a number: "))
factorial = 1

for i in range(1, num1 + 1):
    factorial *= i

print("Factorial of", num1, "is", factorial)


num2 = int(input("please enter a number: "))
if num2 % 2 == 0:
    print(num2 / 2)
else:
    num2 * 3 +1
    print(num2)



for i in range(10, 0 , -1):
    print(i)

while True:
    userinput = input("please enter your name: ")
    if userinput == "quit":
        break

number = 10
while number <= 20:
    if number % 2 == 0:
        print(number)
    number += 1

while True:
    user = int(input("please enter a positive number: "))
    if user >= 0:
        break

i = 1
while i < 10:
    print(i ** 2)
    i += 1
    
     
        
    



    
    
    



     
    