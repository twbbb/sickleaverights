# Google OAuth 认证（同域 Cookie 模式）

## 流程

```
前端 → GET /api/auth/google → 302 Google OAuth
  → 回调 GET /api/auth/google/callback
    → Set-Cookie(HttpOnly, Secure) + 302 回首页
```

同域部署下无需 exchange code 机制，直接设 Cookie 即可。

## 后端关键代码

```typescript
// login: 生成 state 存 KV，302 到 Google
const state = crypto.randomUUID();
await env.KV.put(`oauth_state:${state}`, '1', { expirationTtl: 600 });
return redirect(`${GOOGLE_AUTH_URL}?${params}`);

// callback: Google 换 token → 获取用户信息 → 创建 session → Set-Cookie
const sessionToken = await createSession(env, userId, email);
return redirect(env.APP_URL, [
  `session=${sessionToken}; HttpOnly; Secure; SameSite=Lax; Max-Age=${14*86400}; Path=/`
]);

// session 读取: 从 Cookie 中解析
function getSession(request: Request, env: Env) {
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/session=([^;]+)/);
  if (!match) return null;
  return JSON.parse(await env.KV.get(`session:${match[1]}`));
}

// 新用户注册赠送积分
await env.DB.batch([
  env.DB.prepare('INSERT INTO users (..., credits) VALUES (?, ..., 10)').bind(...),
  env.DB.prepare('INSERT INTO credit_logs (..., reason) VALUES (?, ..., "register_gift")').bind(...),
]);
```

## 前端关键代码

```tsx
// AuthContext: Cookie 自动携带，只需请求 /api/auth/me
const refresh = async () => {
  try {
    const data = await fetch('/api/auth/me', { credentials: 'include' }).then(r => r.json());
    setUser(data.data);
    setCachedUser(data.data); // localStorage 缓存防闪烁
  } catch { setUser(null); setCachedUser(null); }
};

// 登录: 直接跳转
const login = () => { window.location.href = '/api/auth/google'; };

// 初始化时读缓存，header 不闪烁
const [user] = useState(() => getCachedUser());
const [loading] = useState(() => !getCachedUser());
```

## 跨域备用方案

如未来需要前后端分域部署，可在 callback 中自动判断：

```typescript
const sameDomain = new URL(env.APP_URL).hostname === new URL(request.url).hostname;
if (sameDomain) {
  return redirect(env.APP_URL, [sessionCookie(token)]);
} else {
  // 一次性 exchange code：KV 存 60s → 前端 ?auth_code=xxx → GET /api/auth/exchange
  const code = crypto.randomUUID();
  await env.KV.put(`exchange:${code}`, token, { expirationTtl: 60 });
  return redirect(`${env.APP_URL}?auth_code=${code}`);
}
```
