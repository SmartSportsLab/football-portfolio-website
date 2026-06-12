"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organisation, setOrganisation] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subjectLine = subject.trim() || "Football data portfolio - enquiry"
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : null,
      "",
      message,
    ].filter(Boolean) as string[]

    const mailto =
      `mailto:daniellevitt32@gmail.com` +
      `?subject=${encodeURIComponent(subjectLine)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`

    window.location.href = mailto
    setSubmitted(true)
  }

  const fieldClass =
    "mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/football-outreach"
          className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-cyan-100"
        >
          <span aria-hidden>&larr;</span> Back to Portfolio
        </Link>

        <div className="mt-8 space-y-4">
          <p className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
            Contact
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Get in touch</h1>
          <p className="text-slate-300">
            Whether it&apos;s a role, a project, or just a conversation about football data, I&apos;d be glad to hear from you. Fill in the form below and your message will open in your email client, pre-addressed to me.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm">
              <span className="font-semibold text-slate-200">Name</span>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className={fieldClass}
              />
            </label>
            <label className="block text-sm">
              <span className="font-semibold text-slate-200">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="font-semibold text-slate-200">
              Club / Organisation <span className="font-normal text-slate-500">(optional)</span>
            </span>
            <input
              type="text"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
              placeholder="e.g. Goalhanger, Watford FC, freelance"
              className={fieldClass}
            />
          </label>

          <label className="block text-sm">
            <span className="font-semibold text-slate-200">Subject</span>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's this about?"
              className={fieldClass}
            />
          </label>

          <label className="block text-sm">
            <span className="font-semibold text-slate-200">Message</span>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="A few lines about what you have in mind."
              rows={7}
              className={fieldClass}
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Message
            </button>
            <a
              href="mailto:daniellevitt32@gmail.com"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-200 transition hover:border-slate-500"
            >
              Or email directly
            </a>
          </div>

          {submitted && (
            <p className="text-sm text-cyan-200">
              Your email client should have opened with your message pre-filled. If it didn&apos;t, copy
              the details and email <span className="font-semibold">daniellevitt32@gmail.com</span> directly.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}
