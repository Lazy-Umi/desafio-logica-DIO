let hero = "Juvenal"
let xp = 700
ranking = ""
const mensHero = "O Herói de nome "
const mensRank = " está no nível "


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
    console.log(mensHero + hero + " não possui um rank válido")
}