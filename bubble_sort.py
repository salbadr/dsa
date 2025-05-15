def bubble_sort(list):

    lastIndex = len(list)-1
    sorted = False
    while not sorted:
        sorted = True
        for i in range(0, lastIndex):

            current = list[i]
            next = list[i+1]
            # if next < current then swap, else do nothing
            if next < current:
                list[i] = next
                list[i+1] = current
                sorted = False

        lastIndex -= 1
    return list


