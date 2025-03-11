import elements from '@/constants/elements';
import grid from '@/constants/grid';
import Block from './block/Block';
import Element from './element/Element';

export default function Sidebar() {
  return (
    <div className='flex flex-col gap-7 p-4'>
      <Block
        children={
          <>
            {grid.map(({ numberCols, type, ...element }) => (
              <Element element={element} key={`${type}-${numberCols}`} />
            ))}
          </>
        }
        title={'Grid'}
      />
      <Block
        children={
          <>
            {elements.map(({ type, ...element }, index) => (
              <Element element={element} key={`${type}-${index}`} />
            ))}
          </>
        }
        title={'Elements'}
      />
    </div>
  );
}
