name = "Demetre"
even_collector = ''

for i in range(0, len(name)):
    if i % 2 == 0:
        even_collector = even_collector + name[i]
        
print(even_collector)

numbers = [1,2,3,4,5]
result = 0

for num in numbers:
    result += num

print(result)
