import React from 'react';
import {render, screen} from '../../../test/test-utils';
import {TextInput} from '../TextInput';
import {IconName} from '../../Icon/Icon';

describe('<TextInput />', () => {
  it('should show right icon', () => {
    render(
      <TextInput
        label="Password"
        placeholder="password"
        rightComponentName="search-web"
      />,
    );

    const icon: keyof IconName = 'search-web';

    const iconElement = screen.getByTestId(icon);

    expect(iconElement).toBeTruthy();
  });
});
