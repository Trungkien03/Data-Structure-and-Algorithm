func containsDuplicate(_ nums: [Int]) -> Bool {
        var containNums: Set<Int> = []
        for num in nums {
            if containNums.contains(num) {
                return true
            }
            containNums.insert(num)
        }
        return false
    }

var result = containsDuplicate([1,2,3,4])
print (result)
