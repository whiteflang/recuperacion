export let productos =[
    {name:"camisa sukuna",img:"img/producto.jpg",price:90000,desc: "camisa con tematica de sukuna"},
    {name:"camisa gojo",img:"img/producto2.jpg",price:9000,desc: "camisa con tematica de gojo"},
    {name:"camisa gojo azul",img:"img/producto3.jpg",price:60000,desc: "camisa gojo azuul"},
    {name:"camisa gojo",img:"img/producto4.jpg",price:15000,desc: "buso-blanco-gojo"},
    {name:"audifonos gojo",img:"img/producto5.jpg",price:90000,desc: "audifonos gojo "},
    {name:"camisa sukuna negra",img:"img/producto6.jpg",price:90000,desc: "sukuna negro"},
    {name:"buzo sukuna negro",img:"img/producto7.jpg",price:9000,desc: "buzo sukunanegro"},
    {name:"camisa sukuna blanca",img:"img/producto8.jpg",price:9000,desc: "camisa blanca"},
    {name:"camisa gojo blanca",img:"img/producto9.jpg",price:7000,desc: "camsia gojo blanca"},    
]


const ROW = document.getElementById('row')

productos.forEach(function(auxiliar){

    let columna =document.createElement('div')
    columna.classList.add("col")

    let tarjeta =document.createElement('div')
    tarjeta.classList.add("card","h-100","shadow")

    let producto = document.createElement('h1')
    producto.textContent = auxiliar.name

    let imagen = document.createElement('img')
    imagen.src = auxiliar.img
    imagen.classList.add("w-100","img-fluid")



    let descripcion = document.createElement('p')
    descripcion.textContent = auxiliar.desc



    tarjeta.appendChild(imagen)
    tarjeta.appendChild(producto)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    ROW.appendChild(columna)


    


})

