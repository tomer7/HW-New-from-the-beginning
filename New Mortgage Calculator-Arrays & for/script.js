let urInputs = [
    shumHakeren ,
    tkufa ,
    ribit ,
    kolHodesh 
]
let errorArray = [
    document.querySelector('#shumHakerenError') ,
    document.querySelector('#tkufaError') ,
    document.querySelector('#ribitError') ,
    document.querySelector('#kolHodeshError')
]

for ( let i=0 ; i < urInputs.length ; i++)
{
        urInputs[i].addEventListener (
            'keyup',
            check
        )

        function check(event)
        {
        let input = event.target
        let error = errorArray[i]
        let value = parseInt(input.value)
        if (isNaN(value))
            {
            input.style.border = '2px dashed red'
            error.innerHTML = ' יש להזין ערך מספרי שלם בלבד'
            }
        else
            {
            input.style.border = ''
            error.innerHTML = ''
            }
        }
}

buttonOfCalc.addEventListener (
    'click',
    calc
)

function calc() 
{
    let shumHakeren = parseInt(document.querySelector('#shumHakeren').value)
    let tkufa = parseInt(document.querySelector('#tkufa').value)
    let ribit = Number(document.querySelector('#ribit').value)
    let kolHodesh = parseInt(document.querySelector('#kolHodesh').value)
    let resOfMashcanta = document.querySelector('#resOfMashcanta')

    if ( isNaN(shumHakeren) || isNaN(tkufa) || isNaN(ribit) || isNaN(kolHodesh))
    {
        resOfMashcanta.innerHTML = ''
        kolHodeshRes.innerHTML = ''
    }
    else
    {
        let tkufaInMonths = tkufa * 12  // המרה לחודשים לתוך משתנה חדש
        lastRes = parseInt(shumHakeren * ( 100 + ribit) / 100 / tkufaInMonths)
        resOfMashcanta.innerHTML = lastRes + ' < -- זה יהיה ההחזר החודשי שלך'
        
            if ( lastRes > kolHodesh )
            {
                kolHodeshRes.innerHTML = ' סכום גבוה, תנסה להקטין את הקרן או תגדיל את התקופה'
            }
            else
            {
                kolHodeshRes.innerHTML = ' הסכום נמוך, הינך יכול לשלם אותו'
            }
    }
}