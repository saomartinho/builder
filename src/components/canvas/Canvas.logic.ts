import { screens, useBuilderContext } from '@/store/store';
import { useState } from 'react';

export const useCanvas = () => {
  const [{ screen, element }, _] = useBuilderContext((store) => store);
  const [gridElements, setGridElements] = useState<unknown[]>([]);
  const [isDragOver, setDragOver] = useState(false);

  const onDragStatus = ({ event, isOver }: { event: React.DragEvent<HTMLDivElement>; isOver: boolean }) => {
    event.preventDefault();
    setDragOver(isOver);
  };

  const onDrop = () => {
    setGridElements([element]);
    setDragOver(false);
  };

  return {
    isDesktop: screen === screens.desktop,
    element,
    gridElements,
    isDragOver,
    onDragStatus,
    onDrop,
  };
};
