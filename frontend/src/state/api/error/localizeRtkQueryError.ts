const NO_SERVER_STATUS = 'FETCH_ERROR';
const NO_SERVER_ERROR = 'TypeError: Failed to fetch';

export default function getRtkQueryErrorText(status: string, error: string): string {
  // Default error when Server is not running on expected url
  if (status === NO_SERVER_STATUS && error === NO_SERVER_ERROR) {
    return 'Verbindung zum Server fehlgeschlagen';
  }

  // Additional error localizations can be added here

  // This should better not occure
  console.error('Unexpected error on localization of - status, error: ', status, error);
  return 'Unbekannter Fehler beim verbinden zum Server';
}
