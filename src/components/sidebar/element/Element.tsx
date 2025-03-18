import { Button } from '../../ui/button';
import { useElement } from './Element.logic';
import type { Props } from './Element.static';

export default function Element({ element }: { element: Props }) {
  const { onDragStart } = useElement();

  return (
    <Button
      className='flex flex-col justify-center items-center h-auto border border-dashed rounded-xl p-3 group hover:shadow-md hover:border-purple-500 hover:bg-transparent'
      variant='ghost'
      draggable
      onDragStart={() => onDragStart(element)}
    >
      {<element.icon className='p-2 size-8 bg-gray-100 group-hover:bg-purple-100 rounded-full' />}
      <h3 className='text-sm group-hover:text-purple-300'>{element.label}</h3>
    </Button>
  );
}
