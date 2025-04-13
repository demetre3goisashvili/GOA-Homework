def manual_index(numbers_list, search_value):
    smth = 0
    for i in numbers_list:
        if i == search_value:
            return smth
        smth += 1
    return -1
    
print(manual_index([1,2,3,4,5,6,7,8,9,10] , 9))

def manual_min(skibidi):
    minvalue = skibidi[0]
    for num in skibidi:
        if minvalue > num:
            minvalue = num
        return minvalue

    
print(manual_min([1,2,3,4,5,6,7,8,9]))

def manual_max(lst):
    maxvalue = lst[0]
    for num in lst:
        if num < maxvalue:
            maxvalue = num
    return maxvalue
    

print(manual_max([1,2,3,4,5,6,7,8,9,10]))

#danarcheni cota ver gavige











    

        
        
        