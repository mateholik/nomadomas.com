import SmoothScroll from 'smooth-scroll'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../scss/style.scss'



window.addEventListener('load', () => {

  document.getElementById('loader').style.display = 'none';

  mobNav()

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    toggleActions: 'play pause resume none',
    start: 'top 85%',
    end: 'bottom 5%'
  });
  if (document.body.classList.contains('homepage')) {
    homepageAnimations()
  } else if (document.body.classList.contains('team')) {
    console.log('komanda');
  }

  scroll()

})







function scroll() {
  //SCROLL
  var scroll = new SmoothScroll('nav a[href*="#"], .logo, #cta', {
    speed: 300,
    speedAsDuration: true,
    offset: function (anchor, toggle) {
      if (window.innerWidth <= 900) {
        return 40;
      } else {
        return 80;
      }
    },
    emitEvents: true
  });
  // Listen for scroll events
  document.addEventListener('scrollStart', logScrollEvent, false);
  // Log scroll events
  var logScrollEvent = function (event) {
    const links = document.querySelectorAll('nav.desktop a')
    links.forEach(el => {
      el.classList.remove('active')
    })
    event.detail.toggle.classList.add('active')
  };
}
function mobNav() {
  const burger = document.getElementById('burger')
  const mobMenu = document.getElementById('mobMenu')
  const hrefs = mobMenu.querySelectorAll('a')

  burger.addEventListener('click', function () {
    burger.classList.toggle('is-active')
    mobMenu.classList.toggle('opened')
    document.body.classList.toggle('blur')
  })

  hrefs.forEach(el => {
    el.addEventListener('click', function () {
      burger.classList.remove('is-active')
      mobMenu.classList.remove('opened')
      document.body.classList.remove('blur')
    })
  })

  if (window.innerWidth > 900) {
    const heroHeight = document.getElementsByClassName('hero').length != 0 ? document.getElementsByClassName('hero')[0].offsetHeight : '200'

    const header = document.querySelector('header .wrap')
    const logo = document.querySelector('header .wrap .logo')
    const submenu = document.querySelector('header .submenu')

    window.addEventListener('scroll', function () {
      if (window.scrollY >= heroHeight) {
        header.classList.add('shrink')
        logo.classList.add('shrink')
        submenu.style.top = '8rem'
      } else {
        header.classList.remove('shrink')
        logo.classList.remove('shrink')
        submenu.style.top = '10rem'
      }
    })
  }
}
function homepageAnimations() {

  //hero
  gsap.from('#heroLeft', {
    duration: 0.5, opacity: 0, x: '-100%', ease: 'ease', scrollTrigger: '#heroLeft'
  })
  gsap.from('#heroRight', {
    duration: 0.5, opacity: 0, x: '100%', ease: 'ease', scrollTrigger: '#heroLeft'
  })
  gsap.from('#heroBottom', {
    duration: 0.5, opacity: 0, y: '100%', ease: 'ease', scrollTrigger: '#heroLeft'
  })

  //about
  gsap.from('.about h2', {
    duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce', scrollTrigger: '.about h2'
  })
  const aboutItems = gsap.utils.toArray('.about .item')
  aboutItems.forEach((item, i) => {
    if (i % 2 == 0) {
      gsap.from(item, {
        duration: 0.5, opacity: 0, x: '-50%', ease: 'ease', delay: i * 0.2,
        scrollTrigger: {
          trigger: item,
        },
      })
    } else {
      gsap.from(item, {
        duration: 0.5, opacity: 0, x: '50%', ease: 'ease', delay: i * 0.2,
        scrollTrigger: {
          trigger: item,
        },
      })
    }
  })

  //services
  gsap.from('.services h2', {
    duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce',
    scrollTrigger: '.services h2'
  })
  gsap.from('.services .text', {
    duration: 0.5, opacity: 0, x: '-100%', ease: 'ease',
    scrollTrigger: '.services .text'
  })
  const services = gsap.utils.toArray('.services .item')
  services.forEach((item, i) => {
    gsap.from(item, {
      duration: 0.5, opacity: 0, x: '-20%', ease: 'ease', delay: i * 0.2,
      scrollTrigger: {
        trigger: item,
      },
    })
  })

  //newsletter
  gsap.from('.newsletter h2', {
    duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce', scrollTrigger: '.newsletter h2'
  })
  gsap.from('.newsletter .left', {
    duration: 0.5, opacity: 0, x: '-100%', ease: 'ease', scrollTrigger: '.newsletter .left'
  })
  gsap.from('.newsletter .right', {
    duration: 0.5, opacity: 0, x: '100%', ease: 'ease', scrollTrigger: '.newsletter .right'
  })

  //whyUs
  gsap.from('.whyus h2', {
    duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce', scrollTrigger: '.whyus h2'
  })
  const whyItems = gsap.utils.toArray('.whyus .item')
  whyItems.forEach((item, i) => {
    if (i % 2 == 0) {
      gsap.from(item, {
        duration: 0.5, opacity: 0, x: '-50%', ease: 'ease', delay: i * 0.2,
        scrollTrigger: {
          trigger: item,
        },
      })
    } else {
      gsap.from(item, {
        duration: 0.5, opacity: 0, x: '50%', ease: 'ease', delay: i * 0.2,
        scrollTrigger: {
          trigger: item,
        },
      })
    }
  })

  //partners
  gsap.from('.partners h2', {
    duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce', scrollTrigger: '.partners h2'
  })
  const partners = gsap.utils.toArray('.partners .item')
  partners.forEach((item, i) => {
    gsap.from(item, {
      duration: 0.5, opacity: 0, x: '-20%', ease: 'ease', delay: i * 0.07,
      scrollTrigger: {
        trigger: item,
      },
    })
  })

  //contact
  gsap.from('.contact h2', {
    duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce', scrollTrigger: '.contact h2'
  })
  const inputs = gsap.utils.toArray('.contact .input-wrap')
  inputs.forEach((item, i) => {
    gsap.from(item, {
      duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce', delay: i * 0.2,
      scrollTrigger: {
        trigger: item,
      },
    })
  })
  gsap.from('.submit', {
    duration: 0.5, opacity: 0, y: '-100%', ease: 'bounce', scrollTrigger: '.contact .input-wrap', delay: 1
  })
}