import type { Props } from './Block.static';

export default function Block({ children, title }: Props) {
  return (
    <div>
      <h2 className='text-lg font-bold mb-3'>{title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>{children}</div>
    </div>
  );
}
