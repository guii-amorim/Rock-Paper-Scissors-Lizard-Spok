/*  Functions for changing game's steps and clearing data.  */
var language = "EN";
function nextPage(atualPage, nextPage)
{
    document.getElementById(atualPage).style.visibility = "hidden";
    document.getElementById(nextPage).style.visibility = "visible";
}

function prevPage(atualPage, prevPage)
{
    document.getElementById(atualPage).style.visibility = "hidden";
    document.getElementById(prevPage).style.visibility = "visible";
}

function clearData(dataType)
{
    if(dataType == "all")
    {
        document.getElementById("input-name").value = "";
        var buttons = document.getElementsByClassName("choice-button");
        for(var i = 0; i < buttons.length; i++)
        {
            buttons[i].style.color = "#f6f6f6";
        }
        usrChoice = "";
        usrName = "";
    }
    else if(dataType == "character")
    {
        document.getElementById("input-name").value = "";
        var buttons = document.getElementsByClassName("choice-button");
        for(var i = 0; i < buttons.length; i++)
        {
            buttons[i].style.color = "#f6f6f6";
        }
        usrChoice = "";
    }
}

function changeLanguage(lang)
{
    if(lang == "EN")
    {
        document.getElementById("EN").style.visibility = "visible";
        document.getElementById("PT").style.visibility = "hidden";
    }
    else if(lang == "PT")
    {
        language = "PT";
        document.getElementById("EN").style.visibility = "hidden";
        document.getElementById("PT").style.visibility = "visible";
    }
}

/*  Functions for playing  */
var usrChoice,
    computerChoice,
    usrName,
    computerName;

function setCharacter(character)
{
    usrChoice = character;
    var buttons = document.getElementsByClassName("choice-button");
    for(var i = 0; i < buttons.length; i++)
    {
        buttons[i].style.color = "#f6f6f6";
    }
    document.getElementById(character).style.color = "#a3d10f";
    compChoice();
}

function compChoice()
{
    computerChoice = Math.random();
    if(computerChoice < 0.2 && language == "EN")
        computerChoice = "rock";
    else if(computerChoice < 0.2 && language == "PT")
        computerChoice = "pedra";
    else if(computerChoice < 0.4 && language == "EN")
        computerChoice = "paper";
    else if(computerChoice < 0.4 && language == "PT")
        computerChoice = "papel";
    else if(computerChoice < 0.6 && language == "EN")
        computerChoice = "scissors";
    else if(computerChoice < 0.6 && language == "PT")
        computerChoice = "tesoura";
    else if(computerChoice < 0.8 && language == "EN")
        computerChoice = "lizard";
    else if(computerChoice < 0.8 && language == "PT")
        computerChoice = "lagarto";
    else
        computerChoice = "spock";
}

function setName()
{
    usrName = document.getElementById("input-name").value;
    if(usrName.length == 0)
        usrName = "Player";
    compName();
    return false;
}

function compName()
{
    computerName = Math.random();
    if(computerName < 0.25)
        computerName = "Dr. Sheldon Cooper";
    else if(computerName < 0.50)
        computerName = "Dr. Leonard Hofstadter";
    else if(computerName < 0.75)
        computerName = "Dr. Rajesh Koothrappali";
    else
        computerName = "Mr. Howard Wolowitz";
}

function play()
{
    if(!usrChoice)
    {
        
        document.getElementById("versus").style.visibility = "hidden";
        document.getElementById("characters").style.visibility = "visible";
        
    }
    
    document.getElementById("cp-name").innerHTML = computerName;
    document.getElementById("cp-chr").innerHTML = computerChoice;
    document.getElementById("usr-name").innerHTML = usrName;
    document.getElementById("usr-chr").innerHTML = usrChoice;
    switch (computerChoice)
    {
            case "rock":
                if(usrChoice == "rock")
                    document.getElementById("result").innerHTML = "It looks like you and "+computerName+" think as one!";
                else if(usrChoice == "scissors" || usrChoice == "lizard")
                    document.getElementById("result").innerHTML = computerName+" smashed you!";
                else
                    document.getElementById("result").innerHTML = "It looks like you're a genious! You defeated "+computerName+"!";
                break;
            
            case "paper":
                if(usrChoice == "paper")
                    document.getElementById("result").innerHTML = "It looks like you and "+computerName+" think as one!";
                else if(usrChoice == "rock" || usrChoice == "spock")
                    document.getElementById("result").innerHTML = computerName+" defeated you!";
                else
                    document.getElementById("result").innerHTML = "It looks like you're a genious! You defeated "+computerName+"!";
                break;
            
            case "scissors":
                if(usrChoice == "scissors")
                    document.getElementById("result").innerHTML = "It looks like you and "+computerName+" think as one!";
                else if(usrChoice == "paper" || usrChoice == "lizard")
                    document.getElementById("result").innerHTML = computerName+" slashed you into pieces!";
                else
                    document.getElementById("result").innerHTML = "It looks like you're a genious! You defeated "+computerName+"!";
                break;
            
            case "lizard":
                if(usrChoice == "lizard")
                    document.getElementById("result").innerHTML = "It looks like you and "+computerName+" think as one!";
                else if(usrChoice == "paper" || usrChoice == "spock")
                    document.getElementById("result").innerHTML = computerName+"'s lizard was to strong for you!";
                else
                    document.getElementById("result").innerHTML = "It looks like you're a genious! You defeated "+computerName+"!";
                break;
            
            case "spock":
                if(usrChoice == "spock")
                    document.getElementById("result").innerHTML = "It looks like you both are lovers of teh great Spock!";
                else if(usrChoice == "scissors" || usrChoice == "rock")
                    document.getElementById("result").innerHTML = computerName+" crushed you!";
                else
                    document.getElementById("result").innerHTML = "It looks like you're a genious! You defeated "+computerName+"!";
                break;
    }
}