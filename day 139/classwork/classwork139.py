def count_zeros(x):
    count = 0
    for i in range(1, x + 1):
        count += str(i).count('0')
    return count

def is_letter(s):
    if type(s) != str:
        return False
    if len(s) == 1 and s.isalpha() and s.isascii():
        return True
    return False

def count_red_beads(n):
    if n < 2:
        return 0
    return 2 *(n-1)