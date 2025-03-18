import type { ObjectValues } from '@/utils/utils';
import createAppContext from './Context';

export const screens = {
  desktop: 'desktop',
  mobile: 'mobile',
} as const;

export type Screen = ObjectValues<typeof screens>;

export interface State {
  screen: Screen;
  element: unknown;
}

export const initialState: State = {
  screen: screens.desktop,
  element: null,
};

const builderContext = createAppContext(initialState);

export const BuilderProvider = builderContext.Provider;
export const useBuilderContext = builderContext.useStore;
