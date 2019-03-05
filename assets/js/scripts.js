var $ = jQuery;

$(document).ready(function($) {
  var filterType = 'alpha';

  /* :::::::::: Show/Hide Top Nav on Scroll :::::::::: */
  $(window).scroll(function () {
    if ( $(this).scrollTop() > 100 && !$('#stickyheader').hasClass('open') ) {
      $('#stickyheader').addClass('open');
      $('#stickyheader').slideDown();
     } else if ( $(this).scrollTop() <= 100 ) {
      $('#stickyheader').removeClass('open');
      $('#stickyheader').slideUp();
    }
  });


  /* :::::::::: Gallery Functionality :::::::::: */
  $('#ofri-button').on('click', function () {
    $('#ofri-overlay').fadeIn(500);
  });
  $('#ofri-close-button').on('click', function(e) { 
    $('#ofri-overlay').fadeOut(500); 
  });
  $('#rogue-button').on('click', function () {
    $('#rogue-overlay').fadeIn(500);
  });
  $('#rogue-close-button').on('click', function(e) { 
    $('#rogue-overlay').fadeOut(500); 
  });
  $('#bobs-blog-button').on('click', function () {
    $('#bobs-blog-overlay').fadeIn(500);
  });
  $('#bobs-blog-close-button').on('click', function(e) { 
    $('#bobs-blog-overlay').fadeOut(500); 
  });
  $('#bobs-button').on('click', function () {
    $('#bobs-overlay').fadeIn(500);
  });
  $('#bobs-close-button').on('click', function(e) { 
    $('#bobs-overlay').fadeOut(500); 
  });
  $('#bobs-marquees-button').on('click', function () {
    $('#bobs-marquees-overlay').fadeIn(500);
  });
  $('#bobs-marquees-close-button').on('click', function(e) { 
    $('#bobs-marquees-overlay').fadeOut(500); 
  });
  $('#portland-marathon-button').on('click', function () {
    $('#portland-marathon-overlay').fadeIn(500);
  });
  $('#portland-marathon-close-button').on('click', function(e) { 
    $('#portland-marathon-overlay').fadeOut(500); 
  });
  $('#radiohead-button').on('click', function () {
    $('#radiohead-overlay').fadeIn(500);
  });
  $('#radiohead-close-button').on('click', function(e) { 
    $('#radiohead-overlay').fadeOut(500); 
  });
  $('#eits-button').on('click', function () {
    $('#eits-overlay').fadeIn(500);
  });
  $('#eits-close-button').on('click', function(e) { 
    $('#eits-overlay').fadeOut(500); 
  });
  $('#fairbanks-mr-history-button').on('click', function () {
    $('#fairbanks-mr-history-overlay').fadeIn(500);
  });
  $('#fairbanks-mr-history-close-button').on('click', function(e) { 
    $('#fairbanks-mr-history-overlay').fadeOut(500); 
  });
  $('#mr-history-cousin-sleep-cousin-death-button').on('click', function () {
    $('#mr-history-cousin-sleep-cousin-death-overlay').fadeIn(500);
  });
  $('#mr-history-cousin-sleep-cousin-death-close-button').on('click', function(e) { 
    $('#mr-history-cousin-sleep-cousin-death-overlay').fadeOut(500); 
  });
  $('#good-foot-stock-button').on('click', function () {
    $('#good-foot-stock-overlay').fadeIn(500);
  });
  $('#good-foot-stock-close-button').on('click', function(e) { 
    $('#good-foot-stock-overlay').fadeOut(500); 
  });
  $('#cobra-skulls-bent-left-button').on('click', function () {
    $('#cobra-skulls-bent-left-overlay').fadeIn(500);
  });
  $('#cobra-skulls-bent-left-close-button').on('click', function(e) { 
    $('#cobra-skulls-bent-left-overlay').fadeOut(500); 
  });
  $('#dj-red-beard-button').on('click', function () {
    $('#dj-red-beard-overlay').fadeIn(500);
  });
  $('#dj-red-beard-close-button').on('click', function(e) { 
    $('#dj-red-beard-overlay').fadeOut(500); 
  });
  $('#newgameplus-button').on('click', function () {
    $('#newgameplus-overlay').fadeIn(500);
  });
  $('#newgameplus-close-button').on('click', function(e) { 
    $('#newgameplus-overlay').fadeOut(500); 
  });
  $('#mr-history-six-button').on('click', function () {
    $('#mr-history-six-overlay').fadeIn(500);
  });
  $('#mr-history-six-close-button').on('click', function(e) { 
    $('#mr-history-six-overlay').fadeOut(500); 
  });
  $('#mr-history-one-button').on('click', function () {
    $('#mr-history-one-overlay').fadeIn(500);
  });
  $('#mr-history-one-close-button').on('click', function(e) { 
    $('#mr-history-one-overlay').fadeOut(500); 
  });
  $('#mr-history-five-button').on('click', function () {
    $('#mr-history-five-overlay').fadeIn(500);
  });
  $('#mr-history-five-close-button').on('click', function(e) { 
    $('#mr-history-five-overlay').fadeOut(500); 
  });
  $('#mr-history-gene-button').on('click', function () {
    $('#mr-history-gene-overlay').fadeIn(500);
  });
  $('#mr-history-gene-close-button').on('click', function(e) { 
    $('#mr-history-gene-overlay').fadeOut(500); 
  });
  $('#grains-of-discovery-button').on('click', function () {
    $('#grains-of-discovery-overlay').fadeIn(500);
  });
  $('#grains-of-discovery-close-button').on('click', function(e) { 
    $('#grains-of-discovery-overlay').fadeOut(500); 
  });
  $('#mr-history-four-button').on('click', function () {
    $('#mr-history-four-overlay').fadeIn(500);
  });
  $('#mr-history-four-close-button').on('click', function(e) { 
    $('#mr-history-four-overlay').fadeOut(500); 
  });
  $('#cca-button').on('click', function () {
    $('#cca-overlay').fadeIn(500);
  });
  $('#cca-close-button').on('click', function(e) { 
    $('#cca-overlay').fadeOut(500); 
  });
  $('#kog-button').on('click', function () {
    $('#kog-overlay').fadeIn(500);
  });
  $('#kog-close-button').on('click', function(e) { 
    $('#kog-overlay').fadeOut(500); 
  });
  $('#lamarzocco-button').on('click', function () {
    $('#lamarzocco-overlay').fadeIn(500);
  });
  $('#lamarzocco-close-button').on('click', function(e) { 
    $('#lamarzocco-overlay').fadeOut(500); 
  });
  $('#progressive-button').on('click', function () {
    $('#progressive-overlay').fadeIn(500);
  });
  $('#progressive-close-button').on('click', function(e) { 
    $('#progressive-overlay').fadeOut(500); 
  });
  $('#supercrown-button').on('click', function () {
    $('#supercrown-overlay').fadeIn(500);
  });
  $('#supercrown-close-button').on('click', function(e) { 
    $('#supercrown-overlay').fadeOut(500); 
  });

  $('#thumbs img').click(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
  });

});


