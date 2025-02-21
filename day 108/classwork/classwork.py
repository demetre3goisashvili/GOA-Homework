def get_size(w,h,d):
    array = []
    volume = w * h * d
    first = d * w
    second = h * d
    third = h * w
    area = 2 * (first + second + third)
    array.append(area)
    array.append(volume)
    return array

def get_size(w,h,d):
    return [2 * (d * w + h * d + h * w), w * h * d]

