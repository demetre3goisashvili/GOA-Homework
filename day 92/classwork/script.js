function setAdd(arr){
    let gaertieneba = new Set()
    arr.forEach(setebi => {
        setebi.forEach(elementebi =>{
            gaertianeba.add(elementebi)
        })
    })
    return gaertieneba
}



function sixshire(str) {
    const frequencyMap = new Map();

    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
}


function swap(mapi){
    let shenacvlebuli = new Map()
    for (const [key, value] of mapi){
        shenacvlebuli.set(value, key)
    }
    return shenacvlebuli
}


function araErtErti(pirveli, meore){
    const shesanaxi = new Set()
    for (const elementebi of pirveli){
        if (!meore.has(elementebi)){
            shesanaxi.add(elementebi)
        }

    }
    for (const elementebi of meore){
        if (!pirveli.has(elementebi)){
            shesanaxi.add(elementebi)
        }
    }
    return shesanaxi
}



