import React from "react";
import './Feature.css'
const Feature =()=>{
    return(
        <>
            <div className="container">
            <h1 class="display-4">Feature</h1>
                <div className="row">
                    <div className="card">
                        <img className="card-img-top" src="https://i.ibb.co/cwXwx3Z/mix-vegetable.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">fresh Vegetables</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="https://i.ibb.co/98Rp328/rowan-freeman-cl-Ylm-Ca-Qbz-Y-unsplash.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Delivery fast</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://i.ibb.co/G3HprFG/easy-pmt.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Easy Payment</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default Feature;

