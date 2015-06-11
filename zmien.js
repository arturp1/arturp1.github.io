(function($){
function zmien(begin,nowy)
    {
        if(nowy==5) nowy=1;
        var aktualna = begin;
        if(aktualna==1){var zmiana =4}
        if(aktualna==2){var zmiana =3}
        if(aktualna==3){var zmiana =2}
        if(aktualna==4){var zmiana =1}
        $('#'+zmiana).attr('src', 'Pictures/obraz'+nowy+'.jpg'); 
        $('#phoneCarousel .next').click(); 
        if(aktualna==4){
            aktualna =1;
        }
        else{
            aktualna++;
        }
        nowy++;
        window.setTimeout( 'zmien('+aktualna+','+nowy+')', 4000 ); 
    }
})(jQuery);