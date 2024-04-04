#dalagebuli kolekcia - დალაგებულია კოლექცია როდესაც თითოეულ მნიშვნელობას გააჩნია თავისი მისამართი(index) რომლის ათვლაც იწყება 0-დან
#for ციკლის გამოყენებით ჩვენ შეგვიძლია გადავუაროთ მხოლოდ და მხოლოდ იმ მონაცემთა ტიპებს რომლებიც არიან დალაგებული კოლექციები 

list = [1,2,3,4,5,6,7,8,9,10]

for num in list:
    if num % 2 == 0:
        print(num)
 
list1 = [1,2,3,4,5,6,7,8,9,10]

for number in list1:
    odd_sum = 0
    odd_multiple = 1
    if number % 2 == 0:
        odd_sum = odd_sum + number
        odd_multiple = odd_multiple * number
        print("this is the sum of list", odd_sum)
        print("this is the multiplying of list", odd_multiple)


