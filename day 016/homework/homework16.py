#1)შექმენით სია, სადაც შეიტანთ თქვენი ოჯახის წევრების სახელებს. გამოიყენეთ indexing და დაბეჭდეთ ყველას სახელი ცალ-ცალკe

list = ["Demetre", "Tika", "Onise", "Pepa Dzagli", "Vaska Dzagli"]

print(list[0])
print(list[1])
print(list[2])
print(list[3])
print(list[4])

#2)შექმენით სია, სადაც გექნებათ 1-იდან 10-ის ჩათვლით რიცხვები. ჯერ გამოიტანეთ სიის პირველი, ხოლო შემდეგ ბოლო ელემენტი.

num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(num_list[0])
print(num_list[9])

#3)შექმენით სია, სადაც გექნებათ 10-იდან 20-ის ჩათვლით რიცხვები. გაიხსენეთ ის ფაქტი, რომ თქვენ შეგიძლიათ უკვე შექმნილი სიის ელემენტების შეცვლა - შეცვალეთ სიის ლუწ ინდექსებზე მყოფი ელემენტები და მათ მაგივრად დაწერეთ 1.

numList = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numList[0] = 1
numList[2] = 1
numList[4] = 1
numList[6] = 1
numList[8] = 1
numList[10] = 1

print(numList)

#4)მომხმარებელს შეეკითხეთ სახელი, გვარი, ასაკი, საცხოვრებელი ადგილი და მეილი. ყველა შეინახეთ ცვლადებში და შემდეგ ჩაამატეთ სიაში, საბოლოოდ კი დაბეჭდეთ ეს სია.

name = input("please enter your name: ")
surname = input("please enter your surname: ")
age = int(input("please enter your age: "))
email = input("please enter your email: ")
address = input("please enter your address: ")

list1 = [name, surname, age, email, address]

print(list1)

last_name = "Goisashvili"

print(last_name[0])
print(last_name[1])
print(last_name[2])
print(last_name[3])
print(last_name[4])
print(last_name[5])
print(last_name[6])
print(last_name[7])
print(last_name[8])
print(last_name[9])
print(last_name[10])



