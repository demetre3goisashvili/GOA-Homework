# string = "Jemali"

# print(string[3:6])

# list = ["Mercedes", 10, 4.10, True, False, "Cars", "Spiderman"]

# print(list[0:4])

# list1 = ["Demetre", "Luka", "Saba", "Sandro", "Lizi", "Elene", "Giorgi", "Mariami"]

# print(list1[0:8:2])

# #შექმენით სთრინგი და ჩამოაჭერით სამი სიმბოლო slicing-ის გამოყენებით

# name = "Hamleti"
# print(name[0:3])

# numbers = []

# start = 0
# end = 5 + 1
# step = 1

# while start < end:
#     numbers.append(start)
#     start = start + step

# print(numbers)


strings1 = ["Hello", "Goodbye", "Cars", "Bikes", "GOA"]

sliced_list = []

start = 4
end = 0
step = -1

while start > end:
     sliced_list.append(strings1[4:0:1])
     start = start + step

print(sliced_list)

