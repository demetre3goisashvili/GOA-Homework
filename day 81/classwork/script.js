function smaller(nums) {
    let result = []
    
    for (let i = 0; i < nums.length; i++){
      let count = 0
      for (let j = i + 1; j < nums.length; j++){
        if (nums[i] > nums[j]){
          count += 1
    
        }
    
      }
       result.push(count)
    }
      return result
    }