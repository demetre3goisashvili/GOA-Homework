user_budget = int(input("please enter your budget: "))
tablet = 400
if user_budget >= tablet:
    print("Purchase Complete")
else:
    print("Budget not enough")


correct_password = "GOAbest"
max_attempts = 5
attempt_count = 0

while attempt_count < max_attempts:
    user_password = input("Enter the password: ")
    attempt_count += 1

    if user_password == correct_password:
        print(f"Login successful!, number of attempts = {attempt_count}")
        break
    else:
        print("incorrect, try again")

if attempt_count == max_attempts:
    print("you have exceeded the maximum number of attempts")






minimum_num = int(input("please enter a min num: "))
maximum_num = int(input("please enter a min num: "))
step = int(input("please enter a step: "))
for i in range(minimum_num, maximum_num, step):
    print(i)


while True:
    Triangle1 = int(input("please enter the first num: "))
    Triangle2 = int(input("please enter the second num: "))
    Triangle3 = int(input("please enter the third num: "))
    if Triangle1 + Triangle2 > Triangle3:
       print("valid Triangle")
       break
    else:
        print("invalid triangle, try again")

num1 = int(input("please enter your num1: "))
choice = input("please make your choice: ")
num2 = int(input("please enter your num2: "))

if choice == "+":
    print(num1 + num2)
elif choice == "-":
    print(num1 - num2)
elif choice == "*":
    print(num1 * num2)
elif choice == "/":
    print(num1 / num2)
 
while True:
          num1 = int(input("please enter a number: "))
          if num1 % 2 == 0:
            if num1 % 3 == 0:
                             print("Congratulations!")
                             break
            else:
                 ("not correct, try again")

year = int(input("enter a random year: "))

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("your chosen year is a leap year")
else:
    print("your year is not a leap year")


user_age = int(input("please enter your age: "))
elections = 18
if user_age >= elections:
     print("You are eligible for Elections")
else:
     print("you are underage")





            
                 
    




     
