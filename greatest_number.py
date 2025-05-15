def inefficientGreatestNumber(array):
    for i in array:
        isITheGreatest = True
        for j in array:
            if j>i:
                isITheGreatest = False

        if isITheGreatest:
            return i

def efficientGreatestNumber(array):
    greatest = array[0]
    for i in array:      
        if i>greatest:
                greatest = i


    return greatest
