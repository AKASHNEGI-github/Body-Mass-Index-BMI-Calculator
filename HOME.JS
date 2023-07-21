document.querySelector(".btn").addEventListener("click" , function()
{
    var clickSound = new Audio("sounds/click-sound.wav");
    clickSound.play();

    const heightValue = document.querySelector("#Height").value/100
    const weightValue = document.querySelector("#Weight").value
    const bmi = weightValue/(heightValue*heightValue);

    const bmiinput = document.querySelector("#bmi-result");
    bmiinput.value = bmi;

    if(bmi<18.5)
    {
        document.querySelector("#weight-condition").innerHTML = "Under Weight";
    }
    else if(bmi>=18.5 && bmi<=24.9)
    {
        document.querySelector("#weight-condition").innerHTML = "Normal Weight";
    }
    else if(bmi>=25 && bmi<=29.9)
    {
        document.querySelector("#weight-condition").innerHTML = "Over Weight";
    }
    else if(bmi>=30)
    {
        document.querySelector("#weight-condition").innerHTML = "Obesity";
    }
});