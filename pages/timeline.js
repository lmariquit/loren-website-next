import useMediaQuery from '../util/mediaQuery-util'
import Head from 'next/head'
import TimelineCard from '../components/TimelineCard'
import TimelineYearMark from '../components/TimelineYearMark'
import timelineData from '../data/timeline-data.json'

export default function Timeline() {
  const matches = useMediaQuery('(min-width: 769px)')
  const timelineStartYear = 2010
  const thisYear = new Date().getFullYear()
  const years = []
  let startYear = timelineStartYear

  while(startYear <= thisYear) {
    years.push(startYear++);
  }

  return (
    <>
      <Head>
        <title>Loren's Timeline</title>
        <meta name="description" content="Loren Mariquit's Personal Website: My Journey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='timeline-content'>
        <div className='content-well'>
          <div className='content__title'>See My Journey</div>
          <div className='timeline-wrapper'>
            <span className='timeline-left'></span>
            {createTimelineItems(timelineData, timelineStartYear, thisYear, matches)}
            {createTimelineMarkers(years, matches)}
          </div>
        </div>
      </main>
    </>
  )
}

const createTimelineItems = (data, startYear, currentYear, mediaQueryMatches) => {
  const timelineItems = data.map((item, index) => {
    const startPosition = ((item.start - startYear) / (currentYear - startYear)) * 100
    const endPosition = ((item.end - startYear) / (currentYear - startYear)) * 100
    const highlightWidth = endPosition - startPosition
    const cardPosition = `${startPosition}%`
    const cardPositionStyle = {}

    if (mediaQueryMatches) {
      cardPositionStyle.left = cardPosition
    } else {
      cardPositionStyle.bottom = `calc(${cardPosition} - 3rem)`
    }

    return (
      <TimelineCard
        key={`card-${index}`}
        cardPositionStyle={cardPositionStyle}
        type={item.type}
        company={item.company}
        duration={item.duration}
        position={item.position}
        location={item.location}
        school={item.school}
        degree={item.degree}
        graduationYear={item.graduationYear}
        highlightPositionStyle={createHighlightStyle(startPosition, highlightWidth, item.color, mediaQueryMatches)}
        eventPositionStyle={createEventStyle(startPosition, item.color, mediaQueryMatches)}
      />
    )
  })
  return timelineItems
}

const createHighlightStyle = (start, width, color, mediaQueryMatches) => {
  if (mediaQueryMatches) {
    return (
      {
        left: `${start}%`,
        width: `${width}%`,
        backgroundColor: color
      }
    )
  } else {
    return (
      {
        bottom: `${start}%`,
        height: `${width}%`,
        backgroundColor: color
      }
    )
  }
}

const createEventStyle = (start, color, mediaQueryMatches) => {
  if (mediaQueryMatches) {
    return (
      {
        left: `${start}%`,
        backgroundColor: color
      }
    )
  } else {
    return (
      {
        bottom: `${start}%`,
        backgroundColor: color
      }
    )
  }
}

const createTimelineMarkers = (yearsArr, mediaQueryMatches) => {
  const timelineYearMarkers = yearsArr.map((year, index) => {
    const yearPositionStyle = {}
    if (mediaQueryMatches) {
      yearPositionStyle.left = `${((index) / (yearsArr.length - 1)) * 100}%`
    } else {
      yearPositionStyle.bottom = `${((index) / (yearsArr.length - 1)) * 100}%`
    }
    return (
      <TimelineYearMark
        key={`marker-${index}`}
        year={year}
        markerPosition={yearPositionStyle}
      />
    )
  })
  return timelineYearMarkers
}
