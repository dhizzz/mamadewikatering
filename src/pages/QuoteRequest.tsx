import { FormEvent, ReactNode, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { insertQuoteRequest, isSupabaseConfigured } from "../lib/supabase";
import { MSG, waLink } from "../lib/wa";
import { Reveal } from "../components/Reveal";
import {
  IconAlert,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconPot,
  IconShield,
  IconSpark,
  IconUsers,
  IconWhatsApp,
} from "../components/Icons";

const EVENT_TYPES = ["Pernikahan", "Ulang Tahun", "Acara Kantor", "Arisan/Kumpul Keluarga", "Lainnya"];

const FIELD_ORDER = ["fullName", "whatsapp", "email", "eventType", "eventDate", "guests", "notes"] as const;

type FormState = {
  fullName: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  notes: string;
};

const EMPTY: FormState = {
  fullName: "",
  whatsapp: "",
  email: "",
  eventType: "",
  eventDate: "",
  guests: "",
  notes: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const todayStr = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

const cleanWA = (v: string) => v.replace(/[\s\-().]/g, "");

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.fullName.trim()) e.fullName = "Nama lengkap wajib diisi.";
  else if (f.fullName.trim().length < 3) e.fullName = "Nama minimal 3 karakter.";

  const wa = cleanWA(f.whatsapp);
  if (!wa) e.whatsapp = "Nomor WhatsApp wajib diisi.";
  else if (!/^\d+$/.test(wa)) e.whatsapp = "Nomor hanya boleh berisi angka.";
  else if (wa.length < 10) e.whatsapp = "Minimal 10 digit, contoh: 08xxxxxxxxxx.";
  else if (wa.length > 15) e.whatsapp = "Nomor terlalu panjang, maksimal 15 digit.";

  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    e.email = "Format email tidak valid, contoh: nama@email.com";

  if (!f.eventType) e.eventType = "Silakan pilih jenis acara.";

  if (!f.eventDate) e.eventDate = "Tanggal acara wajib diisi.";
  else if (f.eventDate < todayStr()) e.eventDate = "Tanggal acara tidak boleh lewat.";

  if (!f.guests) e.guests = "Estimasi jumlah tamu wajib diisi.";
  else if (!Number.isFinite(Number(f.guests)) || Number(f.guests) < 1)
    e.guests = "Jumlah tamu minimal 1 orang.";
  else if (Number(f.guests) > 10000) e.guests = "Maksimal 10.000 tamu per formulir.";

  return e;
}

/* ---------- small building blocks ---------- */

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-extrabold text-cocoa-800">
          {label}
          {!optional && <span className="ml-0.5 text-chili-500">*</span>}
        </label>
        {optional && (
          <span className="rounded-full bg-cream-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cocoa-400">
            opsional
          </span>
        )}
      </div>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-start gap-1.5 text-xs font-bold text-chili-600">
          <IconAlert className="mt-px h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm font-semibold text-cocoa-900 placeholder:font-medium placeholder:text-cocoa-300 outline-none transition-all duration-200 focus:ring-4";
const inputOk = "border-cocoa-200 focus:border-brand-500 focus:ring-brand-500/15";
const inputErr = "border-chili-500 focus:border-chili-500 focus:ring-chili-500/10";

/* ---------- page ---------- */

