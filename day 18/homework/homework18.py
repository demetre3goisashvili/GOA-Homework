#1) შექმენით სია სადაც გექნებათ მოცემული 5 სახელი, index ების გამოყენებით დაბეჭდეთ ცალცალკე, dont use for cycle

list = ["Demetre", "Tazo", "BMW", "Luka", "Lizi"]

print(list[0])
print(list[1])
print(list[2])
print(list[3])
print(list[4])

#2) შექმენით სია სადაც გექნებათ მოცემული 5 სახელი, for ციკლის გამოყენებით კი დაბეჭდეთ თითოეული

list1 = ["Georgia", "Greece", "England","France", "Irland"]

for i in list1:
    print(i)

#3) შექმენით სია სადაც გექნებათ 1-10 ჩათვლი რიცხვები, for ციკლის გამოყენებით დაბეჭდეთ არ რიცხვების ჯამი ცალკე და ნამრავლი ცალკე

list2 = [1,2,3,4,5,6,7,8,9,10]
for number in list2:
    print(number + number)
    print(number * number)

#4) შექმენით სია სადაც გექნებათ 1-10 ჩათვლით რიცხვები, for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ ლუწი რიცხვები და მათი ჯამი

list3 = [1,2,3,4,5,6,7,8,9,10]
for num in list3:
    if num % 2 == 0:
        print(num + num)

#5) შექმენით სია სადაც გექნებათ 1-10 ჩათვლით რიცხვები, for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ კენტი რიცხვების ჯამი და ნამრავლი

list4 = [1,2,3,4,5,6,7,8,9,10]
for numbers in list4:
    if numbers % 2 == 1:
        print(numbers + numbers)
        print(numbers * numbers)

#6) შექმენით სტრინგი და გამოიტანეთ for ციკლის მეშვეობით ყველა სიმბოლო
list5 = "Demetre"
for str in range(len(list5)):
    print(list5[str])

#7
name = "Demetre"
even_indexes_string = ''
        #  0 1 2 3 4 5 6
for i in range(0, len(name)):
    if i % 2 == 0:
        even_indexes_string = even_indexes_string + name[i]

print(even_indexes_string)


name_1 = "Jamal"
string_collector = ''
        # 0 1 2 3 4

for string in range(0, len(name_1)):
    if string % 2 == 0:
        string_collector = string_collector + name_1[string]
        
print(string_collector)

name2 = "luka"
summary = ''

for st in range(0, len(name2)):
    if st % 2 == 0:
        summary = summary + name2[st]

print(summary)



num = 7

num = num + 3
num += 6

num = num - 3
num -= 1

num = num * 5
num *= 2

num = num / 2
num /= 2

num = num % 2
num %= 2

print(num)










     

        






    



