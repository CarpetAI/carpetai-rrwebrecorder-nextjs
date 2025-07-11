# @carpetai/rrweb-recorder-nextjs

Next.js wrapper for @carpetai/rrweb-recorder with App Router support.

## Installation

```bash
npm install @carpetai/rrweb-recorder-nextjs @carpetai/rrweb-recorder rrweb
```

## Demo

Watch a demo of the session recorder in action:

[![Session Recorder Demo](https://img.youtube.com/vi/ZXLdtYngS7A/0.jpg)](https://youtu.be/ZXLdtYngS7A)

## Usage

```tsx
// app/layout.tsx
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
        <SessionRecorder apiKey={process.env.NEXT_PUBLIC_CARPETAI_API_KEY} />
      </body>
    </html>
  );
}
```

That's it! The component automatically starts recording when mounted.

## Types

Import types directly from the core package:

```tsx
import type { SessionEvent, SessionData } from '@carpetai/rrweb-recorder';
```

## API Reference

For detailed API documentation, see the [core package](https://github.com/CarpetAI/carpetai-rrwebrecorder).

## License

MIT 