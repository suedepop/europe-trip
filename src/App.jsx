import { useState, useEffect } from 'react'
import { DAYS, TRIP, SEGMENTS } from './data/itinerary'
import DayView from './components/DayView'
import CostSummary from './components/CostSummary'

export default function App() {
  const [activeDay, setActiveDay] = useState(1)
  const [showCosts, setShowCosts] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const day = DAYS.find(d => d.num === activeDay)

  const segmentGroups = [
    { key: 'transit', days: [0] },
    { key: 'disney', days: [1, 2, 3] },
    { key: 'paris', days: [4, 5] },
    { key: 'europa', days: [6, 7] },
    { key: 'london', days: [8, 9, 10] },
    { key: 'transit', days: [11] },
  ]

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">✈</div>
          <div className="sidebar-title-block">
            <div className="sidebar-title">EUROPE 2026</div>
            <div className="sidebar-sub">Jul 1–12 · Family of Three</div>
          </div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(o => !o)}>
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {segmentGroups.map(({ key, days: segDays }) => {
            const seg = SEGMENTS[key]
            return (
              <div key={key} className="seg-group">
                <div className="seg-label" style={{ color: seg.color }}>
                  {seg.label.toUpperCase()}
                </div>
                {segDays.map(n => {
                  const d = DAYS.find(x => x.num === n)
                  if (!d) return null
                  return (
                    <button
                      key={n}
                      className={`day-btn ${activeDay === n && !showCosts ? 'active' : ''}`}
                      style={activeDay === n && !showCosts ? {
                        background: seg.color,
                        borderColor: seg.color,
                      } : { borderColor: seg.color + '40' }}
                      onClick={() => { setActiveDay(n); setShowCosts(false) }}
                    >
                      <span className="day-btn-num" style={
                        activeDay === n && !showCosts ? {} : { color: seg.color }
                      }>D{n}</span>
                      <span className="day-btn-date">{d.date.replace(/^\w+ /, '')}</span>
                      <span className="day-btn-title">{d.title}</span>
                    </button>
                  )
                })}
              </div>
            )
          })}

          <div className="seg-group">
            <div className="seg-label" style={{ color: '#C9A84C' }}>SUMMARY</div>
            <button
              className={`day-btn ${showCosts ? 'active' : ''}`}
              style={showCosts ? { background: '#C9A84C', borderColor: '#C9A84C' } : { borderColor: '#C9A84C40' }}
              onClick={() => setShowCosts(true)}
            >
              <span className="day-btn-num" style={showCosts ? {} : { color: '#C9A84C' }}>💰</span>
              <span className="day-btn-date">Costs</span>
              <span className="day-btn-title">Full Cost Summary</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main">
        {showCosts ? (
          <CostSummary />
        ) : (
          <DayView day={day} />
        )}
      </main>
    </div>
  )
}
