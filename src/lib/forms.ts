// ─────────────────────────────────────────────────────────────────────────────
// PASTE YOUR REAL BREVO FORM URLS HERE.
// Brevo dashboard → Contacts → Forms → (your form) → Share → embed code:
// copy the URL from the <form action="https://....sibforms.com/serve/..."> tag.
// Each product uses its own form → its own Brevo list.
// ─────────────────────────────────────────────────────────────────────────────
export const BREVO_ATTENDR_FORM_URL = 'BREVO_ATTENDR_FORM_URL'
export const BREVO_TRUCKHISAAB_FORM_URL = 'BREVO_TRUCKHISAAB_FORM_URL'

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * POST an email to a Brevo form endpoint. Uses no-cors (Brevo's form endpoint
 * doesn't send CORS headers), so a resolved fetch is treated as success.
 */
export async function submitToBrevo(formUrl: string, email: string): Promise<boolean> {
  if (!formUrl.startsWith('http')) {
    console.warn('Brevo form URL not configured — see src/lib/forms.ts')
    return false
  }
  const data = new FormData()
  data.append('EMAIL', email.trim())
  data.append('email_address_check', '') // Brevo honeypot field
  data.append('locale', 'en')
  try {
    await fetch(formUrl, { method: 'POST', body: data, mode: 'no-cors' })
    return true
  } catch {
    return false
  }
}
