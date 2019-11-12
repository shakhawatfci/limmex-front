<template>
  <div class="page-wraper"> 
    <!-- header start  -->

    
     <header class="site-header header-style-1">

            <div class="top-bar bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="mt-topbar-left clearfix">
                            <ul class="list-unstyled e-p-bx pull-right">
                                <li><i class="fa fa-envelope"></i> business@limmexbd.com</li>
                                <li><i class="fa fa-phone"></i>+88 01301270202</li>
                                
                            </ul>
                        </div>
                        <div class="mt-topbar-right clearfix">
                            <div class="appint-btn"><a href="" data-toggle="modal" data-target="#with-form" class="site-button">FIND QUOTATION BY 1 HOUR</a></div>                            
                        </div>
                    </div>
                </div>
            </div>          
            <div class="sticky-header main-bar-wraper">
                <div class="main-bar bg-white">
                    <div class="container">
                        <div class="logo-header">
                            <div class="logo-header-inner logo-header-one">
                                <nuxt-link to="/">
                                    <img src="images/logo-light.png" alt="" />
                                </nuxt-link>
                            </div>
                        </div>
                        <!-- NAV Toggle Button -->
                        <button data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggle collapsed">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                            <!-- ETRA Nav -->
                            <div class="extra-nav">
                                <div class="extra-cell">											
                                    <a href="#search">
                                    	<i class="fa fa-search"></i>
                                    </a>
                                </div>
                                <div class="extra-cell">
                                    <a href="#" class="contact-slide-show"><i class="fa fa-angle-left arrow-animation"></i></a>
                                </div>                                
                            </div>
                            <!-- ETRA Nav -->

                            <!-- Contact Nav -->                            
                         	<div class="contact-slide-hide " style="background-image:url(images/background/bg-5.png)"> 
                                <div class="contact-nav">
                                     <a href="javascript:void(0)" class="contact_close">&times;</a>
                                     <div class="contact-nav-form p-a30">
                            			<div class="contact-info   m-b30">
                             
                                            <div class="mt-icon-box-wraper center p-b30">
                                                <div class="icon-xs m-b20 scale-in-center"><i class="fa fa-phone"></i></div>
                                                <div class="icon-content">
                                                    <h5 class="m-t0 font-weight-500">Phone number</h5>
                                                    <p>+88 01301270202</p>
                                                </div>
                                            </div>
                                            
                                            <div class="mt-icon-box-wraper center p-b30">
                                                <div class="icon-xs m-b20 scale-in-center"><i class="fa fa-envelope"></i></div>
                                                <div class="icon-content">
                                                    <h5 class="m-t0 font-weight-500">Email address</h5>
                                                    <p>business@limmexbd.com</p>
                                                </div>
                                            </div>
                                            
                                            <div class="mt-icon-box-wraper center p-b30">
                                                <div class="icon-xs m-b20 scale-in-center"><i class="fa fa-map-marker"></i></div>
                                                <div class="icon-content">
                                                    <h5 class="m-t0 font-weight-500">Address info</h5>
                                                    <p>Suite 219, Muktobangla Complex, Mirpur-1, Dhaka-1216</p>
                                                </div>
                                            </div>
                                        </div>                                          
                                        <div class="full-social-bg">
                                              <ul>
                                                    <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" class="google"><i class="fa fa-google"></i></a></li>
                                                    <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                                                    <li><a href="#" class="tumblr"><i class="fa fa-tumblr"></i></a></li>
                                                    <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#" class="youtube"><i class="fa fa-youtube"></i></a></li>
                                              </ul>
                                        </div>
                                        <div class="text-center">
                                            <h4 class="font-weight-600">&copy;  2019 7xtheme</h4> 
                                        </div>                                                                    			
                                     </div>
                                </div> 
                            </div>                               
                            <!-- SITE Search -->
                            <div id="search"> 
                                <span class="close"></span>
                                <form role="search" id="searchform" action="/search" method="get" class="radius-xl">
                                    <div class="input-group">
                                        <input value="" name="q" type="search" placeholder="Type to search"/>
                                        <span class="input-group-btn"><button type="button" class="search-btn"><i class="fa fa-search arrow-animation"></i></button></span>
                                    </div>   
                                </form>
                            </div>                                                                                                          
                            <!-- MAIN Vav -->
                            <div class="header-nav navbar-collapse collapse">
                                <ul class=" nav navbar-nav">
                                    <li class="active">
                                        <nuxt-link to="/">Home</nuxt-link>                                                  
                                    </li>

                                    <li>
                                        <nuxt-link to="/about-us">About us</nuxt-link>
                                    </li> 
                                    <li>
                                        <a href="services.html">Equipment</a>
                                    </li> 

                                    <li>
                                        <nuxt-link to="/contact-us">Projects</nuxt-link>
                                    </li> 

                                    <li>
                                        <nuxt-link to="/contact-us">Concern</nuxt-link>
                                    </li> 

                                    <li>
                                        <nuxt-link to="/contact-us">Contact us</nuxt-link>
                                    </li> 
                                                                 
                                </ul>
                            </div>
                            
                    </div>
                </div>
            </div>
        </header>
        <!-- HEADER END -->
        <!-- dynamic content  -->
    <nuxt />
    
         <!-- popup modal  -->
          <qoutation></qoutation>
         <!-- popup modal  -->

     <!-- FOOTER START -->
        <footer class="site-footer footer-large  footer-dark footer-wide">
            <div class="container call-to-action-wrap bg-no-repeat bg-center" style="background-image:url(images/background/bg-site.png);">
                <div class="p-a30 bg-primary ">
                    <div class="row">
                        <div class="col-md-8 col-sm-8">
                            <div class="call-to-action-left text-black">
                                <h4 class="text-uppercase m-b10 m-t0">Find Our Updates!</h4>
                                <span>Never Miss Anything From Limmex.</span>
                            </div>
                        </div>
                        
                        <div class="col-md-4 col-sm-4">
                            <div class="call-to-action-right">
                                <div class="widget_newsletter">
                                    <div class="newsletter-bx">
                                        <form role="search" method="post">
                                            <div class="input-group">
                                                <input name="news-letter" class="form-control" placeholder="ENTER YOUR EMAIL" type="text">
                                                <span class="input-group-btn">
                                                    <button type="submit" class="site-button"><i class="fa fa-paper-plane-o"></i></button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>                                                           
                            </div>
                        </div>
                    </div>
                 </div>
            </div>            
            <!-- FOOTER BLOCKES START -->  
            <div class="footer-top overlay-wraper">
                <div class="overlay-main"></div>
                <div class="container">
                    <div class="row">
                        <!-- ABOUT COMPANY -->
                        <div class="col-lg-3 col-md-6 col-sm-6">  
                            <div class="widget widget_about">
                                <!--<h4 class="widget-title">About Company</h4>-->
                                <div class="logo-footer clearfix p-b15">
                                    <a href="index.html"><img src="images/logo-dark.png" alt=""></a>
                                </div>
								<p class="max-w400">Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>                                
                                
                                <ul class="social-icons  mt-social-links">
                                    <li><a href="javascript:void(0);" class="fa fa-google"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-rss"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
                                </ul>                                     
                            </div>
                        </div> 
                        
                        <!-- RESENT POST -->
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="widget widget_address_outer">
                                <h4 class="widget-title">Contact Us</h4>
                                <ul class="widget_address">
                                    <li>Suite 219, Muktobangla Complex, Mirpur-1, Dhaka-1216</li>
                                    <li>business@gmail.com</li>
                                    <li>+88 01301270202</li>
                                    <li>+88 01301270203</li>
                                </ul>
                           
                            </div>                                              	
                        </div>                          
                        
                        <!-- USEFUL LINKS -->
                        <div class="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                            <div class="widget widget_services inline-links">
                                <h4 class="widget-title">Useful links</h4>
                                <ul>
                                    <li><nuxt-link to="/about-us">About</nuxt-link></li>
                                    <li><nuxt-link to="/contact-us">Contact us</nuxt-link></li>
                                    <li><nuxt-link to="/equipment">Equipment</nuxt-link></li>
                                    <li><nuxt-link to="/project">Projects</nuxt-link></li>
                                    <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                                </ul>
                            </div>                           
                        </div>
                        
                        <!-- TAGS -->
                        <div class="col-lg-3 col-md-6 col-sm-6">
							<div class="widget recent-posts-entry-date">
                                <h4 class="widget-title">Resent Post</h4>
                                <div class="widget-post-bx">
                                    <div class="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                        <div class="mt-post-date text-center text-uppercase text-white p-tb5">
											<strong class="p-date">24</strong>
                                            <span class="p-month">April</span>
                                            <span class="p-year">2019</span>
                                        </div>
                                        <div class="mt-post-info">
                                            <div class="mt-post-header">
                                                <h6 class="post-title"><a href="blog-single.html">On these beams, we’re building dreams.</a></h6>
                                            </div>
                                            <div class="mt-post-meta">
                                                <ul>
                                                    <li class="post-author"><i class="fa fa-user"></i>By Admin</li>
                                                    <li class="post-comment"><i class="fa fa-comments"></i> 28</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                        <div class="mt-post-date text-center text-uppercase text-white p-tb5">
                                            <strong class="p-date">30</strong>
                                            <span class="p-month">May</span>
                                            <span class="p-year">2019</span>
                                        </div>
                                        <div class="mt-post-info">
                                            <div class="mt-post-header">
                                                <h6 class="post-title"><a href="blog-single.html">We’ll be a sensation for you next renovation</a></h6>
                                            </div>
                                            <div class="mt-post-meta">
                                                <ul>
                                                    <li class="post-author"><i class="fa fa-user"></i>By Admin</li>
                                                    <li class="post-comment"><i class="fa fa-comments"></i> 29</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>                          
                        </div>
                        <!-- NEWSLETTER -->

                    </div>
                </div>  
            </div>
            <!-- FOOTER COPYRIGHT -->
            <div class="footer-bottom overlay-wraper">
                <div class="overlay-main"></div>
                <div class="container">
                    <div class="row">
                        <div class="mt-footer-bot-center">
                            <span class="copyrights-text">© {{ date }} Limmex.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- FOOTER END -->
   
<!-- LOADING AREA START ===== -->
<div class="loading-area">
    <div class="loading-box"></div>
    <div class="loading-pic">
        <div class="cssload-loader">Limmex...</div>
    </div>
</div>
<!-- LOADING AREA  END ====== -->
  </div>
</template>
<script>
import Quotation from '~/components/common/Quotation.vue';
export default {

    components : {
 
       'qoutation' : Quotation

    },
 
 data(){

     return {

         date : new Date().getFullYear(),

     }
 }
 
    
}
</script>
<style>

</style>
