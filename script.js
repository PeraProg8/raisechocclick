var ChocNum = 0;
var ChocToSell = ChocNum
var ReputNum = 0
var HungryNum = 30
var Invt = 0
var Money = 0
var StealTimes = 0
var Status = "Vendedor de Chocolates"
var WaitTime1 = 60000;
var WaitTime2 = 20000;

function playAudio(){
    document.getElementById("audiotoplay").play();
}

function ResetGame(){
    ChocNum = 0;
    ChocToSell = ChocNum
    ReputNum = 0
    HungryNum = 30
    Invt = 0
    Money = 0
    StealTimes = 0
    Status = "Vendedor de Chocolates"
    document.getElementById("MoneyOutput").value = Money;
    document.getElementById("ChocOutput").value = ChocNum;
    document.getElementById("ReputBar").value = ReputNum;
    document.getElementById("HungryBar").value = HungryNum;
}

function GetChoc(){
    ChocNum += 1
    document.getElementById("ChocOutput").value = ChocNum;
}

function Invest(){
    if(ChocNum > 0 && ReputNum > 5){
        Money += 5
        ChocNum -= 1
        ReputNum += 1.5
        document.getElementById("MoneyOutput").value = Money;
        document.getElementById("ChocOutput").value = ChocNum;
        document.getElementById("ReputBar").value = ReputNum;
    }
    if(ChocNum == 0 && ReputNum == 0){
        window.alert("Não tenho chocolates e boa reputação para que possa investir ('~')")
    }
    if(ChocNum == 0 && ReputNum > 0){
        window.alert("Preciso de chocolates para que possa investir (._.)")
    }
    if(ChocNum > 0 && ReputNum == 0){
        window.alert("Já tenho chocolates, mas com uma reputação destas... (~_~)")
    }
}

function Steal(){
    if(Money > 100){
        window.alert("Os meus negócios correm bem, não tenho que roubar ($-$)")
    }else if(StealTimes > 10){
        window.alert("A polícia prendeu-te por andares a roubar... 'Game Over' (;_;)")
        ResetGame()
    }else if(Money < 1){
        StealTimes += 1
        Money += Math.ceil(Math.random(5) * 15)
        ChocNum += Math.ceil(Math.random(1) * 5)
        ReputNum -= 10
    }

    document.getElementById("ChocOutput").value = ChocNum;
    document.getElementById("MoneyOutput").value = Money;
    document.getElementById("ReputBar").value = ReputNum;
}

function GetHungry(){
    HungryNum += 1
    document.getElementById("HungryBar").value = HungryNum;
    if(HungryNum == 100){
        window.alert("Com tanta fome... 'Game Over' (X_X)")
        ResetGame()
    }
}

function MoneyQuant(){
    if(Money < 0){
        window.alert("Terei que dar todo o meu chocolate para pagar esta dívida (ToT)")
    }

    if(Money == 0){
        window.alert("Espero vir a ter uma vida melhor a clicar (T_T)")
    }

    if(Money == 5){
        window.alert("Uma tabletzinha de chocolate por favor (._.)")
    }

    if(Money == 1000){
        window.alert("Posso ter todo o chocolate do Mundo, mas não preciso pagar B-D")
    }

    if(Money > 9998 && ChocNum > 9998){
        window.alert("Final 'Alternativo'!")
        document.write("<center><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Final 'Alternativo'</a></center>")
    }
}

function SellChocolate(){
    ChocToSell = Math.ceil(ChocNum / 5)
    if(ChocNum == 0){
        window.alert("Não tens nenhum chocolate para vender... Infelizmente (._.)")
    }
    if(ChocNum > 0){
        Money += ChocNum * Math.ceil(Math.random(2) * 4);
        ChocNum = 0
    }
    ReputNum += ChocToSell * 2
    document.getElementById("ChocOutput").value = ChocNum;
    document.getElementById("MoneyOutput").value = Money;
    document.getElementById("ReputBar").value = ReputNum;
    ChocToSell = 0
}

function BuyChocolates(){
    if(Money < 0){
        ReputNum -= 5
        document.getElementById("ReputBar").value = ReputNum;
    }
    ChocNum += 5
    Money -= Math.ceil(Math.random(3) * 5)
    ReputNum += 0.1
    document.getElementById("ChocOutput").value = ChocNum;
    document.getElementById("MoneyOutput").value = Money;
    document.getElementById("ReputBar").value = ReputNum;
}

function EatChocolate(){
    if(ChocNum == 0){
        window.alert("Não tens nenhum chocolate para comer... Infelizmente (T_T)")
    }else{
        HungryNum -= Math.ceil(Math.random(2) * ChocNum)
        if(HungryNum < 0){
            HungryNum = 0
        }
        console.log(HungryNum, ChocNum)
        ChocNum = 0
        document.getElementById("HungryBar").value = HungryNum;
        document.getElementById("ChocOutput").value = ChocNum;
    }
}

function DoSpeech(){
    SpeechRandomNum = Math.ceil(Math.random(1) * 3)
    if(SpeechRandomNum == 1){
        window.alert("Tu fazes um discurso sobre a condição dos chocolates... O Público está mais do que convencido... (^-^)")
        ReputNum += 5
    }
    if(SpeechRandomNum == 2){
        window.alert("Tu fazes um discurso sobre a felicidade... A felicidade, apesar de mal compreendida pelo público, faz pensar em chocolate... (+_+)")
        ReputNum += 2
    }
    if(SpeechRandomNum == 3){
        window.alert("Tu fazes um discurso sobre a corrupção governamental... As pessoas ficam chateadas, pois só querem chocolates e não ouvir falar sobre as mentiras do governo. (;_;)")
        ReputNum -= 1
    }

    document.getElementById("ReputBar").value = ReputNum
}

function BePolitical(){
    if(ChocNum > 200 && ReputNum > 250 && Money > 1000 && Status == "Vendedor de Chocolates"){
        Status = "Político"
        window.alert("Tu agora és politico (?-?)")
    }else if(Status != "Político"){
        window.alert("Precisas de:\nMais de 200 chocolates,\numa alta reputação\ne de mais de 1000$ para seres político (~_~)")
    }else if(Status == "Político"){
        window.alert("Tu já és político (~-~)")
    }else if(Status == "Rei"){
        window.alert("Tu já és Rei (^.^)")
    }
}

function BeKing(){
    if(ChocNum > 500 && ReputNum > 400 && Money > 5000 && Status == "Político"){
        Status = "Rei"
        window.alert("Tu agora és Rei (?-?)")
    }else if(Status != "Político"){
        window.alert("Precisas de:\nSer politico, \nter mais de 500 chocolates,\numa alta reputação\ne de mais de 5000$ para seres Rei (~_~)")
    }else if(Status == "Rei"){
        window.alert("Tu já és Rei (^.^)")
    }
}

function Log(){
    document.write("<title>Raise, My Chocolate Clicker</title><style>html, head, body{font-family: sans-serif; color: black;} p, ul{font-family: 'Courier New'; color: black;}</style><h1>Log.:</h1><br><ul><li>[1] Função 'DoSpeech()' adicionada;</li><li>[2] Função 'EatChocolate()' atualizada;</li><li>[3] Função 'GetHungry()' atualizada;</li><li>[4] Função 'DoSpeech()' atualizada;</li><ul><li>[4.1] Adicionada possibilidade de 3 discursos aleatórios;</li></ul><li>[5] Função 'Steal()' atualizada;</li><li>[6] Função musical adicionada;</li><li>[7] Função musical atualizada;</li><li>[8] Scrollbar alterada visualmente;</li></ul>")
}

setInterval(GetHungry, WaitTime2)