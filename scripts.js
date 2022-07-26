window.onscroll = function (e) 
{  
    const _page1 = document.getElementById("page1")
    const _page2 = document.getElementById("page2")
    const _page3 = document.getElementById("page3")
    const _navBar = document.getElementById("navBar")
    var scrollVal = document.documentElement.scrollTop
    
    const _toTopIcon = document.getElementById('goToTopDiv')

    if (scrollVal > 19)
    {
        _navBar.classList.add ("smallerNav")
        const _navIcons = document.getElementsByClassName("navIcon")
        for (const _icons of _navIcons)
        {
            _icons.style.display = 'none'
            _toTopIcon.classList.add ('goToTopVisible')
        }
    } 
    else
    {
        if (_navBar.classList.contains ("smallerNav"))
        {
            _navBar.classList.remove ("smallerNav")
           
            const _navIcons = document.getElementsByClassName("navIcon")

            for (const _icons of _navIcons)
            {
                _icons.style.display = 'block'
                _toTopIcon.classList.remove ('goToTopVisible')

            }
        }
    }

    if (scrollVal < 21)
    {
        _page1.classList.remove ("activePage")
        _page2.classList.remove ("activePage")
        _page3.classList.remove ("activePage")
    }

    if (scrollVal > 20 && scrollVal < 3001){
        console.log ("PAGE1")

        _page1.classList.add ("activePage")
        _page2.classList.remove ("activePage")
        _page3.classList.remove ("activePage")
    }

    if (scrollVal > 3000 && scrollVal < 5141){
        console.log ("PAGE2")

        _page2.classList.add ("activePage")
        _page1.classList.remove ("activePage")
        _page3.classList.remove ("activePage")
    }

    if (scrollVal > 5140){
        console.log ("PAGE3")  

        _page3.classList.add ("activePage")
        _page2.classList.remove ("activePage")
        _page1.classList.remove ("activePage")
    }
} 

function MoveToTop()
{
    document.documentElement.scrollTop = 0
}

function MoveToSection1()
{
    document.documentElement.scrollTop = 21
}

function MoveToSection2()
{
    document.documentElement.scrollTop = 3001
}

function MoveToSection3()
{
    document.documentElement.scrollTop = 5141
}