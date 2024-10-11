import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';

import {useAppSafeArea} from '../useAppSafeArea';
import {renderHook} from '../../test/test-utils';
import {theme} from '../../theme/theme';

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe area is less than minimum requirement, it returns the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 4,
          bottom: 2,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s56);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });
  test('when the safe area is greater than minimum requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 40,
          bottom: 40,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(theme.spacing.s56);
    expect(result.current.bottom).toEqual(theme.spacing.s40);
  });
});
