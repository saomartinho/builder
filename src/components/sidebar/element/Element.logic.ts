import { useBuilderContext } from '@/store/store';
import type { Props } from './Element.static';

export const useElement = () => {
  const [, setStore] = useBuilderContext((store) => store);

  const onDragStart = (element: Props) => {
    setStore({ element: { ...element, id: Date.now() } });
  };

  return {
    onDragStart,
  };
};
