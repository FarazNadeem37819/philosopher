import React from "react";

class Footer extends React.Component {
  render() {
    return (   
        
<footer>
		<div class="w3ls-footer-grids py-5">
			<div class="container py-xl-5 py-lg-3">
				<div class="row">
					<div class="col-lg-4 w3l-footer">
						<h2 class="mb-sm-4 mb-4">
							<a class="navbar-brand font-weight-bold" href="index.html">
								TechLOution
							</a>
						</h2>
						<p>At TECHLOUTION, evolution has always been a primary focus along with adherence to the highest quality assurance and control standards in software development.</p>
						<p class="mt-3">At TECHLOUTION, evolution has always been a primary focus along with adherence to the highest quality assurance and control standards in software development.</p>
					</div>
					<div class="col-lg-3 w3l-footer my-lg-0 my-5">
						<h3 class="mb-lg-5 mb-4 text-wh">Address</h3>
						<ul class="list-unstyled">
							<li>
								<i class="fa fa-location-arrow float-left"></i>
								<p class="ml-4">The company name<br/> TechLOution</p>
								<div class="clearfix"></div>
							</li>
							<li class="my-3">
								<i class="fa fa-phone float-left"></i>
								<p class="ml-4">03321451656</p>
								<div class="clearfix"></div>
							</li>
							<li>
								<i class="fa fa-envelope float-left"></i>
								<a href="mailto:info@example.com" class="ml-3">mail@TECHLOUTION.com</a>
								<div class="clearfix"></div>
							</li>
						</ul>
					</div>
					<div class="col-lg-5 w3l-footer">
						<h3 class="mb-lg-5 mb-4 text-wh">Subscribe</h3>
						<div class="n-right-w3ls">
							<form action="#" method="post">
								<div class="form-group">
									<input class="form-control" type="email" name="Email" placeholder="Email Address" required=""/>
								</div>
								<button class="btn" type="submit">Subscribe</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright pt-5 px-5">
				<div class="row no-gutters text-center">
					<p class="col-lg-8 copy-right-grids">© 2018 TechLOution. All Rights Reserved | Design by
						<a href="https://WWW.techloution.com/" target="_blank">TechLOution</a>
					</p>
					<div class="col-lg-4 socila-bottom text-lg-right text-center mt-lg-0 mt-4"/>
						<ul class="list-unstyled">
							<li>
								<a href="#">Facebook</a>
							</li>
							<li class="mx-4">
								<a href="#">Twitter</a>
							</li>
							<li>
								<a href="#">Google Plus</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		<div/>
	</footer>


        
     );
}
}

export default Footer;