def sum_mix(arr):
    smth = []
    for i in arr:
        smth.append(int(i))
    return sum(smth)
            
        

def min_max(lst):
    return [min(lst), max(lst) ]



def bonus_time(salary, bonus):
    if bonus == True:
        multiplied = salary * 10
        return "$" + str(multiplied)
    else:
        return "$" + str(salary)
    