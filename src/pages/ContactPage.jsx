import { useProjectStore } from "../app/store/projectStore";
import { PUBLIC_ASSETS } from "../shared/constants/publicAssets";
import { CONTACT_LINKS } from "../shared/constants/contactLinks";
import { ShareActions } from "../shared/components/ShareActions";

const CONTACT_ITEMS = [
  {
    key: "instagramShil",
    title: "اینستاگرام SHIL",
    description: "صفحه رسمی محصولات و پروژه‌های SHIL",
    qr: PUBLIC_ASSETS.qr.instagramShil,
    type: "Instagram",
    url: CONTACT_LINKS.instagramShil,
    actionLabel: "ورود به اینستاگرام SHIL",
  },
  {
    key: "instagram",
    title: "اینستاگرام مهندس صارمی",
    description: "آموزش‌ها، نمونه‌کارها و نکات اجرایی",
    qr: PUBLIC_ASSETS.qr.instagram,
    type: "Instagram",
    url: CONTACT_LINKS.instagramPersonal,
    actionLabel: "ورود به اینستاگرام",
  },
  {
    key: "telegram",
    title: "تلگرام",
    description: "ارتباط سریع و ارسال فایل‌های پروژه",
    qr: PUBLIC_ASSETS.qr.telegram,
    type: "Telegram",
    url: CONTACT_LINKS.telegram,
    actionLabel: "ورود به تلگرام",
  },
  {
    key: "whatsapp",
    title: "واتساپ",
    description: "هماهنگی سریع و پشتیبانی پروژه",
    qr: PUBLIC_ASSETS.qr.whatsapp,
    type: "WhatsApp",
    url: CONTACT_LINKS.whatsapp,
    actionLabel: "ورود به واتساپ",
  },
];


function ContactCard({ item }) {
  return (
    <article className="contact-card">
      <a className="contact-card__qr-wrap" href={item.url} target="_blank" rel="noreferrer" aria-label={item.actionLabel}>
        <img className="contact-card__qr" src={item.qr} alt={`QR ${item.title}`} loading="lazy" />
      </a>
      <div className="contact-card__body">
        <span className="contact-card__type">{item.type}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="contact-card__actions">
          <a className="btn btn--primary btn--sm" href={item.url} target="_blank" rel="noreferrer">{item.actionLabel}</a>
          <a className="btn btn--ghost btn--sm" href={item.qr} target="_blank" rel="noreferrer">مشاهده QR</a>
        </div>
      </div>
    </article>
  );
}


export function ContactPage() {
  const { goBackFromContact, goDashboard } = useProjectStore();

  return (
    <div className="shell shell--contact">
      <header
        className="contact-hero"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(8,17,31,0.86), rgba(15,23,42,0.68)), url(${PUBLIC_ASSETS.backgrounds.home})` }}
      >
        <button className="btn btn--ghost btn--back" onClick={goBackFromContact} type="button">
          بازگشت
        </button>

        <div className="contact-hero__content">
          <img className="contact-hero__logo" src={PUBLIC_ASSETS.branding.logo} alt="SHIL" />
          <span className="eyebrow">Contact / SHIL.IR</span>
          <h1>ارتباط با SHIL</h1>
          <p>
            برای مشاهده محصولات SHIL، ارتباط سریع، دریافت فایل‌ها و هماهنگی پروژه، از مسیرهای زیر استفاده کنید.
          </p>
          <div className="contact-hero__actions">
            <a className="btn btn--primary" href={CONTACT_LINKS.website} target="_blank" rel="noreferrer">
              ورود به سایت SHIL.IR
            </a>
            <button className="btn btn--secondary" onClick={goDashboard} type="button">
              بازگشت به داشبورد
            </button>
          </div>
        </div>
      </header>

      <section className="panel contact-site-panel">
        <div>
          <span className="eyebrow">Official Website</span>
          <h2>SHIL.IR</h2>
          <p>وب‌سایت رسمی برای معرفی محصولات، اطلاعات فنی و مسیرهای ارتباطی.</p>
        </div>
        <a className="site-link-card" href={CONTACT_LINKS.website} target="_blank" rel="noreferrer">
          SHIL.IR
        </a>
      </section>

      <section className="panel contact-share-panel">
        <div className="panel__header">
          <h2>ارسال لینک برنامه</h2>
        </div>
        <p className="section-note">لینک برنامه یا صفحه ارتباط را با پیامک، واتساپ، ایمیل، Gmail و برنامه‌های داخلی نصب‌شده روی موبایل ارسال کنید.</p>
        <ShareActions title="ارتباط با SHIL" text="مسیرهای ارتباطی SHIL و برنامه طراحی سیستم خورشیدی" />
      </section>

      <section className="contact-grid">
        {CONTACT_ITEMS.map((item) => (
          <ContactCard key={item.key} item={item} />
        ))}
      </section>
    </div>
  );
}
