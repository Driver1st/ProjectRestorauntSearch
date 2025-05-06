import { useEffect, useState } from 'react'
import { getRestaurants, updateRestaurantRating, Restaurant } from '../api'
import RestaurantCard from '../components/RestaurantCard'
import Loader from '../components/Loader'

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getRestaurants()
      .then((data) => {
        setRestaurants(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Ошибка загрузки ресторанов:', error)
        setLoading(false)
      })
  }, [])

  const handleRatingChange = async (id: string, newRating: number) => {
    try {
      const updatedRestaurant = await updateRestaurantRating({ id, raiting: newRating })
      setRestaurants((prev) =>
        prev.map((restaurant) => (restaurant.id === id ? updatedRestaurant : restaurant))
      )
    } catch (error) {
      console.error('Ошибка обновления рейтинга:', error)
    }
  }

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <input
        className="search-bar"
        placeholder="Search for restaurants"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <section className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} onRatingChange={handleRatingChange} />
          ))}
        </section>
      )}
    </main>
  )
}

export default RestaurantsPage
