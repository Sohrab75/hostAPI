import React from "react";
import './Feature.css';

const Review =()=>{
    return(
        <>
            <div className="container">
            <h1 class="display-4">Reviews</h1>
                <div className="row">
                    <div className="card">
                        <img className="card-img-top" src="https://i.ibb.co/hYWxrBv/review-3.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Overall Staff is polite and helpful !!
                    All managers are aware of the their products & help customers for their requirements..</p>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="https://i.ibb.co/FW5cLVJ/review1.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Overall Staff is polite and helpful !!
                    All managers are aware of the their products & help customers for their requirements..</p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://i.ibb.co/ZHhPg2B/Review2.gif" alt="Card image cap"/>
                        <div className="card-body">
                            <p className="card-text">Overall Staff is polite and helpful !!
                    All managers are aware of the their products & help customers for their requirements..</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default Review;

