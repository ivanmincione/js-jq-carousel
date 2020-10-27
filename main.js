// .ready => tutto ciò inserito al suo interno viene eseguito dopo il completo caricamento della pagina.

$(document).ready(function() {

    // click sull'icona arrow-right
    $(".arrow-right i").click(function() {
        // variabile per salvare l'immagine con class active
        var imgActive  = $("img.active");
        // rimozione della class active sull'immagine
        imgActive.removeClass("active");
        // è presente più di un immagine??
        if (imgActive.next("img").length == 1) {
            imgActive.next("img").addClass("active");

        } else {
            $(".slides :first-child").addClass("active");
        }
    });


    // procedimento uguale per il click sull'icona arrow-left modificando con prev e last-of-type.

    $(".arrow-left i").click(function() {
        // variabile per salvare l'immagine con class active
        var imgActive  = $("img.active");
        // rimozione della class active sull'immagine
        imgActive.removeClass("active");
        // è presente più di un immagine??
        if (imgActive.prev("img").length == 1) {
            imgActive.prev("img").addClass("active");
        } else {
            $(".slides img:last-of-type").addClass("active");
        }
    });





});
