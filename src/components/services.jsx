import React from 'react';

class Services extends React.Component{
    render(){
        return(

            <div>
                <div className="what py-5" id="what">
                    <div className="container py-xl-5 py-lg-3">
                        <h3 className="title-w3 mb-sm-5 mb-4 text-bl text-center font-weight-bold">What we do</h3>
                        <div className="row pt-lg-3">
                            <div className="col-lg-6 serv_bottom text-center">
                                <div className="row mt-xl-4">
                                    <div className="col-sm-6">
                                        <div className="bottom-gd">
                                            <img src="images/web.gif" alt="" className="img-icon" />
                                            <h3 className="my-3 font-weight-bold">Web Development</h3>
                                            <p>We develop Creative Websites with Latest Technologies</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mt-sm-0 mt-4">
                                        <div className="bottom-gd">
                                            <img src="images/gd1.png" alt="" className="img-icon" />
                                            <h3 className="my-3 font-weight-bold">Graphic Design</h3>
                                            <p>We design Creative ideas Product with remarkable skills.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-sm-5 mt-4 pt-xl-4">
                                    <div className="col-sm-6">
                                        <div className="bottom-gd">
                                            <img src="images/doc.png" alt="" className="img-icon" />
                                            <h3 className="my-3 font-weight-bold">Documentation</h3>
                                            <p>We will provide every services perfectly related to Documentation work.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mt-sm-0 mt-4">
                                        <div className="bottom-gd">
                                            <img src="images/U1.gif" alt="" className="img-icon" />
                                            <h3 className="my-3 font-weight-bold">UI Design</h3>
                                            <p>We design amazing and creative UI UX DESIGNS.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 fetured-sec mt-lg-0 mt-sm-5 mt-4">
                                <img src="images/ss.jpg" className="img-fluid" alt="" /> 
                            </div>
                        </div>
		            </div>
                </div>
            </div>        

        )
    }
}

export default Services;