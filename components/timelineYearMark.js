
export default function TimelineYearMark({year, markerPosition}) {
  return (
    <span className="year-marker" style={markerPosition}>{year}</span>
  )
}
