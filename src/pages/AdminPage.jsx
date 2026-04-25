import { useEffect, useMemo, useState } from 'react';
import { useProjectStore } from '../app/store/projectStore';
import { useAuth } from '../features/auth/AuthProvider';
import { isSupabaseConfigured, supabase } from '../shared/lib/supabaseClient';

function statLabel(value) {
  if (value === 'pending') return 'در انتظار تأیید';
  if (value === 'approved') return 'تأیید شده';
  if (value === 'rejected') return 'رد شده';
  if (value === 'blocked') return 'مسدود';
  return value || '—';
}

export function AdminPage() {
  const { goDashboard } = useProjectStore();
  const { profile, isAdmin } = useAuth();
  const [profiles, setProfiles] = useState([]);
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  async function loadAdminData() {
    if (!isSupabaseConfigured || !isAdmin) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const [profilesResult, eventsResult, projectsResult] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: false }),
      supabase.from('usage_events').select('*').order('created_at', { ascending: false }).limit(80),
      supabase.from('app_projects').select('*').order('updated_at', { ascending: false }).limit(80),
    ]);

    if (profilesResult.error) setMessage(profilesResult.error.message);
    else setProfiles(profilesResult.data || []);

    if (!eventsResult.error) setEvents(eventsResult.data || []);
    if (!projectsResult.error) setProjects(projectsResult.data || []);

    setLoading(false);
  }

  useEffect(() => {
    loadAdminData();
  }, [isAdmin]);

  async function updateUser(userId, patch) {
    setMessage('');
    const payload = {
      ...patch,
      updated_at: new Date().toISOString(),
    };
    if (patch.status === 'approved') {
      payload.approved_by = profile?.id;
      payload.approved_at = new Date().toISOString();
    }

    const { error } = await supabase.from('profiles').update(payload).eq('id', userId);
    if (error) {
      setMessage(error.message);
      return;
    }
    await loadAdminData();
  }

  const stats = useMemo(() => {
    const pending = profiles.filter((item) => item.status === 'pending').length;
    const approved = profiles.filter((item) => item.status === 'approved').length;
    const rejected = profiles.filter((item) => item.status === 'rejected' || item.status === 'blocked').length;
    return { pending, approved, rejected, projects: projects.length, events: events.length };
  }, [profiles, projects, events]);

  if (!isAdmin) {
    return (
      <div className="shell">
        <section className="panel empty-state">
          <strong>دسترسی مدیر لازم است.</strong>
          <button className="btn btn--ghost" type="button" onClick={goDashboard}>بازگشت</button>
        </section>
      </div>
    );
  }

  return (
    <div className="shell">
      <header className="topbar">
        <button className="btn btn--ghost" type="button" onClick={goDashboard}>بازگشت به برنامه</button>
        <div className="topbar__title">پنل مدیریت SHIL SOLAR</div>
        <button className="btn btn--secondary" type="button" onClick={loadAdminData}>به‌روزرسانی</button>
      </header>

      {message ? <div className="panel admin-message">{message}</div> : null}
      {loading ? <div className="panel empty-state">در حال بارگذاری اطلاعات مدیریتی...</div> : null}

      <section className="metric-grid">
        <div className="metric-card"><div className="metric-card__label">در انتظار تأیید</div><div className="metric-card__value">{stats.pending}</div></div>
        <div className="metric-card metric-card--green"><div className="metric-card__label">کاربران فعال</div><div className="metric-card__value">{stats.approved}</div></div>
        <div className="metric-card metric-card--amber"><div className="metric-card__label">رد / مسدود</div><div className="metric-card__value">{stats.rejected}</div></div>
        <div className="metric-card metric-card--purple"><div className="metric-card__label">پروژه‌های ابری</div><div className="metric-card__value">{stats.projects}</div></div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <h2>درخواست‌های کاربران</h2>
          <span className="badge">{profiles.length} کاربر</span>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>کاربر</th>
                <th>تماس</th>
                <th>شرکت</th>
                <th>وضعیت</th>
                <th>نقش</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.full_name || '—'}</strong><span>{item.email}</span></td>
                  <td>{item.phone || '—'}</td>
                  <td>{item.company || '—'}</td>
                  <td>{statLabel(item.status)}</td>
                  <td>{item.role}</td>
                  <td>
                    <div className="admin-actions">
                      <button className="btn btn--secondary btn--sm" onClick={() => updateUser(item.id, { status: 'approved' })}>تأیید</button>
                      <button className="btn btn--ghost btn--sm" onClick={() => updateUser(item.id, { status: 'rejected' })}>رد</button>
                      <button className="btn btn--ghost btn--sm" onClick={() => updateUser(item.id, { role: item.role === 'admin' ? 'user' : 'admin', status: 'approved' })}>{item.role === 'admin' ? 'حذف مدیر' : 'مدیر کن'}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <h2>آخرین رویدادهای استفاده</h2>
          <span className="badge">{events.length} رویداد</span>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>رویداد</th><th>مسیر</th><th>زمان</th><th>جزئیات</th></tr></thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.event_name}</td>
                  <td>{event.route || '—'}</td>
                  <td>{new Date(event.created_at).toLocaleString('fa-IR')}</td>
                  <td><code>{JSON.stringify(event.metadata || {})}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <h2>آخرین پروژه‌های ذخیره‌شده روی سرور</h2>
          <span className="badge">{projects.length} پروژه</span>
        </div>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead><tr><th>عنوان</th><th>کارفرما</th><th>شهر</th><th>نوع</th><th>آخرین تغییر</th></tr></thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.client_name || '—'}</td>
                  <td>{project.city || '—'}</td>
                  <td>{project.system_type || '—'}</td>
                  <td>{new Date(project.updated_at).toLocaleString('fa-IR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
