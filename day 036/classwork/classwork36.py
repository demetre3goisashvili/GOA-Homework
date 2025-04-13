def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

def max_multiple(divisor, bound):
    n = bound%divisor
    return bound-n


