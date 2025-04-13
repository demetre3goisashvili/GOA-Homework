def smaller(arr):
    result = []
    count = 0
    for i in range(len(arr)):
        # for ciklis meshveobit vkmnit diapazons da paralerulad vigebt am diapazonshi ramdeni elementia len-is meshveobit
        for j in range(i + 1, len(arr)):
            # chven shegvidzlia rom for cikli sxva for cikshi ulimitod chavsvat, ramdenjerac gameordeba pirveli for cikli, imdenjer gameordeba meore da aseshemdeg shemdeg akac diapazons vkmnit amjerad viyenebt i + 1-dan romelic pirvel gameorebisas aris 1 len(arr)-mde
            if arr[i] > arr[j]:
                # eseigi tu arr[i] meti ikneba arr[j] count += 1 
                count += 1
        result.append(count)
        # result cvladshi rac sheva yvelaperi append punkciis gamoyenebit daemateba count-s
        count = 0
        # count cvlads vucvlit mnishvnelobas da xdeba 0
    return result
# vabrunebt results

print(smaller([5,4,3,2,1]))