import type { Props } from '@/components/sidebar/element/Element.static';
import type { ObjectValues } from '@/utils/utils';
import { Frame, Image, PanelTop, RectangleEllipsis, SquareSplitVertical, TextSelectionIcon } from 'lucide-react';
import type { CSSProperties } from 'react';

const elementTypes = {
  button: 'Button',
  text: 'Text',
  image: 'Image',
  logo: 'Logo',
  logoHeader: 'LogoHeader',
  divider: 'Divider',
} as const;

export type ElementType = ObjectValues<typeof elementTypes>;

interface BaseProperties {
  url?: string;
  style?: CSSProperties;
  outerStyle?: CSSProperties;
}

export type Element = Props &
  BaseProperties &
  (
    | {
        type: typeof elementTypes.button;
        content: string;
        alt?: never;
        imageUrl?: never;
        textarea?: never;
      }
    | {
        type: typeof elementTypes.text;
        textarea: string;
        alt?: never;
        content?: never;
        imageUrl?: never;
      }
    | {
        type: typeof elementTypes.image | typeof elementTypes.logo | typeof elementTypes.logoHeader;
        alt: string;
        imageUrl: string;
        content?: never;
        textarea?: never;
      }
    | {
        type: typeof elementTypes.divider;
        alt?: never;
        content?: never;
        imageUrl?: never;
        textarea?: never;
      }
  );

const elements: Element[] = [
  {
    icon: RectangleEllipsis,
    label: 'Button',
    type: elementTypes.button,
    content: 'Sample Button',
    url: '#',
    style: {
      textAlign: 'center',
      backgroundColor: '#007bff',
      color: '#ffffff',
      padding: '10px',
      width: 'auto',
      fontSize: '16px',
      borderRadius: '0px',
      fontWeight: 'normal',
      objectFit: 'contain',
    },
    outerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  },
  {
    icon: TextSelectionIcon,
    type: 'Text',
    label: elementTypes.text,
    textarea: 'Sample Text',
    style: {
      backgroundColor: '#fff',
      color: '#000000',
      padding: '10px',
      textAlign: 'center',
      fontSize: '22px',
      fontWeight: 'normal',
      textTransform: 'uppercase',
    },
    outerStyle: {
      backgroundColor: '#fff',
      width: '100%',
    },
  },
  {
    icon: Image,
    type: elementTypes.image,
    label: 'Image',
    imageUrl: '/image.png',
    alt: 'Image',
    url: '#',
    style: {
      backgroundColor: '#ffffff',
      padding: '10px',
      height: '50%',
      width: '70%',
      margin: '0px',
      borderRadius: '0px',
    },
    outerStyle: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  },
  {
    icon: Frame,
    type: elementTypes.logo,
    label: 'Logo',
    imageUrl: '/logo.svg',
    alt: 'logo',
    url: '#',
    style: {
      backgroundColor: '#ffffff',
      padding: '10px',
      height: '30%',
      width: '30%',
    },
    outerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
    },
  },
  {
    icon: PanelTop,
    type: elementTypes.logoHeader,
    label: 'Logo Header',
    imageUrl: '/logo.svg',
    alt: 'logo',
    url: '#',
    style: {
      backgroundColor: '#ffffff',
      padding: '10px',
      height: '40%',
      width: '40%',
    },
    outerStyle: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
    },
  },
  {
    icon: SquareSplitVertical,
    type: elementTypes.divider,
    label: 'Divider',
    style: {
      color: '#000000',
      padding: '10px',
      width: '100%',
    },
  },
];

export default elements;
