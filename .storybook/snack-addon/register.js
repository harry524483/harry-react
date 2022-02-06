import React, { useEffect, useState } from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import styled from 'styled-components';

const ADDON_ID = 'snack-addon';
const TAB_ID = `${ADDON_ID}/tab`;
const PARAM_KEY = 'snackPlayer';
const ADDON_TITLE = 'Snack Player';

const Container = styled.div`
  margin: 30px;
  background-color: #f9f9f9;
  border: 1px solid gray;
  border-radius: 4px;
  height: 600px;
  width: 60%;
`;

const SnackPlayer = () => {
  const value = useParameter(PARAM_KEY, { component: null });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://snack.expo.dev/embed.js';
    scriptTag.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(scriptTag);

    return () => scriptTag.removeEventListener('load');
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);

  return <Container>{value.component}</Container>;
};

addons.register(ADDON_ID, () => {
  addons.add(TAB_ID, {
    paramKey: PARAM_KEY,
    type: types.TAB,
    title: ADDON_TITLE,
    route: ({ storyId, refId }) =>
      refId ? `/snack/${refId}_${storyId}` : `/snack/${storyId}`,
    match: ({ viewMode }) => viewMode === 'snack',
    render: () => <SnackPlayer />,
  });
});