$(document).on( 'keydown', function (e) {
  if(e.keyCode === 27) { // ESC
    $('#ofri-overlay').fadeOut(500);
    $('#rogue-overlay').fadeOut(500);
    $('#bobs-blog-overlay').fadeOut(500);
    $('#bobs-overlay').fadeOut(500);
    $('#bobs-marquees-overlay').fadeOut(500);
    $('#portland-marathon-overlay').fadeOut(500);
    $('#radiohead-overlay').fadeOut(500);
    $('#eits-overlay').fadeOut(500);
    $('#fairbanks-mr-history-overlay').fadeOut(500);
    $('#mr-history-cousin-sleep-cousin-death-overlay').fadeOut(500);
    $('#good-foot-stock-overlay').fadeOut(500);
    $('#cobra-skulls-bent-left-overlay').fadeOut(500);
    $('#dj-red-beard-overlay').fadeOut(500);
    $('#newgameplus-overlay').fadeOut(500);
    $('#mr-history-six-overlay').fadeOut(500);
    $('#mr-history-one-overlay').fadeOut(500);
    $('#mr-history-five-overlay').fadeOut(500);
    $('#mr-history-gene-overlay').fadeOut(500);
    $('#grains-of-discovery-overlay').fadeOut(500);
    $('#mr-history-four-overlay').fadeOut(500);
    $('#cca-overlay').fadeOut(500);
    $('#kog-overlay').fadeOut(500);
    $('#lamarzocco-overlay').fadeOut(500);
    $('#progressive-overlay').fadeOut(500);
    $('#supercrown-overlay').fadeOut(500);
  }
});
