/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

*/

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charCountT: Record<string, number> = {};
  //   create list of charT to count the number of char in string t

  for (const char of s) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }
  // count the number of char in string s

  for (const char of t) {
    if (!charCountT[char]) {
      return false;
    }
    charCountT[char]--;
  }
  // compare char of t with char of s, with the list count char of string t

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
