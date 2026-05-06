# Metakent İnşaat Kurumsal Web Sitesi

Modern, premium ve koyu temalı Next.js kurumsal demo sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda:

```bash
http://localhost:3000
```

## İçerik Yönetimi

Site metinleri, proje listeleri, iletişim bilgileri ve görsel URL'leri `src/data/site.ts` dosyasından yönetilir.

Gerçek proje görselleri eklendiğinde `public/projects/` klasörüne dosyalar yerleştirilebilir ve `src/data/site.ts` içindeki `image` alanları örneğin `/projects/proje-adi.jpg` şeklinde güncellenebilir.

Logo için beklenen dosya yolu:

```bash
public/logo.png
```
