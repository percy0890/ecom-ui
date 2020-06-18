import {
  throwException,
  getLocaleString,
  getStringifiedObjValuesByKey,
  naCheck,
  isBlank,
  getObjWithoutBlankProps,
} from '../common';

describe('Common Utils', () => {
  it('should throw an exception if an error message is passed on to f(throwException)', () => {
    expect(() => throwException('Error!')).toThrow();
  });

  it('should get a locale version of string for en-IN on calling f(getLocaleString)', () => {
    expect(getLocaleString(1234)).toEqual('1,234');
    expect(getLocaleString('1234')).toEqual('1234');
  });

  it('should get values by a separator,ref -  getStringifiedObjValuesByKey,)', () => {
    const inputArray = [{ name: 'aman', id: 1 }, { name: 'anil', id: 2 }];
    const result = getStringifiedObjValuesByKey(inputArray, 'id');
    expect(result).toEqual('1, 2');
  });

  it('should return N/A when value not present', () => {
    const result = naCheck(undefined);
    expect(result).toEqual('N/A');
  });

  it('should return 0 when value is 0', () => {
    const input = naCheck(0);
    expect(input).toEqual(0);
  });

  it('should return N/A when value not present for multiple values combined', () => {
    const result = naCheck('abc', null);
    expect(result).toEqual('N/A');
  });

  it('should return true only if the given value is null or undefined or "" or [] or {} or NaN', () => {
    expect(isBlank(undefined)).toBe(true);
    expect(isBlank(null)).toBe(true);
    expect(isBlank('')).toBe(true);
    expect(isBlank([])).toBe(true);
    expect(isBlank({})).toBe(true);
    expect(isBlank(NaN)).toBe(true);
    expect(isBlank(0)).toBe(false);
    expect(isBlank(false)).toBe(false);
  });

  it('should remove ', () => {
    const obj = {
      fromDate: '12/09/2019',
      toDate: '18/09/2019',
      withSummary: false,
      trips: 0,
      vehicleType: [],
      clientNames: null,
      tripTypes: undefined,
      gridData: {},
      name: '',
      na: NaN,
    };

    const filteredObj = {
      fromDate: '12/09/2019',
      toDate: '18/09/2019',
      withSummary: false,
      trips: 0,
    };

    expect(getObjWithoutBlankProps(obj)).toEqual(filteredObj);
  });
});
