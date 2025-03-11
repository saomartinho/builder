import type { Props } from '@/components/sidebar/element/Element.static';
import { Columns2, Columns3, Columns4, RectangleHorizontal } from 'lucide-react';

export interface Grid extends Props {
  type: 'column';
  numberCols: number;
}

const grid: Grid[] = [
  {
    label: 'Column',
    type: 'column',
    numberCols: 1,
    icon: RectangleHorizontal,
  },
  {
    label: '2 Column',
    type: 'column',
    numberCols: 2,
    icon: Columns2,
  },
  {
    label: '3 Column',
    type: 'column',
    numberCols: 3,
    icon: Columns3,
  },
  {
    label: '4 Column',
    type: 'column',
    numberCols: 4,
    icon: Columns4,
  },
];

export default grid;
