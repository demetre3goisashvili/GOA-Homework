n = int(input("შეიყვანეთ n: "))
smth = []

print("შეიყვანეთ მატრიცის ელემენტები:")

for _ in range(n):
    row = list(map(int, input().split()))
    smth.extend(row) 

smth.sort(reverse=True) 

print("დალაგებული ელემენტები:")
print(smth)