def speedify(st):
    result = []
    max_index = 0
    
    for i, char in enumerate(st):
        new_index = i + (ord(char) - ord('A'))
        max_index = max(max_index, new_index)
        
        if new_index >= len(result):
            result.extend([' '] * (new_index - len(result) + 1))
        
        result[new_index] = char
    
    return ''.join(result)