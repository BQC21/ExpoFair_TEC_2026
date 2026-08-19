# ExpoFair TEC 2026

Código QR para el registro de clientes en ExpoEnergética 2026, feria de energías renovables de [TEC Energy Solutions](https://tec-energysolutions.pe/).

## Features
1. Todo dentro de una aplicación web: código QR (`/`), formulario (`/form`) y mensaje de confirmación (`/confirm`).
2. Las respuestas del formulario se registran en la tabla `Clientes` de una base de datos alojada en Supabase.
3. El QR apunta al formulario del mismo origen, para usarlo en un stand o pantalla.

## Stack
1. Frontend: React + Vite + Tailwind CSS + React Router
2. Database: Supabase (Postgres)
3. Hosting: Vercel

# Authentication
* No hay login de usuarios. El formulario público inserta filas con la clave anónima de Supabase.
* Variables de entorno (archivo `.env` en la raíz; no se sube a Git):

```bash
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-or-publishable-key>
```

* En Vercel, configura las mismas variables en Project Settings → Environment Variables.
---

## Prerequisites
- Node.js y npm
- Cuenta en [Supabase](https://supabase.com)
- (Opcional) Cuenta en [Vercel](https://vercel.com) para el despliegue

## Installation

#### 1. Clone repository
```bash
git clone https://github.com/BQC21/ExpoFair_TEC_2026.git
cd ExpoFair_TEC_2026
```

#### 2. Database Setup - Supabase
1. Crea una cuenta en [supabase.com](https://supabase.com) y un proyecto.
2. Crea la tabla `Clientes` (columnas: `nombre_completo`, `empresa`, `cargo`, `correo_electronico`, `telefono_contacto`, `sector_industrial`, `interes`, `consumo_energetico_mensual`, `implementacion`, `propuesta`).
3. En **Project Settings → API**, copia `Project URL` y la clave `anon` / `publishable`.
4. Concede `INSERT` al rol `anon` sobre `public."Clientes"` y una política RLS de solo inserción (sin `SELECT` público).
5. Crea un archivo `.env` en la raíz con `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.

#### 3. Install dependencies
```bash
npm install
```

#### 4. Run development app
```bash
npm run dev
```

#### 5. Open localhost url on browser
```bash
http://localhost:5173
```
---
