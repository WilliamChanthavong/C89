plr1score = document.getElementById("player1_score");
plr2score = document.getElementById("player2_score");

plr1actualscore = 0;
plr2actualscore = 0;

plr1score = plr1actualscore;
plr2score = plr2actualscore;

player1name = localStorage.getItem("player1_name");
player2name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1name;
document.getElementById("player2_name").innerHTML = player2name;

question_turn = "";
answer_turn = "";

question_thing = document.getElementById("player_question");
answer_thing = document.getElementById("player_answer");

question_thing.innerHTML = "Question Turn - " + player1name;
answer_thing.innerHTML = "Answer Turn - " + player2name;

function send()
{
    num1 = document.getElementById("number_1").value;
    num2 = document.getElementById("number_2").value;
    localStorage.setItem("NumberOne", num1);
    localStorage.setItem("NumberTwo", num2);
    actual_anwser = parseInt(num1) * parseInt(num2);
    question_num = "<h4 id='problems'>" + num1 + " X "+ num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_btn = "<br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_num + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    localStorage.setItem("Answer", actual_anwser);
}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_anwser)
    {
        if(answer_turn=="player1")
        {
            plr1score = plr1score+1;
            document.getElementById("player1_score").innerHTML = plr1score;
        }
        if(answer_turn=="player2")
        {
            plr2score = plr2score+1;
            document.getElementById("player2_score").innerHTML = plr2score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
    // ------------------------answer turn------------------------ \\
    if(answer_turn=="player2")
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }
    else
    {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("problems").innerHTML = "";
}