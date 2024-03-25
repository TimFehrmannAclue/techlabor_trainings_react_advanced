import { IStatusCodeLocalization } from '../../../type/localization/IStatusCodeLocalization';
import { IGenericStringMap } from '../../../type/common/map/IGenericStringMap';

/**
 * Backend provides enum that have to be mapped
 * @param statusCode
 * @param mappingConfig
 */
export default function getStatusFromStatusCode(
  statusCode: string | undefined,
  mappingConfig: IGenericStringMap<IStatusCodeLocalization>,
): IStatusCodeLocalization {
  if (!statusCode) {
    return {
      label: 'laden..',
      color: 'info',
    };
  }

  const statusCodeLocalization = mappingConfig[statusCode];
  if (!statusCodeLocalization) {
    return { label: `Ungültiger Status Code, ${statusCode}`, color: 'error' };
  }

  return statusCodeLocalization;
}
