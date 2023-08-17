// TODO(Ethan): Finish defining announcement interface.

/**
 * ClubannounceAnnouncement is a club announcement.
 */
export interface ClubannounceAnnouncement {
	/**
	 * id is the unique identifier for the announcement.
	 */
	id: string;
}

/**
 * ClubannounceEvent is a club event.
 */
export interface ClubannounceEvent {
	/**
	 * id is the unique identifier for the event.
	 */
	id: string;

	/**
	 * startDatetime is the date and time the event starts.
	 */
	startDatetime: Date;

	/**
	 * endDatetime is the date and time the event ends.
	 */
	endDatetime: Date;

	/**
	 * content is the description of the event in Discord markdown.
	 */
	content: string;

	/**
	 * location is the location of the event.
	 */
	location: ClubannounceLocation;
}

/**
 * ClubannounceLocation is the location of a club event.
 */
export interface ClubannounceLocation {
	/**
	 * type is the type of location.
	 */
	type: ClubannounceLocationType;

	/**
	 * value is the value of the location.
	 */
	value: string;
}

/**
 * ClubannounceLocationType is the type of location.
 */
export enum ClubannounceLocationType {
	ROOM_ID = 'room_id',
	DISCORD_VC_URL = 'discord_vc_url',
	ZOOM_MEETING_URL = 'zoom_meeting_url',
	GOOGLE_MEET_URL = 'google_meet_url',
	RAW = 'raw'
}
