def get_count(sentence):
    count = 0
    for i in sentence:
        if i in 'aeiouAEIOU':
            count += 1
    return count

def calc_type(a, b, res):
    if a + b == res:
        return 'addition'
    elif a - b == res:
        return 'subtraction'
    elif a * b == res:
        return 'multiplication'
    elif a / b == res:
        return 'division'
    
def is_vowel(s): 
    if len(s) == 1 and s in "aeiouAEIOU":
        return True
    else:
        return False
    
def create_phone_number(n):
    return f"({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}"