// Write your code here
import './index.css'

const EventItem = props => {
  const {lists, isWhat} = props
  const {id, imageUrl, name, location} = lists

  const goToThat = () => {
    isWhat(id)
  }

  return (
    <li className="li-1" onClick={goToThat}>
      <button type="button">
        <img src={imageUrl} className="img-1" alt="event" />
      </button>
      <p className="head-11">{name}</p>
      <p className="para-1">{location}</p>
    </li>
  )
}
export default EventItem
