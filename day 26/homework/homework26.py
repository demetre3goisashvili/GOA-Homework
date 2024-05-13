#შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. თქვენი დავალებაა, რომ ამ სიის ლუწ ინდექსებზე მყოფი რიცხვების ჯამი დააბრუნოთ. აუცილებლად გამოიყენეთ return ამ და ასევე შემდეგ დავალებებში.

def even_check(num):
    sum = 0
    for i in range(num):
        if i % 2 == 0:
            sum += i
    return sum
    
print(even_check(21))

#შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვი. თქვენი დავალებაა, რომ დააბრუნოთ ლუწია თუ კენტი ის

def even_odd(num):
    if num % 2 == 0:
        print("This number is even")
    elif num != 0:
            print("This number is odd")
    return(num)

even_odd(19)

#შექმენით ფუნქცია, რომელიც დააბრუნებს მარტივია თუ არა რიცხვი (მარტივია რიცხვი, თუ მას მარტო ორი გამყოფი აქვს).

def easy_hard(number):
     if number % number == 1 and number % 1 == number:
          print("This number is easy")
     else:
          print("This number is hard")
          return(number)

easy_hard(100)

#es ver gavige :(

#შექმენით ფუნქცია, რომელსაც გადაეცემა სახელების სია. თქვენი დავალებაა, რომ დააბრუნოთ ამ სიის განახლებული ვერსია, სადაც ყველა სახელი დიდი ასოთი დაიწყება.

def caps_write(lstofnames):
    capslock = [name.capitalize() for name in lstofnames]
    return capslock
print(caps_write(['lebron', 'random', 'goaisbest']))

#შექმენით ფუნქცია, რომელსაც გადაეცემა მთელი რიცხვების სია. შემდეგ გამოიყენეთ ციკლი, რათა განიხილოთ ამ სიის ყველა რიცხვი - თუ რიცხვი ლუწია, ახალ სიაში დაამატეთ მისი განაყოფი ორზე, ხოლო თუ კენტია, მაშინ რიცხვის ნამრავლი ორზე. საბოლოოდ დააბრუნეთ განახლებული სია


def evenOr_odd(numbers):
    for nums in numbers:
        if nums % 2 == 0:
            print(nums / 2)
        else:
            print(nums * 2)
print(evenOr_odd([1,2,3,4,5,6,7]))        


     

        
          
    



            
