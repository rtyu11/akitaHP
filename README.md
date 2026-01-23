# 有限会社 秋多運送 - コーポレートサイト

東京都あきる野市の運送会社「有限会社秋多運送」のコーポレートサイトです。

## 技術スタック

- **フレームワーク:** Next.js 16 (App Router)
- **スタイリング:** Tailwind CSS v4
- **データベース:** Vercel Postgres (Prisma ORM)
- **認証:** NextAuth.js v4
- **アイコン:** Lucide React
- **デプロイ:** Vercel

## 機能

- トップページ（ヒーロー、お知らせ、会社概要、保有車両、採用情報、お問い合わせ）
- お知らせ機能（データベース接続時）
- モックデータフォールバック（データベース未接続時）
- 管理画面（/admin）
  - 管理者ログイン
  - お知らせの投稿・削除
- お問い合わせフォーム（Formspree連携用）

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` をコピーして `.env` を作成し、必要な環境変数を設定してください。

```bash
cp .env.example .env
```

必要な環境変数：
- `POSTGRES_PRISMA_URL` - Vercel Postgres接続URL
- `POSTGRES_URL_NON_POOLING` - Vercel Postgres直接接続URL
- `NEXTAUTH_SECRET` - NextAuth用シークレット
- `NEXTAUTH_URL` - サイトURL
- `ADMIN_EMAIL` - 管理者メールアドレス
- `ADMIN_PASSWORD` - 管理者パスワード

### 3. データベースのセットアップ

```bash
# Prismaクライアント生成
npx prisma generate

# データベースマイグレーション（本番環境）
npx prisma migrate deploy

# 開発環境でのマイグレーション
npx prisma migrate dev
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) でサイトを確認できます。

## ビルドとデプロイ

### ローカルビルド

```bash
npm run build
npm start
```

### Vercelへのデプロイ

1. Vercelプロジェクトを作成
2. 環境変数を設定
3. Vercel Postgresをプロジェクトに追加
4. GitHubリポジトリと連携してデプロイ

## 管理画面

管理画面は `/admin` からアクセスできます。

初回セットアップ時は、環境変数で設定した管理者アカウントでログインしてください。

## お問い合わせフォーム設定

お問い合わせフォームにFormspreeを連携するには：

1. [Formspree](https://formspree.io/)でアカウントを作成
2. 新しいフォームを作成
3. `components/Contact.tsx` の `action` 属性にFormspreeのURLを設定

```tsx
<form action="https://formspree.io/f/YOUR_ID_HERE" method="POST">
```

## ディレクトリ構造

```
.
├── app/                    # Next.js App Router
│   ├── admin/             # 管理画面
│   ├── api/               # APIルート
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # トップページ
├── components/            # Reactコンポーネント
├── lib/                   # ユーティリティ・設定
│   ├── auth.ts           # NextAuth設定
│   ├── db.ts             # Prismaクライアント
│   └── utils.ts          # ユーティリティ関数
├── prisma/               # Prismaスキーマ
└── public/               # 静的ファイル
```

## ライセンス

Copyright © 2026 有限会社 秋多運送 All Rights Reserved.
