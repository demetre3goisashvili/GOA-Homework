function likes(names) {
    if (names.length === 0){
      return 'no one likes this'
    }
    if (names.length === 1){
      return `${names[0]} likes this`
    }
    if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }
    if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    
  }
  
  
//   def find_short(s):
//   words = s.split()
//   length = []
//   for i in words:
//       length.append(len(i))
//   shortest = min(length)
//   return shortest


function findLongest(array){
    max = 0
    result = null
    for (let i = 0; i< array.length; i++){
      length = String(array[i]).length
      
      if (length > max){
        max = length
        result = array[i]
      }
    }
    return result
    
    
  }