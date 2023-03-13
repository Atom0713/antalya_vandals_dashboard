import React, { useState, useContext } from "react";
import { addComment } from "../../api/";
import { useNavigate } from "react-router-dom";

export default function Comment({ event_id, user }) {

    const [error, setError] = useState();
    const [comment, setComment] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        addComment({"comment": comment, "event_id": parseInt(event_id), "user_id": user.id})
        .then((response) => {
            window.location.reload(false);
        })
        .catch((error) => setError(error.message)
        );
    };

    if (error){
       return <div>
        {error.message}
       </div> 
    }

    return (
        <div className="row">
            <div className="col-md-8 grid-margin">
                <div className="card">
                    <div className="card-body">
                        {/* <h4 className="card-title"></h4> */}
                        <form className="form-sample" onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label for="exampleFormControlTextarea1">Add comment</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={(e) => setComment(e.target.value)} placeholder="Event comment"></textarea>
                            </div>
                            <div className="float-end">
                                <button type="submit" className={`btn btn-primary btn-block mb-4 ${comment ? "" : "disabled"}`}>
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