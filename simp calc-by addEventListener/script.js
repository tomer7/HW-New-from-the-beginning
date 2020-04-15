function calc(event)
{
    let operator = document.querySelector('#operator').value
    let fNum = parseFloat(document.querySelector('#fNum').value)
    let sNum = parseFloat(document.querySelector('#sNum').value)
    let res = document.querySelector('#res')

    if ( isNaN(fNum) || isNaN(sNum) )
    res.innerHTML = ''
    else
    {
        switch (true)
        {
        case operator == '+':
            res.innerHTML = fNum + sNum
            break;
        case operator == '-':
            res.innerHTML = fNum - sNum
            break;
        case operator == '*':
            res.innerHTML = fNum * sNum
            break;
        case operator == '/':
                res.innerHTML = fNum / sNum
            break;
        }
    }
}

function beforeCheckInputFNum(event)
{
let input = event.target
let errorParameter = document.querySelector('#fError')
checkInput(input, errorParameter)
}


function beforeCheckInputSNum(event)
{
let input = event.target
let errorParameter = document.querySelector('#sError')
checkInput(input, errorParameter)
}

function checkInput(input, errorParameter)
{
    let value = parseFloat ( input.value )

    if (isNaN(value))
    {
        input.style.border = '2px solid red'
        errorParameter.innerHTML = 'הערך שהוזן אינו מספר'
        return false
    }
    else
    {
        input.style.border = ''
        errorParameter.innerHTML = ''
        return true
    }
}

let btn = document.querySelector('#btn')
btn.addEventListener (
    'click',
    calc
)

let fNum = document.querySelector('#fNum')
fNum.addEventListener (
    'keyup',
    beforeCheckInputFNum
)

let sNum = document.querySelector('#sNum')
sNum.addEventListener (
    'keyup',
    beforeCheckInputSNum
)