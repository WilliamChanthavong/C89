function addUser()
{
    player1name = document.getElementById("username1").value;
    player2name = document.getElementById("username2").value;

    localStorage.setItem("player1_name", player1name);
    localStorage.setItem("player2_name", player2name);

    window.location = "quiz_game_page.html";
}