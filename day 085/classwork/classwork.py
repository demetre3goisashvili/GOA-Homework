arr = []
result = []
question = input("how many nums: ")
for i in range(int(result)):
    nums = input("enter nums: ")
    arr.append(nums)

for j in arr:
    result.append(j * 2)
    print(result)


result1 = []
question1 = input("how many numbers do you want to input: ")
for i in range(int(question)):
    nums = input("input numbers:  ")
    result.append(nums)
for j in range(1,len(result), 2):
    print(result)