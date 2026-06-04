import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Check, ChevronDown, Hammer, Ruler, Layers, Sparkles, Shield, Leaf, Clock, Award } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-taras.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const PHONE = "+48 500 000 000";
const PHONE_HREF = "tel:+48500000000";
const EMAIL = "kontakt@panodtarasow.pl";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pan od Tarasów — tarasy kompozytowe Śląsk | montaż od podłoża po deski" },
      { name: "description", content: "Pan od Tarasów: solidne tarasy kompozytowe na Śląsku. Przygotowanie podłoża, konstrukcja i montaż desek kompozytowych przy domach, ogrodach i lokalach. Darmowa wycena." },
      { name: "keywords", content: "Pan od Tarasów, tarasy kompozytowe, montaż tarasów kompozytowych, przygotowanie podłoża pod taras, tarasy kompozytowe Śląsk" },
      { property: "og:title", content: "Pan od Tarasów — tarasy kompozytowe Śląsk" },
      { property: "og:description", content: "Solidne tarasy kompozytowe na lata. Kompleksowa realizacja od podłoża po gotowy montaż." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Pan od Tarasów",
        description: "Montaż tarasów kompozytowych: podłoże, konstrukcja, deski.",
        telephone: PHONE,
        email: EMAIL,
        areaServed: "Śląsk",
        url: "https://panodtarasow.pl",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Benefits />
      <Process />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-bold">P</span>
      <span className="flex flex-col leading-none">
        <span className="font-semibold tracking-tight">Pan od Tarasów</span>
        <span className="text-[11px] text-muted-foreground">Solidne tarasy kompozytowe na lata</span>
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#uslugi" className="hover:text-accent">Usługi</a>
          <a href="#korzysci" className="hover:text-accent">Korzyści</a>
          <a href="#realizacje" className="hover:text-accent">Realizacje</a>
          <a href="#faq" className="hover:text-accent">FAQ</a>
          <a href="#kontakt" className="hover:text-accent">Kontakt</a>
        </nav>
        <a href={PHONE_HREF} className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 md:inline-flex">
          <Phone className="h-4 w-4" /> Zadzwoń
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Taras kompozytowy przy nowoczesnym domu" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36 text-primary-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Leaf className="h-3.5 w-3.5" /> Tarasy kompozytowe · Śląsk
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] md:text-6xl">
          Pan od Tarasów — tarasy kompozytowe<br className="hidden md:block" /> od podłoża po gotowy montaż
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-primary-foreground/90">
          Wykonujemy solidne i estetyczne tarasy kompozytowe przy domach, ogrodach i lokalach.
          Zajmujemy się przygotowaniem podłoża, konstrukcją oraz montażem desek kompozytowych.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-black/20 hover:opacity-90">
            <Phone className="h-4 w-4" /> Zadzwoń po wycenę
          </a>
          <a href="#kontakt" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-primary-foreground backdrop-blur hover:bg-white/20">
            Poproś o darmową wycenę
          </a>
        </div>
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-sm md:grid-cols-4">
          {[
            { n: "10+", l: "lat doświadczenia" },
            { n: "200+", l: "metrów rocznie" },
            { n: "100%", l: "własna ekipa" },
            { n: "Śląsk", l: "obszar działania" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg border border-white/15 bg-white/5 p-3 backdrop-blur">
              <div className="text-xl font-semibold">{s.n}</div>
              <div className="text-primary-foreground/80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: Layers, t: "Kompleksowa realizacja", d: "Od projektu i podłoża po gotowy taras." },
    { icon: Shield, t: "Solidne podłoże", d: "Stabilna konstrukcja zgodna ze sztuką." },
    { icon: Award, t: "Trwałe materiały", d: "Sprawdzone deski kompozytowe premium." },
    { icon: Sparkles, t: "Estetyczne wykończenie", d: "Czyste linie i dopracowane detale." },
  ];
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
        {items.map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex flex-col gap-2">
            <Icon className="h-6 w-6 text-accent" />
            <div className="font-semibold">{t}</div>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Ruler, t: "Przygotowanie terenu", d: "Pomiary, wytyczenie, oczyszczenie i wyrównanie terenu pod inwestycję." },
    { icon: Layers, t: "Stabilne podłoże", d: "Wykonanie podsypki, stóp betonowych lub płyty – w zależności od warunków." },
    { icon: Hammer, t: "Konstrukcja tarasu", d: "Solidny ruszt z legarów aluminiowych lub kompozytowych odpornych na wilgoć." },
    { icon: Layers, t: "Montaż desek", d: "Profesjonalny montaż desek kompozytowych na klipsy i wkręty nierdzewne." },
    { icon: Sparkles, t: "Wykończenia", d: "Listwy maskujące, schody, obrzeża, oświetlenie LED i detale na wymiar." },
    { icon: Leaf, t: "Doradztwo i wycena", d: "Pomagamy dobrać kolor, układ i deski. Darmowa wycena z dojazdem." },
  ];
  return (
    <section id="uslugi" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead eyebrow="Co robimy" title="Tarasy kompozytowe — od A do Z" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map(({ icon: Icon, t, d }) => (
          <article key={t} className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md">
            <Icon className="h-7 w-7 text-accent" />
            <h3 className="mt-4 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const list = [
    "Wieloletnia trwałość — odporność na wilgoć, mróz i UV",
    "Niska pielęgnacja — bez olejowania i malowania",
    "Antypoślizgowa, bezpieczna powierzchnia",
    "Naturalny wygląd drewna w nowoczesnym wydaniu",
    "Odporność na pleśń, grzyby i owady",
    "Ekologiczny materiał z recyklingu",
  ];
  return (
    <section id="korzysci" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent">Dlaczego kompozyt</span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Korzyści tarasu kompozytowego</h2>
          <p className="mt-4 text-primary-foreground/80">
            Kompozyt łączy zalety drewna i nowoczesnych tworzyw — wygląda naturalnie,
            a służy znacznie dłużej niż klasyczna deska.
          </p>
          <ul className="mt-6 space-y-3">
            {list.map((b) => (
              <li key={b} className="flex gap-3 text-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <img src={g5} alt="Taras kompozytowy wieczorem z oświetleniem LED" className="h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Bezpłatna wycena", d: "Rozmowa, pomiar, dobór desek i koloru. Wycena w 24–48 h." },
    { n: "02", t: "Projekt i terminy", d: "Ustalamy układ, wykończenia i wygodny termin realizacji." },
    { n: "03", t: "Podłoże i konstrukcja", d: "Przygotowujemy stabilny grunt i montujemy ruszt nośny." },
    { n: "04", t: "Montaż i odbiór", d: "Układamy deski, wykonujemy detale, wspólnie odbieramy taras." },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead eyebrow="Jak pracujemy" title="Współpraca w 4 prostych krokach" />
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl border border-border bg-card p-6">
              <div className="font-[Fraunces] text-3xl text-accent">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: g1, alt: "Taras kompozytowy w ogrodzie" },
    { src: g6, alt: "Taras kompozytowy z lotu ptaka" },
    { src: g2, alt: "Konstrukcja drewniana pod taras" },
    { src: g4, alt: "Montaż desek kompozytowych" },
    { src: g5, alt: "Taras kompozytowy o zmierzchu" },
    { src: g3, alt: "Detal grafitowych desek kompozytowych" },
  ];
  return (
    <section id="realizacje" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHead eyebrow="Realizacje" title="Galeria naszych tarasów" />
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {imgs.map((im, i) => (
          <div key={i} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}`}>
            <img src={im.src} alt={im.alt} loading="lazy" width={1024} height={1024} className="aspect-square h-full w-full object-cover transition duration-500 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Marta K.", c: "Katowice", q: "Taras wyszedł idealnie — solidna konstrukcja i bardzo czyste wykończenie. Polecam!" },
    { n: "Paweł S.", c: "Gliwice", q: "Świetny kontakt, terminowość i jakość. Po dwóch sezonach taras wygląda jak nowy." },
    { n: "Anna W.", c: "Tychy", q: "Profesjonalna ekipa. Doradzili kolor desek i wszystko dograli z architektem." },
  ];
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHead eyebrow="Opinie" title="Co mówią klienci" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.map((x) => (
            <figure key={x.n} className="rounded-xl border border-border bg-card p-6">
              <div className="text-accent">★★★★★</div>
              <blockquote className="mt-3 text-sm leading-relaxed">„{x.q}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{x.n} <span className="font-normal text-muted-foreground">· {x.c}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: "Ile kosztuje taras kompozytowy?", a: "Cena zależy od metrażu, rodzaju desek i podłoża. Średnio 450–900 zł/m² z montażem. Po pomiarze przygotujemy konkretną wycenę." },
    { q: "Jak długo trwa realizacja?", a: "Standardowy taras 20–40 m² to zwykle 3–7 dni roboczych od momentu rozpoczęcia prac." },
    { q: "Czy montujecie na istniejącym podłożu?", a: "Tak, jeśli jest stabilne i równe. W innym przypadku przygotowujemy podłoże od podstaw." },
    { q: "Jaką dajecie gwarancję?", a: "Do 25 lat gwarancji producenta na deski oraz gwarancję na nasz montaż." },
    { q: "Gdzie pracujecie?", a: "Działamy głównie na Śląsku — Katowice, Gliwice, Tychy, Bytom, Chorzów i okolice." },
  ];
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20">
      <SectionHead eyebrow="FAQ" title="Najczęstsze pytania" />
      <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
        {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <details className="group p-5" open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition ${open ? "rotate-180" : ""}`} />
      </summary>
      <p className="mt-3 text-sm text-muted-foreground">{a}</p>
    </details>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  return (
    <section id="kontakt" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-widest text-accent">Kontakt</span>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Darmowa wycena Twojego tarasu</h2>
          <p className="mt-4 text-primary-foreground/80">
            Zostaw kontakt — oddzwonimy w ciągu 24 h. Możesz też zadzwonić bezpośrednio.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={PHONE_HREF} className="flex items-center gap-3 hover:text-accent"><Phone className="h-5 w-5 text-accent" /> {PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent"><Mail className="h-5 w-5 text-accent" /> {EMAIL}</a>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> Śląsk i okolice</div>
            <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-accent" /> Pon–Sob, 8:00–19:00</div>
          </div>
        </div>
        <form
          className="rounded-2xl bg-background p-6 text-foreground shadow-xl"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              toast.success("Dziękujemy! Odezwiemy się w ciągu 24 h.");
              (e.target as HTMLFormElement).reset();
            }, 700);
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Imię" name="name" required />
            <Field label="Telefon" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <Field label="Lokalizacja" name="loc" placeholder="np. Katowice" />
            <Field label="Przybliżony metraż tarasu" name="size" placeholder="np. 25 m²" />
          </div>
          <label className="mt-4 block text-sm">
            <span className="mb-1 block font-medium">Wiadomość</span>
            <textarea name="msg" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-accent" placeholder="Opisz krótko swój taras lub oczekiwania" />
          </label>
          <button disabled={loading} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-60">
            {loading ? "Wysyłanie..." : "Wyślij zapytanie o darmową wycenę"}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">Wysyłając wiadomość zgadzasz się na kontakt w celu przygotowania wyceny.</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium">{label}{required && " *"}</span>
      <input type={type} name={name} required={required} placeholder={placeholder} className="w-full rounded-md border border-input bg-background px-3 py-2 outline-none focus:border-accent" />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">Tarasy kompozytowe od podłoża po gotowy montaż. Śląsk i okolice.</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Kontakt</div>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>Telefon: <a className="hover:text-accent" href={PHONE_HREF}>{PHONE}</a></li>
            <li>Email: <a className="hover:text-accent" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li>Obszar działania: Śląsk</li>
            <li>panodtarasow.pl</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold">Menu</div>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li><a className="hover:text-accent" href="#uslugi">Usługi</a></li>
            <li><a className="hover:text-accent" href="#realizacje">Realizacje</a></li>
            <li><a className="hover:text-accent" href="#faq">FAQ</a></li>
            <li><a className="hover:text-accent" href="#kontakt">Kontakt</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pan od Tarasów — PanOdTarasow. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
        <Phone className="h-4 w-4" /> Zadzwoń
      </a>
      <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-medium text-accent-foreground">
        Darmowa wycena
      </a>
    </div>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs uppercase tracking-widest text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
    </div>
  );
}
