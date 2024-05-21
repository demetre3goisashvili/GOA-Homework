#1
def rev_cap(name):
    skibidi = name[::-1]
    print(skibidi.upper())

rev_cap(
"toilet")
#2
def checker(name1, name2, name3):
    smth = [name1, name2, name3]
    odd = []
    even = []
    for i in smth:
        if len(i) % 2 == 0:
            even.append(i)
        else:
            odd.append(i)
    print(odd)
    print(even)

checker("tvaleti", "ohio", "Gyaaatt")

#3
def checker(name1, name2, name3):
    smth = [name1, name2, name3]
    odd = []
    even = []
    for i in smth:
        if len(i) % 2 == 0:
            even.append(i)
        else:
            odd.append(i)
    print(odd)
    print(even)

checker("tvaleti", "ohio", "Gyaaatt")
    


#4
def process_strings(strings):
    even_list = []
    odd_list = []

    for i in strings:
        if len(i) % 2 == 0:
            even_list.append(i.upper())
        else:
            odd_list.append(i.capitalize())

    return even_list, odd_list


strings = ["vano", "nika", "bubazi", "zauri", "jamal"]
even_result, odd_result = process_strings(strings)
print(even_result)
print(odd_result)

#5
def gamdidebeli(stringss):
    index = stringss.find("D")
    if index % 2 == 0:
        return stringss.upper()
    else:
        return stringss.capitalize()
name = "demetre goisashvili"

result = gamdidebeli(name)
print(result)



       






    


   
    


    
