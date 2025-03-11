import type { LucideProps } from 'lucide-react';

export interface Props {
  label: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
}
