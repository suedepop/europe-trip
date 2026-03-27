import { useState, useEffect } from 'react'
import { DAYS, TRIP, SEGMENTS } from './data/itinerary'
import DayView from './components/DayView'
import CostSummary from './components/CostSummary'
import CancellationPolicies from './components/CancellationPolicies'

export default function App() {
  const [activeDay, setActiveDay] = useState(1)
  const [showCosts, setShowCosts] = useState(false)
  const [showPolicies, setShowPolicies] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const day = DAYS.find(d => d.num === activeDay)

  const segmentGroups = [
    { key: 'transit', days: [0, 1] },
    { key: 'disney', days: [2, 3, 4] },
    { key: 'paris', days: [5, 6] },
    { key: 'europa', days: [7, 8] },
    { key: 'london', days: [9, 10, 11] },
    { key: 'dublin', days: [12] },
    { key: 'transit', days: [13] },
  ]

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">✈</div>
          <div className="sidebar-title-block">
            <div className="sidebar-title">EUROPE 2026</div>
            <div className="sidebar-sub">Jun 30–Jul 13 · Family of Three</div>
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
                      className={`day-btn ${activeDay === n && !showCosts && !showPolicies ? 'active' : ''}`}
                      style={activeDay === n && !showCosts && !showPolicies ? {
                        background: seg.color,
                        borderColor: seg.color,
                      } : { borderColor: seg.color + '40' }}
                      onClick={() => { setActiveDay(n); setShowCosts(false); setShowPolicies(false) }}
                    >
                      <span className="day-btn-num" style={
                        activeDay === n && !showCosts && !showPolicies ? {} : { color: seg.color }
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
              onClick={() => { setShowCosts(true); setShowPolicies(false) }}
            >
              <span className="day-btn-num" style={showCosts ? {} : { color: '#C9A84C' }}>💰</span>
              <span className="day-btn-date">Costs</span>
              <span className="day-btn-title">Full Cost Summary</span>
            </button>
            <button
              className={`day-btn ${showPolicies ? 'active' : ''}`}
              style={showPolicies ? { background: '#C9A84C', borderColor: '#C9A84C' } : { borderColor: '#C9A84C40' }}
              onClick={() => { setShowPolicies(true); setShowCosts(false) }}
            >
              <span className="day-btn-num" style={showPolicies ? {} : { color: '#C9A84C' }}>📋</span>
              <span className="day-btn-date">Bookings</span>
              <span className="day-btn-title">Bookings & Policies</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main">
        {showCosts ? (
          <CostSummary />
        ) : showPolicies ? (
          <CancellationPolicies />
        ) : (
          <DayView day={day} />
        )}
      </main>
    </div>
  )
}
