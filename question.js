class Question{
    constructor(){
        this.title = createElement('h2');
        this.question = createElement('h3');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');

        this.input1 = createInput("Enter your name here");
        this.input2 = createInput("Option no.")

        this.button = createButton("Submit");
        
    }
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.title.hide();
        this.button.hide();
    }
    display(){
        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What starts with 'E', but has only one letter?");
        this.question.position(150, 80);

        this.option1.html("1: Everything");
        this.option1.position(150, 100);

        this.option2.html("2: Envelope");
        this.option2.position(150, 120);

        this.option3.html("3: Everyone");
        this.option3.position(150, 140);

        this.option4.html("4: Estimate");
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(300, 230);

        this.button.position(200,200);

        this.button.mousePressed(()=>{
            contestant.answer = this.input2.value();
            contestant.name = this.input1.value();
            contestantCount+=1
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount); 
        })
    }
}