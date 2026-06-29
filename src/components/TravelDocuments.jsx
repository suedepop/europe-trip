export default function TravelDocuments() {
  // All three travelers are US citizens: Ted, Catrina, Preston (16).
  // Route touches the Schengen Area (France, Germany), the UK, and Ireland.
  // Verified June 2026 — EES live since 10 Apr 2026; ETIAS not required until after its Q4 2026 launch.

  // Per-country entry requirements for US passport holders
  const countries = [
    {
      flag: "🇫🇷🇩🇪",
      name: "France & Germany (Schengen)",
      where: "Paris, Disneyland Paris, Europa-Park",
      visa: "No visa — tourism up to 90 days (you're in for ~8)",
      extra: "No ETIAS needed for this trip. EES biometric registration on first entry at CDG (Jul 1).",
    },
    {
      flag: "🇬🇧",
      name: "United Kingdom",
      where: "London, Knebworth",
      visa: "UK ETA required — ✅ Ted's is attached",
      extra: "Confirm Catrina's and Preston's ETAs are also approved and tied to their passports (ETA is per-person).",
    },
    {
      flag: "🇮🇪",
      name: "Ireland",
      where: "Dublin",
      visa: "No visa, no ETA — passport only",
      extra: "Not in Schengen, not in the UK ETA scheme. US Preclearance on departure (Dublin → Pittsburgh) — passports only.",
    },
  ]

  // Passport-validity check, per traveler
  const passports = [
    { name: "Theodore Cromwell", born: "1975" },
    { name: "Catrina Cromwell", born: "1978" },
    { name: "Preston Cromwell", born: "2010 (16)" },
  ]

  return (
    <div className="costs-view">
      <div className="costs-header">
        <div className="costs-badge">DOCUMENTS</div>
        <h1 className="costs-title">Travel Documents &amp; Visas</h1>
        <p className="costs-sub">3 US citizens · Schengen (FR · DE) · UK · Ireland · Jun 30–Jul 13, 2026</p>
        <p className="costs-note">What you need to enter each country — verified June 2026</p>
      </div>

      {/* Quick status */}
      <div className="cost-highlights">
        <div className="highlight-card" style={{ borderColor: '#C8102E' }}>
          <div className="hl-icon">🇬🇧</div>
          <div className="hl-label">UK ETA</div>
          <div className="hl-value" style={{ fontSize: '1.3rem' }}>Done</div>
          <div className="hl-note">verify all 3 travelers</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#003087' }}>
          <div className="hl-icon">🇪🇺</div>
          <div className="hl-label">ETIAS</div>
          <div className="hl-value" style={{ fontSize: '1.2rem' }}>Not yet</div>
          <div className="hl-note">launches Q4 2026 — N/A</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#5D6B82' }}>
          <div className="hl-icon">🛂</div>
          <div className="hl-label">EES biometrics</div>
          <div className="hl-value" style={{ fontSize: '1.2rem' }}>At CDG</div>
          <div className="hl-note">first Schengen entry, Jul 1</div>
        </div>
        <div className="highlight-card" style={{ borderColor: '#2E7D32' }}>
          <div className="hl-icon">✅</div>
          <div className="hl-label">Other visas</div>
          <div className="hl-value" style={{ fontSize: '1.3rem' }}>None</div>
          <div className="hl-note">US citizens, tourism</div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="cost-section">
        <h2 className="cost-section-title">💡 BOTTOM LINE</h2>
        <div className="cost-table">
          <div className="cost-row even">
            <span className="cost-row-label">For this trip</span>
            <span className="cost-row-value" style={{ lineHeight: 1.5 }}>
              With the <strong>UK ETA done, there's nothing else to apply for</strong> as US citizens — no Schengen visa,
              no ETIAS yet, and Ireland needs only a passport. Two things to do before you fly: <strong>confirm all three
              passports are valid well beyond the trip</strong> (and issued within the last 10 years), and
              <strong> verify Catrina's and Preston's UK ETAs</strong> are approved on their own passports. Expect a
              one-time <strong>EES biometric step at CDG</strong> on arrival.
            </span>
          </div>
        </div>
      </div>

      {/* By country */}
      <div className="cost-section">
        <h2 className="cost-section-title">BY COUNTRY — US PASSPORT HOLDERS</h2>
        <div className="cost-table">
          {countries.map((c, i) => (
            <div key={i} className={`cost-row ${i % 2 === 0 ? 'even' : 'odd'}`}>
              <span className="cost-row-label">
                <strong>{c.flag} {c.name}</strong>
                <span style={{ display: 'block', fontSize: '0.85em', color: '#777', marginTop: 2 }}>{c.where}</span>
              </span>
              <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>
                {c.visa}
                <span style={{ display: 'block', color: '#555', marginTop: 3 }}>{c.extra}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* EES */}
      <div className="cost-section">
        <h2 className="cost-section-title">🛂 EES — NEW EU BIOMETRIC BORDER (AFFECTS YOU)</h2>
        <div className="cost-table">
          <div className="cost-row odd">
            <span className="cost-row-label">What it is</span>
            <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>The EU Entry/Exit System went fully live on 10 Apr 2026. It replaces passport stamping with electronic registration and auto-tracks your 90-day Schengen allowance.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">What you do</span>
            <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>Nothing in advance. On your first Schengen entry (CDG, Jul 1) all three of you give fingerprints + a facial scan at the border. Preston (16) does the full registration; only under-12s skip fingerprints.</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">Plan for it</span>
            <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>Build in extra time at CDG immigration — first-entry queues can run slower under EES. Your US Global Entry / PreCheck don't apply here.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">Just one entry</span>
            <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>You enter Schengen once (CDG) and exit when boarding the Eurostar to London (Jul 9). London and Dublin are outside Schengen, so no re-entry.</span>
          </div>
        </div>
      </div>

      {/* ETIAS */}
      <div className="cost-section">
        <h2 className="cost-section-title">🇪🇺 ETIAS — NOT REQUIRED FOR THIS TRIP</h2>
        <div className="cost-table">
          <div className="cost-row odd">
            <span className="cost-row-label">Why not</span>
            <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>The EU travel authorization launches Q4 2026 (Oct–Dec) with a transitional grace period after that — so it does not apply to a July 2026 trip. Don't pay any site claiming you need it now.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">For next time</span>
            <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>From late 2026 / 2027 onward, US citizens will need an ETIAS (€20, valid 3 years, applied online) before Schengen trips. Apply only at the official EU site.</span>
          </div>
        </div>
      </div>

      {/* Passport validity */}
      <div className="cost-section">
        <h2 className="cost-section-title">🛂 PASSPORT VALIDITY — CHECK ALL THREE</h2>
        <div className="cost-table">
          <div className="cost-row even" style={{ fontWeight: 700 }}>
            <span className="cost-row-label">Traveler</span>
            <span className="cost-row-value">Must satisfy</span>
          </div>
          {passports.map((p, i) => (
            <div key={i} className={`cost-row ${i % 2 === 0 ? 'odd' : 'even'}`}>
              <span className="cost-row-label">{p.name} <span style={{ color: '#999', fontSize: '0.85em' }}>· b. {p.born}</span></span>
              <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>
                Valid ≥ 3 months past Schengen exit (~Jul 9) — i.e. through at least Oct 2026 (aim 6+ months) — AND issued within the last 10 years.
              </span>
            </div>
          ))}
          <div className="cost-row odd">
            <span className="cost-row-label">⚠️ Preston's especially</span>
            <span className="cost-row-value" style={{ fontSize: '0.9em', lineHeight: 1.45 }}>Minor passports are issued for only 5 years and expire sooner than you'd expect — confirm the expiry date now.</span>
          </div>
        </div>
      </div>

      {/* Pre-trip checklist */}
      <div className="cost-section">
        <h2 className="cost-section-title">✈️ BEFORE YOU FLY — DOCUMENT CHECKLIST</h2>
        <div className="cost-table">
          <div className="cost-row odd">
            <span className="cost-row-label">1. Passport validity (×3)</span>
            <span className="cost-row-value">Confirm all three are valid through at least Oct 2026 (6+ months ideal) and issued within 10 years. Renew Preston's if it's close.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">2. UK ETA (×3)</span>
            <span className="cost-row-value">Ted's is attached ✅. Verify Catrina's and Preston's are approved and linked to the correct passport numbers.</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">3. ETIAS</span>
            <span className="cost-row-value">Not needed for July 2026 — no action. Ignore any "ETIAS required" emails/sites.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">4. EES at CDG</span>
            <span className="cost-row-value">No pre-application; just allow extra time at Paris immigration for the fingerprint + photo step on arrival.</span>
          </div>
          <div className="cost-row odd">
            <span className="cost-row-label">5. Supporting docs (nice-to-have)</span>
            <span className="cost-row-value">Have return/onward tickets and hotel confirmations handy (in Apple Wallet / email), plus travel insurance details. Optional: a copy of Preston's birth certificate.</span>
          </div>
          <div className="cost-row even">
            <span className="cost-row-label">6. Copies &amp; backups</span>
            <span className="cost-row-value">Photograph each passport + ETA and store in each phone (and email a copy to yourself) in case one is lost abroad.</span>
          </div>
        </div>
      </div>

      <div className="costs-disclaimer">
        Verified June 2026 for US citizens traveling for tourism. EES became fully operational 10 Apr 2026; ETIAS is
        scheduled to launch Q4 2026 with a transitional period, so it is not required for a July 2026 trip. Entry rules
        can change — reconfirm at travel.state.gov (US State Dept) and the official EU and UK government sites before
        departure. This is planning guidance, not legal advice.
      </div>
    </div>
  )
}
