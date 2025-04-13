name = input("please enter your name: ")
last_name = input("please enter your last name: ")

for i in range(0, len(name)):
    print(name[i])

for i in range(0, len(last_name)):
    print(last_name[i])


firstname = "Giorgi"

for i in range(0, len(firstname), 2):
    print(firstname[i])


list = ["melon", "apple", "banana"]

if "melon" in list:
    print("melon is in the cart")
else:
    print("no melon is not in the list")


num_list = [1,2,3,4,5,6,7,8,9,10]

if 5 in num_list:
    print("yes 5 is in numbers list")
else:
    print("no 5 is not in numbers list")


names = ["demetre", "luka", "dato"]

for name in names:
    print(name)


numbers = [1,2,3,4,5]
result = 0

for num in numbers:
    result = result + num

    print(result)

list = [1,2,3,4,5,6,7,8,9,10]
result = 0
for num in list:
    if num % 2 == 0:
       result = result + num
       print(result)
        


        

