import lodash from 'lodash'

const ENUMERATED_COLUMN_NAMES = JEKYLL_DATA.enumeratedColumnNames
const PRACTICE_AREA_COLUMN_NAMES = JEKYLL_DATA.enumeratedPracticeAreas
const COUNTRY_COLUMN_NAME = ENUMERATED_COLUMN_NAMES['COUNTRY']
const REGION_COLUMN_NAME = ENUMERATED_COLUMN_NAMES['REGION']
const PARTNER_COLUMN_NAME = ENUMERATED_COLUMN_NAMES['PARTNER']
const PROJECT_TITLE_COLUMN_NAME = ENUMERATED_COLUMN_NAMES['PROJECT_TITLE']
const CONTRACT_VALUE_COLUMN_NAME = ENUMERATED_COLUMN_NAMES['CONTRACT_VALUE']
const ID_COLUMN_NAME = ENUMERATED_COLUMN_NAMES['DATA_ID']
const PRACTICE_AREA_COLUMN_NAME = ENUMERATED_COLUMN_NAMES['PRACTICE_AREA']
const SEARCH_REFERENCE_ID_COLUMN_NAME = 'search_ref_id'

export { 
  PRACTICE_AREA_COLUMN_NAME,
  PRACTICE_AREA_COLUMN_NAMES,
  COUNTRY_COLUMN_NAME,
  PROJECT_TITLE_COLUMN_NAME,
  ID_COLUMN_NAME,
  REGION_COLUMN_NAME,
  PARTNER_COLUMN_NAME,
  CONTRACT_VALUE_COLUMN_NAME,
  SEARCH_REFERENCE_ID_COLUMN_NAME
}
