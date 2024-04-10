const NO_SERVER_STATUS = 'FETCH_ERROR';
const NO_SERVER_ERROR = 'TypeError: Failed to fetch';

const errorLocalizationMap: Record<string, string> = {
  INVALID_EMAIL: 'Ungültige Email',
  INVALID_PASSWORD: 'Ungültiges Passwort',
  SERVER_ERROR: 'Server Fehler',
};

export default function getRtkQueryErrorText(status: string, error: string, message: string | undefined): string {
  // Default error when Server is not running on expected url
  if (status === NO_SERVER_STATUS && error === NO_SERVER_ERROR) {
    return 'Verbindung zum Server fehlgeschlagen';
  }

  // Additional error localizations can be added here
  if (message) {
    return errorLocalizationMap[message];
  }

  // This should better not occur
  console.error('Unexpected error on localization of - status, error: ', status, error);
  return 'Unbekannter Fehler beim verbinden zum Server';
}
