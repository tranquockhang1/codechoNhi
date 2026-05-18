# codechoNhi

Món quà Valentine / xin lỗi Bí — Next.js app.

Dự án nằm trong thư mục `Valentine-Days-main/`.

## Chạy local

```bash
cd Valentine-Days-main
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Deploy

### GitHub Pages (link `tranquockhang1.github.io/codechoNhi`)

1. Repo **Settings → Pages → Build and deployment:** chọn **GitHub Actions** (không dùng "Deploy from branch" chỉ với README).
2. Push code lên `main` — workflow `.github/workflows/deploy-pages.yml` sẽ build app và deploy.
3. Đợi 2–5 phút, mở lại link trên.

Nếu chỉ thấy chữ README: Pages đang hiển thị file markdown, chưa chạy workflow build app.

### Vercel (dễ hơn, repo private được)

- Import repo từ GitHub
- **Root Directory:** `Valentine-Days-main`
