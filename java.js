window.onload = function () {
    trending();
}

var x = window.matchMedia("(min-width: 769px)").matches


// menu hamburguesa

let hamburguer = document.getElementById("hamburguer")
let menu = document.getElementById("menu")

hamburguer.addEventListener("click", menuhamburguesa);


function menuhamburguesa() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        hamburguer.src = './img/close.svg'
    } else {
       menu.style.display = 'none';
       hamburguer.src = './img/burger.svg'
    }
}

//search

let imgSearch = document.getElementById('img1')
let titleSearch = document.getElementById('title-search')
let input = document.getElementById('search')
let ctnSearch = document.getElementById('ctn-search')
let imgInput = document.getElementById('img-input')
let lupa2 = document.getElementById('lupa2')



input.addEventListener('focusin', Search)
input.addEventListener('focusout', OcultarSearch)

function OcultarSearch() {
    if ( input.value === '') {
        imgSearch.style.display = 'block';
        titleSearch.style.display = 'block';
        imgInput.src = "./img/icon-search.svg";
        lupa2.style.display = 'none'
        
    }

}

// focus search

function Search() {
    if (x) {
        imgSearch.style.display = 'block';
        titleSearch.style.display = 'block';
        imgInput.src = './img/close.svg';
} else if ( imgSearch.style.display = 'block') {
        imgSearch.style.display = 'none';
        titleSearch.style.display = 'none';
        imgInput.src = './img/close.svg';
    } else {
        imgSearch.style.display = 'none';
        titleSearch.style.display = 'none';
        imgInput.src = "./img/icon-search.svg";
        ctnSearch.style.marginTop = '15px';
        
     }
    }
  


// borrar input

imgInput.addEventListener('click', borrarBusqueda)

function borrarBusqueda() {
    if (input.value === '') {
        imgSearch.style.display = 'block';
        titleSearch.style.display = 'block';
        imgInput.src = "./img/icon-search.svg";
        lupa2.style.display = 'none';
        Suggest.style.display = 'none';
        containerGif.style.display = 'none';
        titleTrending.style.display = 'none';
        btngifs.style.display = 'none';
        titleTrending.style.display = 'inline-block';
        tt.style.display = 'block';
        titleBusqueda.style.display = 'none';
        lineT.style.display = 'none';
        }
        else { 
         input.value = '';
         Suggest.style.display = 'none';
        ctnSearch.style.height = '40px';
        lineSugg.style.display = 'none';
        containerGif.style.display = 'none';
        titleTrending.style.display = 'none';
        btngifs.style.display = 'none';
        titleTrending.style.display = 'inline-block';
        tt.style.display = 'block';
        titleBusqueda.style.display = 'none';
        lineT.style.display = 'none';
    }
}

// Trending titles 


const apikey = `dIXvHZMUDGjt3gHGBO9nZ08NrweU9vCp`
const path = `https://api.giphy.com/v1/stickers/trending?api_key=${apikey}&limit=5`
let titleTrending = document.getElementById('trending-t')
let tt = document.getElementById('tt')
let gif = document.querySelector('.carrousel') 

async function trending() {
    const response = await fetch(path);
    const json = await response.json();
    
    titleTrending.innerHTML = '';
    gif.innerHTML = '';

for (let index = 0; index < json.data.length; index++) {
    const element = json.data[index]; 
    let ctn = document.createElement('div')
    titleTrending.innerHTML += element.title
    titleTrending.appendChild(ctn);

    gif.innerHTML += `<img id="${element.id}" class="gif" src="${element.images.fixed_height.url}" alt="${element.title}">`;
    
    }
    document.querySelectorAll('.carrousel img').forEach(img => {
        img.addEventListener('click', getGifById)
    });
}
 
let leftbtn = document.getElementById('left-btn');
let rightbtn = document.getElementById('right-btn');

leftbtn.addEventListener('mouseover', leftbtnover)
leftbtn.addEventListener('mouseout', leftbtnout)
rightbtn.addEventListener('mouseover', rigthbtnover)
rightbtn.addEventListener('mouseout', rightbtnout)
rightbtn.addEventListener('click', scrollright)
leftbtn.addEventListener('click', scrollleft)

function leftbtnover() {
    leftbtn.src = './img/button-slider-left-hover.svg'
}

function leftbtnout() {
    leftbtn.src = './img/button-slider-left.svg'
}

function rigthbtnover() {
    rightbtn.src = "./img/Button-Slider-right-hover.svg"
}

function rightbtnout() {
    rightbtn.src = "./img/Button-Slider-right.svg"
}

function scrollright() {
    gif.scrollLeft += 150
}
function scrollleft() {
    gif.scrollLeft -= 150
}
// gifs search



let titleBusqueda = document.getElementById('titleBusqueda');
let sectionGif = document.getElementById('section-gif');
let containerGif = document.getElementById('ctn-gifs')
let lineT = document.getElementById('line-t')
let btngifs = document.getElementById('btn-gifs')
let NoResult = document.getElementById('NoResult')



input.addEventListener('keyup', TitleGif)
input.addEventListener('keyup', TitleGifX)

async function TitleGif() {
    if (input.value.length >= 3) {
        titleBusqueda.textContent = input.value
        sectionGif.style.display = 'block';
        titleTrending.style.display = 'none';
        tt.style.display = 'none';
    } else {
        sectionGif.style.display = 'none'
    }
}
function TitleGifX() {
    if ( x && input.value.length >= 3) {
        titleBusqueda.textContent = input.value;
        sectionGif.style.display = 'block';
        ctnSearch.style.display = 'block';
        titleTrending.style.display = 'none';
        tt.style.display = 'none';
    } 
}

