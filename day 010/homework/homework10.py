#davaleba

#1)  0-იდან 20-ის ჩათვლით გამოიტანეთ რიცხვები. 
for i in range(21):
    print(i)

#2) მომხმარებელს შემოატანინეთ ორი რიცხვი და მათ შორის არსებულები გამოიტანეთ.
number1 = int(input("please enter your number1: "))
number2 = int(input("please enter your number2: "))    
for e in range(number1, number2):
    print(e)

#3) 50-იდან 100-ის ჩათვლით გამოიტანეთ რიცხვები.
for d in range(50,101):
    print(d)

#4) დაიწყეთ 100-დან და 50-ის ჩათვლით გამოიტანეთ რიცხვები. 
for a in range(100, 49, -1):
    print(a)

#5)  0-იდან 50-ის ჩათვლით გამოიტანეთ რიცხვები და ბოლოს მათი ჯამი
for u in range(51):
    print (u + u)

#6 მომხმარებელს შეეკითხეთ რომ შემოიტანოს მთელი რიცხვი. შემდეგ 0-დან ამ რიცხვამდე გამოიტანეთ ყველა მთელი რიცხვი.
num1 = int(input("please enter your integer: "))
for g in range(num1):
    print(g)

#7) მომხმარებელს შეეკითხეთ ასაკი. შექმენით ცვლადი, სადაც შენახული იქნება 10 წლის შემდეგ მომხმარებლის ასაკი. საბოლოოდ დაპრინტეთ მომხმარებლის ასაკსა და 10 წლის შემდეგ წლოვანებას შორის არსებული მთელი რიცხვები.
age = int(input("please enter your age: "))
age1 = age + 10
for l in range(10, age1):
    print(l)



