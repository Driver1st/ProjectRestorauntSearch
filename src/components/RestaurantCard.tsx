import StarIcon from '../assets/star.svg?react'
import { Restaurant } from '../api'

interface Props {
  restaurant: Restaurant
  onRatingChange: (id: string, newRating: number) => void
}

function RestaurantCard({ restaurant, onRatingChange }: Props) {
  const handleStarClick = (newRating: number) => {
    onRatingChange(restaurant.id, newRating)
  }

  return (
    <div className="restaurant-card">
      <img className="restaurant-img" src={restaurant.url} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            width={16}
            height={16}
            className={`star ${star <= restaurant.raiting ? 'filled' : ''}`}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
    </div>
  )
}

export default RestaurantCard
