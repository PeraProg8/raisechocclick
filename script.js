const special = 5
var now = new Date()
var thisday = now.getDate()
var ChocNum = 0;
var ChocToSell = ChocNum
var ReputNum = 0
var HungryNum = 30
var Invt = 0
var Money = 0
var StealTimes = 0
var Know = 10
var Status = "Vendedor de Chocolates"
var Music = Math.ceil(Math.random() * 4)
var WaitTime1 = 60000;
var WaitTime2 = 20000;

//Funções Festivas
function SpecialDay(){
    if(thisday == special){
        console.log("✰")
        window.alert("✰Feliz Dia do Cinco!✰")
    }
}

//Funções Musicais
function playOST(){
    Music = Math.ceil(Math.random() * 4)
    if(Music == 1){
        document.getElementById("audiotoplay1").play()
        document.getElementById("audiotoplay2").pause()
        document.getElementById("audiotoplay3").pause()
    }else if(Music == 2){
        document.getElementById("audiotoplay1").pause()
        document.getElementById("audiotoplay2").play()
        document.getElementById("audiotoplay3").pause()
    }else if(Music == 3){
        document.getElementById("audiotoplay1").pause()
        document.getElementById("audiotoplay2").pause()
        document.getElementById("audiotoplay3").play()
    }else if(Music == 4){
        document.getElementById("audiotoplay1").pause()
        document.getElementById("audiotoplay2").pause()
        document.getElementById("audiotoplay3").pause()
    }
    console.log(Music, '.play')
}

//Funções de jogo
function ResetGame(){
    ChocNum = 0;
    ChocToSell = ChocNum
    ReputNum = 0
    HungryNum = 30
    Invt = 0
    Money = 0
    StealTimes = 0
    Know = 10
    Status = "Vendedor de Chocolates"
    document.getElementById("MoneyOutput").innerHTML = Money;
    document.getElementById("ChocOutput").innerHTML = ChocNum;
    document.getElementById("ReputBar").value = ReputNum;
    document.getElementById("HungryBar").value = HungryNum;
    document.getElementById("KnowBar").value = Know
}

function GetChoc(){
    ChocNum += 1
    document.getElementById("ChocOutput").innerHTML = ChocNum;
}

function Invest(){
    if(ChocNum > 0 && ReputNum > 5){
        Money += 5
        ChocNum -= 1
        ReputNum += 1.5
        document.getElementById("MoneyOutput").innerHTML = Money;
        document.getElementById("ChocOutput").innerHTML = ChocNum;
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
    }else if(Money < 99){
        StealTimes += 1
        Money += Math.ceil(Math.random(5) * 15)
        ChocNum += Math.ceil(Math.random(1) * 5)
        ReputNum -= 10
    }

    document.getElementById("ChocOutput").innerHTML = ChocNum;
    document.getElementById("MoneyOutput").innerHTML = Money;
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
    document.getElementById("ChocOutput").innerHTML = ChocNum;
    document.getElementById("MoneyOutput").innerHTML = Money;
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
    document.getElementById("ChocOutput").innerHTML = ChocNum;
    document.getElementById("MoneyOutput").innerHTML = Money;
    document.getElementById("ReputBar").value = ReputNum;
}

function Study(){
    if(Status == "Vendedor de Chocolates"){
        if(Know < 50){
            window.alert("Tu estudas para adquirir mais conhecimento... E potencialmente arranjar um trabalho melhor... (ºoº)")    
        }else if(Know > 100){
            window.alert("Tu... estudas bastante, não é verdade? (o_o )")    
        }
    }

    Know += Math.ceil(Math.random() * 15);
    document.getElementById("KnowBar").value = Know
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
        document.getElementById("ChocOutput").innerHTML = ChocNum;
    }
}

function DoSpeech(){
    SpeechRandomNum = Math.ceil(Math.random(1) * 3)
    if(SpeechRandomNum == 1){
        window.alert("Tu fazes um discurso sobre a condição dos chocolates... O Público está mais do que convencido... (^-^)")
        ReputNum += 10
        Know += 5
        if(Status == "Político"){
            Money += Math.ceil(Math.random(50) * 100)
        }else if(Status == "Rei"){
            Money += Math.ceil(Math.random(80) * 150)
        }
    }
    if(SpeechRandomNum == 2){
        window.alert("Tu fazes um discurso sobre a felicidade... A felicidade, apesar de mal compreendida pelo público, faz pensar em chocolate... (+_+)")
        ReputNum += 5
        Know += 5
        if(Status == "Político"){
            Money += Math.ceil(Math.random(20) * 50)
        }else if(Status == "Rei"){
            Money += Math.ceil(Math.random(30) * 60)
        }
    }
    if(SpeechRandomNum == 3){
        window.alert("Tu fazes um discurso sobre a corrupção governamental... As pessoas ficam chateadas, pois só querem chocolates e não ouvir falar sobre as mentiras do governo. (;_;)")
        ReputNum -= 1
        Know += 5
        if(Status == "Político"){
            Money += Math.ceil(Math.random(0) * 5)
        }else if(Status == "Rei"){
            Money += Math.ceil(Math.random(1) * 10)
        }
    }

    document.getElementById("KnowBar").value = Know
    document.getElementById("ReputBar").value = ReputNum
}

