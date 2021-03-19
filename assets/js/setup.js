// cAROUSEL 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//DROPDOWN
$("#grupos").hover(function(){
    $("#conteudo").show(); //quando clica no input mostra o conteudo
  });
  
  $("body, #aplicar").click(function(){
    $("#conteudo").hide(); //quando aplica ou clica fora esconde
  });
  
  //este é preciso também para não esconder quando clica no grupos ou conteudo
  $("#grupos, #conteudo").click(function(e){
    e.stopPropagation(); 
  });
