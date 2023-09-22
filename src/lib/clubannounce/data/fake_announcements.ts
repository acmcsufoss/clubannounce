import type { ClubannounceAnnouncement } from '../clubannounce';
import FAKE_ANNOUNCEMENTS_JSON from './fake_announcements.json' assert { type: 'json' };

export const FAKE_ANNOUNCEMENTS: ClubannounceAnnouncement[] = [...FAKE_ANNOUNCEMENTS_JSON];
