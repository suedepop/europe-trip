export default function LondonCheatSheet() {
  // London window: arrive Thu 7/9 ~12:30pm (Eurostar) · Fri 7/10 British Museum + Avenue Q ·
  // Sat 7/11 EDDFEST all day at Knebworth · depart Sun 7/12 (fly to Dublin). Base: Andaz Liverpool St.
  const TIERS = {
    free:   { color: '#2C7D50', label: 'Free landmarks & museums', small: "London's big museums are free — just turn up" },
    book:   { color: '#C26A1E', label: 'Paid — book ahead',         small: 'Timed tickets, cheaper online than at the gate' },
    booked: { color: '#8B0000', label: 'Already on your schedule',  small: 'Your locked-in London evenings' },
  }

  // Badge styling.
  const BADGES = {
    free:    { bg: '#E5F2EA', color: '#2C7D50' },
    prebook: { bg: '#F6E9DD', color: '#C26A1E' },
    view:    { bg: '#E6EFF6', color: '#2C6E9E' },
    booked:  { bg: '#F3E0E0', color: '#8B0000' },
  }

  const rules = [
    [<strong>Tap contactless on everything.</strong>, ' Tap the same contactless card or Apple Pay on every Tube, bus, Elizabeth line and DLR gate — no paper tickets, no Oyster needed. It auto-caps your daily fare (~£8.90 in zones 1–2). Use the same card per person the whole trip.'],
    [<strong>The big museums are free.</strong>, ' British Museum, National Gallery, Tate Modern, the Natural History and V&A all have free entry (only special exhibitions are paid). It\'s London\'s best value — lean into them.'],
    [<strong>Preston (16) is adult-priced at paid sights.</strong>, ' Unlike France, England doesn\'t give blanket free entry to under-18s — at the Tower of London, London Eye and the like, 16 counts as an adult. The free museums are where you actually save.'],
    [<strong>You\'re in the City, steps from the Tower.</strong>, ' The Andaz at Liverpool Street puts the Tower of London, Tower Bridge, Sky Garden and St Paul\'s within a short walk or one stop — cluster your sightseeing here on Thursday so you\'re not crossing town after the Eurostar.'],
    [<strong>Two slots are already spoken for.</strong>, ' Avenue Q (Fri 7:30pm, Shaftesbury Theatre) and EDDFEST (all day Sat at Knebworth). Plan daytime sights around them, and pre-book the timed-entry sights (Sky Garden, Tower) now — they sell out.'],
    [<strong>Look right.</strong>, ' Traffic comes from the right — use the painted "look right" at crossings — and mind the gap on the Tube.'],
  ]

  const sights = [
    {
      key: 'free',
      rides: [
        { name: 'British Museum', badges: [{ type: 'free', label: 'Free' }, { type: 'prebook', label: 'Book free slot' }],
          meta: 'Bloomsbury · Tube Tottenham Court Rd / Russell Sq · ~25 min from the hotel',
          best: 'Fri 7/10 morning — your anchor before the West End and Avenue Q.',
          note: <>Rosetta Stone, the Egyptian mummies and the Parthenon sculptures. Free entry (a £5 donation is suggested) — book a <strong>free timed slot</strong> on britishmuseum.org to walk straight in.</> },
        { name: 'Sky Garden', badges: [{ type: 'free', label: 'Free' }, { type: 'prebook', label: 'Book ahead' }, { type: 'view', label: 'Best view' }],
          meta: '20 Fenchurch St (the "Walkie-Talkie") · ~5-min walk from the Andaz',
          best: 'Thu 7/9 afternoon, right after you drop bags.',
          note: <>The best <strong>free</strong> City skyline view — an indoor garden + bar near the top. Free timed tickets are released ~3 weeks ahead at skygarden.london; <strong>grab them as soon as they open</strong>. Bring ID.</> },
        { name: 'Tower Bridge & the Thames path', badges: [{ type: 'free', label: 'Free' }],
          meta: 'River Thames · ~12-min walk / 1 stop from the hotel · Tube Tower Hill',
          best: 'Thu 7/9 afternoon, paired with Sky Garden or the Tower.',
          note: 'The bridge itself and the riverside walk are free and very photogenic. (The glass-floor Tower Bridge Exhibition inside is the only paid bit — skip it.)' },
        { name: 'St Paul\'s Cathedral (exterior)', badges: [{ type: 'free', label: 'Free outside' }],
          meta: 'Ludgate Hill · Tube St Paul\'s · short hop from Liverpool St',
          best: 'Thu 7/9 or as a pass-through on the way west.',
          note: 'Wren\'s dome is free to admire from the steps and the Millennium Bridge. The interior + dome climb (528 steps to a superb view) is paid (~£25) if you want in.' },
        { name: 'National Gallery & Trafalgar Square', badges: [{ type: 'free', label: 'Free' }],
          meta: 'Trafalgar Square · Tube Charing Cross / Leicester Sq',
          best: 'Fri 7/10 afternoon — it\'s a 6-min walk from the Shaftesbury Theatre.',
          note: 'Van Gogh\'s Sunflowers, Monet, Turner — all free. The square\'s lions, fountains and buskers are right outside, and Covent Garden + the theatre are minutes away.' },
        { name: 'Covent Garden', badges: [{ type: 'free', label: 'Free' }],
          meta: 'Tube Covent Garden · ~8-min walk to the Shaftesbury Theatre',
          best: 'Fri 7/10, pre-theatre.',
          note: 'Street performers under the piazza, the Apple Market stalls, and a swarm of pre-theatre restaurants. The natural place to eat before Avenue Q.' },
      ],
    },
    {
      key: 'book',
      rides: [
        { name: 'Tower of London', badges: [{ type: 'prebook', label: 'Pre-book' }, { type: 'view', label: 'Crown Jewels' }],
          meta: 'Tower Hill · ~12-min walk / 1 stop from the Andaz',
          best: 'Thu 7/9 afternoon — go straight after check-in; late-day crowds thin out.',
          note: 'Crown Jewels, the Beefeaters, the ravens and 1,000 years of grisly history. ~£35 adult (Preston is adult-priced at 16). Book a timed slot on hrp.org.uk — allow 2–3 hours if you go in.' },
        { name: 'London Eye', badges: [{ type: 'prebook', label: 'Pre-book' }, { type: 'view', label: 'View' }],
          meta: 'South Bank · Tube Waterloo / Westminster',
          best: 'Only if you want a south-of-the-river evening; otherwise skip for Sky Garden.',
          note: 'A 30-min rotation over the river. Pre-book a timed slot online to save vs the gate price. Sky Garden gives you a comparable view for free, so this is optional.' },
        { name: 'Westminster Abbey', badges: [{ type: 'prebook', label: 'Pre-book' }],
          meta: 'Westminster · Tube Westminster · across the river from the Eye',
          best: 'Optional Fri morning if you skip the British Museum (you can\'t easily do both well).',
          note: 'Coronation church, Poets\' Corner, royal tombs (~£30 adult). The exterior, plus Big Ben and the Houses of Parliament next door, are free to photograph from Parliament Square.' },
      ],
    },
    {
      key: 'booked',
      rides: [
        { name: 'The Cart & Horses, Stratford', badges: [{ type: 'booked', label: 'Thu 7/9 dinner' }],
          meta: '"Birthplace of Iron Maiden" pub · Elizabeth line ~7 min from Liverpool St',
          best: 'Thu 7/9 evening, after the City sights.',
          note: 'Iron Maiden pilgrimage pub — band history on the walls, kitchen to 10pm. Fits the EDDFEST/Knebworth theme. Then the optional cue-sports night back near the hotel.' },
        { name: 'Avenue Q — Shaftesbury Theatre', badges: [{ type: 'booked', label: 'Fri 7/10, 7:30pm' }],
          meta: 'West End · Royal Circle seats G16–G18 · Tube Tottenham Court Rd / Holborn',
          best: 'Fri 7/10 evening — be seated by ~7:15pm.',
          note: 'Irreverent adult-humour puppet musical — great for a 16-year-old. Interval drinks are a West End tradition. Pair the day with the British Museum and Covent Garden nearby.' },
        { name: 'Iron Maiden EDDFEST — Knebworth', badges: [{ type: 'booked', label: 'Sat 7/11 all day' }],
          meta: 'Knebworth Park · Thameslink to Stevenage + festival shuttle · Addison Lee car back',
          best: 'Sat 7/11 — a full day out of the city (see Day 11).',
          note: 'Gates 1pm, Iron Maiden headline ~8:30pm. The whole Saturday is gone to this, so don\'t plan any London sightseeing that day.' },
      ],
    },
  ]

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">IN-CITY FIELD GUIDE</div>
        <h1 className="costs-title">London · Sightseeing</h1>
        <p className="costs-sub">Thu 7/9 midday &nbsp;→&nbsp; Sun 7/12 — base: Andaz London Liverpool Street &nbsp;·&nbsp; Family of 3</p>
        <div className="cs-perk">🎭 Avenue Q Fri 7:30pm · 🎸 EDDFEST all day Sat — your real sightseeing window is Thu PM + Fri</div>
      </div>

      <div className="cs-body">
        {/* Know before you go */}
        <div className="cs-rules">
          <h3>Know before you go</h3>
          <ul>
            {rules.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>

        {/* The London window */}
        <div className="cs-plan">
          <h3>Your London window — cluster by area</h3>
          <p className="cs-seq">
            <span><strong>Thu 7/9 PM (the City):</strong> arrive 12:30</span>
            <span className="cs-arrow"> → </span><span>Sky Garden (booked free)</span>
            <span className="cs-arrow"> → </span><span>Tower Bridge / Tower of London</span>
            <span className="cs-arrow"> → </span><span>Cart &amp; Horses dinner</span>
          </p>
          <p className="cs-seq" style={{ marginTop: '6px' }}>
            <span><strong>Fri 7/10 (West End):</strong> British Museum (AM)</span>
            <span className="cs-arrow"> → </span><span>Covent Garden / Trafalgar Square</span>
            <span className="cs-arrow"> → </span><span>early Soho dinner</span>
            <span className="cs-arrow"> → </span><span>Avenue Q 7:30pm</span>
          </p>
          <p className="cs-seq" style={{ marginTop: '6px' }}>
            <span><strong>Sat 7/11:</strong> EDDFEST at Knebworth (full day out)</span>
            <span className="cs-arrow"> · </span><span><strong>Sun 7/12:</strong> fly to Dublin</span>
          </p>
          <p className="cs-plan-note">London is big — the trick is to cluster. Keep Thursday in the City right around the hotel (Sky Garden, the Tower, Tower Bridge all sit within a few minutes), and save the West End for Friday so the British Museum, Covent Garden and the theatre form one tidy loop. Saturday and Sunday are committed, so treat London sightseeing as Thursday afternoon plus Friday — pick a handful and don't over-schedule.</p>
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

        {/* Bottom line */}
        <div className="cs-verdict">
          <h3>Make the City your Thursday</h3>
          <p>After the Eurostar, stay local: <strong>Sky Garden, Tower Bridge and the Tower of London are all minutes from the Andaz</strong>, so you get a big-hitter afternoon without crossing town. Book the free Sky Garden ticket the moment the window opens and you won't need to pay for a viewpoint at all. Save the West End for Friday around the British Museum and Avenue Q, and remember Saturday is gone to Knebworth and Sunday you fly out — so don't try to cram half of London into a day and a half.</p>
        </div>

        <div className="costs-disclaimer">
          <strong>London's national museums are free (special exhibitions paid) — confirm timed-entry rules on each site.</strong>{' '}
          Tap-to-pay contactless caps daily Tube/bus fares automatically; use the same card per person all trip. Unlike France,
          England does not give blanket free entry to 16-year-olds, so Preston is adult-priced at the Tower, the Eye and similar.
          Sky Garden and the Tower of London release timed tickets that sell out in summer — book ahead. Hours and prices change
          seasonally — verify on each official site before you go.
        </div>
      </div>
    </div>
  )
}
