# বাজার দর | BazarDor

চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার বাজারদর, দামের পরিবর্তন এবং বিভিন্ন বাজারের দামের তুলনা দেখার ওয়েব অ্যাপ।

## ফিচার

- বাংলা ভাষা ও বাংলা অঙ্কে পণ্যের দাম দেখানো।
- আজ দাম বেড়েছে বা কমেছে—এমন পণ্য আলাদা করে দেখানো।
- ক্যাটেগরি অনুযায়ী পণ্য দেখা এবং দাম কম-বেশি ক্রমে সাজানো।
- পণ্যের বর্তমান দাম, পরিবর্তন এবং বাজারভিত্তিক সর্বনিম্ন/সর্বোচ্চ দামের বিবরণ।
- ইমেইল-পাসওয়ার্ড, Google এবং GitHub দিয়ে Better Auth authentication।
- প্রোফাইলের নাম আপডেট।
- লোডিং placeholder এবং 404 পেজ।
- মোবাইল ও বড় পর্দার জন্য responsive layout।

> `src/proxy.ts` অনুযায়ী বর্তমানে `/profile`, `/product` এবং `/category` route-এ প্রবেশের জন্য সাইন ইন করা লাগে।

## ব্যবহৃত প্রযুক্তি

- Next.js App Router
- React ও TypeScript
- Tailwind CSS ও DaisyUI
- Better Auth
- MongoDB
- `react-hot-toast`, `react-icons`, `react-marquee-text`
- Vercel deployment

## পণ্যের ডেটা API

পণ্য ও ক্যাটেগরির ডেটা নিচের API থেকে আসে:

`https://openapi.programming-hero.com/api/bazardor`

| Endpoint | ব্যবহার |
| --- | --- |
| `/products` | সব পণ্য |
| `/products?category=chal` | নির্দিষ্ট ক্যাটেগরির পণ্য |
| `/products/1` | ID দিয়ে একটি পণ্যের বিবরণ |
| `/categories` | সব ক্যাটেগরি |

## লোকাল ডেভেলপমেন্ট

### প্রয়োজনীয়তা

- Node.js 20.9 বা তার পরের সংস্করণ
- npm
- MongoDB database
- Google/GitHub OAuth application (OAuth sign-in চালাতে চাইলে)

### সেটআপ

```bash
git clone https://github.com/irfanhossaintanjid/bazardor.git
cd bazardor
npm install
```

প্রজেক্টের root-এ `.env.local` ফাইল তৈরি করে নিচের environment variable-গুলো সেট করুন:

```dotenv
BETTER_AUTH_SECRET=replace_with_a_long_random_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URL=replace_with_your_mongodb_connection_string

GOOGLE_CLIENT_ID=replace_with_google_client_id
GOOGLE_CLIENT_SECRET=replace_with_google_client_secret

GITHUB_CLIENT_ID=replace_with_github_client_id
GITHUB_CLIENT_SECRET=replace_with_github_client_secret
```

`BETTER_AUTH_SECRET`-এর জন্য নিরাপদ, এলোমেলো secret ব্যবহার করুন। বাস্তব secret, database URI বা OAuth credential source control-এ commit করবেন না।

Google ও GitHub OAuth application-এর callback URL-এ local development-এর জন্য যোগ করুন:

```text
http://localhost:3000/api/auth/callback/google
http://localhost:3000/api/auth/callback/github
```

### কমান্ড

```bash
npm run dev
```

তারপর [http://localhost:3000](http://localhost:3000) খুলুন।

Production build ও local production server:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Vercel deployment

Vercel project-এর Environment Variables-এ উপরের সব environment variable যোগ করুন এবং Production/Preview—যে environment-এ deploy করবেন, সেখানে সঠিকভাবে enable করুন।

- `BETTER_AUTH_URL`-এ deployed site-এর origin দিন, যেমন `https://your-domain.example`।
- Google ও GitHub OAuth console-এ production callback URL যোগ করুন:
  - `https://your-domain.example/api/auth/callback/google`
  - `https://your-domain.example/api/auth/callback/github`
- MongoDB Atlas-এ deployment environment থেকে database access অনুমোদিত আছে কি না যাচাই করুন।
- Environment Variable পরিবর্তনের পরে নতুন deployment দিন।

## প্রজেক্ট কাঠামো

```text
src/
├── app/
│   ├── api/auth/[...all]/route.ts  # Better Auth API handler
│   ├── category/[slug]/page.tsx    # ক্যাটেগরি পেজ
│   ├── product/[id]/page.tsx      # পণ্যের বিবরণ পেজ
│   ├── profile/page.tsx           # প্রোফাইল ও নাম আপডেট
│   ├── signin/page.tsx             # সাইন ইন
│   ├── signup/page.tsx             # সাইন আপ
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx                    # হোম পেজ
├── components/                     # UI components
├── lib/
│   ├── auth.ts                     # Better Auth server config
│   └── auth-client.ts              # Better Auth client
├── types/index.ts                  # Product ও market types
└── proxy.ts                        # Protected route handling
```

## ডেভেলপার

Irfan Hossain Tanzid
