/**
 * Integrasi Supabase untuk tabel `quote_requests`.
 *
 * Menggunakan Supabase REST API (PostgREST) secara langsung — sama persis
 * dengan yang dilakukan SDK @supabasejs/supabase-js di balik layar.
 *
 * Skema tabel yang dibutuhkan di proyek Supabase Anda:
 *
 *   create table public.quote_requests (
 *     id          bigint generated always as identity primary key,
 *     full_name   text not null,
 *     whatsapp    text not null,
 *     email       text,
 *     event_type  text not null,
 *     event_date  date not null,
 *     guest_count integer not null,
 *     notes       text,
 *     created_at  timestamptz not null default now()  -- timestamp otomatis
 *   );
 *
 *   alter table public.quote_requests enable row level security;
 *   create policy "allow anon insert" on public.quote_requests
 *     for insert to anon with check (true);
 *
 * Environment variables yang dibutuhkan:
 *   VITE_SUPABASE_URL       -> URL proyek Supabase (contoh: https://xxxx.supabase.co)
 *   VITE_SUPABASE_ANON_KEY  -> anon/public key proyek Supabase
 */

export type QuoteRequestInsert = {
  full_name: string;
  whatsapp: string;
  email: string | null;
  event_type: string;
  event_date: string;
  guest_count: number;
  notes: string | null;
};

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.replace(/\/$/, "");
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY);

const LOCAL_KEY = "quote_requests";

function friendlyError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("fetch") || m.includes("network") || m.includes("load failed")) {
    return "Tidak dapat terhubung ke server. Periksa koneksi internet Anda, lalu coba lagi.";
  }
  return message;
}

/**
 * Simpan satu permintaan penawaran ke tabel `quote_requests`.
 * Kolom `created_at` terisi otomatis oleh default `now()` di database.
 *
 * Jika env Supabase belum diisi, data disimpan sementara di localStorage
 * (mode demo) agar seluruh alur form tetap bisa dicoba end-to-end.
 */
export async function insertQuoteRequest(row: QuoteRequestInsert): Promise<void> {
  if (isSupabaseConfigured) {
    let res: Response;
    try {
      res = await fetch(`${SUPABASE_URL}/rest/v1/quote_requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY as string,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify(row),
      });
    } catch {
      throw new Error(
        "Tidak dapat terhubung ke server. Periksa koneksi internet Anda, lalu coba lagi."
      );
    }

    if (!res.ok) {
      let msg = `Server Supabase mengembalikan status ${res.status}.`;
      try {
        const body = (await res.json()) as { message?: string };
        if (body?.message) msg = body.message;
      } catch {
        /* body bukan JSON, pakai pesan default */
      }
      throw new Error(friendlyError(msg));
    }
    return;
  }

  // ---- Mode demo: simulasi latensi jaringan + simpan lokal ----
  await new Promise((resolve) => setTimeout(resolve, 900));
  try {
    const prev: unknown[] = JSON.parse(localStorage.getItem(LOCAL_KEY) ?? "[]");
    prev.push({ ...row, created_at: new Date().toISOString() });
    localStorage.setItem(LOCAL_KEY, JSON.stringify(prev));
  } catch {
    throw new Error("Gagal menyimpan data di browser Anda. Silakan coba lagi.");
  }
}
