import { TRevisePropertiesKey } from './interface';

const PROPERTIES_PSEUDO: TRevisePropertiesKey = {
  _hover: ':hover',
  _focus: ':focus',
  _active: ':active',
  _firstChild: '&>:first-child',
};

export const REVISE_PROPERTIES_KEY: TRevisePropertiesKey = {
  ...PROPERTIES_PSEUDO,
};
