let heure = document.querySelector("#heure")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")

setInterval(()=>{
let jour = new Date()
let Heure = jour.getHours() * 30
let Minute = jour.getMinutes() * 6
let Second = jour.getSeconds() * 6
heure.style.transform = `rotateZ(${ Heure + ( Minute / 12)}deg)`
minute.style.transform = `rotateZ(${ ( Minute )}deg)`
second.style.transform = `rotateZ(${ ( Second )}deg)`

let Hour = document.getElementById("hour")
let Min = document.getElementById("min")
let Sec = document.getElementById("sec")
let Moment = document.getElementById("moment")

let h = new Date().getHours()
let m = new Date().getMinutes()
let s = new Date().getSeconds()

let Matin = "Matin"
let Apm = "Après-midi" 
let Soiree =  "Soirée"
let Midi = "Midi"
let Minuit = "Minuit"


h = ( h < 10 ) ? "0" + h : h 
m = ( m < 10 ) ? "0" + m : m 
s = ( s < 10 ) ? "0" + s : s 


Hour.innerHTML = h
Min.innerHTML = m
Sec.innerHTML = s

switch(h){
    case 0 :
        Moment.innerHTML = Minuit
        break
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
    case 6 :
    case 7 :
    case 8 :
    case 9 :
    case 10 :
    case 11 :
        Moment.innerHTML = Matin
        break
    case 12 :
        Moment.innerHTML = Midi
        break
    case 13 :
    case 14 :
    case 15 :
    case 16 :
    case 17 :
        Moment.innerHTML = Apm
        break  
    case 18 :
    case 19 :
    case 20 :
    case 21 :
    case 22 :
    case 23 :
        Moment.innerHTML = Soiree
        break
}
})

let toggle = document.querySelector('.toggle')
let menu = document.querySelector('.menu')
let music = document.getElementById("music")
let dragon =  document.querySelector('.dragon')
let imagine = document.getElementById("imagine")
let love =  document.querySelector('.love')
let amour = document.getElementById("amour")
let etoile = document.getElementById("etoile")
let lune =  document.querySelector('.lune')
let feu = document.getElementById("feu")
let sun =  document.querySelector('.sun')
let arret = document.querySelector('.arret')
let plage = document.querySelector('.plage')
let sable = document.getElementById("sable")
let glace = document.querySelector('.glace')
let gele = document.getElementById("gele")

toggle.onclick = function(){
    menu.classList.toggle('active')
    etoile.pause()
    feu.pause()
    amour.pause()
    gele.pause()
    imagine.pause()
    sable.pause()
    music.pause()
}

arret.onclick = function(){
    etoile.pause()
    feu.pause()
    amour.pause()
    gele.pause()
    imagine.pause()
    sable.pause()
    music.play()
}

sun.onclick =function(){
    music.pause()
    etoile.pause()
    amour.pause()
    gele.pause()
    imagine.pause()
    sable.pause()
    feu.play()
}

lune.onclick =function(){
    music.pause()
    feu.pause()
    amour.pause()
    gele.pause()
    imagine.pause()
    sable.pause()
    etoile.play()
}

plage.onclick = function(){
    music.pause()
    etoile.pause()
    feu.pause()
    amour.pause()
    gele.pause()
    imagine.pause()
    sable.play()
}

dragon.onclick =function(){
    sable.pause()
    music.pause()
    etoile.pause()
    feu.pause()
    amour.pause()
    gele.pause()
    imagine.play()
}


glace.onclick =function(){
    sable.pause()
    music.pause()
    imagine.pause()
    etoile.pause()
    feu.pause()
    amour.pause()
    gele.play()
}


love.onclick =function(){
    music.pause()
    sable.pause()
    imagine.pause()
    etoile.pause()
    feu.pause()
    gele.pause()
    amour.play()
}




