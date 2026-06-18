export default function CancellationPolicies() {
  const policies = [
    {
      name: "Delta / Air France — PIT → ATL → CDG",
      date: "Jun 30",
      type: "flight",
      paid: "96K Flying Blue pts (Amex transfer) + $788.67 fees",
      deadline: "Before departure",
      penalty: "None",
      refund: "96K Flying Blue miles redeposited + $788.67 refunded to card",
      flexibility: "high",
      status: "booked",
      notes: "DL1353 PIT→ATL (4:55 PM) + AF0033 ATL→CDG (8:05 PM). Economy Comfort. Seats 22D / 21J. Booked with Air France Flying Blue miles (transferred from Amex MR). Cancel via airfrance.com or flyingblue.com. Flying Blue award tickets are cancellable with miles redeposited. No-show forfeits everything.",
    },
    {
      name: "Hyatt Place Paris CDG — Arrival Night",
      date: "Jul 1–2",
      type: "hotel",
      paid: "4,750 Hyatt pts + €166.39 (~$183) Points + Cash",
      deadline: "11:59 PM hotel time, 1 day before arrival (Jun 30)",
      penalty: "1-night fee charged to card if canceled late or no-show",
      refund: "Points redeposited, cash refunded if canceled before deadline",
      flexibility: "high",
      status: "booked",
      notes: "Suite with 1 King Bed and Sofa Bed. Hyatt member #555518921C. Shuttle via station.link (€7/pp) from Roissypôle station near Terminal 3, runs 6:30–11:00 / 17:00–22:45 every 30 min. Contact: +33 1 48 16 12 34 / parisairport.house@hyatt.com",
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
      status: "booked",
      notes: "Confirmation #33765384. ✅ PAID IN FULL — $2,554.98 received ($377.65 deposit + $2,177.33 balance). Cancellation: full refund if 7+ days before arrival; full forfeit inside 7 days.",
    },
    {
      name: "The Steakhouse — Disney Village",
      date: "Jul 2",
      type: "event",
      paid: "Credit card hold only — pay at restaurant",
      deadline: "Check Disney confirmation (typically 24–48 hrs before)",
      penalty: "~€10/pp no-show fee if canceled late or no-show",
      refund: "Card hold released if canceled before deadline",
      flexibility: "medium",
      status: "booked",
      notes: "Reservation for 3 guests at 6:00 PM in Disney Village. Chicago-style steakhouse. Walking distance (~5 min) from Sequoia Lodge. Cancel or modify via the Disneyland Paris app or disneylandparis.com. Arrive ~10 min early to check in.",
    },
    {
      name: "Silver Spur Steakhouse — Disneyland Park",
      date: "Jul 3",
      type: "event",
      paid: "Credit card hold only — pay at restaurant",
      deadline: "Check Disney confirmation (typically 24–48 hrs before)",
      penalty: "~€10/pp no-show fee if canceled late or no-show",
      refund: "Card hold released if canceled before deadline",
      flexibility: "medium",
      status: "booked",
      notes: "Reservation for 3 guests at 5:30 PM in Frontierland (Disneyland Park). Saloon-style steakhouse. Cancel or modify via the Disneyland Paris app or disneylandparis.com. Arrive ~10 min early to check in.",
    },
    {
      name: "Hôtel Le Milie Rose — Paris (Jul 5 night)",
      date: "Jul 5–6",
      type: "hotel",
      paid: "€394 (~$433) — 2 rooms (Superior Double + Superior Twin)",
      deadline: "Verify in confirmation email (Best Flexible rates typically allow free cancellation 24–48 hrs before arrival)",
      penalty: "Best Flexible Rate — full refund if canceled before deadline; full charge if no-show",
      refund: "Refund to Visa ending 9976 if canceled before deadline",
      flexibility: "check",
      status: "booked",
      notes: "22 rue des Petites Écuries, 75010 Paris. +33 1 84 25 72 32 / info@hotellemilierose.com / www.hotellemilierose.com. Confirmations: #35415SG010781 (Superior Double — 1 Adult + 1 Child) + #35415SG010782 (Superior Twin — 1 Adult). Best Flexible Room Only Rate. 5-min walk to Gare de l'Est for next-day TGV INOUI to Europa-Park.",
    },
    {
      name: "TGV Trains — SNCF (other legs)",
      date: "Various",
      type: "train",
      paid: "Cash (varies by leg)",
      deadline: "Depends on fare class purchased",
      penalty: "'Seconde' fare: free 7+ days, €19/ticket inside 7 days. 'Prems' fare: non-refundable.",
      refund: "Refund to original payment method via sncf-connect.com",
      flexibility: "check",
      status: "not_booked",
      notes: "Check each ticket in your sncf-connect.com account — fare name and conditions shown per ticket. Covers any remaining CDG↔Chessy or other supplementary legs not yet booked.",
    },
    {
      name: "TGV INOUI 9531 — Paris → Ringsheim/Europa-Park",
      date: "Jul 6",
      type: "train",
      paid: "$285.50 (3 passengers · 1st Class)",
      deadline: "Depends on fare class — typically 7+ days for free exchange/refund on flexible fares",
      penalty: "Flexible fare: small fee or none. Prems/non-refundable: full loss.",
      refund: "Refund to original payment method via sncf-connect.com or oui.sncf",
      flexibility: "check",
      status: "booked",
      notes: "Mon Jul 6 · Departure 5:25 PM Paris Gare de l'Est · Arrival 7:59 PM Ringsheim/Europa-Park · 2h 34min direct. 1st Class · Coach 12 · Seats 208 (lower deck, window), 211 (lower deck, window), 207 (lower deck, corridor). Booked for Theodore Cromwell, Catrina Cromwell, Preston Cromwell. Includes bar, WiFi, electrical outlets, nursery area. Boarding opens 5:23 PM (2 min before departure). Verify exact fare class refund/exchange terms in your sncf-connect.com booking.",
    },
    {
      name: "TGV INOUI 9530 — Ringsheim/Europa-Park → Paris (Eurostar connection)",
      date: "Jul 9",
      type: "train",
      paid: "€234 (3 passengers · 1st Class)",
      deadline: "Depends on fare class — typically 7+ days for free exchange/refund on flexible fares",
      penalty: "Flexible fare: small fee or none. Prems/non-refundable: full loss.",
      refund: "Refund to original payment method via sncf-connect.com or oui.sncf",
      flexibility: "check",
      status: "booked",
      notes: "Thu Jul 9 · Departure 6:57 AM Ringsheim/Europa-Park · Arrival 9:35 AM Paris Gare de l'Est · 2h 38min direct. 1st Class · Coach 13 · Seats 308 (lower deck, window), 307 (lower deck, corridor), 311 (lower deck, window). Booked for Theodore Cromwell, Catrina Cromwell, Preston Cromwell. Bar, WiFi, electrical outlets. Connects to Eurostar 9023 (1h 37min connection — Eurostar check-in closes 10:42 AM).",
    },
    {
      name: "Hotel Krønasår — Europa-Park Package",
      date: "Jul 6–9",
      type: "hotel",
      paid: "€1,666.05 (~$1,833) cash (3 nights + 2-day park)",
      deadline: "3 days before (Jul 3) — or 29 days if promo rate (Jun 7)",
      penalty: "Standard: none if 3+ days. Promo: €50 fee if 29+ days, full forfeit inside 29 days.",
      refund: "Refund to original payment or voucher",
      flexibility: "check",
      status: "booked",
      notes: "Reservation #H14296598. Payment due by Jul 2. Check MEINE REISE portal for tickets, extras, and digital room key. Contact: +49 7822 860-5679 / hotel@europapark.de",
    },
    {
      name: "Eurostar 9023 — Paris → London (1st Class)",
      date: "Jul 9",
      type: "train",
      paid: "$355.36 (3 passengers · 1st Class)",
      deadline: "Depends on fare class — typically 7 days before departure for Standard fare refund",
      penalty: "Standard: £25/pp refund fee. Standard Premier: no fee within 48 hrs. SNAP: non-refundable.",
      refund: "Refund to original payment, up to 28 days processing",
      flexibility: "check",
      status: "booked",
      notes: "Thu Jul 9 · Departure 11:12 AM Paris Gare du Nord · Arrival 12:30 PM London St Pancras · 2h 18min. 1st Class · Coach 14 · Seats 63, 64, 68. Booked for Theodore Cromwell, Catrina Cromwell, Preston Cromwell. Bar onboard. Check-in/passport closes 30 min before departure (10:42 AM). Connects from TGV INOUI 9530 (arrives Paris Gare de l'Est 9:35 AM — 5-min walk to Gare du Nord, ~1h 37min total connection). Exchanges typically free up to 1 hour before departure (pay any fare difference). Verify exact fare class on eurostar.com under 'Manage my booking'.",
    },
    {
      name: "Andaz London Liverpool Street",
      date: "Jul 9–12",
      type: "hotel",
      paid: "79,000 Hyatt pts (29K + 25K + 25K)",
      deadline: "24 hrs before 11:59 PM day of arrival (Jul 8)",
      penalty: "1-night fee charged to card if canceled late or no-show",
      refund: "79K points redeposited if canceled before deadline",
      flexibility: "high",
      status: "booked",
      notes: "Confirmation #24782647. 1 King Bed, rollaway bed requested. Award Category 6. 5% discretionary service charge on room rate. Grade II heritage building — rooms are uniquely designed. Hyatt member #555518921C.",
    },
    {
      name: "Avenue Q — Shaftesbury Theatre",
      date: "Jul 10",
      type: "event",
      paid: "£291 (3 tickets)",
      deadline: "Non-refundable",
      penalty: "Full loss",
      refund: "None — date exchange possible at theatre's discretion (£2/ticket admin fee)",
      flexibility: "none",
      status: "booked",
      notes: "Booking ref ACA67366. Fri 10 Jul, 7:30 PM. Royal Circle seats G16, G17, G18. E-Tickets. Contact boxoffice@shaftesburytheatre.com for possible date exchange.",
    },
    {
      name: "Iron Maiden EDDFEST — Knebworth",
      date: "Jul 11",
      type: "event",
      paid: "£436.74 (3× General Admission)",
      deadline: "Non-refundable",
      penalty: "Full loss",
      refund: "None — refund only if event canceled by promoter",
      flexibility: "none",
      status: "booked",
      notes: "Gigantic order ref 7522-0398-3462. 3× General Admission £145.08 each (inc. £17.58 booking fee) + £1.50 transaction fee. E-Tickets. Gates 1:00 PM. DO NOT resell on unauthorized platforms — booking will be canceled.",
    },
    {
      name: "The College Green Hotel Dublin, Autograph Collection",
      date: "Jul 12–13",
      type: "hotel",
      paid: "$776.25 paid in full ($300 Amex statement credit applies separately = $476.25 net)",
      deadline: "Check confirmation for cancellation deadline (Amex Travel prepaid bookings are typically 24–72 hrs before check-in for refundable rates)",
      penalty: "Varies by rate — verify the Trip ref ZOAX1046-93660 cancellation terms in your Amex Travel confirmation",
      refund: "Refund to original payment method via amextravel.com or by phone with Amex Travel",
      flexibility: "check",
      status: "booked",
      notes: "Booked May 5, 2026 via Amex Travel. Trip ref ZOAX1046-93660. Marriott Bonvoy member #307180802. 1 room, 2 double beds — 2 adults + 1 child (16). Check-in Jul 12 at 3:00 PM, check-out Jul 13 by 12:00 PM. Address: College Green, Westmoreland Street, Dublin D02 HR67. Cost: $683.92 room + $92.33 taxes/fees = $776.25 paid today. Earns 5x Membership Rewards points. $300 Amex statement credit posts separately — confirm it lands on the Amex statement after travel. Verify credit still posts if booking is canceled.",
    },
    {
      name: "British Airways BA0828 — LHR → DUB (Avios)",
      date: "Jul 12",
      type: "flight",
      paid: "32,250 Avios + $6.00 fees (Amex Personal ending 1004)",
      deadline: "Up to 24 hours before departure for cancellation (Avios award rules)",
      penalty: "BA Executive Club: ~£35/$55 per person cancellation fee. Inside 24 hrs: no refund.",
      refund: "Avios redeposited to BA Executive Club + taxes/fees refunded minus cancellation fee. Cancel via ba.com 'Manage My Booking'.",
      flexibility: "medium",
      status: "booked",
      notes: "Booking ref YO6AYC (e-ticket). 10:30 AM LHR T5 → 12:00 PM Dublin T2 · 1h 30min · Euro Traveller. Booked for Theodore Cromwell (BA Executive Club #05676589), Catrina Cromwell, Preston Cromwell. Charged $6.00 to American Express Personal card ending 1004 + 32,250 Avios from BA Executive Club. Baggage per person: 1 handbag (40×30×15cm) + 1 cabin bag (56×45×25cm) + 1 checked bag at 23kg (51lbs). Confirmation sent to tedcromwell@gmail.com.",
    },
    {
      name: "Aer Lingus — DUB → PIT (Avios)",
      date: "Jul 13",
      type: "flight",
      paid: "60K Avios (Amex transfer) + $513.39 fees",
      deadline: "24 hours before departure",
      penalty: "€42.50/pp (~€127.50 total)",
      refund: "60K Avios redeposited. Taxes/fees refunded minus €42.50/pp cancellation charge.",
      flexibility: "medium",
      status: "booked",
      notes: "EI81 DUB→PIT 3:40 PM direct. Economy. Booking ref EI0532MLHIDLJ · check-in ref 3A5D8S. 1 checked bag each (23 kg). Inside 24 hours: no cancellation possible.",
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
          <div className="hl-note">Avenue Q + EDDFEST</div>
        </div>
      </div>

      {/* Upcoming deadlines */}
      <div className="cost-section">
        <h2 className="cost-section-title">KEY DEADLINES (CHRONOLOGICAL)</h2>
        <div className="cost-table">
          <div className="cost-row even">
            <span className="cost-row-label">Jun 7 — Krønasår (if promo rate)</span>
            <span className="cost-row-value">29-day cancel window</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Jun 22 — Sequoia Lodge DLP balance due</span>
            <span className="cost-row-value">✅ PAID IN FULL — $2,554.98</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Jun 25 — Sequoia Lodge DLP</span>
            <span className="cost-row-value">7-day cancel window</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Jun 30 — Hyatt Place CDG (Jul 1 night)</span>
            <span className="cost-row-value">11:59 PM cancel deadline</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Jul 2 — Krønasår payment due</span>
            <span className="cost-row-value">€1,666.05 (~$1,833)</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Jul 2 — Eurostar (Standard fare)</span>
            <span className="cost-row-value">7-day cancel window</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Jul 3–4 — Hôtel Le Milie Rose (Jul 5 night)</span>
            <span className="cost-row-value">Verify in confirmation email</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Jul 3 — Krønasår (if standard rate)</span>
            <span className="cost-row-value">3-day cancel window</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Jul 8 — Andaz London</span>
            <span className="cost-row-value">24hr before 11:59 PM arrival day</span>
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
