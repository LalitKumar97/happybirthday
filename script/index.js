

window.onload = () => {
    showLoader();
  };
  function showLoader() {
    const bodyTag = document.querySelector("body");
    const loaderTag = document.createElement("img");
    loaderTag.setAttribute("id", "loader");
    loaderTag.src =
      "https://media3.giphy.com/media/25PkdXYzOj4cmRshNH/giphy.gif?cid=790b7611a9d2659138b4c05f6940dab98c46008d86111e20&rid=giphy.gif&ct=g";
    loaderTag.style.height = 470 + "px";
    loaderTag.style.width = 500 + "px";
    loaderTag.style.position = "absolute";
    loaderTag.style.top = 55 + "px";
    loaderTag.style.left = 415 + "px";
    bodyTag.appendChild(loaderTag);

    const heading = document.createElement("h2");
    heading.setAttribute("class", "text-center");
    heading.style.position = "absolute";
    heading.style.top = 550 + "px";
    heading.style.left = 550 + "px";
    heading.innerText = "Pls Wait . . . .";
    bodyTag.appendChild(heading);
    const heading1 = document.createElement("h2");
    heading1.setAttribute("class", "text-center");
    heading1.style.position = "absolute";
    heading1.style.top = 64 + "px";
    heading1.style.left = 59 + "px";
    heading1.style.color  ="#80b3ff";
    heading1.innerText = "Happy Birthday bro.";
    bodyTag.appendChild(heading1);
   
    setTimeout(displayContent, 4000);
  }
  // function play() {
  //   document.getElementById("music").play();
    
  // }

  function hide(){
    document.getElementById("loader").style.display="none"
    
  }

  function displayContent(){
    hide();

$('#owl-slider1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
     "<i class='fa fa-angle-left'</i>",
     "<i class='fa fa-angle-right'</i>"
    ],
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true
        }
    }
});
  }
