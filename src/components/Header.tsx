import { screens } from '@/store/store';
import { Code, Monitor, Smartphone } from 'lucide-react';
import { twJoin } from 'tailwind-merge';
import { Button } from './ui/button';
import { useHeader } from './ui/Header.logic';

export default function Header() {
  const { isDesktop, selectScreenSize } = useHeader();

  return (
    <header className='flex justify-between items-center p-4 gap-2 bg-white text-black shadow-sm'>
      <div>Builder</div>
      <div className='flex gap-2'>
        <Button
          {...(!isDesktop && {
            onClick: () => selectScreenSize(screens.desktop),
          })}
          className={twJoin(
            'border border-transparent',
            'hover:bg-transparent hover:border-gray-400',
            isDesktop &&
              'bg-purple-100 text-purple-400 hover:bg-purple-100 hover:text-purple-400 hover:border-transparent'
          )}
          variant='ghost'
        >
          <Monitor /> Desktop
        </Button>
        <Button
          {...(isDesktop && {
            onClick: () => selectScreenSize(screens.mobile),
          })}
          className={twJoin(
            'border border-transparent',
            'hover:bg-transparent hover:border-gray-400',
            !isDesktop &&
              'bg-purple-100 text-purple-400 hover:bg-purple-100 hover:text-purple-400 hover:border-transparent'
          )}
          variant='ghost'
        >
          <Smartphone /> Mobile
        </Button>
      </div>
      <div className='flex gap-2'>
        <Button className='hover:bg-purple-100' variant='ghost'>
          <Code />
        </Button>
        <Button variant='outline'>Save template</Button>
      </div>
    </header>
  );
}
