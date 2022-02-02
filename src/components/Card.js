import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
  return (
    <div className="card">
      <img src={`/images/${props.item.image}`} alt="" className="card-image" />
      <div className="card-info">
        <span className="card-location">
          {" "}
          <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
          {props.item.location}
        </span>
        <h2 className="card-title">{props.item.title}</h2>
        <p className="card-date">{props.item.date}</p>
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  )
}
