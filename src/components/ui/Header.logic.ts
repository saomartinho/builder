import { screens, useBuilderContext, type Screen } from '@/store/store';

export const useHeader = () => {
  const [{ screen }, setStore] = useBuilderContext((store) => store);

  return {
    isDesktop: screen === screens.desktop,
    selectScreenSize: (screen: Screen) => setStore({ screen }),
  };
};
