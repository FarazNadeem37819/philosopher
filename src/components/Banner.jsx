import React from 'react';

class Banner extends React.Component{
    render(){
        return(
            <div>
                <div className="banner-w3pvt" id="fuckinhSHit">
			<div className="container">
				<div className="row banner-tops-style">
					<div className="col-xl-6 col-lg-7 style-banner">
						<h4 className="text-li mb-2">Our Moto</h4>
						<h3 className="text-wh font-weight-bold">We give Solutions with Evloutoion  <br/> to bring Revolution</h3>
						<p className="text-li mt-5">We provide high quality software products and services both locally and globally that meets the needs of our customers by maintaining our staff as our principle and asset.</p>
						<a href="about.html" className="btn button-style mt-sm-5 mt-4">Read More</a>
					</div>
					<div className="col-xl-6 banner-img text-xl-right text-center">
						<img src="images/1.jpg" alt="" className="img-fluid" />
					</div>
				</div>
			</div>
			
			<div className="icon-effects-w3">
				<div className="stage">
					<figure className="ball"></figure>
				</div>
			</div>
			<div className="icon-effects-w3-2 text-right">
				<img src="images/icon-3.png" alt="" className="img-fluid" />
			</div>
			
		</div>
	</div>
           
        )
    }
}

export default Banner;