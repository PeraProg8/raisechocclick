/*
    +-----------------+
    |Made by PeraProg8|
    +-----------------+
*/

const clicksound = new Audio("resources/sounds/click.mp3");
const sspeechsound = new Audio("resources/sounds/sspeech.mp3");

//Classes de definições

class ost{ //Soundtrack
    constructor(volume = 100){
        this.volume = volume
        this.musics = [
            (new Audio("resources/ost/an-epic-fight.mp3")),
            (new Audio("resources/ost/choco-explosion.mp3")),
            (new Audio("resources/ost/eletro-sweet.mp3")),
            (new Audio("resources/ost/sweet-fight.mp3")),
            (new Audio("resources/ost/sweet-fun.mp3")),
        ]
    }

    setsong(){ //Música establecida
        const musicsong = document.getElementById("music-to-play")
        return parseInt(musicsong.value)
    }

    process(type){ //Iniciar ou Parar música
        var songnum = this.setsong()
        var song = this.musics[songnum-1]

        song.volume = this.volume

        if(type == "play"){
            song.pause()
            song.currentTime = 0
            song.play()
        }else if(type == "stop"){
            song.pause()
            song.currentTime = 0
        }
    }
}

var music = new ost()

class gameset{ //Definições
    soundvolume(){
        const volume = document.getElementById("sound-volume")
        clicksound.volume = volume.value/100
        sspeechsound.volume = volume.value/100
        music.volume = volume.value/100
    }

    playclicksound(){
        clicksound.currentTime = 0;
        clicksound.play();
    }

    playspeechsound(){
        sspeechsound.currentTime = 0;
        sspeechsound.play();
    }
}

var settings = new gameset()

//Jogabilidade

class ingame{
    constructor(name = "The Chosen One (clichê)"){
        this.name = name;
        this.chocolates = 0;
        this.price = 1.25;
        this.money = 0;
        this.reputval = 0;
        this.emotions = [
            "&circ;&sfrown;&circ;",
            "&circ;&smile;&circ;",
            "&para;&smile;&para;",
            "&dollar;&smile;&dollar;",
            "&sext;&smile;&sext;"
        ]
    }
    getchoc(){ //Adquirir chocolates
        this.chocolates += 1; //Chocolate a cada clique

        this.chocoutput = document.getElementById("choc-output");
        this.message = document.getElementById("message-output");
        
        this.chocoutput.innerHTML = `${this.chocolates}&Cscr;`;

        this.emoform = Math.floor(Math.sqrt((this.chocolates+this.money)/30)) //Fórmula de emoções
        if(this.emoform > (this.emotions.length - 1)){
            this.emoform = (this.emotions.length - 1)
        }

        this.message.innerHTML = this.emotions[this.emoform]

        settings.playclicksound()
    }
    sellchoc(){ //Vender chocolates
        this.moneyoutput = document.getElementById("money-output");
        this.chocoutput = document.getElementById("choc-output");
        this.reputation = document.getElementById("reputation-bar");

        if(this.chocolates !== 0){ //Fórmulas de Lucro
            this.money += Math.floor(this.price*this.chocolates)
            this.chocolates -= this.chocolates
            this.moneyoutput.innerHTML = `${this.money}&dollar;`
            this.chocoutput.innerHTML = `${this.chocolates}&Cscr;`;
            this.reputation.value += Math.floor(Math.sqrt(this.money)/this.price)
        }

        settings.playclicksound()
    }
    study(){ //Estudar
        this.knowoutput = document.getElementById("knowledge-bar");
        this.moneyoutput = document.getElementById("money-output");
        this.reputation = document.getElementById("reputation-bar");

        if(this.money !== 0){ //Fórmula de sabedoria
            this.knowoutput.value += Math.floor(Math.abs((this.money+this.reputation.value)/Math.sqrt(this.knowoutput.value))*this.price)
            this.reputation.value += Math.floor(Math.abs(this.money/Math.sqrt(this.knowoutput.value))*this.price)
            this.money -= this.money
            this.moneyoutput.innerHTML = `${this.money}&dollar;`
        }

        settings.playclicksound()
    }
    speech(){ //Discursar publicamente
        this.knowoutput = document.getElementById("knowledge-bar");
        this.reputation = document.getElementById("reputation-bar");
        this.influence = document.getElementById("influence-output");

        if(this.knowoutput.value >= 30 && this.reputation.value >= 40){
            this.spchform = Math.floor((this.knowoutput.value/3+this.reputation.value)/10)
            this.influence.innerHTML = `${this.spchform}%`
            this.reputation.value = this.spchform/(this.knowoutput.value*5)
            settings.playspeechsound()
        }else{
            settings.playclicksound()
        }
    }
}

var player = new ingame()

document.addEventListener('keydown', function(event){ //Função que impossibilita a interação da tecla "Enter" com os botões (cheat)
    if(event.key === 'Enter'){
        event.preventDefault();
    }
})