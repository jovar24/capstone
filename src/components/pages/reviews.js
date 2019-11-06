import React from 'react'
import axios from "axios"
import NewRev from './newrev'

const Review = () => {
    const [content, setContent] = React.useState([])
    const [test, setTest] = React.useState(false)

    React.useEffect(() => {
        getReviewPosts()
    }, [test])

    React.useEffect(() => {
        console.log("updating reviews")
        renderContent()
    }, [content])

    const getReviewPosts = () => {
        axios.get('https://secret-escarpment-59245.herokuapp.com/reviews')
            .then(response => {
                setContent(response.data)
            })
            .catch(error => {
                console.log("review get posts error", error)
            })
    }
    const renderContent = () => {
        let counter = 1
        return content.map(elem => {
            counter += 1
            return <p key={counter}> {elem.content}</p >
        })
    }








    return (
        <div className="reviews">

            {renderContent()}
            <NewRev setTest={setTest} test={test} />

        </div>
    )

}



export default Review