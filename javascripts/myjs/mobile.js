
// ME-MOBILE-BUTTON CLICKED
$(".me_mob_button").click(function(){
    $(".me_mob_button").addClass("active"); // ADD CLASS ACTIVE (FOR THE SCALE EFFECT);
    $(".me").addClass('active_section');
    $(".mobile_button").addClass('transparent');
    $(".contact").addClass('transparent');
    
    $(".cerrar").addClass("no_transparent");

});

// WEB-MOBILE-BUTTON CLICKED
$(".web_mob_button").click(function(){
    $(".web_mob_button").addClass("active"); // ADD CLASS ACTIVE (FOR THE SCALE EFFECT);
    $(".web").addClass('active_section');
    $(".mobile_button").addClass('transparent');
    $(".contact").addClass('transparent');
    $(".cerrar").addClass("no_transparent");
});

// GRAPHIC-MOBILE-BUTTON CLICKED
$(".graphic_mob_button").click(function(){
    $(".graphic_mob_button").addClass("active"); // ADD CLASS ACTIVE (FOR THE SCALE EFFECT);
    $(".graphic").addClass('active_section');
    $(".mobile_button").addClass('transparent');
    $(".contact").addClass('transparent');
    $(".cerrar").addClass("no_transparent");
});

// SKILLS-MOBILE-BUTTON CLICKED
$(".skills_mob_button").click(function(){
    $(".skills_mob_button").addClass("active"); // ADD CLASS ACTIVE (FOR THE SCALE EFFECT);
    $(".skills").addClass('active_section');
    $(".mobile_button").addClass('transparent');
    $(".contact").addClass('transparent');
    $(".cerrar").addClass("no_transparent");
});

// CV-MOBILE-BUTTON CLICKED
$(".cv_mob_button").click(function(){
    $(".cv_mob_button").addClass("active"); // ADD CLASS ACTIVE (FOR THE SCALE EFFECT);
    $(".cv").addClass('active_section');
    $(".mobile_button").addClass('transparent');
    $(".contact").addClass('transparent');
    $(".cerrar").addClass("no_transparent");
});

// LEARNING-MOBILE-BUTTON CLICKED
$(".learning_mob_button").click(function(){
    $(".learning_mob_button").addClass("active"); // ADD CLASS ACTIVE (FOR THE SCALE EFFECT);
    $(".learning").addClass('active_section');
    $(".mobile_button").addClass('transparent');
    $(".contact").addClass('transparent');
    $(".cerrar").addClass("no_transparent");
});


// CERRAR BUTTON CLICKED
$(".cerrar").click(function(){
    $(".mobile_button").removeClass("active"); // ADD CLASS ACTIVE (FOR THE SCALE EFFECT);
    $(".mobile_button").removeClass('transparent');
    $(".contact").removeClass('transparent');
    $("section").removeClass('active_section');
    $(".cerrar").removeClass("no_transparent");
});


