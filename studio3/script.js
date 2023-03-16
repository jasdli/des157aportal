(function(){
    'user strict';
    console.log('js running');
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score= document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice:['images/d1.png', 'images/d2.png', 'images/d3.png', 'images/d4.png','images/d5.png', 'images/d6.png'],
        player: ['player 1', 'player 2'],
        score: [0,0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29

    }
    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The game has started</h2>';
        gameControl.innerHTML += '<button id ="quit">Wanna Quit?</button>';
        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });
        //console.log(gameData.index);
       // console.log('set up the turn');
       setUpTurn();
    });
    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for the ${gameData.player[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll The Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            //console.log('roll the dice!');
            throwDice();
        });

    }
    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()* 6)+1;
        gameData.roll2 = Math.floor(Math.random()* 6)+1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.player[gameData.index]}</p>`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.roll1-1]}">`;
        game.innerHTML += `<img src = "${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1+gameData.roll2;

        if(gameData.rollSum == 2){
            game.innerHTML += '<p>Oh Snap! Snake Eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);

        }
        else if(gameData.roll1 ==1 || gameData.roll2 ==1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML =`<p>Sorry, one of your rolls was a one.Switching to ${gameData.player[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        }
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index]+ gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">roll again</button> <button id="pass">pass</button>';
            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            

        }
      
    }
    function checkWinningCondition(){
        if(gameData.score[gameData.index]> gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.player[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game";
        }
        else{
            score.innerHTML = `<p>The score is currently <strong>${gameData.player[0]}${gameData.score[0]}</strong> and <strong>${gameData.player[1]}${gameData.score[1]}</strong></p>`;
        }
    }
    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.player[0]}${gameData.score[0]}</strong> and <strong>${gameData.player[1]}${gameData.score[1]}</strong></p>`; 
    }
})();