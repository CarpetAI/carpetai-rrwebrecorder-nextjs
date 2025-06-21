# @carpetai/rrweb-recorder-nextjs

A Next.js wrapper for [@carpetai/rrweb-recorder](https://github.com/CarpetAI/carpetai-rrwebrecorder).

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

This package provides the exact same API as [@carpetai/rrweb-recorder](https://github.com/CarpetAI/carpetai-rrwebrecorder), but with Next.js optimizations.

For detailed API documentation, see the [main package](https://github.com/CarpetAI/carpetai-rrwebrecorder).

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_SESSION_API_KEY=your-api-key-here
```

## Differences from Main Package

- ✅ **No `'use client'` wrapper required**
- ✅ **Optimized for Next.js app router**
- ✅ **Same API and functionality**
- ✅ **Full TypeScript support**

## License

MIT - see the main package for details. 