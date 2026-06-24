export default function CellPhones() {
  // Three iPhones on one AT&T family plan: Ted, Catrina, Preston (16)
  // Countries on this trip: France, Germany, UK, Ireland — all covered by both
  // AT&T International Day Pass (210+ destinations) and Europe regional eSIMs.

  const options = [
    {
      name: "AT&T International Day Pass",
      tag: "EASIEST — KEEP YOUR NUMBERS",
      tagColor: "#2E7D32",
      recommended: true,
      summary: "Your existing AT&T plan (talk, text, data) works abroad. You keep your own phone numbers, iMessage/SMS, and calls — nothing to install. Charged only on days a line actually uses the network.",
      cost: "$24/day for all three lines on days used · ~$240 family for the trip (10-day cap)",
      rows: [
        ["Price", "$12/day for the first line + $6/day for each additional line on the same account, same calendar day. Family of three = $12 + $6 + $6 = $24/day."],
        ["Billing cap", "You never pay more than 10 daily fees per line per bill period (land travel). So the family maxes at ~$240 in a single AT&T bill cycle (Ted $120 + Catrina $60 + Preston $60), then remaining days that cycle are free."],
        ["Trip cost estimate", "Trip is ~14 days (Jun 30–Jul 13). If it sits inside one AT&T bill cycle: ~$240 total. If your bill cycle boundary falls mid-trip, the 10-day cap resets and it can run up to ~$310–336. Check your AT&T cycle close date."],
        ["When you're charged", "A line is only charged on a calendar day it makes/receives a call, sends a text, OR uses cellular data — including background data. No usage that day = no charge. On pure travel/transit days you can leave a phone in Airplane Mode to skip the fee."],
        ["What you get", "Uses your normal plan's data allowance at normal speeds, unlimited talk & text within/among covered countries and back to the US. No throttled 'travel data' bucket."],
        ["Coverage", "France 🇫🇷, Germany 🇩🇪, UK 🇬🇧, Ireland 🇮🇪 all included (210+ destinations)."],
        ["Setup", "Add International Day Pass to each line at att.com or in the myAT&T app before you fly (free to add — only billed on days used). It then auto-activates the first time each phone is used abroad each day. Nothing to install, no SIM swap."],
      ],
    },
    {
      name: "Travel eSIM (data-only) + keep AT&T for calls/texts",
      tag: "CHEAPEST",
      tagColor: "#1565C0",
      recommended: false,
      summary: "Install a prepaid Europe data eSIM on each iPhone for cheap mobile data. Keep the AT&T line active for your number (iMessage/SMS), but turn cellular data roaming OFF so AT&T never charges. Make voice calls over WhatsApp / FaceTime / iMessage using the eSIM data.",
      cost: "~$90–165 for all three phones for the whole trip",
      rows: [
        ["Price (data-only)", "Airalo / Nomad Europe: roughly $30–45 per phone for a generous or unlimited 14-day plan. Three phones ≈ $90–135. Holafly truly-unlimited ≈ $27/week per phone (~$55 for 2 weeks) → ~$165 for three."],
        ["Coverage", "Europe regional eSIMs from Airalo, Nomad, Holafly, and Sim Local all cover France, Germany, UK, and Ireland on one plan — confirm UK + Ireland are listed before buying (most are)."],
        ["iPhone support", "Every iPhone from XR/XS onward supports eSIM, and can run the travel eSIM alongside your AT&T line (Dual SIM). Set the eSIM as the data line; keep AT&T as primary for calls/texts."],
        ["The catch", "Data-only eSIMs give NO local phone number. Regular voice calls/SMS still ride your AT&T line — so to avoid AT&T roaming charges you MUST turn Data Roaming OFF on the AT&T line and place calls over WhatsApp/FaceTime instead. A little fiddly, especially making sure 16-yo Preston's phone is configured right."],
        ["Setup", "Buy each eSIM online before the trip, scan the QR/activation code per phone, label it 'Travel', and in Settings → Cellular set Cellular Data to the travel eSIM and Data Roaming ON for it / OFF for AT&T. Test on hotel WiFi the night before flying."],
        ["Best for", "Keeping total cost down and comfort with a bit of phone setup. Heaviest data users (lots of maps, streaming) lean Holafly unlimited; light users lean a cheaper Airalo GB plan."],
      ],
    },
    {
      name: "AT&T line only + Wi-Fi (no add-on)",
      tag: "FREE — BUT RISKY",
      tagColor: "#E65100",
      recommended: false,
      summary: "Add nothing. Rely on free Wi-Fi at hotels and on the trains (TGV, Eurostar, Krønasår, every hotel) for iMessage, WhatsApp, maps download, and Wi-Fi Calling. Keep phones in Airplane Mode + Wi-Fi while out.",
      cost: "$0 — if you never touch the cellular network abroad",
      rows: [
        ["How it works", "All your hotels and the TGV/Eurostar trains have free Wi-Fi. With Wi-Fi Calling enabled, calls/texts to US numbers work normally over Wi-Fi at no charge. Download offline Google Maps for each city in advance."],
        ["The big risk", "If any phone uses the cellular network abroad even once in a day — a pocket-dial of data, a forgotten Airplane Mode toggle, Preston checking something on the street — AT&T auto-activates a $12 Day Pass for that line that day. Easy to rack up accidental charges across three phones."],
        ["No connectivity out and about", "No live maps, transit directions, rideshare, or 'where are you?' texts while walking around — and you're navigating five cities with a teenager. Genuinely limiting on a trip this active."],
        ["Verdict", "Fine as a fallback mindset, but not recommended as the primary plan for a 14-day, 5-city trip. Pair Wi-Fi Calling with one of the options above rather than relying on it alone."],
      ],
    },
  ]

  const countries = [
    { flag: "🇫🇷", name: "France", where: "Paris, Disneyland Paris", dayPass: true, esim: true },
    { flag: "🇩🇪", name: "Germany", where: "Europa-Park (Rust)", dayPass: true, esim: true },
    { flag: "🇬🇧", name: "United Kingdom", where: "London, Knebworth", dayPass: true, esim: true },
    { flag: "🇮🇪", name: "Ireland", where: "Dublin", dayPass: true, esim: true },
  ]

  // Trip-specific apps to install on all three iPhone 14s
  const appGroups = [
    {
      cat: "✈️ Flights — boarding passes & check-in",
      apps: [
        { name: "Fly Delta", must: true, why: "Boarding pass + gate info for the PIT→ATL leg (Delta-operated DL1353)." },
        { name: "Air France", must: true, why: "Manage the Flying Blue PIT→ATL→CDG booking; boarding pass for ATL→CDG (AF0033)." },
        { name: "British Airways", must: true, why: "BA0828 LHR→DUB — online check-in opens 24h before; mobile boarding pass + seat selection." },
        { name: "Aer Lingus", must: true, why: "EI81 DUB→PIT — mobile boarding pass for the flight home + Dublin US Preclearance." },
      ],
    },
    {
      cat: "🚆 Trains & metro — tickets & planning",
      apps: [
        { name: "SNCF Connect", must: true, why: "TGV INOUI tickets Paris↔Europa-Park (and any other French rail). Holds your e-tickets." },
        { name: "OUIGO", must: true, why: "CDG→Disney (Marne-la-Vallée) OUIGO train — QR boarding codes + extra-bag add-on." },
        { name: "Eurostar", must: true, why: "Paris→London e-tickets + live check-in / platform info." },
        { name: "Île-de-France Mobilités", must: true, why: "Buy & store Paris Metro/RER tickets on your phone (digital Navigo). Used all over Paris." },
        { name: "Trainline", must: true, why: "UK National Rail — Thameslink to Stevenage on festival day; pre-book + mobile tickets." },
        { name: "TfL Go", must: false, why: "London Underground / Elizabeth Line journey planner. You pay by tapping a contactless card / Apple Pay — no ticket needed." },
      ],
    },
    {
      cat: "🏨 Hotels — mobile key & reservations",
      apps: [
        { name: "World of Hyatt", must: true, why: "Hyatt Place CDG + Andaz London — reservations, check-in, and mobile room key." },
        { name: "Marriott Bonvoy", must: true, why: "The College Green Hotel Dublin (Autograph) — reservation + mobile key." },
      ],
    },
    {
      cat: "🎢 Theme parks",
      apps: [
        { name: "Disneyland Paris", must: true, why: "Park maps, live ride wait times, Premier Access purchases, and dining check-in. Key cards are your park tickets." },
        { name: "Europa-Park", must: true, why: "Wait times + park map; plus the 'Meine Reise' portal for your Krønasår booking, tickets, and digital room key." },
      ],
    },
    {
      cat: "🎟️ Events & ground transport",
      apps: [
        { name: "Addison Lee", must: true, why: "Track your Knebworth→Andaz pickup driver and message them on the night." },
        { name: "Gigantic Tickets", must: false, why: "Account access for your EDDFEST + Stevenage shuttle e-tickets (also emailed)." },
      ],
    },
    {
      cat: "🗺️ Navigation",
      apps: [
        { name: "Google Maps", must: true, why: "Download OFFLINE areas for Paris, Rust, London & Dublin before you fly. Best all-round transit + walking directions." },
        { name: "Citymapper", must: false, why: "Superb city transit app for Paris, London & Dublin — clearer metro/bus routing than Maps in dense cities." },
      ],
    },
    {
      cat: "💬 Communication & utilities",
      apps: [
        { name: "WhatsApp", must: true, why: "How most of Europe messages/calls; free over Wi-Fi or data. Set up on all three phones." },
        { name: "Google Translate", must: true, why: "Download French & German offline packs — camera-translate menus and signs." },
        { name: "Apple Wallet", must: true, why: "Built-in — add boarding passes & event tickets, and tap to pay (incl. London transit)." },
        { name: "myAT&T", must: true, why: "Add the International Day Pass to each line and track usage/charges." },
        { name: "XE Currency", must: false, why: "Quick € / £ ↔ $ conversions; works offline with last-synced rates." },
        { name: "Airalo", must: false, why: "Only if you take the data-eSIM route — buy/manage your Europe eSIM (see options above)." },
      ],
    },
  ]

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">CONNECTIVITY</div>
        <h1 className="costs-title">Cell Phones</h1>
        <p className="costs-sub">3 iPhones · 1 AT&T family plan · France · Germany · UK · Ireland · Jun 30–Jul 13</p>
        <p className="costs-note">Ted, Catrina &amp; Preston — keeping everyone connected across all five cities</p>
      </div>

      {/* Quick facts */}
      <div className="cost-highlights">
        <div className="highlight-card" style={{ borderColor: '#5D6B82' }}>
          <div className="hl-icon">📱</div>
          <div className="hl-label">Devices</div>
          <div className="hl-value">3</div>
          <div className="hl-note">iPhones · one AT&T account</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#003087' }}>
          <div className="hl-icon">🌍</div>
          <div className="hl-label">Countries</div>
          <div className="hl-value">4</div>
          <div className="hl-note">FR · DE · UK · IE</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#2E7D32' }}>
          <div className="hl-icon">✅</div>
          <div className="hl-label">Recommended</div>
          <div className="hl-value" style={{ fontSize: '1.1rem', lineHeight: 1.2 }}>Day Pass</div>
          <div className="hl-note">easiest · keep your numbers</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#C9A84C' }}>
          <div className="hl-icon">💰</div>
          <div className="hl-label">Est. Family Cost</div>
          <div className="hl-value" style={{ fontSize: '1.3rem' }}>~$240</div>
          <div className="hl-note">Day Pass · or ~$90–165 eSIM</div>
        </div>
      </div>

      {/* Recommendation callout */}
      <div className="cost-section">
        <h2 className="cost-section-title">💡 BOTTOM LINE</h2>
        <div className="cost-table">
          <div className="cost-row even">
            <span className="cost-row-label">For your trip</span>
            <span className="cost-row-value" style={{ lineHeight: 1.5 }}>
              <strong>Default to AT&T International Day Pass on all three lines.</strong> It's the only option where your
              real phone numbers, iMessage, SMS, and normal calling just keep working with zero setup, and it's capped
              at ~$240 for the family across a single bill cycle. The data-only eSIM route saves roughly $75–150 but
              needs careful per-phone configuration (and Preston's phone too) to avoid accidental AT&T roaming charges.
              Whichever you pick, enable <strong>Wi-Fi Calling</strong> on all three phones — your hotels and the
              TGV/Eurostar trains all have free Wi-Fi, so calls/texts home cost nothing when you're on Wi-Fi.
            </span>
          </div>
        </div>
      </div>

      {/* Options */}
      {options.map((opt, i) => (
        <div key={i} className="cost-section">
          <h2 className="cost-section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {opt.recommended && <span>⭐</span>}
            {opt.name}
            <span style={{
              fontSize: '0.55em',
              padding: '2px 8px',
              borderRadius: '4px',
              color: '#fff',
              background: opt.tagColor,
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}>
              {opt.tag}
            </span>
          </h2>
          <p style={{ margin: '0 0 14px', lineHeight: 1.5, color: '#444', fontSize: '0.95em' }}>{opt.summary}</p>
          <div className="cost-table">
            <div className="cost-row even">
              <span className="cost-row-label" style={{ fontWeight: 600 }}>Est. cost</span>
              <span className="cost-row-value" style={{ fontWeight: 600 }}>{opt.cost}</span>
            </div>
            {opt.rows.map(([label, value], j) => (
              <div key={j} className={`cost-row ${j % 2 === 0 ? 'odd' : 'even'}`}>
                <span className="cost-row-label">{label}</span>
                <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Country coverage */}
      <div className="cost-section">
        <h2 className="cost-section-title">COUNTRY-BY-COUNTRY COVERAGE</h2>
        <div className="cost-table">
          <div className="cost-row even" style={{ fontWeight: 700 }}>
            <span className="cost-row-label">Country (where you'll be)</span>
            <span className="cost-row-value">AT&T Day Pass · Europe eSIM</span>
          </div>
          {countries.map((c, i) => (
            <div key={i} className={`cost-row ${i % 2 === 0 ? 'odd' : 'even'}`}>
              <span className="cost-row-label">{c.flag} {c.name} — {c.where}</span>
              <span className="cost-row-value">
                {c.dayPass ? '✅' : '❌'} Day Pass &nbsp;·&nbsp; {c.esim ? '✅' : '❌'} eSIM
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-trip checklist */}
      <div className="cost-section">
        <h2 className="cost-section-title">✈️ BEFORE YOU FLY — CHECKLIST</h2>
        <div className="cost-table">
          <div className="cost-row odd">
            <span className="cost-row-label">1. Pick a plan</span>
            <span className="cost-row-value">Add International Day Pass to all three lines in the myAT&T app (free to add), OR buy three Europe data eSIMs.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">2. Turn on Wi-Fi Calling</span>
            <span className="cost-row-value">Settings → Phone → Wi-Fi Calling → ON, on all three iPhones. Free calls/texts over hotel &amp; train Wi-Fi.</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">3. Download offline maps</span>
            <span className="cost-row-value">Google Maps offline areas for Paris, Rust/Europa-Park, London, and Dublin. Saves data and works even with no signal.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">4. WhatsApp on all phones</span>
            <span className="cost-row-value">Install/verify WhatsApp &amp; FaceTime on all three — free calls between the family and a fallback for voice if you go eSIM data-only.</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">5. iMessage/FaceTime check</span>
            <span className="cost-row-value">Confirm iMessage &amp; FaceTime are signed in so the family can text/call each other free over any data or Wi-Fi.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">6. (eSIM route only) Configure data lines</span>
            <span className="cost-row-value">Install &amp; test each eSIM on Wi-Fi the night before. Set travel eSIM as the data line; turn Data Roaming OFF on the AT&T line so it never auto-charges.</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">7. Install your trip apps</span>
            <span className="cost-row-value">Add every app in the "Apps to Install" list below to all three iPhones, sign in, and pull tickets into Apple Wallet — do it on home Wi-Fi before you fly.</span>
          </div>
        </div>
      </div>

      {/* Apps to install */}
      <div className="cost-section">
        <h2 className="cost-section-title">📲 APPS TO INSTALL — ALL THREE IPHONES</h2>
        <div className="cost-table">
          <div className="cost-row even">
            <span className="cost-row-label">Before you fly</span>
            <span className="cost-row-value" style={{ lineHeight: 1.5 }}>
              Install these from the App Store and sign in / download your tickets while on home Wi-Fi, then add
              boarding passes and event tickets to <strong>Apple Wallet</strong> so they work offline. Make sure
              <strong> Preston's iPhone</strong> has them too — approve via Family Sharing if any need it.
              <span style={{ display: 'inline-block', marginTop: '4px' }}>
                <span style={{ fontSize: '0.78em', fontWeight: 600, color: '#fff', background: '#2E7D32', padding: '1px 6px', borderRadius: '4px' }}>MUST</span>
                &nbsp;= you'll need it for a booking on this trip &nbsp;·&nbsp;
                <span style={{ fontSize: '0.78em', fontWeight: 600, color: '#fff', background: '#9E9E9E', padding: '1px 6px', borderRadius: '4px' }}>OPTIONAL</span>
                &nbsp;= helpful but not essential.
              </span>
            </span>
          </div>
        </div>
      </div>

      {appGroups.map((g, i) => (
        <div key={i} className="cost-section">
          <h2 className="cost-section-title">{g.cat}</h2>
          <div className="cost-table">
            {g.apps.map((a, j) => (
              <div key={j} className={`cost-row ${j % 2 === 0 ? 'odd' : 'even'}`}>
                <span className="cost-row-label">
                  {a.name}{' '}
                  <span style={{
                    fontSize: '0.7em',
                    fontWeight: 600,
                    color: '#fff',
                    background: a.must ? '#2E7D32' : '#9E9E9E',
                    padding: '1px 6px',
                    borderRadius: '4px',
                    letterSpacing: '0.04em',
                    whiteSpace: 'nowrap',
                  }}>
                    {a.must ? 'MUST' : 'OPTIONAL'}
                  </span>
                </span>
                <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>{a.why}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="costs-disclaimer">
        Pricing verified June 2026. AT&T International Day Pass: $12/day first line + $6/day each additional line, capped at
        10 daily fees per line per bill period (land travel) — confirm current terms and your bill-cycle close date at att.com.
        eSIM prices vary by provider and data amount; confirm each plan lists UK + Ireland before buying. All three travelers
        keep their AT&T numbers under the Day Pass option; data-only eSIMs do not include a phone number.
      </div>
    </div>
  )
}
