function theCalculating(weight, height)
{
    let result = weight / (height * height) * 10000
    return result
}

function checkForTheWeight(event)
{
    let theTarget = event.target
    checkTheValue (theTarget, 30, 200, 'errorInWeight')
}

function checkForTheHeight(event)
{
    let theTarget = event.target
    checkTheValue (theTarget, 120, 220, 'errorInHeight')
}
function checkTheValue (parameter, min, max, theError)
{

        let ErrorNew = document.getElementById(theError)

        if (parameter.value >= min && parameter.value <=max )
        {
            ErrorNew.style.display = 'none'
            parameter.style.border = ''
            return true
        }
        else
        {
            ErrorNew.style.display = 'block'
            parameter.style.border = '1px solid red'
            return false
        }
}

function showBMI()
{
    let resultDiv = document.getElementById('yourResult')
    let weight = document.getElementById('valueOfWeight')
    let height = document.getElementById('valueOfHeight')

    resultDiv.innerHTML = ''

    if (
        checkTheValue (weight, 30, 200, 'errorInWeight') &&
        checkTheValue (height, 120, 220, 'errorInHeight')
    )
    {
    let yourBmiResult = theCalculating (weight.value , height.value )

    switch (true)
    {
  case yourBmiResult < 18.5: 
      resultDiv.innerHTML = " תת משקל "  + yourBmiResult; break;
  case yourBmiResult < 25 :
      resultDiv.innerHTML = " משקל תקין "  + yourBmiResult; break;
  case yourBmiResult < 30:
      resultDiv.innerHTML = " משקל עודף "  + yourBmiResult;  break;
  case yourBmiResult < 35:
      resultDiv.innerHTML = " השמנה דרגה 1 "  + yourBmiResult;  break;
  case yourBmiResult < 40:
      resultDiv.innerHTML = " השמנה דרגה 2 "  + yourBmiResult;  break;
  default:
      resultDiv.innerHTML = " השמנה דרגה 3 "  + yourBmiResult;  break;
   }
}

}

let buttonDiv = document.getElementById('buttonDiv')
buttonDiv.addEventListener (
    'click',
    showBMI
)

let valueOfWeight = document.getElementById('valueOfWeight')
valueOfWeight.addEventListener (
    'change',
    checkForTheWeight
)
let valueOfHeight = document.getElementById('valueOfHeight')
valueOfHeight.addEventListener (
    'change',
    checkForTheHeight
)