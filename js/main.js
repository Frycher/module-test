


const mainEvent = {

  openMenuMobile: () => {
    $('.header .header__main .menu-btn').on('click', (e) => {
      const $this = $(e.currentTarget);
      const headerList = $this.closest('.header__main').find('.header__menu');
      $this.toggleClass('open');
      if ($this.hasClass('open')) {
        headerList.css('display', 'flex');
        $('body').css('overflow', 'hidden')
      } else {
        headerList.hide();
        $('body').css('overflow', 'auto')
      }
    })
  },
  currentLink: () => {
    if(window.innerWidth < 992) {
      $('.header .header__menu .menu__item .menu__link').on('click', (e) => {
        const $this =  $(e.currentTarget);
        $this.closest('.header__menu').hide();
        $this.closest('.header__main').find('.menu-btn').removeClass('open');
        $('body').css('overflow', 'auto')
      })
    }
  }
  ,
  slidetInit: () => {
    $('.providing__wrapper').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
}

mainEvent.openMenuMobile();
mainEvent.currentLink();
mainEvent.slidetInit();