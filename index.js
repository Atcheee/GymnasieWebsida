$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

  function initMap() {
    const uluru = { lat: 59.44021760660158, lng: 18.063763597719138 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }