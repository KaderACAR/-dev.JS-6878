function openCity(event,cityName){

    var city, tabList, tabComment;  // burada neden const'u kabul etmedi araştır!!

    tabComment = document.getElementsByClassName("tabComment");
    for(city = 0; city < tabComment.length; city++){
        tabComment[city].style.display ="none";
    }
    tabList = document.getElementsByClassName("tabList");
    for(city = 0; city < tabList.length; city++){
        tabList[city].className = tabList[city].className.replace("active", "");

    }
    document.getElementById(cityName).style.display = "block"; event.currentTarget.className += "active;"
}