function BePolice(){
    if(Status != "Político" | Status != "Rei" | Status != "Médico" | Status != "Polícia"){
        if(ReputNum > 80 && Know > 150){
            Status = "Polícia"
            window.alert("Tu agora és um polícia! (`-`)")
        }else{
            window.alert("Precisas de uma alta reputação e de alto conhecimento para seres polícia! (o_o)")
        }
    }else if(Status == "Político"){
        window.alert("Tu és político! (^o^)")
    }else if(Status == "Rei"){
        window.alert("Tu és Rei! (*o*)")
    }else if(Status == "Polícia"){
        window.alert("Tu já és polícia! (o-o)")
    }else if(Status == "Médico"){
        window.alert("Tu já és médico! (o-o)")
    }
}

function BeDoctor(){
    if(Status != "Político" | Status != "Rei" | Status != "Médico" | Status != "Polícia"){
        if(ReputNum > 100 && Know > 200){
            Status = "Médico"
            window.alert("Tu agora és um médico! (º-º)")
        }else{
            window.alert("Precisas de uma alta reputação e de alto conhecimento para seres médico! (o_o)")
        }
    }else if(Status == "Político"){
        window.alert("Tu és político! (^o^)")
    }else if(Status == "Rei"){
        window.alert("Tu és Rei! (*o*)")
    }else if(Status == "Médico"){
        window.alert("Tu já és médico! (o-o)")
    }else if(Status == "Polícia"){
        window.alert("Tu já és polícia! (o-o)")
    }
}

function BePolitical(){
    if(ChocNum > 200 && ReputNum > 250 && Money > 1000 && Know > 100 && Status == "Vendedor de Chocolates"){
        Status = "Político"
        Know += 10
        window.alert("Tu agora és politico (?-?)")
    }else if(Status != "Político" && Status == "Vendedor de Chocolates"){
        window.alert("Precisas de:\nMais de 200 chocolates,\numa alta reputação,\nmuito conhecimento\ne de mais de 1000$ para seres político (~_~)")
    }else if(Status == "Político" && Status != "Vendedor de Chocolates"){
        window.alert("Tu já és político (~-~)")
    }else if(Status == "Rei"){
        window.alert("Tu já és Rei (^.^)")
    }

    document.getElementById("KnowBar").value = Know
}

function BeKing(){
    if(ChocNum > 500 && ReputNum > 400 && Money > 5000 && Know > 30 && Status == "Político"){
        Status = "Rei"
        Know += 5
        window.alert("Tu agora és Rei (?-?)")
    }else if(Status != "Político" && Status != "Rei"){
        window.alert("Precisas de:\nSer politico, \nter mais de 500 chocolates,\numa alta reputação,\nmuito conhecimento\ne de mais de 5000$ para seres Rei (~_~)")
    }else if(Status == "Rei"){
        window.alert("Tu já és Rei (^.^)")
    }

    document.getElementById("KnowBar").value = Know
}

//Log de adições e correções
function Log(){
    ProgressLose = confirm("Verifica se não avançaste significativamente no teu jogo; todo o progresso pode ser perdido!\n\nQueres prosseguir e abrir o Log?")
    if(ProgressLose){
        document.write("<title>Raise, My Chocolate Clicker</title><style>html, head, body{font-family: sans-serif; color: black;} p, ul{font-family: 'Courier New'; color: black;}</style><h1>Log.:</h1><br><ul><li>[1] Função 'DoSpeech()' adicionada;</li><li>[2] Função 'EatChocolate()' atualizada;</li><li>[3] Função 'GetHungry()' atualizada;</li><li>[4] Função 'DoSpeech()' atualizada;</li><ul><li>[4.1] Adicionada possibilidade de 3 discursos aleatórios;</li></ul><li>[5] Função 'Steal()' atualizada;</li><li>[6] Função musical adicionada;</li><li>[7] Função musical atualizada;</li><li>[8] Scrollbar alterada visualmente;</li><li>[9] Função 'BeKing()' corrigida;</li><li>[10] Função 'BePolitical()' corrigida;</li><li>[29/Mar.] Parabéns Rafa! 🎂;</li><li>[11] Adicionada função 'playOST()' adicionada;<ul><li>[11.1] Iniciação de música aleatória;<li>[11.2] Corrigidas as funções de música;</li></li></ul></li><li>[12] Versão 4 🥳;</li><li>[13] Função 'DoSpeech()' atualizada;</li><li>[14] Divisões de 'Negócias' e 'Política' organizadas;<ul><li>[14.1] Criada divisão de 'Comércio';</li><li>[14.2] Criada divisão de 'Segurança';</li></ul></li><li>[15] Função 'BePolice()' adicionada;</li><li>[16] Função 'BeDoctor()' adicionada;</li><li>[17] Barra de 'Conhecimento(s)' adicionada;</li><li>[18] Funções 'BeDoctor()' e 'BePolice()' atualizadas;</li><li>[19] Função 'Study()' adicionada;</li><li>[20] Função 'Study()' atualizada;</li><li>[21] Versão 5.1;</li><li>[22] Função 'Study()' atualizada;</li><li>[23] Versão 5.2;</li><li>[24] Alterada tag 'value' para 'innerHTML' de Ids 'ChocOutput' e 'MoneyOutput';</li></ul>")
    }
}

//Funções em 'segundo plano'
SpecialDay()
setInterval(GetHungry, WaitTime2)