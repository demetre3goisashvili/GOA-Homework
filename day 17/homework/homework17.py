#1) შექმენით სია სადაც გექნებათ მოცემული 5 სახელი, index ების გამოყენებით დაბეჭდეთ ცალცალკე, dont use for cycle

list1 = ["Demetre", "Luka", "Davit", "Nika", "Gaiozi"]

print(list1[0])
print(list1[1])
print(list1[2])
print(list1[3])
print(list1[4])

#2) შექმენით სია სადაც გექნებათ მოცემული 5 სახელი, for ციკლის გამოყენებით კი დაბეჭდეთ თითოეული
list2 = ["Mercedes", "BMW", "Supra", "Car", "Bike"]

for i in list2:
    print(i)

#3) შექმენით სია სადაც გექნებათ 1-10 ჩათვლი რიცხვები, for ციკლის გამოყენებით დაბეჭდეთ არ რიცხვების ჯამი ცალკე და ნამრავლი ცალკე
list3 = [1,2,3,4,5,6,7,8,9,10]

for num in list3:
    print(num * num)
for num in list3:
    print(num + num)

#4) შექმენით სია სადაც გექნებათ 1-10 ჩათვლით რიცხვები, for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ ლუწი რიცხვები და მათი ჯამი
    
list4 = [1,2,3,4,5,6,7,8,9,10]

for num in list4:
    if num % 2 == 0:
        print(num + num)

#5) შექმენით სია სადაც გექნებათ 1-10 ჩათვლით რიცხვები, for ციკლის გამოყენებით დაბეჭდეთ მხოლოდ კენტი რიცხვების ჯამი და ნამრავლი
        
list5 = [1,2,3,4,5,6,7,8,9,10]

for num in list5:
    if num % 2 == 1:
        print(num + num)
        print(num * num)

#6) შექმენით სტრინგი და გამოიტანეთ for ციკლის მეშვეობით ყველა სიმბოლო
firstname = "Demetre"

for i in range(len(firstname)):
    print(firstname[i])

#7) შექმენით სტრინგი და for ციკლის გამოყენებით შეართეთ მხოლოდ ის სიმბოლოები რომლებიც არიან ლუწ ინდექსებზე
name = "Jamal"
for i in range(0, len(name), 2):
    print(name[i])
   
        


    

