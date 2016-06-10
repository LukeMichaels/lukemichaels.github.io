<!-- :::::::::: Header :::::::::: -->
<?php include 'header.php'; ?>


  <!-- :::::::::: Contact :::::::::: -->
  <section class="page-header section group">
  	
  	<div class="col span_2_of_2">
  		<h1>Drop Me A Line</h1>
  		<ul id="share-icons" class="clearfix">
    		<li id="email-social">
    			<a href="mailto:lmichaels@gmail.com" title="Send me an email" alt="Send me an email" target="_blank" ></a>
    		</li>
    		<li id="twitter-social">
    			<a href="http://www.twitter.com/LukeMichaels" title="My Twitter feed" alt="My Twitter feed" target="_blank" ></a>
    		</li>
    		<li id="instagram-social">
    			<a href="http://instagram.com/lukemichaels" title="My Instagram Photos" alt="My Instagram Photos" target="_blank" ></a>
    		</li>
    		<li id="facebook-social">
    			<a href="http://www.facebook.com/luke.michaels" title="My Fcebook Profile" alt="My Facebook Profile" target="_blank" ></a>
    		</li>
    		<li id="flickr-social">
    			<a href="http://www.flickr.com/lysterfiend" title="My Flickr Photos" alt="My Flickr Photos" target="_blank" ></a>
    		</li>
    		<li id="linkedin-social">
    			<a href="http://www.linkedin.com/in/lmichaels/" title="My LinkedIn Profile" alt="My LinkedIn Profile" target="_blank" ></a>
    		</li>
    		<li id="behance-social">
    			<a href="http://www.behance.net/LukeMichaels" title="My Behance Profile" alt="My Behance Profile" target="_blank" ></a>
    		</li>
    	</ul>
  	</div>
  	
	</section><!-- .page-header -->
	
	
	<section class="page-content gallery section group">
	
		<div class="col span_2_of_2">
  			
    	<div class="form">
    		<form name="contactform" method="post" action="send_email.php" >    
    	    name:<br><input name="name" type="text" class="form_1"><br><br>
    			e-mail:<br><input name="email" type="text" class="form_1"><br><br>
    			message:<br><textarea name="message" cols="42" rows="20" class="form_2"></textarea>
<!--     			<textarea name="message" cols="42" rows="20" class="form_2"></textarea> --><br><br>
    			<span class="form-buttons">
    				<button class="contact-button"  alt="send" value="Send" style="float:right; margin-left: 5%;" onClick="submit();">Send</button>
    				<button class="contact-button" alt="reset" style="float: right;" onClick="reset(); return false;">Reset</button>
    			</span>
    		</form>
    	</div><!--contact-form-wrap-->
		
		</div>
		
	</section>
	

<!-- :::::::::: Footer :::::::::: -->
<?php include 'footer.php'; ?>