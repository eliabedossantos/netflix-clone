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
//DROPDOWN PROFILE
$("#groups1").hover(function(){
    $("#content1").show(); //quando clica no input mostra o conteudo
    $("#content2").hide();
  });
  
  $("body, #apply1").click(function(){
    $("#content1").hide(); //quando aplica ou clica fora esconde
  });
  //este é preciso também para não esconder quando clica no grupos ou conteudo
  $("#groups1, #content1").click(function(e){
    e.stopPropagation(); 
  });
 // DROPDOWN NOTIFY
 $("#groups2").hover(function(){
    $("#content2").show(); 
    $("#content1").hide();
  });
  
  $("body, #apply2").click(function(){
    $("#content2").hide();
  });
  $("#groups2, #content2").click(function(e){
    e.stopPropagation(); 
  });
  // SEARCH
  var widthsrc = document.querySelector(".searchinput");
  function verMais(){
      if(widthsrc.style.width == "0px"){
        widthsrc.style.width = "240px";
        document.getElementById("search").style.border = "1px solid #fff";
       
    }else{
        widthsrc.style.width = "0px";
        document.getElementById("search").style.border = "none";
    }
}

