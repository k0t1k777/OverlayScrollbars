import { jsAPI, cssProperty, cssPropertyValue } from '~/support/compatibility/vendors';
import type { JsApiName } from '~/support/compatibility/vendors';

describe('vendors', () => {
  describe('jsAPI', () => {
    test('gets MutationObserver', () => {
      const mutationObserver = jsAPI('MutationObserver');
      expect(mutationObserver).toBe(MutationObserver);
    });

    test('gets requestAnimationFrame', () => {
      const rAF = jsAPI('requestAnimationFrame');
      expect(rAF).toBe(requestAnimationFrame);
    });

    test('gets undefined', () => {
      const apiWhichDontExist = jsAPI('apiWhichDontExist' as any);
      expect(apiWhichDontExist).toBeUndefined();
    });

    test('cache is used', () => {
      const name = 'CacheTestJsAPIWhichDontExists' as JsApiName;
      const fn = () => {};
      // @ts-ignore
      window[name] = fn;

      expect(jsAPI(name)).toBe(fn);

      delete window[name];

      expect(jsAPI(name)).toBe(fn);
    });
  });

  describe('cssProperty', () => {
    test('gets transform', () => {
      const transform = cssProperty('transform');
      expect(transform).not.toBe('');
    });

    test('gets undefined', () => {
      const propWhichDontExist = cssProperty('propWhichDontExist');
      expect(propWhichDontExist).toBe('');
    });

    test('cache is used', () => {
      const spy = jest.spyOn(Document.prototype, 'createElement');

      cssProperty('cachePropWhichDontExist');
      expect(spy).toBeCalledTimes(1);
      cssProperty('cachePropWhichDontExist');
      expect(spy).toBeCalledTimes(1);
    });
  });

  describe('cssPropertyValue', () => {
    test('gets calc', () => {
      const calc = cssPropertyValue('width', 'calc', '(1px)');
      expect(calc).not.toBe('');
    });

    test('gets calc as second value', () => {
      const calc = cssPropertyValue('width', 'nonexistend-calc calc', '(1px)');
      expect(calc).not.toBe('');
    });

    test('gets undefined', () => {
      const nonexistend = cssPropertyValue('width', 'nonexistend');
      expect(nonexistend).toBe('');
    });

    test('cache is used', () => {
      let expectedCalledTimes = 0;
      const spy = jest.spyOn(Document.prototype, 'createElement');
      const run = (propName: string, propValue: string) => {
        expectedCalledTimes++;
        cssPropertyValue(propName, propValue);
        expect(spy).toBeCalledTimes(expectedCalledTimes);
        cssPropertyValue(propName, propValue);
        expect(spy).toBeCalledTimes(expectedCalledTimes);
      };

      run('width', 'cacheNonexistendValue');
      run('height', 'cacheNonexistendValue');
      run('width', 'cacheNonexistendValue cacheNonexistendValue2');
      run('height', 'cacheNonexistendValue cacheNonexistendValue2');
    });
  });
});
