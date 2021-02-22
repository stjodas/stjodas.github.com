const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item, index){
    console.log(index)
    console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML)
arrayGrid.forEach(function(item){
    console.log(item)
})


//Exercicio

console.log('Retorne todas as imagens do site')
const img = document.querySelectorAll('img')
console.log(img)

console.log(' ')

console.log('Retorne no console apenas as imagens que começaram com a palavra imagem')
const palavraImg = document.querySelectorAll('img[src^="img/imagem"]')
console.log(palavraImg)

console.log(' ')

console.log('Selecione todos os links internos (onde o href começa com #')
const linkInt = document.querySelectorAll('[href^="#"]')
console.log(linkInt)

console.log(' ')

console.log('Selecione o primeiro h2 dentro de .animais-descricao')
const animaisP = document.querySelector('.animais-descrição')
const h2Animais = animaisP.querySelector('h2')
console.log(animaisP)
console.log(h2Animais)

console.log(' ')

console.log('Selecione o último p do site')
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP)
console.log(ultimoP[6])
const ultimoP2 = document.querySelectorAll('p')
console.log(ultimoP2[--ultimoP2.length])

const imgs = document.querySelectorAll('img')

img.forEach(function(item, index, array){
    console.log(item, index, array)
})

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

console.log(titulos)
console.log(titulosArray)

console.log(' ')
console.log(' ')
console.log('ArrowFunction')
imgs.forEach((item, index) => {
    console.log(item, index)
})

//Para uma linha só de código
let i = 0
imgs.forEach(() => console.log(i++)) //versão curta

//Exercicio

console.log('Mostre no console cada parágrado do site')
const pSite = document.querySelectorAll('p') //pode ser feito com o getElementByTagName('p')
pSite.forEach(function(item){
    console.log(item)
})


console.log('Mostre o texto dos parágrafos no console')
pSite.forEach((item) => {
    console.log(item.innerText)
})

console.log('Como corrigir os erros abaixo:')

const imgsEx = document.querySelectorAll('img');
imgsEx.forEach((item, index) => {
 console.log(item, index);
});
let j = 0;
imgsEx.forEach(() => {
 console.log(j++);
});
imgsEx.forEach(() => j++); 

const menu = document.querySelector('.menu')
menu.classList.add('ativo', 'teste')
menu.classList.remove('azul')
menu.classList.toggle('azul')

if(menu.classList.contains('azul')){
    menu.classList.contains('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

const animaisA = document.querySelector('.animais')
console.log(animaisA.attributes.id)
console.log(animaisA.attributes['data-texto'])

const imgAttri = document.querySelector('img')
console.log(imgAttri)

const srcImg = imgAttri.getAttribute('alt')
imgAttri.setAttribute('alt', 'É uma raposa')

const possuiAlt = imgAttri.hasAttribute('alt')
console.log(possuiAlt)

console.log(srcImg)

const carro = {
    portas: 4,
    andar: function(km){
        console.log(`Andou ${km}`)
    }
}

//Exercício

console.log("Adicione a classe ativo a todos os itens do menu")
const menuEx = document.querySelectorAll('.menu a')
menuEx.forEach((item) => {
    item.classList.add('ATIVO')
})
console.log(menuEx)

console.log("Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro")
menuEx.forEach((item) => {
    item.classList.remove('ATIVO')
});

menuEx[0].classList.add('ATIVO')

console.log('Verifique se as imagens possuem o atributo alt')
const imgsEx2 = document.querySelectorAll('img')
imgsEx2.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt')
    console.log(img, possuiAlt)
})

console.log("Modifique o href do link externo do menu")
const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com')
console.log(link)