let num = [5, 82, 200, 94, 3111]
num.push(302)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log('Esse valor não está presente no array')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}