def solution(s):
    #shevqmnat carieli listi rata momavalshi shevinaxot wyvilebi masshi
    splitlist = []

    for i in range(0, len(s), 2):
        # vighebt 2 simbolos da vyqmnit wyvilebs
        pair = s[i:i+2]
        splitlist.append(pair)

    return splitlist