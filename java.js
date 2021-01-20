window.onload = function () {
    trending();
}

var x = window.matchMedia("(min-width: 769px)").matches


// menu hamburguesa
let ChangeTheme = document.getElementById('change-theme')

let hamburguer = document.getElementById("hamburguer")
let menu = document.getElementById("menu")

hamburguer.addEventListener("click", menuhamburguesa);
ChangeTheme.addEventListener('click', icon)



function menuhamburguesa() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        hamburguer.src = './img/close.svg'
    } else {
       menu.style.display = 'none';
       hamburguer.src = './img/burger.svg'
    } 
}

function icon() {
    if (menu.style.display === 'none' && document.documentElement.className === 'theme-light') {
        menu.style.display = 'block';
        hamburguer.src = './img/close-modo-noct.svg'
    } else {
       hamburguer.src = './img/burger-modo-noct.svg'
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

//gifhover


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

// hover y scroll del carrousel 
 
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
let iconMax = document.getElementById('iconMax')



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


// desplazar mas gifs
let btnMas = document.getElementById('btn-gifs')
btnMas.addEventListener("click", Masgifs)

function Masgifs() {
    if (limit === 12) {
    limit = 20;
    btnMas.style.display = 'none';
    try {
        Gifs();
    } catch (error) {
        alert("Hemos detectado el siguiente error en el servidor1: ", error);
    }}
}

btnMas.addEventListener('mouseover', BtnMasOv)
btnMas.addEventListener('mouseout', BtnMasOut)
btnMas.addEventListener('mouseover', BtnMasOvNoc)
btnMas.addEventListener('mouseout', BtnMasOutNoc)


function BtnMasOv() {
    btnMas.src = "./img/CTA-ver-mas-hover.svg"
}
function BtnMasOut() {
    btnMas.src = "./img/CTA-ver-mas.svg"
}

function BtnMasOvNoc() {
    if (document.documentElement.className === 'theme-dark') {
        btnMas.src = "./img/CTA-ver+hover-modo-noc.svg"
    }
}

function BtnMasOutNoc() {
    if (document.documentElement.className === 'theme-dark') {
        btnMas.src = "./img/CTA-ver+-modo-noc.svg"
    }
}



  //modal

let Selectedgif = document.getElementById('Selectedgif');
let modal = document.getElementById('modal1');
let closeModal = document.getElementById('close-modal');
let giftitle = document.getElementById('titlemodal');
let gifuser = document.getElementById('gifuser');
let downloadgif = document.getElementsByClassName('downloadgif');
let modalFav = document.querySelector('.modalFav');
let ctniconsf = document.getElementById('ctn-iconsf');

  async function getGifById(img) {
      const PathId = `https://api.giphy.com/v1/gifs/${img.target.id}?api_key=${apikey}`;
      const respone = await fetch(PathId)
      const gif = await respone.json();
       modal.style.display = 'block';
       
       Selectedgif.src = gif.data.images.original.url;
        giftitle.innerHTML = gif.data.title;
        gifuser.innerHTML = gif.data.username;
        downloadgif = gif.data.images.downsized.url;
        modalFavid = img.target.id;
        ctniconsf.innerHTML = `<div class="modal-icons">
        <img id="${modalFavid}" class="iconshover iconfav" src="./img/icon-fav.svg" alt="iconfav">
        <a href="${downloadgif}" target="_blank" ><img id="${modalFavid}" class="downloadgif" src="./img/icon-download-hover.svg" alt=""></a>
    </div>`
       document.querySelectorAll('.iconfav').forEach(img => {
        img.addEventListener('click', GuardarFav)
    });
    
  }
  
  


// Mostrar busqueda de gifs

let limit = 12;
input.addEventListener('input', Gifs)
async function Gifs() {
    const tag = input.value;
   
    const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${tag}&limit=${limit}&offset=0&rating=g&lang=en`
    if (input.value.length - 1){
        let response = await fetch(pathSearch);
        var json = await response.json();
        containerGif.innerHTML = '';
        for (let index = 0; index < json.data.length; index++) {
            const element = json.data[index];
            let download = element.bitly_url;
            if (x) {
                containerGif.innerHTML += `<div class="img-ctn">
          <img id="${element.id}" class="gif-busqueda" src="${element.images.fixed_width_small.url}" alt="${element.title}">
          <div class="gifhover">
          <img id="${element.id}" class="iconshover iconfav" src="./img/icon-fav.svg" alt="iconfav">
          <a href="${download}" target="_blank" ><img id="${element.id}" class="iconshover IconDownload" src="./img/icon-download.svg" alt="downloadicon"></a>
          <img id="${element.id}" class="iconshover IconMax" src="./img/icon-max-normal.svg" alt="iconmax">
          <h4 class="gifuser" id="gifuser">${element.username}</h4>
          <h3 class="titlehover" id="titlemodal">${element.title}</h3>
         </div></div>`
            } else {
                containerGif.innerHTML += `<div class="img-ctn">
          <img id="${element.id}" class="gif-busqueda" src="${element.images.fixed_width_small.url}" alt="${element.title}">`
            }
          
           
        } 


        document.querySelectorAll('.gif-busqueda').forEach(img => {
            img.addEventListener('click', getGifById)
        });
        document.querySelectorAll('.IconMax').forEach(img => {
            img.addEventListener('click', getGifById)
        });
        document.querySelectorAll('.iconfav').forEach(img => {
            img.addEventListener('click', GuardarFav)
        });

        
        
    
        
    }
}


// Favoritos section
let ctngifsF = document.getElementById('ctngifsF');
let CtnGifN = document.getElementById('Ctn-GifN');
let IconFavN = document.getElementById('IconFavN');
let TextFavN = document.getElementById('TextFavN');
let favoritosSection = document.getElementById('favoritos');
let SectionSearch = document.getElementById('SectionSearch');
let SectionTrending = document.getElementById('SectionTrending');
let btnfav = document.getElementById('favoritosli');
let imgFav = document.getElementById('img-fav');
let favicon = document.getElementsByClassName('iconfav');
let sectiongif = document.getElementById('section-gif');
let GifsFavorites = [];
localStorage.setItem("favoritos", JSON.stringify(GifsFavorites))
let ctnGifav = document.getElementById('ctn-gifsFav')

btnfav.addEventListener('click', SectionFavoritos)



    

    function SectionFavoritos() {
        if (x) {
            btnMisGyfos.style.color = '#572EE5';
            btnfav.style.color = '#9CAFC3';
            favoritosSection.style.display = 'block';
            SectionSearch.style.display = 'none';
            SectionTrending.style.display = 'none';
            titleBusqueda.style.display = 'none'
            containerGif.style.display = 'none'
            btngifs.style.display = 'none';
            lineT.style.display = 'none';
            menu.style.display = 'block';
            MisGyfos.style.display = 'none';
            ctnGifav.style.display = 'block';
        
        } else {
            favoritosSection.style.display = 'block';
            SectionSearch.style.display = 'none';
            SectionTrending.style.display = 'none';
            menu.style.display = 'none';
            MisGyfos.style.display = 'none';
            hamburguer.src = './img/burger.svg';
            ctnGifav.style.display = 'block';
            sectiongif.style.display = 'none';
            
        }}

      


async function MostrarFav() {
    ctngifsF.innerHTML = '';
let idFav = JSON.parse(localStorage.getItem('favoritos'));
for (let index = 0; index < idFav.length; index++) {
    const element = idFav[index];
    const PathFav = `https://api.giphy.com/v1/gifs/${element}?api_key=${apikey}`
    let response = await fetch(PathFav);
    let json = await response.json();
    let download = json.data.bitly_url;
    if (idFav === null) {
            IconFavN.style.display = 'block';
            TextFavN.style.display = 'block';
          } else {
            IconFavN.style.display = 'none';
            TextFavN.style.display = 'none';
          }
    ctngifsF.innerHTML += `<div class="img-ctn2">
       <img id="${json.data.id}" class="gif-busqueda2" src="${json.data.images.fixed_width_small.url}" alt="${json.data.title}">
       <div class="gifhover">
       <img id="${json.data.id}" class="iconshover iconTrash" src="./img/icon-trash-normal.svg" alt="iconfav">
       <a href="${download}" target="_blank" ><img id="${json.data.id}" class="iconshover IconDownload" src="./img/icon-download.svg" alt="downloadicon"></a>
       <img id="${json.data.id}" class="iconshover IconMax" src="./img/icon-max-normal.svg" alt="iconmax">
       <h4 class="gifuser" id="gifuser">${json.data.username}</h4>
       <h3 class="titlehover" id="titlemodal">${json.data.title}</h3>
      </div></div>`    
   }

   document.querySelectorAll('.gif-busqueda2').forEach(img => {
    img.addEventListener('click', getGifById)
});
   document.querySelectorAll('.iconTrash').forEach(img => {
    img.addEventListener('click', eliminarFav)
});
    document.querySelectorAll('.IconMax').forEach(img => {
        img.addEventListener('click', getGifById)
    });

}

function eliminarFav(img) {
    let idborrado = img.target.id;
    let GifFavG = JSON.parse(localStorage.getItem("favoritos"));
    for (let index = 0; index < GifFavG.length; index++) {
        const element = GifFavG[index];
        if (idborrado === element) {
            let indice = GifFavG.indexOf(element);
            GifFavG.splice(indice, 1);
            localStorage.setItem("favoritos", JSON.stringify(GifFavG));
            MostrarFav();
    }
 }
}


async function GuardarFav(img2) {
      const PathId2 = `https://api.giphy.com/v1/gifs/${img2.target.id}?api_key=${apikey}`;
      const response = await fetch(PathId2)
      let gif2 = await response.json();
      let idFav = gif2.data.id; 
      for (let index = 0; index < favicon.length; index++) {
          const element = favicon[index];
          
    element.addEventListener('click', () =>{ 
      GifsFavorites.push(idFav)
      let idunicos = GifsFavorites.filter((valor, indice, arreglo) => {
        return arreglo.indexOf(valor) == indice;
    });
      localStorage.setItem('favoritos', JSON.stringify(idunicos));
      element.src = "./img/icon-fav-active.svg"
      })
      
      }MostrarFav();
    }


//Mostrar suggestions

let lineSugg = document.getElementById('lineSugg');
let Suggest = document.getElementById('Suggest');
input.addEventListener('keydown', MostrarSuggestions);
input.addEventListener('focusout', QuitarSuggestions);



function MostrarSuggestions() {
    if (x) {
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

let sugerencias = document.getElementById('sugerencias')
let sugg = document.getElementById('sugg')
input.addEventListener('keyup', BuscarSugg)
let suggLi = document.getElementsByClassName('liSugg')
async function BuscarSugg() {
    const pathSugg = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apikey}&q=${input.value}&limit=4&offset=0&rating=g&lang=en`
     let response = await fetch(pathSugg);
     let json = await response.json();
     sugg.innerHTML = ''; 
     for (let index = 0; index < json.data.length; index++) {
         const element = json.data[index];
         let li = document.createElement('li');
         li.innerHTML = `<li id="sugerencias" class="liSugg"><i id="iconsSugg" class="fas fa-search"></i>${element.name}</li>`
         sugg.appendChild(li);
        }

    let sugerencias = document.getElementsByClassName('liSugg')
    for (let index = 0; index < sugerencias.length; index++) {
        const element = sugerencias[index];
         element.addEventListener('click', () => {
             input.value = element.innerText;
             sugg.innerHTML = '';
             ctnSearch.style.height = '40px';
             Gifs();
             titleBusqueda.textContent = input.value
         } )
        } 
 }


       
// MisGifos Section

let MisGyfos = document.getElementById('MisGyfos');
let btnMisGyfos = document.getElementById('misGifosli')

btnMisGyfos.addEventListener('click', SectionMisGifos)

function SectionMisGifos() {
    if (x) {
        btnfav.style.color = '#572EE5';
        btnMisGyfos.style.color = '#9CAFC3';
        MisGyfos.style.display = 'block';
        SectionSearch.style.display = 'none';
        SectionTrending.style.display = 'none';
        menu.style.display = 'block';
        favoritosSection.style.display = 'none';
        titleBusqueda.style.display = 'none';
        containerGif.style.display = 'none';
        btngifs.style.display = 'none';
        lineT.style.display = 'none';
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
   if (modal.style.display === 'block') {
    modal.style.display = 'none';
   }
}



//Home 
let btnHome = document.getElementById('home')
btnHome.addEventListener('click', inicio)

function inicio() {
    if (x) {
        favoritosSection.style.display = 'none';
        MisGyfos.style.display = 'none';
        SectionSearch.style.display = 'block';
        SectionTrending.style.display = 'block';
        menu.style.display = 'block';
        sectiongif.style.display = 'block';
        } else{
        favoritosSection.style.display = 'none';
        MisGyfos.style.display = 'none';
        SectionSearch.style.display = 'block';
        SectionTrending.style.display = 'block';
        menu.style.display = 'none';
        
}}


//Crear Gif
let TrendingS = document.getElementById('TrendingS')
let  SectionCrear = document.getElementById('Section-Crear')
let btnCrear = document.getElementById('btnCrear')
let ComenzarButton = document.getElementById('ComenzarB')
let ctnnumber1 = document.getElementById('ctnnumber1')
let number1 = document.getElementById('number1')
let TitleC = document.getElementById('TitleC')
let TextG = document.getElementById('TextG')

btnCrear.addEventListener('mouseover', Btncrearover);

function Btncrearover() {
if (document.documentElement.className === 'theme-dark') {
    btnCrear.src = './img/button-crear-gifo.svg';
} else{
    btnCrear.src = './img/CTA-crear-gifo-hover.svg'
}
}

btnCrear.addEventListener('mouseout', Btncrearout)
function Btncrearout() {
    if (document.documentElement.className === 'theme-dark') {
        btnCrear.src = './img/CTA-crear-gifo-hover-modo-noc.svg'
    } else{
        btnCrear.src = './img/button-crear-gifo.svg';
    }
}

btnCrear.addEventListener('click',btncreardown)

function btncreardown() {
        btnCrear.src = './img/CTA-crear-gifo-active.svg';
        if (x) {
            SectionCrear.style.display = 'block'
            TrendingS.style.display = 'none';
            MisGyfos.style.display = 'none';
            favoritosSection.style.display = 'none';
            SectionSearch.style.display = 'none';
            SectionTrending.style.display = 'none';
            titleBusqueda.style.display = 'none'
            containerGif.style.display = 'none'
            btngifs.style.display = 'none';
            lineT.style.display = 'none';
            menu.style.display = 'block';
            ctnGifav.style.display = 'none';
        }
}


ComenzarButton.addEventListener('click', CrearGifo1)
let video = document.getElementById('video');
let grabarBtn = document.getElementById('Grabar');
let FinalizarBtn = document.getElementById('Finalizar');
let SubirBtn = document.getElementById('subirGifo');

function CrearGifo1() {
    getStreamAndRecord();
    
    ComenzarButton.style.display = 'none';
    ctnnumber1.style.backgroundColor = '#572EE5';
    number1.style.color = 'white';
    TitleC.innerText = '¿Nos das acceso a tu cámara?';
    TextG.innerText = 'El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.'

}

function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia(
       { 
         audio: false,
         video: {
             height: {  max:  400 } 
            }
        })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
            var recorder = RecordRTC(stream, {
            type: 'gif',
            framerate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function () {
            console.log(started);
            },
        });
        grabarBtn.style.display = 'block';
        grabarBtn.addEventListener('click', () => {
            recorder.StartRecording();
            console.log('hola');
    })
    .catch(function (err) {
        console.log('error', err);
        })
    });
}




// Cambio de tema

ChangeTheme.addEventListener('click', CambioTema)
function CambioTema() {
    if (document.documentElement.className === 'theme-dark') {
        ChangeTheme.innerText = 'Modo Nocturno';
        document.documentElement.className = 'theme-light';
        localStorage.setItem('theme', 'theme-light');
        leftbtn.src = './img/button-slider-left.svg';
        rightbtn.src = "./img/Button-Slider-right.svg";
        imgInput.src= "./img/icon-search.svg";
        lupa2.src= "./img/icon-search.svg";
        input.style.color = '#000000';
        btnCrear.src = './img/button-crear-gifo.svg';
    } else {
        ChangeTheme.innerText = 'Modo Diurno';
        localStorage.setItem('theme', 'theme-dark');
        document.documentElement.className = 'theme-dark';
        btnHome.src = './img/Logo-modo-noc.svg';
        leftbtn.src = './img/button-slider-left-md-noct.svg';
        rightbtn.src = './img/button-slider-right-md-noct.svg';
        imgInput.src = './img/icon-search-mod-noc.svg';
        lupa2.src = './img/icon-search-mod-noc.svg';
        input.style.color = '#FFFFFF';
        btnHome.src = './img/Logo-modo-noc.svg';
        btnCrear.src = './img/CTA-crar-gifo-modo-noc.svg';
        btnMas.src = "./img/CTA-ver+-modo-noc.svg"
    }
}




    leftbtn.addEventListener('mouseout', LeftbtnMN);
    rightbtn.addEventListener('mouseout', rightbtnMN);

    function LeftbtnMN() {
        if (document.documentElement.className === 'theme-dark') {
            leftbtn.src = './img/button-slider-left-md-noct.svg';
        }
    }

    function rightbtnMN() {
        if (document.documentElement.className === 'theme-dark') {
            rightbtn.src = './img/button-slider-right-md-noct.svg';
        }
    }

