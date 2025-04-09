def short_long_short(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a + b
    
def sequence_sum(begin_number, end_number, step):
    count = 0
    for i in range(begin_number, end_number + 1, step):
        count += i
    return count