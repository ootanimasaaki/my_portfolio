// JavaScript Document
$(document).ready(function () {
  "use strict";

  /*----------------------
  		LOAD 
    ----------------------*/

  /*ロードされたらTOPから*/
  $(function () {
    $('html,body').animate({
      scrollTop: 0
    }, '1');
  });


  /*----------------------
  		MENU 
    ----------------------*/
  $("#menuIcon").click(function () {
    $('.Toggle').toggleClass('active');

    if ($('#menuWaku').is(':visible')) {
      $("#menuWaku").slideUp({
        'duration': 500,
        'easing': 'easeOutQuart'
      });
    } else {
      $("#menuWaku").slideDown({
        'duration': 500,
        'easing': 'easeOutQuart'
      });
    }
    return false;
  });

  $("#menuWaku .menu a").click(function () {
    $('.Toggle').toggleClass('active');

    if ($('#menuWaku').is(':visible')) {
      $("#menuWaku").slideUp({
        'duration': 500,
        'easing': 'easeOutQuart'
      });
    } else {
      $("#menuWaku").slideDown({
        'duration': 500,
        'easing': 'easeOutQuart'
      });
    }
    return false;
  });


  /*----------------------
  	  SCROLL-BUTTON
    ----------------------*/
  /*sp版プルダウンメニュー*/

  var topBtn = $('#page-top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    $("#menuWaku").slideUp({
      'duration': 500,
      'easing': 'easeOutQuart'
    });
    return false;
  });
});
