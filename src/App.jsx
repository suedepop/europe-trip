import { useState, useEffect } from 'react'
import { DAYS, TRIP, SEGMENTS } from './data/itinerary'
import DayView from './components/DayView'
import CostSummary from './components/CostSummary'
import CancellationPolicies from './components/CancellationPolicies'
import CellPhones from './components/CellPhones'
import SummaryGate from './components/SummaryGate'
import DisneylandCheatSheet from './components/DisneylandCheatSheet'
import EuropaParkCheatSheet from './components/EuropaParkCheatSheet'
import ParisCheatSheet from './components/ParisCheatSheet'
import LondonCheatSheet from './components/LondonCheatSheet'
import DublinCheatSheet from './components/DublinCheatSheet'

export default function App() {
  const [activeDay, setActiveDay] = useState(1)
  // panel: null = day view, otherwise a Summary/Cheat-Sheet view id
  const [panel, setPanel] = useState(null)
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
                  const isActive = activeDay === n && panel === null
                  return (
                    <button
                      key={n}
                      className={`day-btn ${isActive ? 'active' : ''}`}
                      style={isActive ? {
                        background: seg.color,
                        borderColor: seg.color,
                      } : { borderColor: seg.color + '40' }}
                      onClick={() => { setActiveDay(n); setPanel(null) }}
                    >
                      <span className="day-btn-num" style={
                        isActive ? {} : { color: seg.color }
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
              className={`day-btn ${panel === 'costs' ? 'active' : ''}`}
              style={panel === 'costs' ? { background: '#C9A84C', borderColor: '#C9A84C' } : { borderColor: '#C9A84C40' }}
              onClick={() => setPanel('costs')}
            >
              <span className="day-btn-num" style={panel === 'costs' ? {} : { color: '#C9A84C' }}>💰</span>
              <span className="day-btn-date">Costs</span>
              <span className="day-btn-title">Full Cost Summary</span>
            </button>
            <button
              className={`day-btn ${panel === 'policies' ? 'active' : ''}`}
              style={panel === 'policies' ? { background: '#C9A84C', borderColor: '#C9A84C' } : { borderColor: '#C9A84C40' }}
              onClick={() => setPanel('policies')}
            >
              <span className="day-btn-num" style={panel === 'policies' ? {} : { color: '#C9A84C' }}>📋</span>
              <span className="day-btn-date">Bookings</span>
              <span className="day-btn-title">Bookings & Policies</span>
            </button>
            <button
              className={`day-btn ${panel === 'phones' ? 'active' : ''}`}
              style={panel === 'phones' ? { background: '#C9A84C', borderColor: '#C9A84C' } : { borderColor: '#C9A84C40' }}
              onClick={() => setPanel('phones')}
            >
              <span className="day-btn-num" style={panel === 'phones' ? {} : { color: '#C9A84C' }}>📱</span>
              <span className="day-btn-date">Phones</span>
              <span className="day-btn-title">Cell Phones</span>
            </button>
          </div>

          <div className="seg-group">
            <div className="seg-label" style={{ color: '#2E7D32' }}>CHEAT SHEETS</div>
            <button
              className={`day-btn ${panel === 'disneyland' ? 'active' : ''}`}
              style={panel === 'disneyland' ? { background: '#2E7D32', borderColor: '#2E7D32' } : { borderColor: '#2E7D3240' }}
              onClick={() => setPanel('disneyland')}
            >
              <span className="day-btn-num" style={panel === 'disneyland' ? {} : { color: '#2E7D32' }}>🏰</span>
              <span className="day-btn-date">Parks</span>
              <span className="day-btn-title">Disneyland</span>
            </button>
            <button
              className={`day-btn ${panel === 'europapark' ? 'active' : ''}`}
              style={panel === 'europapark' ? { background: '#2E7D32', borderColor: '#2E7D32' } : { borderColor: '#2E7D3240' }}
              onClick={() => setPanel('europapark')}
            >
              <span className="day-btn-num" style={panel === 'europapark' ? {} : { color: '#2E7D32' }}>🎢</span>
              <span className="day-btn-date">Parks</span>
              <span className="day-btn-title">Europa Park</span>
            </button>
            <button
              className={`day-btn ${panel === 'paris' ? 'active' : ''}`}
              style={panel === 'paris' ? { background: '#2E7D32', borderColor: '#2E7D32' } : { borderColor: '#2E7D3240' }}
              onClick={() => setPanel('paris')}
            >
              <span className="day-btn-num" style={panel === 'paris' ? {} : { color: '#2E7D32' }}>🗼</span>
              <span className="day-btn-date">City</span>
              <span className="day-btn-title">Paris Sightseeing</span>
            </button>
            <button
              className={`day-btn ${panel === 'london' ? 'active' : ''}`}
              style={panel === 'london' ? { background: '#2E7D32', borderColor: '#2E7D32' } : { borderColor: '#2E7D3240' }}
              onClick={() => setPanel('london')}
            >
              <span className="day-btn-num" style={panel === 'london' ? {} : { color: '#2E7D32' }}>🎡</span>
              <span className="day-btn-date">City</span>
              <span className="day-btn-title">London Sightseeing</span>
            </button>
            <button
              className={`day-btn ${panel === 'dublin' ? 'active' : ''}`}
              style={panel === 'dublin' ? { background: '#2E7D32', borderColor: '#2E7D32' } : { borderColor: '#2E7D3240' }}
              onClick={() => setPanel('dublin')}
            >
              <span className="day-btn-num" style={panel === 'dublin' ? {} : { color: '#2E7D32' }}>☘️</span>
              <span className="day-btn-date">City</span>
              <span className="day-btn-title">Dublin Sightseeing</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main">
        {panel === 'costs' ? (
          <SummaryGate><CostSummary /></SummaryGate>
        ) : panel === 'policies' ? (
          <SummaryGate><CancellationPolicies /></SummaryGate>
        ) : panel === 'phones' ? (
          <SummaryGate><CellPhones /></SummaryGate>
        ) : panel === 'disneyland' ? (
          <DisneylandCheatSheet />
        ) : panel === 'europapark' ? (
          <EuropaParkCheatSheet />
        ) : panel === 'paris' ? (
          <ParisCheatSheet />
        ) : panel === 'london' ? (
          <LondonCheatSheet />
        ) : panel === 'dublin' ? (
          <DublinCheatSheet />
        ) : (
          <DayView day={day} />
        )}
      </main>
    </div>
  )
}
