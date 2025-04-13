def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap arr[j] and arr[j + 1]
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

number = int(input("Enter an integer: "))
odd_count = 0

while number != 0:
    digit = number % 10
    if digit % 2 != 0:
        odd_count += 1
    number //= 10

print("Number of odd digits:", odd_count)




n = int(input("შეიყვანეთ რიცხვების რაოდენობა n: "))


numbers = []
for _ in range(n):
    number = int(input("შეიყვანეთ რიცხვი: "))
    numbers.append(number)


count = 0
result_numbers = []

for num in numbers:
    if (num < 100) and ((num % 3 == 0 and num % 6 != 0) or (num % 5 == 0 and num % 10 != 0)):
        count += 1
        result_numbers.append(num)

print("პირობას აკმაყოფილებს", count, "რიცხვი.")
print("ეს რიცხვებია:", result_numbers)