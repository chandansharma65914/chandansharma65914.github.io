$(document).ready(function () {
  $(window).scroll(function () {
    // sticky nav-menu on scroll script
    if (this.scrollY > 20) {
      $(".nav-menu").addClass("sticky");
    } else {
      $(".nav-menu").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $("#nav-menu .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/nav-menu script
  $(".menu-btn").click(function () {
    $("#nav-menu .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Back-End Developer","Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Back-End Developer", "Front-End Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

function sendEmail(){
  const mess=
   `Name : ${document.getElementById("name").value}
   <br>
    Email: ${document.getElementById("email").value}
     <br>
    Subject: ${document.getElementById("subject").value}
    <br>
    Message: ${document.getElementById("content").value}
   
   `
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "chandansharma35781@gmail.com",
    Password : "35C0B250A52456B4C03D05859A6261EDAFFF",
    To : 'chandansharma65914@gmail.com',
    From : "chandansharma35781@gmail.com",
    Subject : document.getElementById("subject").value,
    Body : mess
}).then(
  message => alert(message)
);
}

