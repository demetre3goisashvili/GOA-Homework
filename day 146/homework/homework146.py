def calculator(x, y, op):
    if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
        return 'unknown value'
    
    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        if y == 0:
            return 'unknown value'
        return x / y
    else:
        return 'unknown value'
    
def replace_exclamation(st):
    result = ''
    for i in st:
        if i in 'aeiouAEIOU':
            result += '!'
        else:
            result += i
    return result

def kata_13_december(lst):
    for i in lst[:]:
        if i % 2 == 0:
            lst.remove(i)
    return lst

def add_length(str_):
    spl = str_.split(' ')
    res = []
    for i in spl:
        res.append(f'{i} {len(i)}')
    return res

def get_size(w,h,d):
    array = []
    volume = w * h * d
    first = d * w
    second = h * d
    third = h * w
    area = 2 * (first + second + third)
    array.append(area)
    array.append(volume)
    return array

# 7 kyu

def most_frequent_item_count(collection):
    frequencies = []
    for i in collection:
        count = 0
        for j in collection:
            if i == j:
                count += 1
        frequencies.append(count)
    if frequencies:
        return max(frequencies)
    else:
        return 0
    
def sum_args(*args):
    return sum(args)

def sum_digits(number):
    total = 0
    if number < 0:
        number = -number
    for digit in str(number):
        total += int(digit)
    return total
