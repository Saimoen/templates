var typed = new Typed('.typed', {
    strings: ["Bonjour à tous et à toutes", "je me présente je m'appelle Grégory "," j'ai découvert le code lors de mon année de STI2D, depuis j'apprends en autodidacte le code."],
    typeSpeed: 20,
    backSpeed: 10,
    fadeOut: true,
    loop: true
  });

  //Compteur live

  let compteur = 0;

  $(window).scroll(function(){
      const top = $('.counter').offset().top -
      window.innerHeight;

      if (compteur == 0 && $(window).scrollTop()>top){
          $('.counter-value').each(function(){
              let $this = $(this),
              countTo = $this.attr('data-count');
              $({
                  countNum : $this.text()
              }).animate({
                  countNum : countTo
              },
              {
                  duration: 10000,
                  easing: 'swing',
                  step: function(){
                      $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                      $this.text(this.contNum);
                  }
              });
          });
          compteur = 1;
      }
  });