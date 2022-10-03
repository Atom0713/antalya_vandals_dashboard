import React, { useState } from "react";
import { addComment } from "../../api/comment";

export default function Comment({ event_id, user}) {
    
    const [formSubmitted, setFormSubmitted] = useState();
    const [error, setError] = useState();
    const [comment, setComment] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment(comment, event_id, user.id)
          .then((response) =>
            setFormSubmitted(true))
          .catch((error) => 
            setError(error.message)
        );
    };

    if (error) return (
        <div>
            <h1>{error}</h1>
        </div>
    );
     if (formSubmitted) return (
        <div className="row">
            <div className="col-md-8 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h4>DONE</h4>
                    </div>
                </div>
            </div>
        </div>
     )

    return (
        <div className="row">
            <div className="col-md-8 grid-margin">
                <div className="card">
                    <div className="card-body">
                        {/* <h4 className="card-title"></h4> */}
                        <form className="form-sample" onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label for="exampleFormControlTextarea1">Add comment</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={(e) => setComment(e.target.value)}></textarea>
                            </div>
                            <div className="float-end">
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Post comment
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}