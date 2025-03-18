import { twMerge } from 'tailwind-merge';
import { useCanvas } from './Canvas.logic';
import type { Props } from './Canvas.static';
import GridElement from './GridElement/GridElement';

export default function Canvas({ className }: Props) {
  const { gridElements, isDesktop, isDragOver, onDragStatus, onDrop } = useCanvas();

  return (
    <main className={className}>
      <section className='mt-20 flex justify-center'>
        <div
          className={twMerge(
            'bg-white p-6 w-full rounded-2xl transition-all',
            isDesktop ? 'max-w-3xl' : 'max-w-sm',
            isDragOver && 'bg-purple-100'
          )}
          onDragOver={(event) => onDragStatus({ event, isOver: true })}
          onDragLeave={(event) => onDragStatus({ event, isOver: false })}
          onDrop={() => onDrop()}
        >
          {gridElements.map((gridElement) => (
            <GridElement key={gridElement.id} /> // TODO: create types for this.
          ))}
        </div>
      </section>
    </main>
  );
}
