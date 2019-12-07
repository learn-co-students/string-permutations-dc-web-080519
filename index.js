const findAllPermutations = string => {
  // shovel in every string possible starting from each string position
  // move first letter to second position and repeat above
  // move first letter to every possible string position and repeat above
  // repeat the above for every letter in string

  const allPermutations = []
  const letters = string.split('')
  for (let i = 0; i < letters.length; i++) {
    // for (let j = 0; j < letters.length; j++) {
      allPermutations.push(aroundTheString(letters))
      letters[0], letters[1] = letters[1], letters[0]
    // }
  }

  const flatPerm = [].concat.apply([], allPermutations)
  console.log(flatPerm);
  return flatPerm;
}

const aroundTheString = letters => {
  const permutations = []
  for (let i = 0; i < letters.length; i++) {
    permutations.push(letters.join(''))
    letters.push(letters.shift())
  }
  return permutations;
}