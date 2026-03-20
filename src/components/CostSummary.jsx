import { COST_SUMMARY, DAYS, SEGMENTS } from '../data/itinerary'

export default function CostSummary() {
  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">SUMMARY</div>
        <h1 className="costs-title">Complete Trip Costs</h1>
        <p className="costs-sub">Family of Three · Jul 1–12, 2026 · Estimates in USD unless noted</p>
        <p className="costs-note">Exchange rates approx: €1 ≈ $1.10 USD · £1 ≈ $1.27 USD</p>
      </div>

      {/* Trip route visual */}
      <div className="route-bar">
        {Object.entries(SEGMENTS).map(([key, seg]) => (
          <div key={key} className="route-seg" style={{ background: seg.color }}>
            {seg.label}
          </div>
        ))}
      </div>

      {/* Key totals at top */}
      <div className="cost-highlights">
        <div className="highlight-card" style={{ borderColor: '#C9A84C' }}>
          <div className="hl-icon">✈</div>
          <div className="hl-label">All Flights</div>
          <div className="hl-value">$0</div>
          <div className="hl-note">Amex MR points</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#003087' }}>
          <div className="hl-icon">🏨</div>
          <div className="hl-label">Hotels (cash)</div>
          <div className="hl-value">~$3,596</div>
          <div className="hl-note">Disney + Krønasår</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#6B3FA0' }}>
          <div className="hl-icon">💎</div>
          <div className="hl-label">Hyatt Points</div>
          <div className="hl-value">~75–105K</div>
          <div className="hl-note">Chase UR → Hyatt 1:1</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#1A6B3A' }}>
          <div className="hl-icon">🎢</div>
          <div className="hl-label">Attractions</div>
          <div className="hl-value">~$230–310</div>
          <div className="hl-note">excl. pre-purchased shows</div>
        </div>
      </div>

      {/* Detailed breakdown */}
      {COST_SUMMARY.map((section, si) => (
        <div key={si} className="cost-section">
          <h2 className="cost-section-title">{section.category}</h2>
          <div className="cost-table">
            {section.items.map((item, ii) => (
              <div key={ii} className={`cost-row ${ii % 2 === 0 ? 'even' : 'odd'}`}>
                <span className="cost-row-label">{item.label}</span>
                <span className="cost-row-value">{item.cost}</span>
              </div>
            ))}
            <div className="cost-row total-row">
              <span className="cost-row-label">TOTAL</span>
              <span className="cost-row-value">{section.total}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Grand total */}
      <div className="grand-total">
        <div className="gt-inner">
          <div className="gt-row">
            <span>All flights (4 flights, family of 3)</span>
            <span className="gt-value green">$0 — Amex MR points</span>
          </div>
          <div className="gt-row">
            <span>PIT parking (12 days, fixed rate)</span>
            <span>$150</span>
          </div>
          <div className="gt-row">
            <span>Disney package (Sequoia Lodge + 4-day tickets)</span>
            <span>$2,200</span>
          </div>
          <div className="gt-row">
            <span>Hyatt House Paris CDG (2 nights — points)</span>
            <span className="gt-pts">~16–30K Chase UR pts</span>
          </div>
          <div className="gt-row">
            <span>Hotel Krønasår (2 nights + park + Rulantica)</span>
            <span>~$1,396</span>
          </div>
          <div className="gt-row">
            <span>Hyatt Place Amsterdam Airport (1 night — points)</span>
            <span className="gt-pts">~8–12K Chase UR pts</span>
          </div>
          <div className="gt-row">
            <span>Andaz London Liverpool St (3 nights — points)</span>
            <span className="gt-pts">~51–63K Chase UR pts</span>
          </div>
          <div className="gt-row">
            <span>Attractions &amp; activities</span>
            <span>~$230–310</span>
          </div>
          <div className="gt-row">
            <span>Ground transport in Europe</span>
            <span>~$650–720</span>
          </div>
          <div className="gt-row">
            <span>Miscellaneous: tips, souvenirs, incidentals</span>
            <span>~$400–600</span>
          </div>
          <div className="gt-divider" />
          <div className="gt-row grand">
            <span>GRAND TOTAL (USD cash out-of-pocket)</span>
            <span>~$5,026–5,366</span>
          </div>
          <div className="gt-row grand pts">
            <span>CHASE UR POINTS (→ Hyatt 1:1)</span>
            <span>~75,000–105,000 pts</span>
          </div>
        </div>
      </div>

      <div className="costs-disclaimer">
        Dining costs not shown — budget separately. Avenue Q and EddFest tickets excluded (pre-purchased).
        All Hyatt stays must be booked before May 2026 to lock in current award rates.
        Europa-Park tickets and Rulantica fully included in Krønasår package.
      </div>
    </div>
  )
}
