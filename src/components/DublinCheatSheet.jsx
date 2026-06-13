export default function DublinCheatSheet() {
  // Dublin window: arrive Sun 7/12 ~1pm · depart Mon 7/13 (taxi to airport ~12:30pm, EI81 3:40pm).
  // Base: The College Green Hotel, beside Trinity — the whole stay is within a ~10-min walk.
  const TIERS = {
    book: { color: '#C26A1E', label: 'Book ahead — timed entry', small: 'Reserve online before the day' },
    paid: { color: '#2C6E9E', label: 'Optional paid interiors',   small: 'Free to admire outside, pay to go in' },
    free: { color: '#2C7D50', label: 'Free & walkable',           small: 'All a few minutes from the hotel' },
  }

  const BADGES = {
    prebook: { bg: '#F6E9DD', color: '#C26A1E' },
    euro:    { bg: '#F2EDD7', color: '#9A7A12' },
    free:    { bg: '#E5F2EA', color: '#2C7D50' },
    music:   { bg: '#ECE8F2', color: '#5B4B8A' },
  }

  const rules = [
    [<strong>Book the Book of Kells slot now.</strong>, ' Timed entry at visittrinity.ie sells out in summer — reserve before the day. ~€20–25 adult; teens pay a reduced youth rate (not free, unlike France).'],
    [<strong>You never need city transit.</strong>, ' Basing at The College Green Hotel puts Trinity next door and Temple Bar, Grafton Street and the Liffey all within ~10 minutes on foot. Walk everything.'],
    [<strong>Most of it is free.</strong>, ' Trinity grounds, Molly Malone, Dublin Castle yard, Grafton Street, St Stephen\'s Green, the Temple Bar lanes and the Ha\'penny Bridge all cost nothing — only the Book of Kells and a couple of optional interiors are paid.'],
    [<strong>You\'re back on the euro.</strong>, ' Ireland uses € (you left the pound in London). Contactless works nearly everywhere; tip ~10% in restaurants, but tipping isn\'t expected in pubs.'],
    [<strong>Trad music is free.</strong>, ' The Temple Bar pub is iconic but touristy and pricey — go for the photo and one pint, then find live traditional music in a side-street pub for half the price.'],
  ]

  const sights = [
    {
      key: 'book',
      rides: [
        { name: 'Book of Kells & the Long Room', badges: [{ type: 'prebook', label: 'Pre-book' }, { type: 'euro', label: '~€20–25 adult' }],
          meta: 'Trinity College Old Library · literally next door to your hotel',
          best: 'Sun 7/12 ~2:30pm on a pre-booked slot. Allow 60–90 min.',
          note: <>Reserve a timed entry at <strong>visittrinity.ie</strong> before the day — it sells out in peak summer. The immersive Book of Kells Experience leads into the 9th-century manuscript, then opens onto the jaw-dropping Long Room library. Family and student rates available; teens pay the reduced youth rate.</> },
      ],
    },
    {
      key: 'paid',
      rides: [
        { name: 'Dublin Castle', badges: [{ type: 'euro', label: 'Yard free · rooms ~€12' }],
          meta: 'Dame St · ~10 min walk from Trinity',
          best: 'Mon 7/13 morning, first stop after the Trinity grounds.',
          note: 'The Upper Castle Yard and Chapel Royal exterior are free to wander. The State Apartments + Chester Beatty Library inside run ~€12 and ~45 min if you want the full visit.' },
        { name: 'Christ Church Cathedral', badges: [{ type: 'euro', label: '~€11 · exterior free' }],
          meta: "~5 min west of Dublin Castle · Dublin's oldest building",
          best: 'Mon 7/13 morning, right after the Castle.',
          note: "Worth the entry for the atmospheric 12th-century crypt — Strongbow's tomb and the mummified 'cat and rat'. ~30 min. Or just admire the medieval exterior for free." },
      ],
    },
    {
      key: 'free',
      rides: [
        { name: 'Trinity College grounds + Molly Malone', badges: [{ type: 'free', label: 'Free' }],
          meta: 'Front Square · steps from the hotel · Molly Malone statue on Suffolk St',
          best: 'Mon 7/13 morning — open to the public, free to roam.',
          note: "Walk Front Square and the Georgian quads past the Campanile. The Molly Malone statue ('the tart with the cart') sits just outside the gates — the classic Dublin photo." },
        { name: "Grafton Street + St Stephen's Green", badges: [{ type: 'free', label: 'Free' }],
          meta: 'Pedestrian shopping street running south from Trinity',
          best: 'Sun 7/12 afternoon — buskers are best late in the day.',
          note: "Dublin's liveliest street for buskers and street performers, with St Stephen's Green park at the top. Stop at Bewley's Café (a Dublin institution since 1840, gorgeous stained glass) for coffee and scones." },
        { name: 'Temple Bar district', badges: [{ type: 'free', label: 'Free' }, { type: 'music', label: 'Trad music' }],
          meta: 'Cobblestoned cultural quarter on the south bank · ~5 min from the hotel',
          best: 'Sun 7/12 evening for atmosphere and live music.',
          note: 'Wander the painted lanes for the look of it. Skip the marked-up Temple Bar pub beyond one pint — The Porterhouse (craft beer) and the side-street pubs have the same live trad music for less.' },
        { name: "Ha'penny Bridge + the Liffey", badges: [{ type: 'free', label: 'Free' }],
          meta: 'Pedestrian iron bridge over the River Liffey · 5 min north of the hotel',
          best: 'Mon 7/13 morning light is best for photos; lovely lit up at night too.',
          note: 'The classic Dublin postcard crossing. Loops you neatly back from Christ Church toward Grafton Street and the hotel.' },
      ],
    },
  ]

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">IN-CITY FIELD GUIDE</div>
        <h1 className="costs-title">Dublin · Sightseeing</h1>
        <p className="costs-sub">Sun 7/12 midday &nbsp;→&nbsp; Mon 7/13 — base: The College Green Hotel (beside Trinity) &nbsp;·&nbsp; Family of 3</p>
        <div className="cs-perk">☘️ Compact &amp; walkable — Trinity, Temple Bar, Grafton St &amp; the Liffey all ~10 min from the hotel</div>
      </div>

      <div className="cs-body">
        {/* Know before you go */}
        <div className="cs-rules">
          <h3>Know before you go</h3>
          <ul>
            {rules.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>

        {/* Two-half-day plan */}
        <div className="cs-plan">
          <h3>Your Dublin window — afternoon + morning</h3>
          <p className="cs-seq">
            <span><strong>Sun 7/12 PM:</strong> drop bags</span>
            <span className="cs-arrow"> → </span><span>lunch on Grafton St</span>
            <span className="cs-arrow"> → </span><span>Book of Kells (booked ~2:30)</span>
            <span className="cs-arrow"> → </span><span>Grafton St &amp; St Stephen's Green</span>
            <span className="cs-arrow"> → </span><span>Temple Bar + dinner &amp; trad music</span>
          </p>
          <p className="cs-seq" style={{ marginTop: '6px' }}>
            <span><strong>Mon 7/13 AM:</strong> Trinity grounds + Molly Malone</span>
            <span className="cs-arrow"> → </span><span>Dublin Castle</span>
            <span className="cs-arrow"> → </span><span>Christ Church</span>
            <span className="cs-arrow"> → </span><span>Ha'penny Bridge</span>
            <span className="cs-arrow"> → </span><span>Bewley's</span>
            <span className="cs-arrow"> → </span><span>bags → airport</span>
          </p>
          <p className="cs-plan-note">You arrive ~1pm Sunday and check out at noon Monday — an afternoon plus a morning. Sunday is the one timed booking (Book of Kells) wrapped in free outdoor strolling; Monday is a relaxed loop of free landmarks and optional interiors, all a few minutes apart, ending back near the hotel for your bags.</p>
        </div>

        {/* Sight tiers */}
        {sights.map((tier) => {
          const t = TIERS[tier.key]
          return (
            <div key={tier.key}>
              <div className="cs-tier">
                <span className="cs-tier-pill" style={{ background: t.color }}></span>
                {t.label}
                <small>{t.small}</small>
              </div>
              {tier.rides.map((s, si) => (
                <div key={si} className="cs-ride" style={{ borderLeftColor: t.color }}>
                  <div className="cs-ride-head">
                    <span className="cs-name">{s.name}</span>
                    {s.badges.length > 0 && (
                      <span className="cs-badges">
                        {s.badges.map((b, bi) => (
                          <span key={bi} className="cs-badge" style={{ background: BADGES[b.type].bg, color: BADGES[b.type].color }}>{b.label}</span>
                        ))}
                      </span>
                    )}
                  </div>
                  <p className="cs-meta">{s.meta}</p>
                  <p className="cs-best">{s.best}</p>
                  <p className="cs-note">{s.note}</p>
                </div>
              ))}
            </div>
          )
        })}

        {/* Getting to your flight */}
        <div className="cs-verdict">
          <h3>Getting to your flight (Mon 7/13)</h3>
          <p>Checkout is noon — leave bags with the concierge and keep the morning walk inside the 10-minute radius around the hotel. Grab a taxi to Dublin Airport (~25 min, ~€25–30) by about <strong>12:30pm</strong> for <strong>Aer Lingus EI81 at 3:40pm</strong>. Dublin has <strong>US Preclearance</strong>, so you clear US immigration before boarding — all three of you have <strong>Global Entry</strong>, so use the GE kiosks (~15–30 min) and walk off at Pittsburgh as domestic arrivals. Eat and use the lounge <em>before</em> Preclearance — options are thin on the far side.</p>
        </div>

        <div className="costs-disclaimer">
          <strong>Opening hours and ticket prices change seasonally — confirm on each official site before you go.</strong> Book of
          Kells timed entry sells out in peak summer, so reserve at visittrinity.ie ahead of the day. Ireland uses the euro (you've
          left the pound behind in London) and contactless is accepted nearly everywhere; tipping ~10% is normal in restaurants
          but not expected in pubs. The whole stay sits within a ~10-minute walk of College Green, so you won't need city transit
          at all — save a taxi for the airport run only.
        </div>
      </div>
    </div>
  )
}
