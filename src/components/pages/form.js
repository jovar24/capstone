import React from 'react'

const Form = (props) => {
    return (
        <div className="formContainer">
            <div>{props.error ? error() : null}</div>
            <div>{props.error2 ? error2() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="city">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="city" />
                    </div>
                    <div className="country">
                        <input type="text" className="form-control" name="country" autoComplete="off" placeholder="country" />
                    </div>
                    <div className="btn">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function error() {
    return (
        <div className=" alert alert-danger" role="alert">
            Please Enter City and Country
        </div>
    )
}

function error2() {
    return (
        <div className="alert alert-danger" role="alert">
            please Enter valid City
        </div>
    )
}

export default Form