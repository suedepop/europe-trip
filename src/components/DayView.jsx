import { useEffect, useRef, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet default icon paths
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function createNumberedIcon(num, color, isFirst, isLast) {
  const bg = isFirst ? '#1B2A4A' : isLast ? '#C9A84C' : color
  return L.divIcon({
    html: `
      <div style="
        width:30px;height:30px;border-radius:50%;
        background:${bg};border:3px solid white;
        display:flex;align-items:center;justify-content:center;
        font-family:sans-serif;font-size:11px;font-weight:700;color:white;
        box-shadow:0 2px 8px rgba(0,0,0,0.4);
        ${isFirst || isLast ? 'outline:2px solid ' + bg + ';outline-offset:2px;' : ''}
      ">${num}</div>
    `,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -18],
  })
}

function FlyTo({ center, zoom }) {
  const map = useMap()
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.2 })
    }
  }, [center, zoom])
  return null
}

export default function DayView({ day }) {
  if (!day) return <div className="loading">Select a day</div>

  const positions = day.stops.map(s => [s.lat, s.lon])

  return (
    <div className="day-view">
      {/* Day header */}
      <div className="day-header" style={{ background: day.color }}>
        <div className="day-header-inner">
          <div className="day-header-badge">DAY {day.num}</div>
          <h1 className="day-header-title">{day.title}</h1>
          <p className="day-header-sub">{day.subtitle}</p>
          <div className="day-header-hotel">
            <span className="hotel-icon">🏨</span>
            <span>{day.hotel}</span>
            <span className="hotel-detail"> · {day.hotelDetail}</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <MapContainer
          center={day.center}
          zoom={day.zoom}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FlyTo center={day.center} zoom={day.zoom} />

          {/* Route polyline */}
          {positions.length >= 2 && (
            <Polyline
              positions={positions}
              pathOptions={{
                color: day.color,
                weight: 3,
                opacity: 0.75,
                dashArray: day.segment === 'transit' ? '8 5' : undefined,
              }}
            />
          )}

          {/* Markers */}
          {day.stops.map((stop, i) => (
            <Marker
              key={i}
              position={[stop.lat, stop.lon]}
              icon={createNumberedIcon(i + 1, day.color, i === 0, i === day.stops.length - 1)}
            >
              <Popup>
                <div style={{ fontFamily: 'sans-serif', minWidth: '180px' }}>
                  <div style={{
                    background: day.color, color: 'white',
                    padding: '6px 10px', borderRadius: '4px 4px 0 0',
                    fontWeight: '700', fontSize: '13px'
                  }}>{stop.name}</div>
                  <div style={{ padding: '8px 10px', border: `1px solid ${day.color}30`, borderTop: 'none', borderRadius: '0 0 4px 4px' }}>
                    <div style={{ color: '#C9A84C', fontWeight: '700', fontSize: '11px', marginBottom: '4px' }}>
                      🕐 {stop.time}
                    </div>
                    <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.4' }}>{stop.detail}</div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Stop legend */}
        <div className="map-legend">
          {day.stops.map((stop, i) => (
            <div key={i} className="legend-item">
              <div className="legend-num" style={{ background: day.color }}>{i + 1}</div>
              <div className="legend-text">
                <span className="legend-icon">{stop.icon}</span>
                <span>{stop.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <h2 className="timeline-heading" style={{ color: day.color }}>
          Hour-by-Hour Schedule
        </h2>
        <div className="timeline">
          {day.entries.map((entry, i) => (
            <div key={i} className="timeline-entry">
              <div className="tl-time" style={{ color: day.accent }}>{entry.time}</div>
              <div className="tl-dot-col">
                <div className="tl-dot" style={{ background: day.color }} />
                {i < day.entries.length - 1 && (
                  <div className="tl-line" style={{ background: day.color + '30' }} />
                )}
              </div>
              <div className="tl-content">
                <div className="tl-title">{entry.title}</div>
                {entry.detail && <div className="tl-detail">{entry.detail}</div>}
                {entry.cost && (
                  <div className="tl-cost" style={{ color: day.color }}>{entry.cost}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {day.note && (
          <div className="day-note" style={{ borderColor: day.color }}>
            💡 {day.note}
          </div>
        )}
      </div>
    </div>
  )
}
