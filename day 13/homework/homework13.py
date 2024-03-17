#1)
Selection = input("please enter a either Fizz or Buzz: ")
if Selection == "Fizz":
    for i in range(1,51):
      if i % 3 == 0:
        print(i)
elif Selection == "Buzz":
   for i in range(1, 51):
      if i % 5 == 0:
         print(i)

#2)
num1 = int(input("please enter a number: "))
if num1 > 0:
   print("this number is Positive")
elif num1 < 0:
   print("this number is Negative")
else:
   print("this number is 0")

#3)
for i in range(1, 101):
   if i % 2 == 0:
      print(i)

#4)
while i <= 100:
   print(i + i)
   break
#ver gavige


#5)
day = int(input("please enter a number from 1 to 7 for a week day: "))
if day == 1:
   print("Monday")
elif day == 2:
   print("Tuesday")
elif day == 3:
   print("Wednesday")
elif day == 4:
   print("Thursday")
elif day == 5:
   print("Friday")
elif day == 6:
   print("Saturday")
elif day == 7:
   print("Sunday")
else:
   print("invalid repeat")

#6)
num2 = int(input("please enter a number: "))
if num2 % 2 == 0:
   print("ეს რიცხვი არის ლუწი")
elif num2 % 2 == 1:
   print("ეს რიცხვი არის კენტი")
else:
   print("ეს რიცხვი არის 0-ის ტოლი")





   
    
    
