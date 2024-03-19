def binary_search(needle, haystack):
    low = 0
    high = len(haystack) - 1

    while low <= high:
        mid =  (high - low // 2)
        if needle < haystack[mid]:
            high = mid - 1
        elif needle > haystack[mid]:
            low = mid + 1
        else:
            print(haystack[mid])
            return True
    return False      
    
    
binary_search(89,[0,1,2,3,4,7,89,330])