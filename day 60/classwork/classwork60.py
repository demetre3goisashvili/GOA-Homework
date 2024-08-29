def find_outlier(arr):
    evens = []
    odds = []
    
    for i in arr:
        if i % 2 == 0:
            evens.append(i)
        else:
            odds.append(i)
    
    if len(evens) == 1:
        return evens[0]
    else:
        return odds[0]