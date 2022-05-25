// sample
function sample(characters) {
    const index = Math.floor(Math.random() * characters.length)
    return characters[index]
}


// define generatePassword function
function generatePassword(options) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    let password = ''
    let collection = []
    

    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }
    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }
    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }
    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }
    
    if (options.excludeCharacters) {
        collection = collection.filter(character => {
            return !options.excludeCharacters.includes(character)
        })
    }

    if (collection.length === 0) {
        return 'There is no valid character in your selection.'
    }
    for (let i = 0; i < options.length; i++) {
        password += sample(collection)
    }
    return password
}


module.exports = generatePassword