'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import ReviewCard from './ReviewCard';
import Reviews from './ReviewList'
import 'react-multi-carousel/lib/styles.css';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false })

const ReviewCarousel = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
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
        <div className="ReviewCarousel-shell">
            <div className="ReviewCarousel-inner">
                {mounted ? (
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        partialVisible={false}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="Reviews-carousel"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="carousel-item-padding-4-em"
                    >
                        {reviews.map((review, idx) => (
                            <ReviewCard key={'reviewCard' + idx} image={review.image} name={review.name} review={review.review} value={review.value} />
                        ))}
                    </Carousel>
                ) : null}
            </div>
        </div>
    )
}

export default ReviewCarousel