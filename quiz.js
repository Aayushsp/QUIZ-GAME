class Quiz{
    constructor(){
        this.heading = createElement('h1');
        this.note = createElement('h2');
    }
    getState(){
        var getStateRef = database.ref('gameState');
        getStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
    play(){
       question.hide();
       
        this.heading.html("Results of the Quiz");
        this.heading.position(10,10);

        Contestant.getPlayerInfo();
       

        background("orange");

        if(allContestants !== undefined){
            this.note.html("*NOTE: Contestant who answered correctly is highlighted in green color!")
            this.note.position(150, 210)
            var displayPosition = 240;
            for (var plr in allContestants) {
               
            var correctAnswer = "2";
            if(correctAnswer === allContestants[plr].answer){
                fill("Green");
            }
            else{
                fill("red");
                }
                displayPosition += 20;
                textSize(15);
                text(allContestants[plr].name + ": " + allContestants[plr].answer, 150, displayPosition);
        }
       
     }
    }
            }