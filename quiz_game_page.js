plr1score = document.getElementById("player1_score").value;
plr2score = document.getElementById("player2_score").value;

plr1actualscore = 0;
plr2actualscore = 0;

plr1score = plr1actualscore;
plr2score = plr2actualscore;

function send()
{
    num1 = document.getElementById("number_1").value;
    num2 = document.getElementById("number_2").value;
    localStorage.setItem("NumberOne", num1);
    localStorage.setItem("NumberTwo", num2);
    actual_anwser = parseInt(num1) * parseInt(num2);
    question_num = "<h4>" + num1 + " X "+ num2 + "</h4>";
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
    answer = localStorage.getItem("Answer");
    text_answer = document.getElementById("input_check_box").value;

    if(text_answer=answer)
    {
        plr2actualscore = plr2actualscore+1;
        plr2score = plr2actualscore;
    }
    else
    {
        plr1actualscore = plr1actualscore+1;
        plr1score = plr1actualscore;
    }
}