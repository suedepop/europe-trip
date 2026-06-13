export default function ParisCheatSheet() {
  // Paris window: arrive Sun 7/5 ~11:30am · depart Mon 7/6 on TGV 9531 (5:25pm, Gare de l'Est).
  const TIERS = {
    book: { color: '#C26A1E', label: 'Reserve a time slot', small: 'Pre-book online — essential in July' },
    free: { color: '#2C7D50', label: 'Free landmarks',       small: 'Just turn up — no ticket needed' },
  }

  // Badge styling.
  const BADGES = {
    prebook:  { bg: '#F6E9DD', color: '#C26A1E' },
    teenfree: { bg: '#E6EFF6', color: '#2C6E9E' },
    free:     { bg: '#E5F2EA', color: '#2C7D50' },
    dark:     { bg: '#ECE8F2', color: '#5B4B8A' },
  }

  const rules = [
    [<strong>Preston (16) is free.</strong>, ' Under-18s get in free at every French national museum and monument — Louvre, Sainte-Chapelle, Arc rooftop, all of it. Carry his passport as proof of age. You only ever buy 2 adult tickets.'],
    [<strong>Pre-book timed entry online.</strong>, ' In July the Louvre and Sainte-Chapelle sell timed slots that sell out — book on louvre.fr and the official ticket site before you go. Walk-up lines can be 1–2 hours.'],
    [<strong>Most of your highlights are free.</strong>, ' Arc de Triomphe (street level), the Eiffel grounds, Notre-Dame exterior, the Champs-Élysées and the Seine bridges all cost nothing — your only paid sights are the two museums above.'],
    [<strong>You\'re 5 min from Gare de l\'Est.</strong>, ' Hôtel Le Milie Rose sits in the 10th. Tap a contactless card straight on the Métro turnstiles (no paper tickets needed) — €2.50 a ride, or grab a Navigo Easy if you prefer.'],
    [<strong>Eiffel sparkles on the hour.</strong>, ' After dark the tower does a 5-minute glitter show at the top of every hour — worth timing your Sunday evening around.'],
  ]

  const sights = [
    {
      key: 'book',
      rides: [
        { name: 'Louvre Museum', badges: [{ type: 'prebook', label: 'Pre-book' }, { type: 'teenfree', label: 'Teen free' }],
          meta: "1st arr · the world's largest museum · Métro Palais-Royal–Musée du Louvre (1 / 7)",
          best: 'Mon 7/6 morning — go right at your pre-booked slot, allow 2.5–3 hrs, leave by ~12:30 to keep the afternoon.',
          note: <>Adults ~€22, <strong>under-18 free</strong> (bring Preston's passport). Beeline the big three — Venus de Milo → Winged Victory → Mona Lisa — then wander. Enter via the Carrousel (99 rue de Rivoli) to skip the pyramid line.</> },
        { name: 'Sainte-Chapelle', badges: [{ type: 'prebook', label: 'Pre-book' }, { type: 'teenfree', label: 'Teen free' }],
          meta: 'Île de la Cité · the finest medieval stained glass in the world · Métro Cité (4)',
          best: 'Mon 7/6 early afternoon on a timed ticket. Only ~30 min inside — go on a bright day so the windows blaze.',
          note: <>Adults €13, <strong>under-18 free</strong>. Airport-style security at the door (it shares a courtyard with the law courts). The Conciergerie next door is a cheap add-on if you want more.</> },
      ],
    },
    {
      key: 'free',
      rides: [
        { name: 'Arc de Triomphe', badges: [{ type: 'free', label: 'Free at street level' }],
          meta: 'Place Charles-de-Gaulle · Métro Charles de Gaulle–Étoile (1 / 2 / 6)',
          best: 'Sun 7/5 afternoon, your first stop after dropping bags.',
          note: 'Street-level view and the Tomb of the Unknown Soldier are free; only the rooftop climb is paid (and teen-free). Use the pedestrian underpass to reach the island — never cross the traffic circle on foot.' },
        { name: 'Champs-Élysées', badges: [{ type: 'free', label: 'Free' }],
          meta: '8th arr · walk from the Arc down toward Place de la Concorde',
          best: 'Sun 7/5 — a downhill stroll straight after the Arc.',
          note: 'Ladurée at #75 for macarons. Mostly flagship stores, so window-shop and keep drifting toward the river and the Tuileries.' },
        { name: 'Eiffel Tower (grounds)', badges: [{ type: 'free', label: 'Free' }, { type: 'dark', label: 'After dark' }],
          meta: 'Champ de Mars, 7th arr · Métro Bir-Hakeim (6); Trocadéro (9) for the postcard view',
          best: 'Sun 7/5 around 6pm — walk the Champ de Mars and stand right underneath.',
          note: 'Free unless you go up. Stay for the sparkle show (5 min, on the hour after dark). Trocadéro across the river is the classic full-tower photo spot.' },
        { name: 'Île de la Cité & Pont Neuf', badges: [{ type: 'free', label: 'Free' }],
          meta: 'The island between the Louvre and the Latin Quarter · Métro Pont Neuf (7) / Cité (4)',
          best: 'Mon 7/6 midday — the natural walk between the Louvre and Sainte-Chapelle.',
          note: 'Best low-level Seine views in the city from Pont Neuf. Square du Vert-Galant at the downstream tip is a quiet spot to sit by the water.' },
        { name: 'Notre-Dame (exterior)', badges: [{ type: 'free', label: 'Free' }],
          meta: 'Île de la Cité · Métro Cité (4)',
          best: 'Mon 7/6 early afternoon, a 2-min walk from Sainte-Chapelle.',
          note: 'Reopened after the fire — the cleaned facade is stunning. The interior now needs a free timed reservation if you want in; the exterior and forecourt are always open.' },
        { name: 'Latin Quarter & Shakespeare and Company', badges: [{ type: 'free', label: 'Free' }],
          meta: '5th arr · just across the river from Notre-Dame',
          best: 'Mon 7/6 — your last wander before circling back for the train.',
          note: 'The famous English-language bookshop sits opposite Notre-Dame, surrounded by cafés and crêpe stands. An easy way to spend the final hours before heading to Gare de l\'Est.' },
      ],
    },
  ]

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">IN-CITY FIELD GUIDE</div>
        <h1 className="costs-title">Paris · Sightseeing</h1>
        <p className="costs-sub">Sun 7/5 midday &nbsp;→&nbsp; Mon 7/6 — base: Hôtel Le Milie Rose (10th arr.) &nbsp;·&nbsp; Family of 3</p>
        <div className="cs-perk">⏰ Hard out: TGV INOUI 9531 departs Gare de l'Est at 5:25pm Mon — be back for bags by ~4:30pm</div>
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
          <h3>Your Paris window — two half-days</h3>
          <p className="cs-seq">
            <span><strong>Sun 7/5 PM (West):</strong> Arc de Triomphe</span>
            <span className="cs-arrow"> → </span><span>Champs-Élysées</span>
            <span className="cs-arrow"> → </span><span>Eiffel Tower at dusk</span>
            <span className="cs-arrow"> → </span><span>dinner</span>
          </p>
          <p className="cs-seq" style={{ marginTop: '6px' }}>
            <span><strong>Mon 7/6 (Center):</strong> Louvre (booked AM)</span>
            <span className="cs-arrow"> → </span><span>Île de la Cité / Pont Neuf</span>
            <span className="cs-arrow"> → </span><span>Sainte-Chapelle</span>
            <span className="cs-arrow"> → </span><span>Notre-Dame</span>
            <span className="cs-arrow"> → </span><span>Latin Quarter</span>
            <span className="cs-arrow"> → </span><span>bags → train</span>
          </p>
          <p className="cs-plan-note">You arrive ~11:30am Sunday and leave 5:25pm Monday — about a day and a half. The plan splits the city west-then-center so you're never backtracking, and front-loads the free outdoor sights for Sunday when nothing needs a booking.</p>
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

        {/* Don't miss the train */}
        <div className="cs-verdict">
          <h3>Don't miss the train</h3>
          <p>Monday's <strong>TGV INOUI 9531 leaves Gare de l'Est at 5:25pm</strong> — boarding closes ~2 min before. Collect your bags from Hôtel Le Milie Rose (a 5-min walk from the station) by about 4:30pm. Work the center of the city in a loop and drift back north through the morning so you end the day near the hotel, not stranded across the river. If the Louvre runs long, drop the Latin Quarter rather than the train.</p>
        </div>

        <div className="costs-disclaimer">
          <strong>Opening hours and ticketing change seasonally — confirm on each official site before you go.</strong> The Louvre
          closes Tuesdays (you're fine on Monday) and sells timed entry that sells out in summer; Sainte-Chapelle and the Louvre
          both run airport-style security. Under-18s are free at French national museums and monuments — carry Preston's passport.
          A Paris Museum Pass rarely pays off for a stay this short with a free teen and only two paid sights, so buy the two
          adult tickets individually. Métro fares are €2.50 a ride on contactless; central sights are also very walkable.
        </div>
      </div>
    </div>
  )
}
