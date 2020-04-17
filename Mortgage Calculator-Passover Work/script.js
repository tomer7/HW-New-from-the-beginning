shumHakeren.addEventListener (
    'keyup',
    checkShumHakeren
)

function checkShumHakeren(event)
{
    let input = event.target
    let error = document.querySelector('#shumHakerenError')
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

tkufa.addEventListener (
    'keyup',
    checkTkufa
)

function checkTkufa(event)
{
    let input = event.target
    let error = document.querySelector('#tkufaError')
    let value = parseInt(input.value)
    if (!(value > 0 && value <= 40))
    {
        input.style.border = '2px dashed red'
        error.innerHTML = 'יש להזין בין 1 - 40 שנים'
    }
    else
    {
        input.style.border = ''
        error.innerHTML = ''
    }
}

ribit.addEventListener (
    'keyup',
    checkRibit
)

function checkRibit(event)
{
    let input = event.target
    let error = document.querySelector('#ribitError')
    let value = Number(input.value)
    if (!(value > 0 && value <= 100))
    {
        input.style.border = '2px dashed red'
        error.innerHTML = ' % יש להזין בין 1 - 100'
    }
    else
    {
        input.style.border = ''
        error.innerHTML = ''
    }

}

kolHodesh.addEventListener (
    'keyup',
    checkKolHodesh
)

function checkKolHodesh(event)
{
    let input = event.target
    let error = document.querySelector('#kolHodeshError')
    let value = Number(input.value)
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