function createPlayer() {
    var playerName = document.getElementById("playerName").value;
    var playerColour = document.getElementById("playerColour").value;
    var playerHealth = document.getElementById("playerHealth").value;
    var playerWeapon = document.getElementById("playerWeapon").value;
    document.getElementById("playerNameText").innerHTML = playerName;
    document.getElementById("playerColourDisplay").style.backgroundColor = playerColour;
    document.getElementById("playerHealthText").innerText = playerHealth;
    document.getElementById("playerWeaponText").innerText = playerWeapon;
}