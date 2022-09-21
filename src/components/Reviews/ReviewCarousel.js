import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import ReviewCard from './ReviewCard';
import Reviews from './ReviewList'
import 'react-multi-carousel/lib/styles.css';


// TODO figure out how to hide api key in req, might need to spin up a simple backend service
// alternatively store reviews on client?
const placeId = 'ChIJcU3Nd8STKogRF6qdDA6KUYQ'
const key = 'AIzaSyDOJaQTD3bnYCSSgnJuyyNU6gBYdFOkzV8'


const ReviewCarousel = (props) => {
    /* const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&key=' + key
        const encoded_url = encodeURI(url)
        const resp = fetch(encoded_url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                const reviews = data.result.reviews
                const reviewMap = reviews.map(review => {
                    return {
                        name: review.author_name,
                        image: review.profile_photo_url,
                        review: review.text,
                        value: review.rating
                    }
                })
                const goodReviews = reviewMap.filter(review => {
                    return review.value >= 5
                })
                console.log(goodReviews)
                setReviews(goodReviews)
            })
    }, []) */

    const reviews = Reviews
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="Reviews-carousel"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-4-em"
        >
            {reviews.map((review, idx) => {
                return <ReviewCard key={'reviewCard' + idx} image={review.image} name={review.name} review={review.review} value={review.value} />
            })}
        </Carousel>
    )
}

export default ReviewCarousel