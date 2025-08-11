'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import ReviewCard from './ReviewCard';
import Reviews from './ReviewList'
import 'react-multi-carousel/lib/styles.css';


// TODO figure out how to hide api key in req, might need to spin up a simple backend service
// alternatively store reviews on client?
// const placeId = 'ChIJcU3Nd8STKogRF6qdDA6KUYQ'
// const key = 'AIzaSyDOJaQTD3bnYCSSgnJuyyNU6gBYdFOkzV8'


const ReviewCarousel = () => {
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
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2,
            slidesToSlide: 1,
            showDots: true // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            showDots: true
        }
    };
    return (
        <section className="Reviews">
            <h2 className="Reviews-title">Customer Reviews</h2>
            <div style={{ width: '100%', background: 'rgba(255,255,245,0.7)', borderRadius: '2vw', boxShadow: '0 2px 12px rgba(140,140,100,0.08)', padding: '2vw 0', margin: '0 auto' }}>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    partialVisible={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="Reviews-carousel"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={typeof window !== 'undefined' && window.innerWidth < 600 ? "mobile" : "desktop"}
                    itemClass="carousel-item-padding-4-em"
                >
                    {reviews.map((review, idx) => (
                        <ReviewCard key={'reviewCard' + idx} image={review.image} name={review.name} review={review.review} value={review.value} />
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default ReviewCarousel