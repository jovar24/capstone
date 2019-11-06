import React from 'react'
import axios from "axios"
import NewRev from './newrev'

const Review = () => {
    const [content, setContent] = React.useState([])

    React.useEffect(() => {
        getReviewPosts()
        renderContent()
    }, [])

    React.useEffect(() => {
        renderContent()
    }, [content])

    const getReviewPosts = () => {
        axios.get('http://localhost:5000/reviews')
            .then(response => {
                setContent(response.data)
            })
            .catch(error => {
                console.log("review get posts error", error)
            })
    }
    const renderContent = () => {
        return content.map(elem => {
            return <p>{elem.content}</p>
        })
    }


    return (
        <div className="container">
            {console.log(content)}
            <div>
                {renderContent()}
            </div>
            <NewRev />

        </div>
    )

}



export default Review