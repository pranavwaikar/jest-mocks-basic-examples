// This will not work - https://medium.com/@DavideRama/mock-spy-exported-functions-within-a-single-module-in-jest-cdf2b61af642

// import * as myModule from './input';
// test('calls myModule.foo', () => {
//     const fooSpy = jest.spyOn(myModule, 'foo');
//     myModule.bar();
//     expect(fooSpy).toHaveBeenCalledTimes(1);
// });

// @ts-nocheck
import * as testModule from '../src/input';

describe('test spyon with function expressions', function () {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should NOT mock message in foo', function () {
    const actual = testModule.foo();

    expect(actual).toBe('Hello world');
  });

  it('should mock message in foo', function () {
    jest.spyOn(testModule, 'message').mockReturnValue('my message');

    const actual = testModule.foo();
    
    expect(actual).toBe('my message');
    expect(testModule.message).toHaveBeenCalledTimes(1);
  });
});