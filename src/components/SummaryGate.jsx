import { useState } from 'react'

// SHA-256 hash of the summary-section password.
// NOTE: this is a static site, so this gate is client-side only — hashing keeps
// the plaintext password out of the source/bundle, but it is NOT real security.
// Anyone with browser dev-tools can still bypass the check or read the bundled
// data. For true privacy the summary data would need an authenticated server.
// To change the password, replace this with the SHA-256 hex of the new one:
//   node -e "console.log(require('crypto').createHash('sha256').update('NEWPASS').digest('hex'))"
const PASSWORD_HASH = '7d770965e1c380646526f7ff64c3dea33824e9effd5ce0e0792a8a99c2729863'

const STORAGE_KEY = 'summaryUnlocked'

async function sha256Hex(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('')
}

export default function SummaryGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === '1'
  )
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return children

  async function submit(e) {
    e.preventDefault()
    const hash = await sha256Hex(input)
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  return (
    <div className="gate">
      <form className="gate-card" onSubmit={submit}>
        <div className="gate-icon">🔒</div>
        <h2 className="gate-title">Protected — Summary Section</h2>
        <p className="gate-sub">
          Enter the password to view bookings, costs, and phone details.
        </p>
        <input
          type="password"
          className="gate-input"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false) }}
          placeholder="Password"
          autoFocus
        />
        {error && <div className="gate-error">Incorrect password — try again</div>}
        <button type="submit" className="gate-btn">Unlock</button>
      </form>
    </div>
  )
}
