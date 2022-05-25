import React from 'react';
import "./Location_style.css";

const LocationInput = props => {
    return (
        <div className = "container">
            <form onSubmit = {props.loadInformation}>
                <div>
                    <input type = "text" name = "city" placeholder = " City">
                    </input>
                </div>
                <div>
                    <input type = "text" name = "zipcode" placeholder = " Zipcode">
                    </input>
                </div>
                <div>
                    <button>
                    Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LocationInput;