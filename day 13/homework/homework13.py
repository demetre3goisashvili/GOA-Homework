#1)დაწერეთ პროგრამა, რომელიც დაბეჭდავს ყველა რიცხვს 1-დან 50-მდე. სამის ჯერადებისთვის დაბეჭდეთ "Fizz" რიცხვის ნაცვლად, ხოლო ხუთეულის ჯერადებისთვის დაბეჭდეთ "Buzz". რიცხვებისთვის, რომლებიც სამისა და ხუთის ჯერადები არიან, დაბეჭდეთ "FizzBuzz"
Selection = input("please enter a either Fizz or Buzz: ")
if Selection == "Fizz":
    for i in range(1,51):
      if i % 3 == 0:
        print(i)
elif Selection == "Buzz":
   for i in range(1, 51):
      if i % 5 == 0:
         print(i)
elif Selection == "FizzBuzz":
   for i in range(1, 51):
      if i % 5 and i % 3 == 0:
         print(i)

#2)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს რიცხვს და ბეჭდავს არის თუ არა ეს რიცხვი დადებითი, უარყოფითი ან ნულოვანი.
num1 = int(input("please enter a number: "))
if num1 > 0:
   print("this number is Positive")
elif num1 < 0:
   print("this number is Negative")
else:
   print("this number is 0")

#3) დაწერეთ პროგრამა, რომელიც ბეჭდავს ყველა ლუწი რიცხვს 1-დან 100-მდე for loop-ის გამოყენებით.
for i in range(1, 101):
   if i % 2 == 0:
      print(i)

#4) დაწერეთ პროგრამა, რომელიც დაბეჭდავს ყველა რიცხვის ჯამს 1-დან 100-მდე while მარყუჟის გამოყენებით.
while i <= 100:
   print(i + i)
   break
#ver gavige


#5)დაწერეთ პროგრამა, რომელიც ბეჭდავს კვირის დღეს მომხმარებლის მიერ შეყვანილი რიცხვის საფუძველზე (1 ორშაბათისთვის, 2 სამშაბათისთვის და ა.შ.) if, elif და სხვა გამოყენებით. USE IF-ELIF-ELSE
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

#6)დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს რიცხვს და ბეჭდავს არის თუ არა ის ლუწი, კენტი თუ ნულის, Gამოყენებით if, elif და სხვა.
num2 = int(input("please enter a number: "))
if num2 % 2 == 0:
   print("ეს რიცხვი არის ლუწი")
elif num2 % 2 == 1:
   print("ეს რიცხვი არის კენტი")
else:
   print("ეს რიცხვი არის 0-ის ტოლი")





   
    
    
