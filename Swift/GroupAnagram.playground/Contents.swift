/*
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    

    Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    Example 2:

    Input: strs = [""]
    Output: [[""]]
    Example 3:

    Input: strs = ["a"]
    Output: [["a"]]
    

    Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
*/


import UIKit


// In this problem, I will separate groups by the sorted string, which is the main key for my values.
func groupAnagrams(_ strs: [String]) -> [[String]] {
    // Create a dictionary to save key-value pairs.
    var map: [String: [String]] = [:]
    
    // Iterate through each string in the array.
    for str in strs {
        // Create a sorted string to ensure they are in the same format.
        let sortedStr = str.split(separator: "").sorted().joined(separator: "")
        
        // Check if the sorted string exists as a key. If not, create a new key-value pair.
        if !map.keys.contains(sortedStr) {
            map[sortedStr] = []
        }
        
        // Add the string to the value associated with the key sortedStr.
        map[sortedStr]?.append(str)
    }
    
    // Convert the dictionary values into one format and return.
    return Array(map.values)
}


func groupAnagrams1(_ strs: [String]) -> [[String]] {
        var map: [String: [String]] = [:]
        
        for str in strs {
            let sortedStr = String(str.sorted())
            map[sortedStr, default: []].append(str)
        }
        
        return Array(map.values)
    }



print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
