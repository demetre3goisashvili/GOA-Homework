def print_name():
    for i in range(4):
        print("jamal")

print_name()
   
#def-ის მეშვეობით print_name() მივეცით ამის მნიშვნელობა, თუ გვინდა რომ ჩვენ შევძლოთ შეცვლა ფუნქციაში თუ რამდენი range გვინდა და რა უნდა დაბეწდოს print_name-თან (ამაში) უნდა ჩავწეროთ პარამეტრი

def print_name(name):
    for i in range(4):
        print(name)

print_name("Giorgi")
print_name("Saba")

#ამით ჩვენ ვცლით თუ რას გამოიტანს რამდენჯერ ფუნქცია ხოლო ამით

def print_name(name, amount):
    for i in range(amount):
        print(name)

print_name("Giorgi", 15)
print_name("Saba", 4)

#ამით ჩვენ შევცვალეთ range მოკლედ პარამეტრებით ხელახლა გამოყენებადი ხდება ფუნქცია

#დავალება: შექმენიტ ფუნქცია, რომელსაც გადაეცემა ორი რიცხვი: start, end. ფუნქციამ უნდა დაბეჭდოს მათ შორის არსებული რიცხვები range-ის გამოყენებით
def start_end(start, end):
    for i in range(start, end):
        print(i)

start_end(15, 30)
start_end(20, 100)

#დავალება2: შექმენით ფუნქცია, რომელსაც გადაეცემა start, end. ამ შემთხვევაში გამოთვალეთ მათ შორის არსებული რიცხვების ჯამი
def start_end(start, end):
    makafaka = 0
    for i in range(start, end):
        makafaka += i
    print(makafaka)

start_end(13, 20)

#gavaketet

#დავალება3: შექმენით ფუნქცია, რომელსაც გადაეცემა start, end. ამ ორ რიცხვს შორის არსებული, ყველა დაამატეთ ახალ სიაში. საბოლოოდ დაბეჭდეთ სიის საშუალო არითმეტიკული

def start_end(start, end):
    list = []
    for i in range(start, end):
        list.append(i)
        result = sum(list) / len(list)
        
    print(result)

start_end(15, 20)

#დავალება4: შექმენით ფუნქცია, რომელსაც გადაეცემა სახელი და ინდექსი. თქვენი დავალებაა, რომ სახელის ინდექსზე მყოფი ასო დაბეჭდოთ

# def print_char(name, index):
#     print(name, index)

# print_char("Luka", 3)

# def name_variable(name):
#     name = "Jamal"
#     return(name)

# name_variable()

def sum_num(num1 , num2):
    return num1 + num2


print(sum_num(13, 20))
    




