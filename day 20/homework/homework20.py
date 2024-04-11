#1. მომხმარებელს შემოატანინეთ სიტყვა და შეამოწმეთ არის თუ არა ის პალინდრომი. პალინდრომი არის სიტყვა, რომელიც შებრუნებულიც ზუსტად იგივე გამოდის - radar, level, rotor. ამ დავალებისთვის გამოიყენეთ ციკლი და indexing.


inp = input("enter string: ")
if (str(inp))[::-1] == str(inp):
    print(True)
else:
    print(False)

#2. მომხმარებელს შემოატანინეთ ხუთი რიცხვი და შეიტანეთ ისინი სიაში. შემდეგ თქვენ უნდა იმუშაოთ ამ სიაზე: თუ რომელიმე ელემენტი სიაში ორჯერ მეორდება, დაამატეთ ის ახალ სიაში. საბოლოოდ გექნებათ ორი ვარიანტი: ცარიელი ახალი სია / ახალი სია სადაც იქნება მინიმუმ ერთი ელემენტი. თუ სია ცარიელი იქნება, დაბეჭდეთ რომ სია ცარიელია. სხვა შემთხვევაში დაბეჭდეთ ახალი სია.
#test case: [1, 1, 2, 2, 3] -> [1, 2]
#test case: [1, 2, 3, 4, 5] -> "List is empty"

user_input1 = int(input("please enter number: "))
user_input2 = int(input("please enter number: "))
user_input3 = int(input("please enter number: "))
user_input4 = int(input("please enter number: "))
user_input5 = int(input("please enter number: "))


list = [user_input1, user_input2, user_input3, user_input4, user_input5]
b = [1,2,3,4,5]
list1 = []

for num in range(len(list)):
    if list[num] == b[num]:
        list1.append(num)
print(list1)



#3. მომხმარებელს შემოატანინეთ ხუთი სიტყვა. თქვენი დავალებაა, რომ ააწყოთ ახალი სიტყვა - თითოეულის პირველი ასო დაამატოთ მას. საბოლოოდ კი დაბეჭდოთ ეს სიტყვა.
##test case: ["Join", "Goa", "and", "become", "chad"] -> "JGabc"

input1 = input("please enter a word u silly goose: ")
input2 = input("please enter a word u silly goose: ")
input3 = input("please enter a word u silly goose: ")
input4 = input("please enter a word u silly goose: ")
input5 = input("please enter a word u silly goose: ")
list5 = [input1, input2, input3, input4, input5]
list6 = [input1[0] + input2[0] + input3[0] + input4[0] + input5[0]]

print(list5)
print(list6)

#4. პირველ სიაში დაამატეთ 10-იდან 20-ის ჩათვლით არსებული ყველა მთელი რიცხვი. მეორე სიაში კი 30-იდან 50-ის ჩათვლით ყველა 5-ის ჯერადი. საბოლოოდ შეაერთეთ ეს ორი სია და დაბეჭდეთ ამ სახით.
list_1 = []
list_2 = []

for int in range(10, 21):
    list_1.append(int)
print(list_1)

for int1 in range(30, 51):
    if int1 % 5 == 0:
        list_2.append(int1)
print(list_2)




















        





















    
        

