def multiply(a, b):
   return a * b

def even_or_odd(number):
    if number % 2 == 0:
        return("Even")
    else:
        return("Odd")
    
def number_to_string(num):
    # Return a string of the number here!
    return(str(num))

def solution(string):
    return(string[::-1])

def positive_sum(arr):
    # Your code here
    return sum(num for num in arr if num > 0)

#2) შექმენით 3 ფუნქცია თქვენი ფანტაზიით, გამოიყენეთ პარამეტრები და return keyword. (ძალიან მარტივები არ გინდათ, რაც უფრო რთულს გააკეთებთ თქვენი დონისთვის მით უფრო კარგი იქნება)

def greet(username):
    print("Hello", username)

name = input("Please enter your name: ")
greet(name)

def goodbye(name):
    print("Goodbye", name)

smth = input("Please enter your name: ")
goodbye(name)

def list_input(list1):
    return max(list1) - min(list1)
print(list_input([1,2,3,4,5,6,7,8]))


c = ['$', '£', '€', '¥']
print(c[0:-2])



    

    


