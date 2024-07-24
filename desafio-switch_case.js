let hero = "Juvenal"
let xp = 1002
ranking = ""
const mensHero = "O Herói de nome "
const mensRank = " está no nível "


switch(true){
    case (xp <= 1000):                       // case rank Ferro
        ranking = "Ferro"
        console.log(mensHero + hero + mensRank + ranking)
        break
    case(xp >= 1001 && xp <= 2000):         // case rank Bronze
        ranking = "Bronze"
        console.log(mensHero + hero + mensRank + ranking)
        break
    case(xp >= 2001 && xp <= 5000):         // case rank Prata
        ranking = "Prata"
        console.log(mensHero + hero + mensRank + ranking)
        break
    case(xp >= 5001 && xp <= 7000):         // case rank Ouro
        ranking = "Ouro"
        console.log(mensHero + hero + mensRank + ranking)
        break
    case(xp >= 7001 && xp <= 8000):         // case rank Platina
        ranking = "Platina"
        console.log(mensHero + hero + mensRank + ranking)
        break
    case(xp >= 8001 && xp <= 9000):         // case rank Ascendente
        ranking = "Ascendente"
        console.log(mensHero + hero + mensRank + ranking)
        break
    case(xp >= 9001 && xp <= 10000):        // case rank Imortal
        ranking = "Imortal"
        console.log(mensHero + hero + mensRank + ranking)
        break
    case(xp >= 10001):                      // case rank Radiante
        ranking = "Radiante"
        console.log(mensHero + hero + mensRank + ranking)
        break
    default:                                // default para input inválida
        console.log(mensHero + hero + " não possui um rank válido")
}