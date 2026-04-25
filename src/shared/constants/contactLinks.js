export const CONTACT_LINKS = {
  website: "https://shil.ir",
  instagramShil: "https://instagram.com/shiliran",
  instagramPersonal: "https://instagram.com/mohamad_saremi1991",
  telegram: "https://t.me/MOHAMAD_SAREMI1991",
  // شماره واتساپ را بعد از قطعی شدن اینجا وارد کنید، مثال:
  // whatsapp: "https://wa.me/989121234567",
  whatsapp: "https://wa.me/?text=SHIL%20Solar%20Design%20Suite",
  email: "mailto:info@shil.ir",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=info@shil.ir&su=SHIL%20Solar%20Design%20Suite",
};

export function buildShareText(title = "SHIL Solar Design Suite", url = "") {
  return `${title}\n${url}\n\nطراحی و محاسبه مهندسی سیستم‌های خورشیدی با SHIL`;
}
