p1name=localStorage.getItem("p1");
p2name=localStorage.getItem("p2");
p1name=0;
p2name=0;
document.getElementById(player1).innerHTML=p1name + " : ";
document.getElementById(player2).innerHTML=p2name + " : ";
document.getElementById(player_question).innerHTML="question turn-" + p1name;
document.getElementById(player_answer).innerHTML="answer turn-" + p2name;