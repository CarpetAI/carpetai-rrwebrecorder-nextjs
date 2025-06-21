# @carpetai/rrweb-recorder-nextjs

A Next.js wrapper for [@carpetai/rrweb-recorder](https://github.com/carpetai/rrweb-recorder).

## Features

- 🚀 **Zero configuration** - No need to create wrapper components
- ⚡ **Next.js optimized** - Built specifically for Next.js 13+ app router
- 🎯 **Type-safe** - Full TypeScript support
- 📦 **Lightweight** - Thin wrapper around the main package

## Installation

```bash
npm install @carpetai/rrweb-recorder-nextjs
# or
yarn add @carpetai/rrweb-recorder-nextjs
```

## Quick Start

### Basic Usage

```tsx
// app/layout.tsx or any component
import { SessionRecorder } from '@carpetai/rrweb-recorder-nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SessionRecorder 
          apiKey={process.env.NEXT_PUBLIC_SESSION_API_KEY}
        />
      </body>
    </html>
  );
}
```

### Using the Hook

```tsx
// app/components/MyComponent.tsx
import { useSessionRecorder } from '@carpetai/rrweb-recorder-nextjs';

export default function MyComponent() {
  const { isRecording, sessionId, startRecording, stopRecording } = useSessionRecorder({
    apiKey: process.env.NEXT_PUBLIC_SESSION_API_KEY,
    autoStart: false
  });

  return (
    <div>
      <p>Recording: {isRecording ? 'Yes' : 'No'}</p>
      <p>Session ID: {sessionId}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
    </div>
  );
}
```

## API Reference

This package provides the exact same API as [@carpetai/rrweb-recorder](https://github.com/carpetai/rrweb-recorder), but with Next.js optimizations.

### SessionRecorder Component

```tsx
import { SessionRecorder } from '@carpetai/rrweb-recorder-nextjs';

<SessionRecorder 
  apiKey="your-api-key"
  excludePaths={['/admin', '/private']}
  maxSessionDuration={15 * 60 * 1000} // 15 minutes
  saveInterval={5000} // 5 seconds
/>
```

### useSessionRecorder Hook

```tsx
import { useSessionRecorder } from '@carpetai/rrweb-recorder-nextjs';

const { isRecording, sessionId, startRecording, stopRecording } = useSessionRecorder({
  apiKey: "your-api-key",
  autoStart: true
});
```

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_SESSION_API_KEY=your-api-key-here
NEXT_PUBLIC_API_URL=https://your-api.com/api/sessions
```

## Migration from @carpetai/rrweb-recorder

If you're currently using the main package with a wrapper component:

**Before:**
```tsx
// components/SessionRecorderWrapper.tsx
'use client';
import { SessionRecorder } from '@carpetai/rrweb-recorder';

export default function SessionRecorderWrapper() {
  return (
    <SessionRecorder 
      apiKey={process.env.NEXT_PUBLIC_SESSION_API_KEY}
    />
  );
}
```

**After:**
```tsx
// Direct import - no wrapper needed!
import { SessionRecorder } from '@carpetai/rrweb-recorder-nextjs';

// Use directly in your layout or components
<SessionRecorder 
  apiKey={process.env.NEXT_PUBLIC_SESSION_API_KEY}
/>
```

## Differences from Main Package

- ✅ **No `'use client'` wrapper required**
- ✅ **Optimized for Next.js app router**
- ✅ **Same API and functionality**
- ✅ **Full TypeScript support**

## License

MIT - see the main package for details. 