export default function QuoteRequest() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [saved, setSaved] = useState<FormState | null>(null);

  const errors = useMemo(() => validate(form), [form]);

  const isComplete =
    Boolean(form.fullName.trim()) &&
    Boolean(form.whatsapp.trim()) &&
    Boolean(form.eventType) &&
    Boolean(form.eventDate) &&
    Boolean(form.guests);

  const set = (key: keyof FormState) => (value: string) => setForm((f) => ({ ...f, [key]: value }));
  const blur = (key: keyof FormState) => () => setTouched((t) => ({ ...t, [key]: true }));
  const show = (key: keyof FormState) => ((touched[key] || attempted) && errors[key]) || undefined;

  const prettyDate = saved
    ? new Date(`${saved.eventDate}T00:00:00`).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setAttempted(true);

    const errs = validate(form);
    const firstInvalid = FIELD_ORDER.find((k) => errs[k]);
    if (firstInvalid) {
      document.getElementById(`qr-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      await insertQuoteRequest({
        full_name: form.fullName.trim(),
        whatsapp: cleanWA(form.whatsapp),
        email: form.email.trim() || null,
        event_type: form.eventType,
        event_date: form.eventDate,
        guest_count: Number(form.guests),
        notes: form.notes.trim() || null,
      });
      setSaved(form);
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Terjadi kesalahan tak terduga. Silakan coba lagi."
      );
    }
  }

  function resetForm() {
    setForm(EMPTY);
    setTouched({});
    setAttempted(false);
    setStatus("idle");
    setServerError("");
    setSaved(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const submitting = status === "submitting";

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_100%_-10%,#ffe6cd_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_-10%_110%,#ffe6a3_0%,transparent_50%)]" />
        <div className="bg-dots absolute inset-0 opacity-60" />
        <IconSpark className="animate-spin-slower absolute right-[8%] top-24 h-8 w-8 text-sunny-400" />
        <IconSpark className="animate-spin-slower absolute bottom-32 left-[6%] hidden h-10 w-10 text-brand-300 md:block" />
      </div>

      {/* Top bar */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 text-cream-50 shadow-card transition-transform duration-300 group-hover:-rotate-6">
            <IconPot className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-black text-cocoa-900">Dapur Berkah</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
              Mama Dewi Catering
            </span>
          </span>
        </Link>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full border border-cocoa-200 bg-white/70 px-5 py-2.5 text-sm font-bold text-cocoa-700 shadow-card transition-all duration-300 hover:border-brand-400 hover:text-brand-600"
        >
          <IconArrowRight className="h-4 w-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          Kembali ke Beranda
        </Link>
      </div>

      <main className="relative mx-auto max-w-2xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12">
        {/* Header */}
        <Reveal>
          <header className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-brand-700 shadow-card">
              <IconClock className="h-4 w-4" />
              Respon maksimal 1×24 jam
            </p>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.08] text-cocoa-900 sm:text-5xl">
              Request <span className="italic text-brand-600">Penawaran</span> Katering
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-cocoa-500">
              Isi form di bawah, tim kami akan menghubungi Anda dalam 1x24 jam.
            </p>
          </header>
        </Reveal>

        {/* Card */}
        <Reveal delay={140}>
          <div className="relative mt-10 overflow-hidden rounded-[1.6rem] border border-cream-200 bg-white shadow-lift">
            {/* Top accent strip */}
            <div className="flex h-2" aria-hidden>
              <div className="w-2/3 bg-brand-500" />
              <div className="w-1/6 bg-sunny-400" />
              <div className="w-1/6 bg-cocoa-900" />
            </div>

            {status === "success" && saved ? (
              /* ---------- Success state ---------- */
              <div className="px-7 py-12 text-center sm:px-12">
                <div className="animate-pop mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-100">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf-500 text-cream-50 shadow-card">
                    <IconCheck className="h-8 w-8" />
                  </span>
                </div>
                <h2 className="mt-7 font-display text-3xl font-black text-cocoa-900">Permintaan Terkirim!</h2>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-cocoa-500">
                  Terima kasih! Permintaan Anda sudah kami terima, tim kami akan segera menghubungi via
                  WhatsApp.
                </p>

                <div className="mx-auto mt-7 flex max-w-md flex-wrap items-center justify-center gap-2.5">
                  <span className="rounded-full bg-brand-50 px-4 py-1.5 text-xs font-extrabold text-brand-700">
                    {saved.eventType}
                  </span>
                  <span className="rounded-full bg-sunny-100 px-4 py-1.5 text-xs font-extrabold text-sunny-600">
                    {prettyDate}
                  </span>
                  <span className="rounded-full bg-leaf-100 px-4 py-1.5 text-xs font-extrabold text-leaf-600">
                    <IconUsers className="mr-1 inline h-3.5 w-3.5" />
                    {Number(saved.guests).toLocaleString("id-ID")} tamu
                  </span>
                </div>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-extrabold text-cream-50 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift active:scale-95"
                  >
                    Kirim permintaan lain
                  </button>
                  <a
                    href={waLink(MSG.umum)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cocoa-900 px-7 py-3 font-extrabold text-cocoa-900 transition-all duration-300 hover:bg-cocoa-900 hover:text-cream-50 active:scale-95"
                  >
                    <IconWhatsApp className="h-4.5 w-4.5 h-5 w-5" />
                    Chat langsung
                  </a>
                </div>
              </div>
            ) : (
              /* ---------- Form state ---------- */
              <form onSubmit={handleSubmit} noValidate className="px-7 py-9 sm:px-12 sm:py-10">
                <div className="mb-8 flex items-center justify-between gap-4 border-b border-dashed border-cocoa-200 pb-6">
                  <div>
                    <h2 className="font-display text-xl font-black text-cocoa-900">Formulir Penawaran</h2>
                    <p className="mt-0.5 text-xs font-semibold text-cocoa-400">
                      Gratis & tanpa komitmen apa pun
                    </p>
                  </div>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-cream-100 px-3.5 py-1.5 text-[11px] font-extrabold text-cocoa-500 sm:inline-flex">
                    <IconShield className="h-3.5 w-3.5 text-leaf-500" />
                    Data aman
                  </span>
                </div>

                {/* Server error banner */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="animate-fade-in mb-7 flex items-start gap-3 rounded-xl border border-chili-500/40 bg-chili-100 p-4"
                  >
                    <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-chili-600" />
                    <div>
                      <p className="text-sm font-extrabold text-chili-600">Gagal menyimpan permintaan</p>
                      <p className="mt-0.5 text-xs font-semibold leading-relaxed text-chili-600/90">
                        {serverError} Tombol kirim tetap aktif — silakan coba lagi.
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Nama */}
                  <Field id="qr-fullName" label="Nama Lengkap" error={show("fullName")}>
                    <input
                      id="qr-fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => set("fullName")(e.target.value)}
                      onBlur={blur("fullName")}
                      maxLength={60}
                      placeholder="Contoh: Dewi Lestari"
                      aria-invalid={Boolean(show("fullName"))}
                      aria-describedby={show("fullName") ? "qr-fullName-error" : undefined}
                      className={`${inputBase} ${show("fullName") ? inputErr : inputOk}`}
                    />
                  </Field>

                  {/* WA + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field id="qr-whatsapp" label="Nomor WhatsApp" error={show("whatsapp")}>
                      <input
                        id="qr-whatsapp"
                        type="tel"
                        inputMode="numeric"
                        value={form.whatsapp}
                        onChange={(e) => set("whatsapp")(e.target.value)}
                        onBlur={blur("whatsapp")}
                        maxLength={15}
                        placeholder="08xxxxxxxxxx"
                        aria-invalid={Boolean(show("whatsapp"))}
                        aria-describedby={show("whatsapp") ? "qr-whatsapp-error" : undefined}
                        className={`${inputBase} ${show("whatsapp") ? inputErr : inputOk}`}
                      />
                    </Field>
                    <Field id="qr-email" label="Email" optional error={show("email")}>
                      <input
                        id="qr-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                        onBlur={blur("email")}
                        maxLength={80}
                        placeholder="nama@email.com"
                        aria-invalid={Boolean(show("email"))}
                        aria-describedby={show("email") ? "qr-email-error" : undefined}
                        className={`${inputBase} ${show("email") ? inputErr : inputOk}`}
                      />
                    </Field>
                  </div>

                  {/* Jenis acara + Tanggal */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field id="qr-eventType" label="Jenis Acara" error={show("eventType")}>
                      <div className="relative">
                        <select
                          id="qr-eventType"
                          value={form.eventType}
                          onChange={(e) => {
                            set("eventType")(e.target.value);
                            setTouched((t) => ({ ...t, eventType: true }));
                          }}
                          onBlur={blur("eventType")}
                          aria-invalid={Boolean(show("eventType"))}
                          aria-describedby={show("eventType") ? "qr-eventType-error" : undefined}
                          className={`${inputBase} appearance-none pr-10 ${
                            show("eventType") ? inputErr : inputOk
                          } ${form.eventType ? "text-cocoa-900" : "text-cocoa-300"}`}
                        >
                          <option value="" disabled>
                            Pilih jenis acara
                          </option>
                          {EVENT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cocoa-400"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </Field>
                    <Field id="qr-eventDate" label="Tanggal Acara" error={show("eventDate")}>
                      <input
                        id="qr-eventDate"
                        type="date"
                        value={form.eventDate}
                        min={todayStr()}
                        onChange={(e) => set("eventDate")(e.target.value)}
                        onBlur={blur("eventDate")}
                        aria-invalid={Boolean(show("eventDate"))}
                        aria-describedby={show("eventDate") ? "qr-eventDate-error" : undefined}
                        className={`${inputBase} ${show("eventDate") ? inputErr : inputOk}`}
                      />
                    </Field>
                  </div>

                  {/* Tamu + panduan min order */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field id="qr-guests" label="Estimasi Jumlah Tamu" error={show("guests")}>
                      <div className="relative">
                        <input
                          id="qr-guests"
                          type="number"
                          inputMode="numeric"
                          min={1}
                          value={form.guests}
                          onChange={(e) => set("guests")(e.target.value)}
                          onBlur={blur("guests")}
                          placeholder="Contoh: 100"
                          aria-invalid={Boolean(show("guests"))}
                          aria-describedby={show("guests") ? "qr-guests-error" : undefined}
                          className={`${inputBase} pr-16 ${show("guests") ? inputErr : inputOk}`}
                        />
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-extrabold uppercase tracking-wide text-cocoa-400">
                          orang
                        </span>
                      </div>
                    </Field>
                    <div className="rounded-xl border border-sunny-200 bg-sunny-100/70 p-4">
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-sunny-600">
                        Panduan min. order
                      </p>
                      <ul className="mt-2 space-y-1.5 text-xs font-bold text-cocoa-600">
                        <li className="flex justify-between gap-3">
                          <span>Nasi Box</span>
                          <span className="text-cocoa-400">20 porsi</span>
                        </li>
                        <li className="flex justify-between gap-3">
                          <span>Prasmanan</span>
                          <span className="text-cocoa-400">50 porsi</span>
                        </li>
                        <li className="flex justify-between gap-3">
                          <span>Snack Box</span>
                          <span className="text-cocoa-400">30 kotak</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Catatan */}
                  <Field id="qr-notes" label="Pesan / Catatan Tambahan" optional error={show("notes")}>
                    <textarea
                      id="qr-notes"
                      rows={4}
                      value={form.notes}
                      onChange={(e) => set("notes")(e.target.value.slice(0, 300))}
                      onBlur={blur("notes")}
                      placeholder="Contoh: request menu vegetarian, budget per orang, dll"
                      className={`${inputBase} resize-none ${inputOk}`}
                    />
                    <p className="mt-1 text-right text-[11px] font-bold text-cocoa-300">
                      {form.notes.length}/300
                    </p>
                  </Field>
                </div>

                {/* Submit */}
                <div className="mt-9">
                  <button
                    type="submit"
                    disabled={!isComplete || submitting}
                    className={`flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-base font-extrabold transition-all duration-300 sm:text-lg ${
                      !isComplete || submitting
                        ? "cursor-not-allowed bg-cocoa-200 text-cocoa-400"
                        : "bg-brand-600 text-cream-50 shadow-card hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lift active:scale-[0.98]"
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5 animate-spin">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3.5" />
                          <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Permintaan
                        <IconArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                  {!isComplete && (
                    <p className="mt-3 text-center text-xs font-semibold text-cocoa-400">
                      Lengkapi semua field bertanda <span className="font-extrabold text-chili-500">*</span> untuk
                      mengaktifkan tombol kirim.
                    </p>
                  )}
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-cocoa-400">
                    <IconShield className="h-3.5 w-3.5 text-leaf-500" />
                    Data Anda aman dan hanya digunakan untuk keperluan penawaran.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        {!isSupabaseConfigured && (
          <p className="mt-5 text-center text-[11px] font-semibold text-cocoa-400">
            Mode demo aktif — Supabase belum dikonfigurasi (
            <code className="rounded bg-cream-200 px-1 py-0.5">VITE_SUPABASE_URL</code> &{" "}
            <code className="rounded bg-cream-200 px-1 py-0.5">VITE_SUPABASE_ANON_KEY</code>). Data tersimpan
            sementara di browser.
          </p>
        )}
      </main>
    </div>
  );
}
