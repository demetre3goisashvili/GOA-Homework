# gakvetilze viyavi magram codewarsebis amowera damaviwyda.

def repeat_str(repeat, string):
    return string * repeat

def no_space(x):
    return x.replace(" ", "")

def digitize(n):

    str_number = str(n)

    reversed_str = str_number[::-1]

    reversed_digits = [int(digit) for digit in reversed_str]
    return reversed_digits

def sum_array(a):
    return sum(a)