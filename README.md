# Book Nest

A web application for managing your personal book library, scanning bookshelves, and organizing your reading collection.

## Project Structure Overview

### Core Configuration

- `src/app.d.ts`: TypeScript declaration file that defines global types for the application, including Supabase client types.
- `src/app.html`: The main HTML template for the SvelteKit application.
- `src/hooks.server.ts`: Server-side hooks for SvelteKit, handling authentication and Supabase session management.
- `.env`: Environment variables configuration (not tracked in git).

### Authentication & User Management

- `src/routes/login/+page.svelte`: Login page UI with Google authentication.
- `src/routes/login/+page.server.ts`: Server-side logic for handling login actions.
- `src/routes/auth/callback/+server.ts`: OAuth callback handler for processing authentication redirects.
- `src/routes/register/+page.svelte`: Registration page UI.
- `src/routes/register/+page.server.ts`: Server-side logic for user registration.

### Layout & Navigation

- `src/routes/+layout.svelte`: Main application layout with navigation components.
- `src/routes/+layout.server.ts`: Server-side layout logic, handling session data.
- `src/lib/components/Navbar.svelte`: Navigation bar component.
- `src/lib/components/Sidebar.svelte`: Sidebar navigation component.

### Private Routes (Authenticated User Features)

- `src/routes/private/+layout.svelte`: Layout for authenticated sections.
- `src/routes/private/+layout.server.ts`: Server-side protection for private routes.
- `src/routes/private/dashboard/+page.svelte`: User dashboard with reading statistics.
- `src/routes/private/books/+page.svelte`: Book library listing page.
- `src/routes/private/books/[bookId]/+page.svelte`: Individual book details page.
- `src/routes/private/scan-shelf/+page.svelte`: Feature for scanning bookshelves with camera.

### API Integration

- `src/lib/server/openai.ts`: OpenAI API integration for book recognition.
- `src/lib/server/supabase.ts`: Server-side Supabase client configuration.
- `src/lib/utils/openai-helpers.ts`: Utility functions for OpenAI API.

### UI Components

- `src/lib/components/Button.svelte`: Reusable button component.
- `src/lib/components/Card.svelte`: Card component for displaying content.
- `src/lib/components/Input.svelte`: Form input component.
- `src/lib/components/Modal.svelte`: Modal dialog component.
- `src/lib/components/BookCard.svelte`: Component for displaying book information.

### Data & Context Management

- `src/lib/stores/userContext.ts`: Svelte store for managing user context and data.
- `src/lib/types/book.ts`: TypeScript interfaces for book data.
- `src/lib/types/user.ts`: TypeScript interfaces for user data.

### Utility Functions

- `src/lib/utils/date-formatter.ts`: Utilities for formatting dates.
- `src/lib/utils/image-helpers.ts`: Functions for image processing.
- `src/lib/utils/supabase-helpers.ts`: Helper functions for Supabase operations.

## Key Technologies

- **Frontend**: SvelteKit, TypeScript
- **Backend**: SvelteKit server routes, Supabase
- **Authentication**: Supabase Auth with Google OAuth
- **Database**: Supabase PostgreSQL
- **AI Integration**: OpenAI for book recognition
- **Styling**: CSS with Svelte scoped styles

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   PUBLIC_SUPABASE_URL=your_supabase_url
   PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   PUBLIC_FRONTEND_URL=http://localhost:5173 (for development)
   OPENAI_API_KEY=your_openai_api_key
   ```
4. Run the development server: `npm run dev`

## Deployment

The application is configured for deployment on Vercel, with environment variables set in the Vercel dashboard.
