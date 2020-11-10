// .ready => tutto ciò inserito al suo interno viene eseguito dopo il completo caricamento della pagina.

$(document).ready(function() {

    // click sull'icona arrow-right
    $(".arrow-right i").click(function() {
        arrowRightClick();
    });

    // click sull'icona arrow-left
    $(".arrow-left i").click(function() {
        arrowLeftClick();
    });

    // click sul circle e attivazione immagine corrispondente

    // intercetto il click su un pallino
    $('.circle i').click(function() {
        // recupero il pallino corrente
        var pallino_corrente = $('.circle i.fas');
        // tolgo la classe fas al pallino corrente e aggiungo far
        // pallino_corrente.removeClass('fas').addClass('far');
        pallino_corrente.toggleClass('fas far');
        // aggiungo la classe fas e tolgo la classe far al pallino su cui l'utente ha cliccato
        $(this).toggleClass('fas far');
        // recupero l'immagine corrente
        var img_corrente = $('img.active');
        // tolgo la classe active all'immagine corrente
        img_corrente.removeClass('active');
        // recupero il numero del pallino su cui l'utente ha cliccato
        var indice_pallino = $(this).index();
        // recupero l'immagine corrispondente allo stesso numero
        var nuova_img = $('.slides img').eq(indice_pallino);
        // assegno la classe active alla nuova immagine
        nuova_img.addClass('active');
        // var indice_img = indice_pallino + 1;
        // var selettore = '.slides img:nth-child(' + indice_img + ')';
        // $(selettore).addClass('active');
    });


});


// ----------------Funzioni----------------

function arrowRightClick(){
    // variabile per salvare l'immagine con class active
    //  variabile per salvare il cerchio con classe active
    var imgActive  = $("img.active");
    var circleActive = $(".circle i.active");
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
}


function arrowLeftClick() {
    // variabile per salvare l'immagine con class active
    //  variabile per salvare il cerchio con classe active
    var imgActive  = $("img.active");
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
}
