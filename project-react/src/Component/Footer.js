import React from 'react'
import google from './google.png'
export default function Footer() {
  return (
    <div>
        <div className='bottom-bigbox'>
          <div className='bottom-box'>
        <div className='bottom-heading'>You May Like Our Most Popular Tools & Apps</div>
      <div className='btntwo'>
      <img src={google} className='Googleimage'></img>
      <img src='https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg' className='Googleimage'></img>

      </div>
      </div>
      </div>
        <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul className='Footul'>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul className='Footul'>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Contact</a></li>
  	 				<li><a href="#">Rate Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  <div style={{marginTop:"20px"}}>
        <b>Copyright © 2012-2023 by GoGoByteBenders.com All Rights Reserved.</b>
      </div>
      <div className='Emptybox'></div>

      
    </div>
  )
}
