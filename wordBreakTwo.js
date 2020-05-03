var wordBreak = function(s, wordDict) {
    let stringSet =  new Set(s);
    let wordDictSet = new Set(wordDict);
    
    compareSets(stringSet, wordDictSet);
};

function compareSets(stringSet, wordDictSet){
    console.log(wordDictSet, stringSet)
}

wordBreak('catsanddog', ["cat", "cats", "and", "sand", "dog"]);

// Examples
let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])

isSuperset(setA, setB)          // => true
union(setA, setC)               // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC)        // => Set [3, 4]
symmetricDifference(setA, setC) // => Set [1, 2, 5, 6]
difference(setA, setC)          // => Set [1, 2]