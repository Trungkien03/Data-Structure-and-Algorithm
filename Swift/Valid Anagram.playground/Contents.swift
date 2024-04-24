import UIKit



func isAnagram(_ s: String, _ t:String) -> Bool {
        if(s.count != t.count){
            return false;
        }
        
        var charCountS: [Character : Int] = [:]
        
        
        // add number of char appear in string
        // here i use dictionaries to save it in a key-value pair list
        for char in s {
            charCountS[char, default: 0] += 1;
        }
        
        // compare the number of char appear in two string
        for char in t {
            if(charCountS[char] == nil || charCountS[char] == 0){
                return false
            }
            
            charCountS[char]! -= 1
        }
        
        
        return true;
    }


print(isAnagram("Kien", "Tria"))
