const herois = [
    {nome: "Jarhir", xp: 7000},
    {nome: "Zenohm", xp: 7600},
    {nome: "Demetrius", xp: 4540},
    {nome: "Kyrus", xp: 1370},
    {nome: "Drogor", xp: 760},
    {nome:"Zahir", xp: "vinte e dois mil"},
    {nome: "Haru", xp: 8300},
    {nome: "Ryuoh", xp: 9760},
    {nome: "Konhr", xp: 12567}
]

const mensHero = "O Herói de nome "
const mensRank = " está no nível "

for (let i = 0; i < herois.length; i++) {
    let hero = herois[i].nome;
    let xp = herois[i].xp;
    let ranking = "";


    if(xp <= 1000){
        ranking = "Ferro"
        console.log(mensHero + hero + mensRank + ranking)
    } else if(xp >= 1001 && xp <= 2000){
        ranking = "Bronze"
        console.log(mensHero + hero + mensRank + ranking)
    } else if(xp >= 2001 && xp <= 5000){
        ranking = "Prata"
        console.log(mensHero + hero + mensRank + ranking)
    } else if(xp >= 5001 && xp <= 7000){ 
        ranking = "Ouro"
        console.log(mensHero + hero + mensRank + ranking)
    } else if(xp >= 7001 && xp <= 8000){
        ranking = "Platina"
        console.log(mensHero + hero + mensRank + ranking)
    } else if(xp >= 8001 && xp <= 9000){
        ranking = "Ascendente"
        console.log(mensHero + hero + mensRank + ranking)
    } else if(xp >= 9001 && xp <= 10000){
        ranking = "Imortal"
        console.log(mensHero + hero + mensRank + ranking)
    } else if(xp >= 10001){
        ranking = "Radiante"
        console.log(mensHero + hero + mensRank + ranking)
    } else{
        console.log(mensHero + hero + " NÃO POSSUI UM RANK VÁLIDO.")
        continue       // pula para próxima iteração caso não haja rank válido
    }
}