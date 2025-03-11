import { screens, useBuilderContext } from '@/store/store';

export const useCanvas = () => {
  const [{ screen }, _] = useBuilderContext((store) => store);

  return {
    isDesktop: screen === screens.desktop,
  };
};
