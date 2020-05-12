let menuLinks =     
[
{name: 'Home', url :'/index.html'} ,
{name: 'Shop', url :'/shop.html'} ,
{name: 'Contacts', url :'/contacts.html'} ,
]

let menuItems = document.createElement('ul')
menuItems.id = 'menuItemsID' // ID הוספת
menu.appendChild(menuItems)
for (let i = 0 ; i < menuLinks.length ; i++)
{
    let theSpot = menuLinks[i]
    let liItems = document.createElement('li')
    liItems.innerHTML += '<a href="'+ theSpot.url +'">'+ theSpot.name +'</a>'
    menuItems.appendChild(liItems)
}

