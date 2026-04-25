# راه‌اندازی نسخه حرفه‌ای SHIL SOLAR

## 1) ساخت پروژه Supabase
1. وارد Supabase شوید.
2. یک پروژه جدید بسازید.
3. از مسیر Project Settings > API این دو مقدار را بردارید:
   - Project URL
   - anon public key

## 2) ساخت فایل env
در ریشه پروژه، از روی `.env.example` یک فایل `.env` بسازید:

```bash
cp .env.example .env
```

و مقدارها را پر کنید:

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_ADMIN_EMAIL=ایمیل مدیر
```

## 3) ساخت دیتابیس
فایل زیر را در Supabase SQL Editor اجرا کنید:

```text
supabase/schema.sql
```

## 4) ساخت مدیر اصلی
اول با ایمیل مدیر داخل اپ ثبت‌نام کنید. بعد در Supabase SQL Editor این دستور را بزنید:

```sql
update public.profiles
set role='admin',
    status='approved',
    approved_at=now()
where email='YOUR_ADMIN_EMAIL@example.com';
```

## 5) انتشار روی Vercel
در Vercel برای پروژه این Environment Variables را اضافه کنید:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
VITE_ADMIN_EMAIL
```

بعد Redeploy بزنید.

## قابلیت‌ها
- ورود کاربران
- درخواست دسترسی
- تأیید/رد توسط مدیر
- پنل مدیریت
- ذخیره پروژه‌ها روی سرور
- گزارش استفاده کاربران
- حالت لوکال بدون Supabase برای تست
