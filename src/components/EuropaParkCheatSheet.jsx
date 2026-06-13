export default function EuropaParkCheatSheet() {
  // Demand-heat ramp: red = hottest line, green = walk-on.
  const TIERS = {
    extreme:  { color: '#B23A2E', bg: '#F6E2DE', label: 'Extreme demand',  small: 'Longest lines in the park' },
    high:     { color: '#C26A1E', bg: '#F6E9DD', label: 'High demand',      small: 'Worth a strategy' },
    moderate: { color: '#9A7A12', bg: '#F2EDD7', label: 'Moderate demand',  small: 'Fit around the headliners' },
    low:      { color: '#2C7D50', bg: '#E5F2EA', label: 'Low demand',       small: 'Walk-on whenever you pass' },
  }

  // Badge styling — free line-skip tools / caveats.
  const BADGES = {
    vl:  { bg: '#E5F2EA', color: '#2C7D50' },
    sr:  { bg: '#E6EFF6', color: '#2C6E9E' },
    no:  { bg: '#EFE2E0', color: '#B23A2E' },
  }

  const legend = [
    { tier: 'extreme',  text: 'Extreme — ride first or last, or VirtualLine' },
    { tier: 'high',     text: 'High — early / late, or Single Rider' },
    { tier: 'moderate', text: 'Moderate — short waits most of the day' },
    { tier: 'low',      text: 'Low — basically walk-on anytime' },
  ]

  const openingMove = [
    [<><b>9:00 sharp:</b> open the app and book a VirtualLine for <b>Voltron Nevera</b> — the park's #1 bottleneck and the one slot most worth locking in.</>],
    [<><b>Then walk on the rest:</b> head straight to <b>blue fire</b> and <b>WODAN</b> (side by side in Iceland) before lines build — or to whichever headliner is nearest your entry point.</>],
    [<><b>Re-book VirtualLine</b> the moment you tap into a ride — you can only hold one at a time. A second wave of later slots often releases around 1pm.</>],
    [<><b>If you're staying at a resort hotel,</b> use your 30-minute early entry to bank one or two big coasters before the gates open to everyone.</>],
  ]

  const tiers = [
    {
      key: 'extreme',
      rides: [
        { name: 'Voltron Nevera', badges: [{ type: 'vl', label: 'VirtualLine' }, { type: 'sr', label: 'Single Rider' }],
          meta: "Croatia · multi-launch coaster, 7 inversions, 100 km/h · the park's newest headliner (2024)",
          best: 'Book the 9am VirtualLine for it, OR rope-drop it, OR the final 90 minutes before close.',
          note: <><strong>Your single highest priority.</strong> It draws the longest, most stubborn line in the park — handle it first thing and the rest of the day is easy.</> },
        { name: 'ARTHUR', badges: [{ type: 'vl', label: 'VL sometimes' }],
          meta: 'Kingdom of the Minimoys · indoor suspended dark-ride coaster · lower capacity, no Single Rider',
          best: "First hour or the last hour. Avoid midday — it's indoor, so it's where everyone hides from the heat.",
          note: 'A one-of-a-kind ride and a real crowd magnet. Check the app for VirtualLine; if it\'s offered, use it here.' },
        { name: 'blue fire Megacoaster', badges: [{ type: 'vl', label: 'VirtualLine' }, { type: 'sr', label: 'Single Rider' }],
          meta: 'Iceland · launch coaster, 0–100 km/h, 4 inversions',
          best: 'Rope-drop it (right next to WODAN), use Single Rider, or ride in the evening.',
          note: 'Builds fast once the park fills. Pair it with WODAN at opening and you clear two headliners in one stop.' },
        { name: 'WODAN – Timburcoaster', badges: [{ type: 'vl', label: 'VirtualLine' }, { type: 'sr', label: 'Single Rider' }],
          meta: 'Iceland · GCI wooden coaster · fan-favorite, intense airtime',
          best: 'Rope-drop with blue fire, Single Rider, or last 90 minutes.',
          note: "Often the most-loved ride in the park. Demand stays high all day, so don't leave it for midday." },
      ],
    },
    {
      key: 'high',
      rides: [
        { name: 'Silver Star', badges: [{ type: 'no', label: 'No Single Rider' }],
          meta: 'France · B&M hyper-coaster, 73 m — one of the tallest in Europe',
          best: 'First thing in the France area, or the last hour. No Single Rider fallback, so timing matters most here.',
          note: 'Big, smooth, fast. Because it has no single-rider queue, the early-or-late rule is the only way to dodge the wait.' },
        { name: 'Voletarium', badges: [],
          meta: 'Entrance / Germany · flying theater (feet-dangling soar over Europe) · high capacity',
          best: 'Use it as your midday air-conditioned break — big capacity keeps the line moving even when busy.',
          note: 'Gentle and spectacular; good for all three of you between coasters.' },
        { name: 'Eurosat – CanCan Coaster', badges: [{ type: 'sr', label: 'Single Rider' }],
          meta: 'France · indoor coaster under the landmark dome',
          best: 'Early or late; Single Rider if the posted wait climbs.',
          note: 'Indoor and popular, so it stays busy through the afternoon — bank it outside peak hours.' },
        { name: 'Piraten in Batavia', badges: [{ type: 'vl', label: 'VirtualLine' }],
          meta: 'Netherlands · indoor boat dark ride · family-friendly classic',
          best: 'Midday heat refuge, or grab a VirtualLine and skip the standby.',
          note: 'One of the park\'s most charming rides. Indoor and slow-loading, so VirtualLine is handy on a warm afternoon.' },
        { name: 'Poseidon & Atlantica SuperSplash', badges: [{ type: 'sr', label: 'SR (Atlantica)' }],
          meta: 'Greece / Portugal · water coasters — you will get wet',
          best: "Ride them late afternoon. Midday lines are longest in summer (everyone wants to cool off), and you'll dry out before heading home.",
          note: 'The classic summer trade-off: refreshing midday, but shortest lines later in the day.' },
      ],
    },
    {
      key: 'moderate',
      rides: [
        { name: 'Euro-Mir', badges: [{ type: 'sr', label: 'Single Rider' }],
          meta: 'Russia · spinning cars up a mirrored tower',
          best: 'Anytime; slightly longer mid-afternoon.',
          note: 'Unique spinning layout — disorienting in a fun way.' },
        { name: 'Matterhorn-Blitz', badges: [{ type: 'sr', label: 'Single Rider' }],
          meta: 'Switzerland · bobsled-style spinning wild-mouse',
          best: 'Anytime — short waits most of the day.',
          note: 'Quirky lift system; a good palate-cleanser between the big coasters.' },
        { name: 'Fjord-Rafting & Tirol Log Flume', badges: [],
          meta: 'Scandinavia / Austria · rapids and a log flume — soakers, especially the rafts',
          best: 'Midday cooldown, accepting a longer line, or late to stay drier and skip the wait.',
          note: 'Fjord-Rafting genuinely drenches you — fun on a hot July afternoon, less so right before dinner.' },
        { name: 'Snorri Touren', badges: [],
          meta: 'Scandinavia · gentle family dark ride',
          best: 'Anytime.',
          note: 'Low-key and charming; easy filler.' },
      ],
    },
    {
      key: 'low',
      rides: [
        { name: 'Family coasters & flat rides', badges: [],
          meta: 'Pegasus (Greece) · Alpenexpress Enzian (Austria) · Volo da Vinci (Italy) · GRAND PRIX EDventure · Euro-Tower',
          best: 'Anytime — grab them in passing or during the midday peak.',
          note: 'Rarely more than a few minutes. Perfect for filling gaps while a VirtualLine ticks down.' },
        { name: 'Dark rides & shows', badges: [],
          meta: "Madame Freudenreich Curiosités (France) · Josefina's Imperial Journey · 4D cinema · arena shows",
          best: 'Midday — they double as air-conditioned breaks. Check the app for showtimes.',
          note: 'Europa Park\'s shows are genuinely good and a smart way to rest your legs at peak heat.' },
      ],
    },
  ]

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">IN-PARK FIELD GUIDE</div>
        <h1 className="costs-title">Europa Park · Demand &amp; Timing</h1>
        <p className="costs-sub">Tue 7/7 &amp; Wed 7/8 — single gate, two relaxed days &nbsp;·&nbsp; Family of 3</p>
        <div className="cs-perk">✓ You picked smart: Wed is the quietest day of the week, Tue close behind</div>
      </div>

      <div className="cs-body">
        {/* Two free tools */}
        <div className="cs-tools">
          <div className="cs-tool">
            <h3 style={{ color: '#2C7D50' }}>VirtualLine (free)</h3>
            <p>Reserve a return time on the app's biggest rides and skip the main queue. One booking at a time per ticket; up to 10 tickets grouped. Slots release at 9:00am for everyone — limited, so grab the hottest ride instantly.</p>
          </div>
          <div className="cs-tool">
            <h3 style={{ color: '#2C6E9E' }}>Single Rider (free)</h3>
            <p>Every major coaster except Silver Star has one. You ride in the same train, usually different rows — for a group of 3 it's the fastest free way through almost any line.</p>
          </div>
        </div>

        {/* Demand legend */}
        <div className="cs-legend">
          {legend.map((l, i) => (
            <div key={i} className="cs-leg cs-leg-row">
              <span className="cs-dot" style={{ background: TIERS[l.tier].color }}></span>
              <b>{l.text}</b>
            </div>
          ))}
        </div>

        {/* 9am opening move */}
        <div className="cs-plan cs-plan-hot">
          <h3>The 9:00am opening move</h3>
          <ol>
            {openingMove.map((m, i) => <li key={i}>{m}</li>)}
          </ol>
        </div>

        {/* Tiers */}
        {tiers.map((tier) => {
          const t = TIERS[tier.key]
          return (
            <div key={tier.key}>
              <div className="cs-tier">
                <span className="cs-tier-pill" style={{ background: t.color }}></span>
                {t.label}
                <small>{t.small}</small>
              </div>
              {tier.rides.map((ride, ri) => (
                <div key={ri} className="cs-ride" style={{ borderLeftColor: t.color }}>
                  <div className="cs-ride-head">
                    <span className="cs-name">{ride.name}</span>
                    {ride.badges.length > 0 && (
                      <span className="cs-badges">
                        {ride.badges.map((b, bi) => (
                          <span key={bi} className="cs-badge" style={{ background: BADGES[b.type].bg, color: BADGES[b.type].color }}>{b.label}</span>
                        ))}
                      </span>
                    )}
                  </div>
                  <p className="cs-meta">{ride.meta}</p>
                  <p className="cs-best">{ride.best}</p>
                  <p className="cs-note">{ride.note}</p>
                </div>
              ))}
            </div>
          )
        })}

        {/* Two-day split */}
        <div className="cs-verdict">
          <h3>Splitting the two days</h3>
          <p style={{ marginBottom: '8px' }}>The park is huge but loops in a rough circle, so tackle roughly half the map each day to avoid backtracking — then re-ride favorites with your leftover time.</p>
          <p style={{ marginBottom: '8px' }}><strong>Day 1 (Tue):</strong> Germany &amp; Voletarium → Italy → Greece (Poseidon, Pegasus) → <strong>Croatia (Voltron)</strong> → <strong>Iceland (blue fire, WODAN)</strong>. That front-loads three of your four Extreme rides.</p>
          <p><strong>Day 2 (Wed):</strong> <strong>France (Silver Star, Eurosat, Arthur)</strong> → Netherlands (Pirates) → Scandinavia (Fjord-Rafting, Snorri) → Switzerland (Matterhorn) → Austria → Russia (Euro-Mir) → Spain/Portugal (Atlantica). Wednesday is the quietest day, so save the no-single-rider Silver Star and the busy indoor Arthur for it.</p>
        </div>

        <div className="costs-disclaimer">
          <strong>Demand tiers and best-time advice are based on typical summer-weekday patterns.</strong> The app and the live
          board waitingtimes.app/europapark show real-time waits — sanity-check before committing to a long standby. VirtualLine
          is free but limited and the eligible-ride list changes daily — check the app each morning. You can only hold one
          VirtualLine at a time, so re-book the instant you tap in. Crowds build through midday and ease in the final 1–2 hours,
          so the last hour before close is prime re-ride time on the big coasters. Heights aren't listed here — your 16-year-old
          clears everything, including Voltron's 130 cm minimum.
        </div>
      </div>
    </div>
  )
}
