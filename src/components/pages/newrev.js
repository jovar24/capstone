import React from 'react'
import axios from 'axios'


const NewRev = (props) => {
    const [content, setContent] = React.useState("")
    const handleChange = event => {
        setContent(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        axios
            .post('http://localhost:5000/review', {
                "title": "",
                "content": content
            })
            .then(response => {
                // console.log(response.data)
                props.setTest(!props.test)
                setContent("")
            })
            .catch(error => {
                console.log("error my dude", error)
            })
    }

    return (
        <div className="newReview">
            <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" placeholder="Write a Review" name="content" autoComplete="off" value={content} onChange={handleChange} />
                <button className="btn btn-warning" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewRev