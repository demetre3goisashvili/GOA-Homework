def manual_index(num_list, num_search):
    if num_search not in num_list:
        return -1
    #ak davwere es im shemtxvevashi tu sadziebeli mnishvnelovba ar ikneba siashi
    for i in range(0 , len(num_list)):
        if num_search == num_list[i]:
            return i
        
manual_index("jemali", "jemali")


