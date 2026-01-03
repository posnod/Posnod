# Panduan Tim Posnod

## Branching Workflow
- Branch utama: `develop`
- Fitur baru: `feature/<nama-fitur>`
- Bugfix: `bugfix/<deskripsi>`
- Merge ke `develop` harus via Pull Request + Review

## Naming Convertation
- React Components: PascalCase (`MyButton.tsx`)
- JS/TS Helper: camelCase (`formatDate.ts`)
- Laravel Models: singular (`User.php`)
- Laravel Controllers: plural (`UserController.php`)

## Environment & Secrets
- Semua secret ada di `.env` (tidak di-commit)
- Gunakan `.env.example` sebagai template

## Testing
- Frontend: Jest / React Testing Library
- Backend: PHPUnit
- Minimal satu test untuk satu PR

## Linting & Formatting
- Frontend: ESLint + Prettier + Tailwind linting
- Backend: PHP-CS-Fixer

## Frontend Notes
- Next.js + Tailwind + shadcn
- Component UI pakai `src/components/`
- Styling global di `src/style/global.css`

## Backend Notes
- Laravel + PostgreSQL
- Struktur standar Laravel (`Models`, `Controllers`, `Migrations`, `Seeders`)
- Database di `.env` sesuai PostgreSQL credentials