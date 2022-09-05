function addClass(elements,className){
    elements.forEach(element => {element.classList.add(className);});
}
$(document).ready(function(){
    // init bootpag
    
    $('.demo4_top').bootpag({
        total: 11,
        page: 1,
        maxVisible: 5,
        leaps: true,
        firstLastUse: true,
        first: '←',
        last: '→',
        wrapClass: 'pagination',
        activeClass: 'active',
        disabledClass: 'disabled',
        nextClass: 'next',
        prevClass: 'prev',
        lastClass: 'last',
        firstClass: 'first'
    }).on("page", function(event, num){
        $("#content").html("Page " + num);
        addClass(document.querySelectorAll(".isotope"),"hide-all");
        const pagen = document.querySelector("#page"+num);
        pagen.classList.remove("hide-all");
        // or some ajax content loading...
    }); 
});	