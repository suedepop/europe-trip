import { COST_SUMMARY, DAYS, SEGMENTS } from '../data/itinerary'

export default function CostSummary() {
  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">SUMMARY</div>
        <h1 className="costs-title">Complete Trip Costs</h1>
        <p className="costs-sub">Family of Three · Jun 30–Jul 13, 2026 · Estimates in USD unless noted</p>
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
          <div className="hl-label">Flights (cash)</div>
          <div className="hl-value">$1,560</div>
          <div className="hl-note">+ 96K Flying Blue + 60K Avios (Amex transfers)</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#003087' }}>
          <div className="hl-icon">🏨</div>
          <div className="hl-label">Hotels (cash)</div>
          <div className="hl-value">~$4,439</div>
          <div className="hl-note">Disney + Krønasår + College Green</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#6B3FA0' }}>
          <div className="hl-icon">💎</div>
          <div className="hl-label">Hyatt Points</div>
          <div className="hl-value">112,850</div>
          <div className="hl-note">CDG 29,100 + Andaz 75K</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#1A6B3A' }}>
          <div className="hl-icon">🎢</div>
          <div className="hl-label">Attractions</div>
          <div className="hl-value">~$220–260</div>
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
            <span>✅ Flights (cash) — Delta/AF fees + Ryanair + Aer Lingus fees</span>
            <span>$1,560.06</span>
          </div>
          <div className="gt-row">
            <span>✅ Flights (points) — Air France Flying Blue PIT→CDG</span>
            <span className="gt-pts">96K Flying Blue (Amex transfer)</span>
          </div>
          <div className="gt-row">
            <span>✅ Flights (points) — Aer Lingus DUB→PIT</span>
            <span className="gt-pts">60K Avios (Amex transfer)</span>
          </div>
          <div className="gt-row">
            <span>Trains</span>
            <span>~$950–1,000</span>
          </div>
          <div className="gt-row">
            <span>Other ground transport</span>
            <span>~$440–490</span>
          </div>
          <div className="gt-row">
            <span>Disney package (Sequoia Lodge + 4-day tickets)</span>
            <span>$2,554.98</span>
          </div>
          <div className="gt-row">
            <span>The College Green Hotel Dublin (1 night — $686.52 − $300 Amex credit)</span>
            <span>$386.52 net</span>
          </div>
          <div className="gt-row">
            <span>Hyatt Place Paris CDG (2 nights — points)</span>
            <span className="gt-pts">29,100 Hyatt pts (14,550/night)</span>
          </div>
          <div className="gt-row">
            <span>Hotel Krønasår (2 nights + 2-day park)</span>
            <span>$1,497</span>
          </div>
          <div className="gt-row">
            <span>Andaz London Liverpool St (3 nights — points)</span>
            <span className="gt-pts">75,000 Hyatt pts (25K/night)</span>
          </div>
          <div className="gt-row">
            <span>Attractions &amp; activities</span>
            <span>~$220–260</span>
          </div>
          <div className="gt-divider" />
          <div className="gt-row grand">
            <span>GRAND TOTAL (USD cash out-of-pocket)</span>
            <span>~$8,128–8,268</span>
          </div>
          <div className="gt-row grand pts">
            <span>FLYING BLUE (Amex MR → Air France)</span>
            <span>96,000 pts</span>
          </div>
          <div className="gt-row grand pts">
            <span>HYATT POINTS (Chase UR → Hyatt 1:1)</span>
            <span>112,850 pts</span>
          </div>
          <div className="gt-row grand pts">
            <span>AVIOS POINTS (Amex MR → Aer Lingus)</span>
            <span>60,000 pts</span>
          </div>
        </div>
      </div>

      <div className="costs-disclaimer">
        Dining costs not shown — budget separately. Avenue Q and EDDFEST tickets excluded (pre-purchased).
        All Hyatt stays must be booked before May 2026 to lock in current award rates.
        Europa-Park 2-day tickets included in Krønasår package.
      </div>
    </div>
  )
}
