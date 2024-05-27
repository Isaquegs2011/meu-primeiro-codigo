let XP = 6000;
let nome = "Wanderson";
let Nivel;

if (XP <= 1000) {
    Nivel = "Ferro";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
} else if (XP >= 1001 && XP <= 2000) {
    Nivel = "Bronze";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
}
else if (XP >=2001 && XP <= 5000) {
    Nivel = "Prata";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
}
else if(XP >= 5001 && XP<= 7000 ) {
    Nivel = "Ouro";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
}
else if (XP >= 7001 && XP<= 8000 ) {
    Nivel= "Platina";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
}
else if (XP >= 8001 && XP <= 9000 ) {
    Nivel= "Ascendente";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
}
else if (XP >= 9001 && XP<= 10000 ) {
    Nivel= "imortal";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
}
else {
    Nivel= "Radiante";
    console.log ("O Heroi de nome "+ nome + " esta no nivel de " + Nivel );
}
