   	<!-- :::::::::: Footer Image :::::::::: -->
   	<img src="./images/ui/footer.jpg" class="img-responsive" alt="Copyright Luke Michaels">
   
   </div><!--wrapper-->
   
   <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="//code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/modernizr-2.5.3.min.js"></script>
    <script src="js/jquery.rwdImageMaps.min.js"></script>
    <script src="js/jquery.imagesloaded.js"></script>
     <script src="js/jquery.colorbox-min.js"></script>
     <script src="js/fresco.js"></script>
    
    <!-- :::::::::: Masonry :::::::::: -->
    <!-- <script src="js/masonry.js"></script> -->
    
    <script type="text/javascript">
		$(document).ready(function(e) {
				    
		    /* :::::::::: dynamic image maps :::::::::: */
		    $('img[usemap]').rwdImageMaps();
		    $('area').on('click', function() {
				/* alert($(this).attr('alt') + ' clicked'); */
			});
			
			/* :::::::::: Sticky Nav :::::::::: */
			$("#stickyheader").hide()
			$(window).scroll(function(){
			      if($(window).scrollTop()>100){
			         $("#stickyheader").fadeIn();
			      }else{
			         $("#stickyheader").fadeOut();
			      }
			
			});
			
	    })(jQuery);
    </script>

  </body>
</html>