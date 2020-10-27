// .ready => tutto ciò inserito al suo interno viene eseguito dopo il completo caricamento della pagina.

$(document).ready(function() {

    // click sull'icona arrow-right
    $(".arrow-right i").click(function() {
        // variabile per salvare l'immagine con class active
        //  variabile per salvare il cerchio con classe active
        var circleActive = $(".circle i.active");
        var imgActive  = $("img.active");
        // rimozione della class active sull'immagine e sul circle per non sovrapporle
        imgActive.removeClass("active");
        circleActive.removeClass("active");
        // è presente più di un immagine??
        if (imgActive.next("img").length == 1) {
            imgActive.next("img").addClass("active");
            circleActive.next("i").addClass("active");
        } else {
            $(".slides :first-child").addClass("active");
            $(".circle :first-child").addClass("active");

        }
    });


    // procedimento uguale per il click sull'icona arrow-left modificando con prev e last-of-type.

    $(".arrow-left i").click(function() {
        // variabile per salvare l'immagine con class active
        var imgActive  = $("img.active");
        //  variabile per salvare il cerchio con classe active
        var circleActive = $(".circle i.active");
        // rimozione della class active sull'immagine e sul circle per non sovrapporle
        imgActive.removeClass("active");
        circleActive.removeClass("active");
        // è presente più di un immagine??
        if (imgActive.prev("img").length == 1) {
            imgActive.prev("img").addClass("active");
            circleActive.prev("i").addClass("active");
        } else {
            $(".slides img:last-of-type").addClass("active");
            $(".circle i:last-of-type").addClass("active");

        }
    });

});