input.addEventListener('input', Gifs)
async function Gifs() {
    let tag = input.value;
    let pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${tag}&limit=12&offset=0&rating=g&lang=en`
    if (input.value.length - 1){
        let response = await fetch(pathSearch);
        let json = await response.json();
        containerGif.innerHTML = '';
        for (let index = 0; index < json.data.length; index++) {
            const element = json.data[index];
          containerGif.innerHTML += `<div class="img-ctn"><img id="${element.id}" class="gif-busqueda" src="${element.images.fixed_width_small.url}" alt="${element.title}"></div>`
            
        }
         
        console.log(json);
        document.querySelectorAll('#ctn-gifs img').forEach(img => {
            img.addEventListener('click', getGifById)
     
        });
       
    }
}



  //modal

  async function getGifById(img) {
      const PathId = `https://api.giphy.com/v1/gifs/${img.target.id}?api_key=${apikey}
      `;
      const respone = await fetch(PathId)
      const gif = await respone.json();
       modal.style.display = 'block'; 
       Selectedgif.src = gif.data.images.original.url;
        giftitle.innerHTML = gif.data.title;
        gifuser.innerHTML = gif.data.username;
        downloadgif.href = gif.data.images.downsized.url; 
       console.log(gif);
  }
     

let Selectedgif = document.getElementById('Selectedgif')
let modal = document.getElementById('modal1')
let closeModal = document.getElementById('close-modal')
let giftitle = document.getElementById('titlemodal')
let gifuser = document.getElementById('gifuser')
let downloadgif = document.getElementById('downloadgif')


    
//Mostrar suggestions

let lineSugg = document.getElementById('lineSugg');
let Suggest = document.getElementById('Suggest');
input.addEventListener('keydown', MostrarSuggestions);
input.addEventListener('focusout', QuitarSuggestions);



function MostrarSuggestions() {
    if ( x) {
        Suggest.style.display = 'block';
        ctnSearch.style.height = '190px';
        lineSugg.style.display = 'block';
        lupa2.style.display = 'inline';
        
    }
    
}

//Quitar Suggestions
let ctnSS = document.getElementById('ctn-SS')

function QuitarSuggestions() {
    if (input.value.length <= 0) {
        Suggest.style.display = 'none';
        ctnSS.style.height = '40px';
        ctnSearch.style.height = '40px';
        lineSugg.style.display = 'none';
        lineT.style.display = 'none';
    }
}
// Suggestions
    
let sugg = document.getElementById('sugg')
input.addEventListener('keyup', BuscarSugg)
let suggLi = document.getElementsByClassName('liSugg')
async function BuscarSugg() {
    const pathSugg = `https://api.giphy.com/v1/tags/related/${input.value}?api_key=${apikey}&limit=4`
     let response = await fetch(pathSugg);
     let json = await response.json();
     sugg.innerHTML = ''; 
     for (let index = 0; index < json.data.length; index++) {
         const element = json.data[index];
        let li = document.createElement('li')
         li.innerHTML = `<li class="liSugg"><i id="iconsSugg" class="fas fa-search"></i>${element.name}</li>`
         sugg.appendChild(li);
        }

}
 
 

// Favoritos section

let favoritosSection = document.getElementById('favoritos');
let SectionSearch = document.getElementById('SectionSearch')
let SectionTrending = document.getElementById('SectionTrending')
let btnfav = document.getElementById('favoritosli');
let imgFav = document.getElementById('img-fav')


btnfav.addEventListener('click', SectionFavoritos)



    

    function SectionFavoritos() {
        if (x) {
            favoritosSection.style.display = 'block';
            SectionSearch.style.display = 'none';
            SectionTrending.style.display = 'none';
            titleBusqueda.style.display = 'none'
            containerGif.style.display = 'none'
            btngifs.style.display = 'none';
            lineT.style.display = 'none';
            menu.style.display = 'block';
            MisGyfos.style.display = 'none';
        } else {
            favoritosSection.style.display = 'block';
            SectionSearch.style.display = 'none';
            SectionTrending.style.display = 'none';
            menu.style.display = 'none';
            MisGyfos.style.display = 'none';
            hamburguer.src = './img/burger.svg';
        }}



       
// MisGifos Section

let MisGyfos = document.getElementById('MisGyfos');
let btnMisGyfos = document.getElementById('misGifosli')

btnMisGyfos.addEventListener('click', SectionMisGifos)

function SectionMisGifos() {
    if (x) {
        MisGyfos.style.display = 'block';
        SectionSearch.style.display = 'none';
        SectionTrending.style.display = 'none';
        menu.style.display = 'block';
        favoritosSection.style.display = 'none'
        titleBusqueda.style.display = 'none'
        containerGif.style.display = 'none'
        btngifs.style.display = 'none'
        lineT.style.display = 'none'
    } else {
        MisGyfos.style.display = 'block';
        SectionSearch.style.display = 'none';
        SectionTrending.style.display = 'none';
        menu.style.display = 'none';
        favoritosSection.style.display = 'none';
        hamburguer.src = './img/burger.svg';
    }
    
}

//close modal



closeModal.addEventListener('click', CloseModal)

function CloseModal() {
   if (modal.style.display = 'block') {
    modal.style.display = 'none';
   }
}

// downloadgif

//Home 
let btnHome = document.getElementById('home');
btnHome.addEventListener('click', inicio);

function inicio() {
    if (x) {
        favoritosSection.style.display = 'none';
        MisGyfos.style.display = 'none';
        SectionSearch.style.display = 'block';
        SectionTrending.style.display = 'block';
        menu.style.display = 'none';
        } else {
        favoritosSection.style.display = 'none';
        MisGyfos.style.display = 'none';
        SectionSearch.style.display = 'block';
        SectionTrending.style.display = 'block';
        menu.style.display = 'block';
}}

