function calc(event)
{
    let operator = document.querySelector('#operator').value
    let fNum = Number(document.querySelector('#fNum').value)
    let sNum = Number(document.querySelector('#sNum').value)
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
    let value = Number ( input.value )

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


btn.addEventListener (
    'click',
    calc
)


fNum.addEventListener (
    'keyup',
    beforeCheckInputFNum
)


sNum.addEventListener (
    'keyup',
    beforeCheckInputSNum
)