export function countDifferentLetters(sentence) {
    let characters = [];
    let alphabet = [];
    for (let i = 0; i < 26; i++) {
        alphabet.push(String.fromCharCode(97 + i))
    }
    for(let i = 0;i < sentence.length; i++){
        if(sentence[i] === sentence[i].toUpperCase()){
            characters.push(sentence[i])
            characters.push(sentence[i].toLowerCase())
        }else{
            characters.push(sentence[i])
            characters.push(sentence[i].toUpperCase())
        }
    }
    let letters = characters.filter(element => alphabet.includes(element));
    const uniqueLetters = letters.reduce((unique, letter) => {
        if (!unique.includes(letter)) {
            unique.push(letter);
        }
        return unique;
    }, []);
    return uniqueLetters.length
}