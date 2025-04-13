name = "ana"
reversed_name = ""


for i in range(len(name) -1, -1, -1):
    reversed_name += name[i]

    if name == reversed_name:
        print("Succesfull Palindrome")
    else:
        print("No Palindrome")



    