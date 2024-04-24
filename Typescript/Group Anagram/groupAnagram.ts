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

function groupAnagrams(strs: string[]): string[][] {
  // create map to save the list
  const map: Map<string, string[]> = new Map();

  // for loop the string list
  for (const str of strs) {
    // sort the string into 1 format
    const sortedStr = str.split("").sort().join("");

    // then compare it to other str
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // push the str into the map
    map.get(sortedStr)!.push(str);
  }

  return Array.from(map.values());
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
