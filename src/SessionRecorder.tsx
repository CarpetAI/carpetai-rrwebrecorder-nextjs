'use client';

import { SessionRecorder as BaseSessionRecorder } from '@carpetai/rrweb-recorder';
import type { SessionRecorderProps } from '@carpetai/rrweb-recorder';

export default function SessionRecorder(props: SessionRecorderProps) {
  return <BaseSessionRecorder {...props} />;
} 