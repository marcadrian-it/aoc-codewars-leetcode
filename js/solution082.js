// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
function majorityElement(arr){
    const map = {}
    for(let i=0;i<arr.length;i++){
      if(map[arr[i]]){
        map[arr[i]]+=1
      }else{
        map[arr[i]]=1
      }
    }
      const entries = Object.entries(map)
      for (const [key, value] of entries){
      if (value > (arr.length/2))  
      return key
      }  
    }
    
    console.log(majorityElement([3,2,3]))
    console.log(majorityElement([2,2,1,1,1,2,2]))
    
    