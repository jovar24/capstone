import React from 'react'
import Axios from 'axios'
import { thisTypeAnnotation } from '@babel/types'

const NewRev = () => {
    const [content, setContent] = React.useState("")
    const handleChange = event => {
        setContent(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()

        Axios
            .post('http://localhost:5000/review', {
                "title": "",
                "content": content
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log("error my dude", error)
            })
    }

    return (
        <div className="newReview">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Write a Review" name="content" value={content} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewRev