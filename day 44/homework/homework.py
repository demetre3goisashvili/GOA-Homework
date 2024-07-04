print("Hello World!")
#we display the code using print

smth = input("input smth:")
print(smth)

# with input we can change what we want to print

""" multi line
comment
very
cool"""

for i in range(90):
    print(i)
#indentation is the space between the beginning of the code line

ragaca = 15

while ragaca < 20:
    print("Hello")
    break
#with break we can break the code without it Hello would be printed unlimitedly

#print(Gamarjoba gamarjoba)

#this is an error we have to use parentheses to write a string to disable it we just but # in front of it to re-enable we just remove the #

a = 15
b = "string"
c = 5.03
d = 10 < 9

temporary = a
a = b
b = temporary

print(b)
print(a)

asdhja = input("input variable")
print(asdhja)


x = "Greetings gentlemen"

def greet():
    x = "Hello world"
    print(x)

greet()

print(x)

demonstration = "Explaining"
#variable must not start with numbers it should start with underscore or letters also they are case sensitive

j = 15
k = "string"
x = 5.03
n = 10 < 9

print(j + 5)
print(j - 10)
print(j * 10)
print(j / 5)

print(n)
print(j > 16)
print(j < 16)
print(j + x)


print(type(x))
#using type() we can tell what data type is stored in a variable or whatever we type in it

print(j > x)

print(5 + 3)


import random

print(random.randint(0,9))

import math
print(math.sqrt(25))

print(math.ceil(14.4))
#we use this to round a float upwards
print(math.floor(12.3))
#we use this to round a float downwards

def gcd(x, y):
    while y != 0:
        (x, y) = (y, x % y)
    return x
print(gcd(16, 24))

print(str(15))
print(float(15))

y = int("7")
g = float("4")

print(type(y))
print(type(g))

something1 = (1,2,3,4,5,6,7,8,9,10)
list_smth = [1,"abc", 0.04, True]
#lists and tuples are similar. but the difference is that tuples can only hold one data type but lists can hold multiple indexing can be used on both of them
print(something1[1])


print(19 > 20)
print(5 > 7 or 3 < 20)
print(100 > 99.9 and 5 > 6)

def boolean_return():
    x = 56 > 900
    return x
print(boolean_return())

if 14 > 10:
    print("skibidi")
else:
    print("ohio")

num1 = 77
num2 = 76
print(num1 > num2)
num1 += num2
num2 -= num1

print(num1)
print(num2)

#we use logical operations to compare integers, floats to eachother we can also use it on strings, its very helpfull in app developing.

tuples = (1,2,3,4,5,6,7,8,9,10)
if 11 not in tuples:
    print("The number you are searching for is not here")
else:
    print("Succesfully found your number")
list1 = ["iphone", 122, 0.234246, "ananas"]
if "iphone" in list1:
    print("oi oi oi")
else:
    print("baka")

jjok = [1, "oi" , 6.68, True , "sus"]
print(jjok)

jjok.append("baka")
print(jjok)
jjok.pop(1)
print(jjok)

oioioi = [8,23,5,6,29,6,14]

oioioi.sort()
print(oioioi)

sadksd = [1,2,3,4,5,6,7,8,9,10]
lidk = []

for i in sadksd:
    if i % 2 == 0:
        lidk.append(i)
        print(lidk)

popd = ["smrth", 13123, 0.12313, "oiopi"]
sdfsf = len(popd)
print(sdfsf)


apple = 15

if apple == 15:
    print("apple is very tasty")

car = "BMW"
if car == "Mercedes":
    print("Your car is GOATED")
else:
    print("Ur car is trash")

user_input = input("Please enter your Username or Email")
if user_input == "Jemali123":
    print("Succesful log in")
elif user_input == "GOAbest123":
    print("Succesfull log in")
else:
    print("incorrect try again")

ragacaaa = False
state = "ra ragaca?" if ragacaaa else "gadi ikit"
print(state)

