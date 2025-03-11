import { twJoin } from 'tailwind-merge';
import { useCanvas } from './Canvas.logic';
import type { Props } from './Canvas.static';

export default function Canvas({ className }: Props) {
  const { isDesktop } = useCanvas();

  return (
    <main className={className}>
      <section className='mt-20 flex justify-center'>
        <div
          className={twJoin('bg-white p-6 w-full rounded-2xl transition-all', isDesktop ? 'max-w-3xl' : 'max-w-sm')}
        ></div>
      </section>
    </main>
  );
}
