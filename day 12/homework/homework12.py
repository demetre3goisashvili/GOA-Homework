#1)მომხმარებელს ჯერ შემოატანინეთ ბიუჯეტი, შემდეგ კი ის თანხა, რომელიც სასურველი ნივთის საყიდლად სჭირდება. დაბეჭდეთ შეუძლია ყიდვა თუ არა.
user_budget = int(input("please enter your budget: "))
tablet = int(input("please enter the price: "))
if user_budget >= tablet:
    print("Purchase Complete")
else:
    print("Budget not enough")

#2)შექმენით ცვლადი, სადაც შეინახავთ თქვენთვის სასურველ პაროლს. მომხმარებელს შეეკითხეთ პაროლი და სანამ სწორს არ შემოიტანს თავიდან შეეკითხეთ, თან დაუმატეთ თუ მერამდენე ცდაზეა (გამოიყენეთ while ციკლი). თუ მან მეხუთე ცდაზეც ვერ შეიყვანა სწორად, დაუპრინტეთ, რომ სისტემა დაბლოკილია.
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





#3)მომხმარებელს შეეკითხეთ for ციკლისთვის მინიმალური, მაქსიმალური მნიშვნელობები და step-ის რიცხვი. ამ მნიშვნელობებით მოახდინეთ ციკლის მუშაობა და დაპრინტეთ თითოეული რიცხვი.
minimum_num = int(input("please enter a min num: "))
maximum_num = int(input("please enter a max num: "))
step = int(input("please enter a step: "))
for i in range(minimum_num, maximum_num, step):
    print(i)

#4)მომხმარებელს შემოატანინეთ სამკუთხედის სამი გვერდი და შეამოწმეთ თუ არსებობს ის. არსებობის შემთხვევაში დაპრინტეთ, რომ მონაცემები სწორია, სხვა შემთხვევაში შემოატანინეთ გვერდების მნიშვნელობები თავიდან ( გამოიყენეთ while ციკლი ).
while True:
    Triangle1 = int(input("please enter the first num: "))
    Triangle2 = int(input("please enter the second num: "))
    Triangle3 = int(input("please enter the third num: "))
    if Triangle1 + Triangle2 > Triangle3:
       print("valid Triangle")
       break
    else:
        print("invalid triangle, try again")

#5)შექმენით კალკულატორი, სადაც მომხმარებელი აირჩევს შემდეგ ოპერაციებს: + - * / და მის მიერ შემოტანილი ორი რიცხვით მიიღებს პასუხს.

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


#6)მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ თუ არის როგორც ორის, ასევე სამის ჯერადი. არსებობის შემთხვევაში დაპრინტეთ ეს რიცხვი, ხოლო თუ არ იქნება მაშინ თავიდან შეეკითხეთ (გამოიყენეთ while ციკლი).

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

#7)მომხმარებელს შემოატანინეთ ასაკი და დაუპრინტეთ შეუძლია თუ არა არჩევნებში მონაწილეობის მიღება. (edited)

user_age = int(input("please enter your age: "))
elections = 18
if user_age >= elections:
     print("You are eligible for Elections")
else:
     print("you are underage")






            
                 
    




     
