
$(document).ready(events);
// Funcion que inicia todo
function events()
{
    // Aqui controlamos la funcion que debe llamar cada botón
    var element;
    element = $(".nav_top");    // GET THE HTML ELEMENT BY CLASS
    element.click(goToTop);     // CLICK EVENT
    element = $(".nav_web");    // GET THE HTML ELEMENT BY CLASS
    element.click(goToWeb);     // CLICK EVENT
    element = $(".nav_graphic");// GET THE HTML ELEMENT BY CLASS
    element.click(goToGraphic); // CLICK EVENT
    element = $(".nav_cv");     // GET THE HTML ELEMENT BY CLASS
    element.click(goToCv);      // CLICK EVENT
    element = $(".nav_skills"); // GET THE HTML ELEMENT BY CLASS
    element.click(goToSkills);  // CLICK EVENT
    element = $(".nav_learning");// GET THE HTML ELEMENT BY CLASS
    element.click(goToLearning); // CLICK EVENT
}
// FUNCIONES GENERALES ////////////////

/* Funcion que nos va a desplazar en medio segundo a
   la división que le indiquemos */
function goTo($div){
    $('html, body').animate({
        scrollTop: $("#"+$div).offset().top
    }, 1300);
}

// FUNCIONES DE BOTONES /////////////////////////

// ACTION WHEN WEB LINK IS CLICKED
function goToTop()
{
    // Come back to the top in 1 secone
    $("html, body").animate({scrollTop: 0}, 1000);
}

// ACTION WHEN WEB LINK IS CLICKED
function goToWeb()
{
    // Send the section and time to the animation
    goTo("web");
}

// ACTION WHEN GRAPHIC LINK IS CLICKED
function goToGraphic()
{
    // Send the section and time to the animation
    goTo("graphic");
}

// ACTION WHEN SKILLS LINK IS CLICKED
function goToSkills()
{
    // Send the section and time to the animation
    goTo("skills");
}

// ACTION WHEN CV LINK IS CLICKED
function goToCv()
{
    // Send the section and time to the animation
    goTo("cv");
}

// ACTION WHEN LEARNING LINK IS CLICKED
function goToLearning()
{
    // Send the section and time to the animation
    goTo("learning");
}
/*
// Back to top
function back_to_top()
{
    // Vuelve al principio en un segundo
    $("html, body").animate({scrollTop: 0}, 1000);
}

// Aparece la flechita de back to top cuando la pantalla esté más abajo de 330px
/*$(window).scroll(function () {
    if ($(window).scrollTop() > 330){
        $("#back_to_top").show(500);
    }else{
        $("#back_to_top").hide(500);
    }
});



$(window).scroll(function () {
    if ($(window).scrollTop() > 330){
        //$("#back_to_top").show(500);
        $('#back_to_top').css({
            'opacity'           : '' + 1 + '',
            '-webkit-transition': 'all 0.5s ease',
            '-moz-transition'   : 'all 0.5s ease',
            '-ms-transition'    : 'all 0.5s ease',
            '-o-transition'     : 'all 0.5s ease',
            'transition'        : 'all 0.5s ease'
        });
    }else{
       // $("#back_to_top").hide(500);
        $('#back_to_top').css({
            'opacity'           : '' + 0 + '',
            '-webkit-transition': 'all 0.5s ease',
            '-moz-transition'   : 'all 0.5s ease',
            '-ms-transition'    : 'all 0.5s ease',
            '-o-transition'     : 'all 0.5s ease',
            'transition'        : 'all 0.5s ease'
        });
    }
});

*/