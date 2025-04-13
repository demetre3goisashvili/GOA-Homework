def pig_it(text):
    smth = text.split(" ")
    # gavsplite radgan titoeul sityvistvis mimewera ay
    result = []
    # amashi unda chamewera saboloo resultati
    
    for i in smth:
        if i.isalpha():
            # isalpha viyenebt imistvis rom gavigot aris tu ara alphavitidan 
            pig_word = i[1:] + i[0] + "ay"
            # shevkmeni cvladi sadac i-stan gamoviyene slicing, 1 indexze myopi char-is ikit rac iyo yvelaperi davaslice shemdegi-shi myop pirvel chars romelic iyo 0 indexsze mivumate ey
            result.append(pig_word)
            # resultshi aviyvanet apendis meshveobit
        else:
            result.append(i)
            # es aris im shemtxvevashi tu isalpha ikeba false
    
    return " ".join(result)
# gamovitanet resulti
    


print(pig_it("test case"))



def duplicate_encode(word):
    smth = word.lower()
    # nebismieri shetanili char unda iyos lower case
    
    result = ""
    # resulti rom gamovitano
    for i in smth:
        if smth.count(i) == 1:
            # count metodis gamoyenebit gavige ramdenjer meordeboda char da gavakete
            result += "("
        else:
            # ak nebismieri sxva shemtxveva
            result += ")"
            
    return result


# mesames piroba martla ver gavige dd
