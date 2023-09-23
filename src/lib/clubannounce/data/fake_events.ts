import type { ClubannounceEvent } from '../clubannounce';
import FAKE_EVENTS_JSON from './fake_events.json' assert { type: 'json' };

export const FAKE_EVENTS: ClubannounceEvent[] = [...FAKE_EVENTS_JSON];
