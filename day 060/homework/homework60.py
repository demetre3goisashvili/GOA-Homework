def solution(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
    
    num = 0
    
    for i in range(len(arr1)):
        num += (arr1[i] - arr2[i]) ** 2
        
    return num / len(arr1)


# es gavakete

