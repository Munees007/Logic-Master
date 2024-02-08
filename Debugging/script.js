var submit = document.getElementById("btnsub");

var answers ={
    "q1":"Q1D",
    "q2":"Q2C",
    "q3":"Q3B",
    "q4":"Q4B",
    "q5":"Q5D"
}
var ids = [
    {
        "q1id1":document.getElementById("Q1A"),
        "q1id2":document.getElementById("Q1B"),
        "q1id3":document.getElementById("Q1C"),
        "q1id4":document.getElementById("Q1D"),
    },
    {
        "q2id1":document.getElementById("Q2A"),
        "q2id2":document.getElementById("Q2B"),
        "q2id3":document.getElementById("Q2C"),
        "q2id4":document.getElementById("Q2D"),
    },
    {
        "q3id1":document.getElementById("Q3A"),
        "q3id2":document.getElementById("Q3B"),
        "q3id3":document.getElementById("Q3C"),
        "q3id4":document.getElementById("Q3D"),
    },
    {
        "q4id1":document.getElementById("Q4A"),
        "q4id2":document.getElementById("Q4B"),
        "q4id3":document.getElementById("Q4C"),
        "q4id4":document.getElementById("Q4D"),
    },
    {
        "q5id1":document.getElementById("Q5A"),
        "q5id2":document.getElementById("Q5B"),
        "q5id3":document.getElementById("Q5C"),
        "q5id4":document.getElementById("Q5D"),
    }
]
var options = {
    "qo1":document.getElementById("q1option"),
    "qo2":document.getElementById("q2option"),
    "qo3":document.getElementById("q3option"),
    "qo4":document.getElementById("q4option"),
    "qo5":document.getElementById("q5option")
}

function ques1()
{
        if(ids[0].q1id1.checked||ids[0].q1id2.checked||ids[0].q1id3.checked||ids[0].q1id4.checked)
        {
            return true;
        }
        else
        {
            return false;
        }
}
function ques2()
{
        if(ids[1].q2id1.checked||ids[1].q2id2.checked||ids[1].q2id3.checked||ids[1].q2id4.checked)
        {
            return true;
        }
        else
        {
            return false;
        }
}
function ques3()
{
        if(ids[2].q3id1.checked||ids[2].q3id2.checked||ids[2].q3id3.checked||ids[2].q3id4.checked)
        {
            return true;
        }
        else
        {
            return false;
        }
}
function ques4()
{
        if(ids[3].q4id1.checked||ids[3].q4id2.checked||ids[3].q4id3.checked||ids[3].q4id4.checked)
        {
            return true;
        }
        else
        {
            return false;
        }
}
function ques5()
{
        if(ids[4].q5id1.checked||ids[4].q5id2.checked||ids[4].q5id3.checked||ids[4].q5id4.checked)
        {
            return true;
        }
        else
        {
            return false;
        }
}

function IncreaseScore()
{
    var score=0;
    if(ids[0].q1id4.checked)
    {
        score++;
    }
    if(ids[1].q2id3.checked)
    {
        score++;
    }
    if(ids[2].q3id2.checked)
    {
        score++;
    }
    if(ids[3].q4id2.checked)
    {
        score++;
    }
    if(ids[4].q5id4.checked)
    {
        score++;
    }
    localStorage.setItem("Score",score);
}
submit.addEventListener('click',function()
{
    if((ques1()==true)&&(ques2()==true)&&(ques3()==true)&&(ques4()==true)&&(ques5()==true))
    {
        IncreaseScore();
        window.location.href = 'Question1.html';
    }
    else
    {
        window.alert("Answer all the Question");
    }
    
    //window.alert("What");
}

);
// window.history.forward(); 
// function noBack() { 
//     window.history.forward(); 
// } 
history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };