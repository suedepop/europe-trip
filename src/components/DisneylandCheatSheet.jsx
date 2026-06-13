export default function DisneylandCheatSheet() {
  // Tag styling — functional color coding for how to tackle each ride.
  const TAGS = {
    rope:  { color: '#2C7D50', bg: '#E5F2EA', chip: 'Rope drop' },
    sr:    { color: '#2C6E9E', bg: '#E6EFF6', chip: 'Single Rider' },
    pa:    { color: '#BC5F18', bg: '#F6E9DD', chip: 'Pay to skip' },
    chill: { color: '#7B847B', bg: '#ECEEEB', chip: 'Anytime' },
  }

  const legend = [
    { tag: 'rope',  title: 'Rope drop',    desc: 'Do it first, during Extra Magic Time' },
    { tag: 'sr',    title: 'Single Rider', desc: 'Free line-skip — split up to ride' },
    { tag: 'pa',    title: 'Pay to skip',  desc: 'Premier Access One is worth it here' },
    { tag: 'chill', title: 'Anytime',      desc: 'Low wait or flexible — no rush' },
  ]

  const rules = [
    [<strong>Set a 7:30 alarm.</strong>, ' The 8:30 Extra Magic hour clears 3–4 headliners before the public even enters.'],
    [<strong>Single Rider before you pay.</strong>, " It's free and usually beats Premier Access on coasters."],
    [<strong>Live waits live in the app.</strong>, ' Confirm Single Rider / Premier Access availability each morning — it shifts daily.'],
    [<strong>Re-ride at night.</strong>, ' Many lines collapse during the parade and after 9pm.'],
  ]

  const days = [
    {
      badge: 'Fri 7/3',
      title: 'Disneyland Park',
      busy: null,
      plan: {
        seq: ["Peter Pan's Flight", 'Big Thunder Mountain', 'Hyperspace Mountain'],
        note: "Then mop up Indiana Jones & Buzz before ~11am. You're already inside for Silver Spur at 5:30pm — claim a castle spot after dinner for the Disney Tales of Magic finale.",
      },
      lands: [
        {
          name: 'Frontierland',
          rides: [
            { name: 'Big Thunder Mountain', tag: 'sr', meta: 'Peak ~45–75 min · runaway-train coaster',
              note: 'Free Single Rider line usually beats paying. Otherwise hit it at rope drop. PA One only if Single Rider is closed.' },
            { name: 'Phantom Manor', tag: 'chill', meta: 'Peak ~30–45 min · spooky dark ride',
              note: 'Best late morning or after dark. No skip needed.' },
            { name: 'Thunder Mesa Riverboat', tag: 'chill', meta: 'Low · scenic paddle steamer',
              note: 'Restful break; runs limited departures — check the board.' },
          ],
        },
        {
          name: 'Adventureland',
          rides: [
            { name: 'Indiana Jones et le Temple du Péril', tag: 'sr', meta: 'Peak ~30–50 min · compact looping coaster',
              note: 'Free Single Rider is the play. Ride early or via SR — skip paying.' },
            { name: 'Pirates of the Caribbean', tag: 'chill', meta: 'Peak ~20–40 min · indoor boat ride',
              note: "Nearly walks on after lunch. Perfect for the midday heat — it's long, dark and cool." },
            { name: 'Adventure Isle & Aladdin Passage', tag: 'chill', meta: 'Walk-through · caves, bridges, scenes',
              note: 'Explore whenever. Great unhurried midday wander.' },
          ],
        },
        {
          name: 'Fantasyland',
          rides: [
            { name: "Peter Pan's Flight", tag: 'pa', meta: 'Peak ~60–90 min · gentle flying dark ride · no Single Rider',
              note: <><strong>The park's worst line and no Single Rider.</strong> Rope-drop it first — or this is the one ride here genuinely worth a PA One if you miss the morning.</> },
            { name: 'Snow White & Pinocchio dark rides', tag: 'chill', meta: 'Peak ~20–35 min · short classics',
              note: "Grab whichever's posted under 30 min as you pass." },
            { name: '"it\'s a small world"', tag: 'chill', meta: 'Peak ~15–30 min · high-capacity boat',
              note: 'Line looks long but moves fast. Good midday pick.' },
            { name: 'Storybook Land + Casey Jr.', tag: 'chill', meta: 'Peak ~15–30 min · gentle scenic rides',
              note: 'Pair them — they sit side by side. Midday or evening.' },
            { name: 'Dumbo / Tea Cups / Carrousel', tag: 'chill', meta: 'Peak ~10–40 min · spinners (slow loaders)',
              note: 'Dumbo loads slowly for a short ride — only if the posted wait is short.' },
            { name: 'Sleeping Beauty Castle & the Dragon', tag: 'chill', meta: 'Walk-through · gallery + animatronic dragon below',
              note: "Don't skip La Tanière du Dragon under the castle. Walk it anytime." },
          ],
        },
        {
          name: 'Discoveryland',
          rides: [
            { name: 'Star Wars Hyperspace Mountain', tag: 'sr', meta: 'Peak ~45–70 min · launched indoor coaster, inversions',
              note: 'Biggest thrill in the park — great for a 16-year-old. Use the free Single Rider line; rope-drop only if you all want to ride together.' },
            { name: 'Buzz Lightyear Laser Blast', tag: 'chill', meta: 'Peak ~30–50 min · shooting dark ride',
              note: 'Often a near walk-on by ~9pm. PA One eligible but skip it — ride late.' },
            { name: 'Star Tours', tag: 'chill', meta: 'Peak ~20–35 min · motion simulator',
              note: 'Rarely a bad wait. Midday is fine.' },
            { name: 'Autopia / Orbitron', tag: 'chill', meta: 'Peak ~20–40 min · slow-loading filler rides',
              note: 'Low payoff for the wait. Skip unless posted short.' },
          ],
        },
      ],
      verdict: <>Mostly <strong>no</strong>. Your 8:30 EMT start clears Peter Pan, Big Thunder and Hyperspace before the public arrives. The only ride that justifies paying is <strong>Peter Pan's Flight</strong> if you miss it at rope drop — it has no Single Rider and stays 60+ min all day. Everywhere else, use the free Single Rider lines (Big Thunder, Hyperspace, Indiana Jones) instead.</>,
    },
    {
      badge: 'Sat 7/4',
      title: 'Disney Adventure World',
      busy: 'Busiest day — EMT is critical',
      plan: {
        seq: ['Frozen Ever After', "Crush's Coaster", 'Ratatouille', 'Spider-Man / Flight Force'],
        note: 'Sprint to Arendelle the second you\'re in. This single hour is the whole day. Close with Disney Cascade of Lights over Adventure Bay tonight.',
      },
      lands: [
        {
          name: 'World of Frozen',
          rides: [
            { name: 'Frozen Ever After', tag: 'rope', meta: 'Peak ~60–120+ min · musical boat ride · the park headliner',
              note: <><strong>The ride of the day — rope-drop it during EMT.</strong> Premier Access One does NOT cover Frozen (only the ~€160 Ultimate does), so the morning is your only affordable short wait. Miss it and you're facing 90–120 min.</> },
          ],
        },
        {
          name: 'Worlds of Pixar',
          rides: [
            { name: "Crush's Coaster", tag: 'sr', meta: 'Peak ~60–90 min · spinning indoor coaster · slow loader',
              note: 'Line builds fast and stays high. Free Single Rider is a huge time-saver — PA One only if you refuse to split up.' },
            { name: 'Ratatouille: The Adventure', tag: 'sr', meta: 'Peak ~45–75 min · trackless 3D dark ride',
              note: "One of Europe's best dark rides. Free Single Rider works — or a strong PA One pick if you'd rather stay together." },
            { name: 'RC Racer', tag: 'sr', meta: 'Peak ~30–50 min · half-pipe thrill · low capacity',
              note: 'Big-air rush for the teen. Low capacity makes it slow — Single Rider helps; otherwise rope-drop leftovers or ride at night.' },
            { name: 'Cars Quatre Roues Rallye', tag: 'chill', meta: 'Peak ~20–40 min · spinning rally cars',
              note: 'Midday filler when you\'re passing through.' },
            { name: 'Toy Soldiers Parachute Drop / Slinky Dog Spin', tag: 'chill', meta: 'Peak ~15–40 min · Toy Story Playland',
              note: 'Lower demand than the headliners. Grab when posted short.' },
          ],
        },
        {
          name: 'Marvel Avengers Campus',
          rides: [
            { name: 'Spider-Man W.E.B. Adventure', tag: 'pa', meta: 'Peak ~40–70 min · interactive web-shooter · no Single Rider',
              note: <><strong>The best PA One buy in this park</strong> if the morning gets away from you — very popular and no free Single Rider to fall back on.</> },
            { name: 'Avengers Assemble: Flight Force', tag: 'pa', meta: 'Peak ~40–70 min · launch coaster, top thrill',
              note: 'Ride it early — or a solid PA One pick. (No reliable free Single Rider.)' },
          ],
        },
        {
          name: 'World Premiere',
          rides: [
            { name: 'The Twilight Zone Tower of Terror', tag: 'sr', meta: 'Peak ~30–50 min · big drop thrill',
              note: 'Single Rider is sometimes open — check the app. Ride at open or late evening.' },
            { name: 'Studio theaters & shows', tag: 'chill', meta: 'Scheduled · indoor, air-conditioned',
              note: 'Great midday heat break. Show times in the app.' },
          ],
        },
      ],
      verdict: <><strong>Yes, selectively.</strong> This is your one shot at the new park on the busiest day. Rope-drop <strong>Frozen Ever After</strong> at EMT (the only affordable way to skip its line). After that, the smart buys are <strong>Spider-Man W.E.B. Adventure</strong> and/or <strong>Flight Force</strong> — neither has a reliable free Single Rider. Use the free Single Rider lines on Crush's Coaster and Ratatouille instead of paying. Budget for roughly 1–3 PA One purchases. Only consider the full <strong>Ultimate (~€160 pp)</strong> if you want a relaxed day plus a Frozen re-ride.</>,
    },
  ]

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">IN-PARK FIELD GUIDE</div>
        <h1 className="costs-title">Disneyland Paris · Ride Cheat Sheet</h1>
        <p className="costs-sub">Fri 7/3 — Disneyland Park &nbsp;·&nbsp; Sat 7/4 — Disney Adventure World &nbsp;·&nbsp; Family of 3</p>
        <div className="cs-perk">★ Sequoia Lodge perk: gates open 8:30am (1 hr before public)</div>
      </div>

      <div className="cs-body">
        {/* Legend */}
        <div className="cs-legend">
          {legend.map((l, i) => (
            <div key={i} className="cs-leg">
              <span className="cs-dot" style={{ background: TAGS[l.tag].color }}></span>
              <div>
                <b>{l.title}</b>
                <span>{l.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Golden rules */}
        <div className="cs-rules">
          <h3>Four golden rules</h3>
          <ul>
            {rules.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>

        {/* Days */}
        {days.map((day, di) => (
          <section key={di} className="cs-day">
            <div className="cs-day-head">
              <span className="cs-day-no">{day.badge}</span>
              <h2>{day.title}</h2>
              {day.busy && <span className="cs-tag-busy">{day.busy}</span>}
            </div>

            <div className="cs-plan">
              <h3>First hour (8:30 EMT) game plan</h3>
              <p className="cs-seq">
                {day.plan.seq.map((s, i) => (
                  <span key={i}>
                    {s}
                    {i < day.plan.seq.length - 1 && <span className="cs-arrow"> → </span>}
                  </span>
                ))}
              </p>
              <p className="cs-plan-note">{day.plan.note}</p>
            </div>

            {day.lands.map((land, li) => (
              <div key={li}>
                <div className="cs-land">{land.name}</div>
                {land.rides.map((ride, ri) => {
                  const t = TAGS[ride.tag]
                  return (
                    <div key={ri} className="cs-ride" style={{ borderLeftColor: t.color }}>
                      <div className="cs-ride-head">
                        <span className="cs-name">{ride.name}</span>
                        <span className="cs-chip" style={{ background: t.bg, color: t.color }}>{t.chip}</span>
                      </div>
                      <p className="cs-meta">{ride.meta}</p>
                      <p className="cs-note">{ride.note}</p>
                    </div>
                  )
                })}
              </div>
            ))}

            <div className="cs-verdict">
              <h3>Premier Access One — worth it here?</h3>
              <p>{day.verdict}</p>
            </div>
          </section>
        ))}

        <div className="costs-disclaimer">
          <strong>Wait ranges are peak-summer (July weekend) estimates.</strong> The official Disneyland Paris app shows live
          waits, confirms which rides have Single Rider and Premier Access that day, and lists show and parade times — check it
          each morning. Premier Access One is priced <strong>per person, per ride</strong> and floats with demand (roughly €10–€25
          each on a busy Saturday; Frozen Ever After excluded). Heights/restrictions not listed — your 16-year-old clears every
          ride here.
        </div>
      </div>
    </div>
  )
}