email = "demetregois@gmail.com"
password = "ilovegoa"

email1 = input("please enter your email:")
password1 = input("please enter your password:")

while True:
    if email1 == email and password1 == password:
        print("succesfull log in")
        break
    else:
        print("incorrect try again")
        break

# while True:
#     if 15 < 16:
#         print("Your right")
#         continue    
#     else:
#         print("You are wrong")
# ver gavige

while 15 < 30:
    print("unlimited loop")
    break
    # this is an unlimited loop so to stop it we use break

klkl = [1,2,3,4,5,6,7,8,9,10]

while len(klkl) == 10:
    print("klkl is the goat")
    break
else:
    print("noo")

for i in range(1,100):
    print(i)

jfjg = ["BMW", "Mercedes", "Prada"]
for i in jfjg:
    if "Mercedes" in i:
        print("Goated")

# for loop is a type of loop where we know how many times it will get iterated

for i in range(400):
    print("i")
    for u in range(200):
        print(u)


for i in range(100):
    if i == 77:
        print("the number you have chosen is one of the 100")
    else:
        print("the number you have chosen is not one of the 100")


def greet():
    x = "Hello world"
    print(x)

greet()


def greet(name):
    x = f"Hello {name}"
    print(x)

greet("Demetre")

def math(act, act1):
    x = act + act1
    return x
print(math(15, 30))

#we use parameters to alter the outcome of our code

def child_age(child1, child2, child3):
    oldest = f"the oldest child is {child2}"
    middle = f"the middle child is {child1}"
    youngest = f"the youngest child is {child3}"
    return oldest ,middle, youngest
print(child_age(child1 = 15, child2 = 18, child3 = 12))


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

variable = "value"

	# x = 5	x = 5	
	# x += 3	x = x + 3	
	# x -= 3	x = x - 3	
	# x *= 3	x = x * 3	
	# x /= 3	x = x / 3  
	# x //= 3	x = x // 3	
	# x **= 3	x = x ** 3	
    # x %= 3	x = x % 3	


x = 100

x += 20
x -= 80
x /= 20
x *= 200
x //= 5
x **= 30
x %= 10


i = 20
i <= 15
i >= 12
i < 21
i > 15
i == 20


skib = 15 > 10 and 10 == 3
dop = 15 < 10 or 3 == 3
#not ar dawera error dawera

popopo = 15
lalala = 13

klkas = popopo is not lalala

print(klkas) 

krkrk = popopo is lalala
print(krkrk)


# userx_input = input("number pls")
# for i in range(100):
#     if userx_input in i:
#         print("its in here bruv")
#     else:
#         print("nope")

# o = "value1"
# m = "value2"

# o , m = m , o

# print("o swapped is: ".format(m))
# print("m swapped is: ".format(o))
    


list4 = [3,1,16,4,8,6,7,19,9,10]
print(list4)

print(list4[2])
print(list4[-2])

list4.append("baka")
list4.insert(1, "sussy")
list4.pop(4)
list4[1] = "skibidi"

test_list1 = [1,2,3,4,5]
test_list2 = [6,7,8,9,10]

test_list1 += test_list2

print(test_list1)


popik = len(list4)
print(popik)

# for i in list4:
#     if str("4") in i:
#         print("valid")
#     else:
#         print("nononon")

# list4.sort()
list4.sort(reverse=True)

asdasdasda = [1,2,3,4,5,6,7,8,9,10]
kr = []
L = asdasdasda[::3]
kr.append(L)

max_value = max(list4)
min_value = min(list4)

print(max_value , min_value)

i = 1
while i <= 10:
    i += 1
    print(i)

   
n = int(input("Enter any number: "))

f = 1
while n >= 1:
    f *= n
    n -= 1

print("Factorial is", f)

c = 1
while c <= 100:
    c += 1
    if c % 5 == 0:


#amas avtvirtav for loopebi damrcha da punkciebi

        











    

        
        
        


    








 






