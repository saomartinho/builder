import Canvas from '@/components/canvas/Canvas';
import Settings from '@/components/settings/Settings';
import Sidebar from '@/components/sidebar/Sidebar';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div className='grid grid-cols-5 gap-8'>
      <Sidebar />
      <Canvas className='col-span-3 bg-gray-100' />
      <Settings />
    </div>
  );
}
