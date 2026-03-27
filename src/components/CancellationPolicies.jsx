export default function CancellationPolicies() {
  const policies = [
    {
      name: "Delta / Air France — PIT → CDG",
      date: "Jun 30",
      type: "flight",
      paid: "96K Flying Blue pts (Amex transfer) + $426.90 fees",
      deadline: "Before departure",
      penalty: "None",
      refund: "96K Flying Blue miles redeposited + $426.90 refunded to card",
      flexibility: "high",
      status: "not_booked",
      notes: "Booked with Air France Flying Blue miles (transferred from Amex MR). Cancel via airfrance.com or flyingblue.com. Flying Blue award tickets are cancellable with miles redeposited. No-show forfeits everything.",
    },
    {
      name: "Hyatt Place Paris CDG — Arrival Night",
      date: "Jul 1",
      type: "hotel",
      paid: "14,550 Hyatt pts",
      deadline: "48 hours before check-in (Jun 29)",
      penalty: "None if 48+ hrs out",
      refund: "Points redeposited immediately",
      flexibility: "high",
      status: "not_booked",
      notes: "Late cancel/no-show: points refunded but card charged 1-night cash rate. Check confirmation for exact deadline.",
    },
    {
      name: "Sequoia Lodge — Disneyland Paris Package",
      date: "Jul 2–4",
      type: "hotel",
      paid: "$2,554.98 cash",
      deadline: "7 days before arrival (Jun 25)",
      penalty: "None if 7+ days out — full forfeit inside 7 days",
      refund: "Full refund to original payment method",
      flexibility: "high",
      status: "not_booked",
      notes: "Applies to direct disneylandparis.com bookings. Third-party bookings follow that vendor's policy. 15% deposit at booking, balance due 60 days before.",
    },
    {
      name: "Hyatt Place Paris CDG — Paris Nights",
      date: "Jul 5–6",
      type: "hotel",
      paid: "29,100 Hyatt pts (2 nights)",
      deadline: "48 hours before check-in (Jul 3)",
      penalty: "None if 48+ hrs out",
      refund: "Points redeposited immediately",
      flexibility: "high",
      status: "not_booked",
      notes: "Same Hyatt policy as arrival night. Late cancel/no-show: card charged 1-night cash rate.",
    },
    {
      name: "TGV Trains — SNCF (multiple legs)",
      date: "Various",
      type: "train",
      paid: "Cash (varies by leg)",
      deadline: "Depends on fare class purchased",
      penalty: "'Seconde' fare: free 7+ days, €19/ticket inside 7 days. 'Prems' fare: non-refundable.",
      refund: "Refund to original payment method via sncf-connect.com",
      flexibility: "check",
      status: "not_booked",
      notes: "Check each ticket in your sncf-connect.com account — fare name and conditions shown per ticket. Covers CDG↔Chessy, Paris Est↔Ringsheim legs.",
    },
    {
      name: "Hotel Krønasår — Europa-Park Package",
      date: "Jul 7–8",
      type: "hotel",
      paid: "€1,269 cash",
      deadline: "3 days before (Jul 4) — or 29 days if promo rate (Jun 8)",
      penalty: "Standard: none if 3+ days. Promo: €50 fee if 29+ days, full forfeit inside 29 days.",
      refund: "Refund to original payment or voucher",
      flexibility: "check",
      status: "not_booked",
      notes: "Check confirmation for rate type. Package bookings with park tickets may fall under restricted rate terms. Contact reservation.europapark.de to confirm.",
    },
    {
      name: "Eurostar — Paris → London",
      date: "Jul 9",
      type: "train",
      paid: "~£150–250 family",
      deadline: "7 days before departure (Jul 2) for Standard refund",
      penalty: "Standard: £25/pp refund fee. Standard Premier: no fee within 48 hrs. SNAP: non-refundable.",
      refund: "Refund to original payment, up to 28 days processing",
      flexibility: "medium",
      status: "not_booked",
      notes: "Exchanges are free up to 1 hour before departure (pay any fare difference). Check your fare class on eurostar.com under 'Manage my booking'.",
    },
    {
      name: "Andaz London Liverpool Street",
      date: "Jul 9–11",
      type: "hotel",
      paid: "75,000 Hyatt pts (3 nights)",
      deadline: "48 hours before check-in (Jul 7)",
      penalty: "None if 48+ hrs out",
      refund: "75K points redeposited immediately",
      flexibility: "high",
      status: "not_booked",
      notes: "Late cancel/no-show: card charged 1-night cash rate (Andaz runs £250–400+/night in July). Cancel via Hyatt app or hyatt.com.",
    },
    {
      name: "Avenue Q — Shaftesbury Theatre",
      date: "Jul 10",
      type: "event",
      paid: "Pre-purchased",
      deadline: "Non-refundable",
      penalty: "Full loss",
      refund: "None — date exchange possible at theatre's discretion (£2/ticket admin fee)",
      flexibility: "none",
      status: "not_booked",
      notes: "Contact boxoffice@shaftesburytheatre.com well in advance for possible date exchange. If show is canceled by producer, alternative performance offered.",
    },
    {
      name: "Iron Maiden EDDFEST — Knebworth",
      date: "Jul 11",
      type: "event",
      paid: "Pre-purchased",
      deadline: "Non-refundable",
      penalty: "Full loss",
      refund: "None — refund only if event canceled by promoter",
      flexibility: "none",
      status: "not_booked",
      notes: "DO NOT resell on Viagogo or unauthorized platforms — entire original booking will be canceled and entry refused. Use official resale channel only if available.",
    },
    {
      name: "Conrad Dublin",
      date: "Jul 12",
      type: "hotel",
      paid: "$505.73 − $300 Amex credit = $205.73 net",
      deadline: "Check confirmation for deadline",
      penalty: "Varies by rate — typically 24–48 hrs before check-in",
      refund: "Refund to original payment method",
      flexibility: "check",
      status: "not_booked",
      notes: "Hilton Conrad property. Check your specific rate's cancellation terms at hilton.com. Amex $300 statement credit applies separately — verify credit posts even if booking is canceled.",
    },
    {
      name: "Ryanair — LTN → DUB",
      date: "Jul 12",
      type: "flight",
      paid: "$258 ($86/pp)",
      deadline: "Non-refundable",
      penalty: "Full loss (minus tiny tax refund)",
      refund: "Only government taxes/airport charges refundable (a few £ per ticket)",
      flexibility: "none",
      status: "not_booked",
      notes: "Flight changes allowed up to 2.5 hrs before departure for €35–55/pp + fare difference. Changing is better than canceling if you can't travel.",
    },
    {
      name: "Aer Lingus — DUB → PIT (Avios)",
      date: "Jul 13",
      type: "flight",
      paid: "60K Avios (20K/pp)",
      deadline: "24 hours before departure",
      penalty: "€42.50/pp (~€127.50 total)",
      refund: "60K Avios redeposited. Taxes/fees refunded minus €42.50/pp cancellation charge.",
      flexibility: "medium",
      status: "not_booked",
      notes: "Inside 24 hours: no cancellation possible. If booked through British Airways, fee structure may differ ($55 online, $80 by phone).",
    },
  ]

  const flexColor = { high: '#2E7D32', medium: '#E65100', check: '#1565C0', none: '#B71C1C' }
  const flexLabel = { high: 'HIGH', medium: 'MEDIUM', check: 'CHECK FARE/RATE', none: 'NON-REFUNDABLE' }
  const statusColor = { booked: '#2E7D32', not_booked: '#B71C1C', canceled: '#757575' }
  const statusLabel = { booked: 'BOOKED', not_booked: 'NOT BOOKED', canceled: 'CANCELED' }
  const statusIcon = { booked: '✅', not_booked: '❌', canceled: '🚫' }

  const bookedCount = policies.filter(p => p.status === 'booked').length
  const notBookedCount = policies.filter(p => p.status === 'not_booked').length
  const canceledCount = policies.filter(p => p.status === 'canceled').length

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">BOOKINGS</div>
        <h1 className="costs-title">Bookings</h1>
        <p className="costs-sub">Family of Three · Jun 30–Jul 13, 2026 · Booking status, deadlines, and cancellation terms</p>
        <p className="costs-note">Always verify policies against your actual booking confirmations</p>
      </div>

      {/* Status summary */}
      <div className="cost-highlights">
        <div className="highlight-card" style={{ borderColor: '#2E7D32' }}>
          <div className="hl-icon">✅</div>
          <div className="hl-label">Booked</div>
          <div className="hl-value">{bookedCount}</div>
          <div className="hl-note">of {policies.length} bookings</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#B71C1C' }}>
          <div className="hl-icon">❌</div>
          <div className="hl-label">Not Booked</div>
          <div className="hl-value">{notBookedCount}</div>
          <div className="hl-note">still need to book</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#757575' }}>
          <div className="hl-icon">🚫</div>
          <div className="hl-label">Canceled</div>
          <div className="hl-value">{canceledCount}</div>
          <div className="hl-note">no longer needed</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#1565C0' }}>
          <div className="hl-icon">🔒</div>
          <div className="hl-label">Non-Refundable</div>
          <div className="hl-value">{policies.filter(p => p.flexibility === 'none').length}</div>
          <div className="hl-note">Avenue Q + EDDFEST + Ryanair</div>
        </div>
      </div>

      {/* Upcoming deadlines */}
      <div className="cost-section">
        <h2 className="cost-section-title">KEY DEADLINES (CHRONOLOGICAL)</h2>
        <div className="cost-table">
          <div className="cost-row even">
            <span className="cost-row-label">Jun 8 — Krønasår (if promo rate)</span>
            <span className="cost-row-value">29-day cancel window</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Jun 25 — Sequoia Lodge DLP</span>
            <span className="cost-row-value">7-day cancel window</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Jun 29 — Hyatt Place CDG (Jul 1 night)</span>
            <span className="cost-row-value">48-hour cancel window</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Jul 2 — Eurostar (Standard fare)</span>
            <span className="cost-row-value">7-day cancel window</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Jul 3 — Hyatt Place CDG (Jul 5–6 nights)</span>
            <span className="cost-row-value">48-hour cancel window</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Jul 4 — Krønasår (if standard rate)</span>
            <span className="cost-row-value">3-day cancel window</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Jul 7 — Andaz London</span>
            <span className="cost-row-value">48-hour cancel window</span>
          </div>
        </div>
      </div>

      {/* Detailed policies */}
      {policies.map((p, i) => (
        <div key={i} className="cost-section">
          <h2 className="cost-section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {p.name}
            <span style={{
              fontSize: '0.6em',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#fff',
              background: statusColor[p.status],
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}>
              {statusIcon[p.status]} {statusLabel[p.status]}
            </span>
            <span style={{
              fontSize: '0.6em',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#fff',
              background: flexColor[p.flexibility],
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}>
              {flexLabel[p.flexibility]}
            </span>
          </h2>
          <div className="cost-table">
            <div className="cost-row even">
              <span className="cost-row-label">Date</span>
              <span className="cost-row-value">{p.date}</span>
            </div>
            <div className="cost-row odd">
              <span className="cost-row-label">Paid</span>
              <span className="cost-row-value">{p.paid}</span>
            </div>
            <div className="cost-row even">
              <span className="cost-row-label">Cancel Deadline</span>
              <span className="cost-row-value" style={{ fontWeight: 600 }}>{p.deadline}</span>
            </div>
            <div className="cost-row odd">
              <span className="cost-row-label">Penalty</span>
              <span className="cost-row-value">{p.penalty}</span>
            </div>
            <div className="cost-row even">
              <span className="cost-row-label">Refund Method</span>
              <span className="cost-row-value">{p.refund}</span>
            </div>
            <div className="cost-row odd">
              <span className="cost-row-label">Notes</span>
              <span className="cost-row-value" style={{ fontSize: '0.85em', lineHeight: 1.4 }}>{p.notes}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="costs-disclaimer">
        Policies researched March 2026. Always verify against your actual booking confirmations — terms may vary by fare class, rate type, or booking channel.
        Hyatt cancellation windows can vary by property. TGV and Eurostar policies depend on fare class purchased.
        To update booking status, edit the "status" field in CancellationPolicies.jsx (booked, not_booked, or canceled).
      </div>
    </div>
  )
}
