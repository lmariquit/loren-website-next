export default function TimelineCard({
  cardPositionStyle,
  type,
  company,
  duration,
  position,
  location,
  school,
  degree,
  graduationYear,
  highlightPositionStyle,
  eventPositionStyle
}) {
  if (type === "company") {
    return (
      <>
        <div className="timeline-card" style={cardPositionStyle}>
          <span className="timeline-card__company">{company}</span>
          <span className="timeline-card__location">{location}</span>
          <span className="timeline-card__position">{position}</span>
          <span className="timeline-card__duration">{duration}</span>
        </div>
        <span className='timeline__highlight' style={highlightPositionStyle}></span>
        <span className='timeline__event' style={eventPositionStyle}></span>
      </>
    )
  } else {
    return (
      <>
        <div className="timeline-card" style={cardPositionStyle}>
          <span className="timeline-card__school">{school}</span>
          <span className="timeline-card__location">{location}</span>
          <span className="timeline-card__degree">{degree}</span>
          <span className="timeline-card__graduationYear">{graduationYear}</span>
        </div>
        <span className='timeline__highlight' style={highlightPositionStyle}></span>
        <span className='timeline__event' style={eventPositionStyle}></span>
      </>
    )
  }
}
