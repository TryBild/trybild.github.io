import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { isValidEmail, submitToBrevo } from '@/lib/forms'

interface NotifyFormProps {
  formUrl: string
  successText: string
  className?: string
}

type Status = 'idle' | 'sending' | 'done' | 'error'

export function NotifyForm({ formUrl, successText, className = '' }: NotifyFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setStatus('error')
      return
    }
    setStatus('sending')
    setStatus((await submitToBrevo(formUrl, email)) ? 'done' : 'error')
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status !== 'done' ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex gap-0 max-w-[380px]"
            noValidate
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              aria-label="Email address"
              className="flex-1 min-w-0 bg-white/[0.04] border border-white/[0.1] border-r-0 px-4 py-2.5 font-sans text-sm text-white placeholder:text-white/20 outline-none focus:border-white/25 transition-colors duration-200 rounded-l-sm"
            />
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white font-sans text-[0.78rem] font-semibold cursor-pointer transition-all duration-200 hover:bg-accent/90 disabled:opacity-60 rounded-r-sm shrink-0"
              whileTap={{ scale: 0.98 }}
            >
              {status === 'sending' ? 'Sending…' : 'Notify me'}
              <ArrowRight size={12} />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5 text-green-400 py-2.5"
          >
            <CheckCircle size={16} />
            <span className="font-sans text-sm">{successText}</span>
          </motion.div>
        )}
      </AnimatePresence>
      {status === 'error' && (
        <p className="font-sans text-xs text-accent mt-2">
          Please enter a valid email and try again.
        </p>
      )}
    </div>
  )
}
