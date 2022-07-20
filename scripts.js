window.onscroll = function (e) 
{  
    const _page1 = document.getElementById("page1")
    const _page2 = document.getElementById("page2")
    const _page3 = document.getElementById("page3")
    const _navBar = document.getElementById("navBar");

    var scrollVal = document.documentElement.scrollTop

    if (scrollVal > 20)
    {
        _navBar.classList.add ("smallerNav")
    } 
    else
    {
        if (_navBar.classList.contains ("smallerNav"))
        {
            _navBar.classList.remove ("smallerNav")
        }
    }

    if (scrollVal < 2999){
        console.log ("PAGE1")

        _page1.classList.add ("activePage")
        _page2.classList.remove ("activePage")
        _page3.classList.remove ("activePage")
    }

    if (scrollVal > 3000 && scrollVal < 5139){
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