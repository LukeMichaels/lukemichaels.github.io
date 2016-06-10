   	<!-- :::::::::: Footer Image :::::::::: -->
   	<img src="./images/ui/footer-1080.jpg" class="img-responsive" alt="Copyright Luke Michaels">
   
   </div><!--wrapper-->
   
    <script src="//code.jquery.com/jquery.js"></script>
    <script src="js/modernizr-2.5.3.min.js"></script>
    <script src="js/jquery.rwdImageMaps.min.js"></script>
    <script src="js/jquery.imagesloaded.js"></script>
    <script src="js/jquery.colorbox-min.js"></script>
    <script src="js/fresco.js"></script>
    
    <script type="text/javascript">
		  $(function() {
				    
		    /* :::::::::: dynamic image maps :::::::::: */
		    $('img[usemap]').rwdImageMaps();
		    $('area').on('click', function() {
				  /* alert($(this).attr('alt') + ' clicked'); */
			  });

        /* :::::::::: Show/Hide Top Nav on Scroll :::::::::: */
        $(window).scroll(function () {
        if ( $(this).scrollTop() > 200 && !$('#stickyheader').hasClass('open') ) {
          $('#stickyheader').addClass('open');
          $('#stickyheader').slideDown();
         } else if ( $(this).scrollTop() <= 200 ) {
          $('#stickyheader').removeClass('open');
          $('#stickyheader').slideUp();
        }
      });
			
	    })(jQuery);
    </script>

  </body>
</html>