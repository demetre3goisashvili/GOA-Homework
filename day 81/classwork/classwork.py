def to_alternating_case(string):
    result = ""
    for i in string:
        if i == i.upper():
            i = i.lower()
        elif i == i.lower():
            i = i.upper()
        result += i
    return result