button.addEventListener(
    'click',
    theResult
)

function theResult(event)
{
    result.innerHTML = ''
    result.style.display = ''

    let theCounter = Number(numberOfUser.value)



    for (let i=0; i < theCounter; i++)
    {

        if (result.style.display != 'block')
        {
            result.style.display = 'block'
        }


        let item = 'number ' + Number(i+1)

        result.innerHTML += '<li>' + item + '</li>'
    }
}