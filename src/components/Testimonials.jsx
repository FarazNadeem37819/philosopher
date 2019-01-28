import React from "react";

class Testimonials extends React.Component {
  render() {
    return ( 
        


<section className="clients py-5" id="testi">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="title-w3 mb-sm-5 mb-4 text-wh text-center font-weight-bold">What Our People Says</h3>
			<div className="text-center pb-5">
				<div className="csslider infinity" id="slider1">
					<input type="radio" name="slides" checked="checked" id="slides_1" />
					<input type="radio" name="slides" id="slides_2" />
					<input type="radio" name="slides" id="slides_3" />
					<ul className="banner_slide_bg">
						<li>
							<div className="feedback-top">
								<p>At TECHLOUTION, evolution has always been a primary focus along with adherence to the highest quality assurance and control standards in software development.</p>
								<img src="images/te1.jpg" alt=" " className="img-fluid rounded-circle mt-5"/>
								<h4 className="mt-4 text-wh font-weight-bold mb-4">Mary Jane</h4>
							</div>
						</li>
						<li>
							<div className="feedback-top">
								<p>At TECHLOUTION, evolution has always been a primary focus along with adherence to the highest quality assurance and control standards in software development.</p>
								<img src="images/te2.jpg" alt=" " className="img-fluid rounded-circle mt-5"/>
								<h4 className="mt-4 text-wh font-weight-bold mb-4">Steven Wison</h4>
							</div>
						</li>
						<li>
							<div className="feedback-top">
								<p>At TECHLOUTION, evolution has always been a primary focus along with adherence to the highest quality assurance and control standards in software development.</p>
								<img src="images/te3.jpg" alt=" " className="img-fluid rounded-circle mt-5"/>
								<h4 className="mt-4 text-wh font-weight-bold mb-4">Mary Jane</h4>
							</div>
						</li>
					</ul>
					<div className="navigation">
						<div>
							<label for="slides_1"></label>
							<label for="slides_2"></label>
							<label for="slides_3"></label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

        
    );
}
}

export default Testimonials;
