import Image from 'next/image';
import Html from '../assets/svg/HTML.svg';
import ReactLogo from '../assets/svg/React.svg';
import Node from '../assets/svg/Node.svg';
import C from '../assets/svg/C.svg';
import Python from '../assets/svg/Python.svg';

export default function LogoCarousel() {
  const logos = [
    { src: Html, alt: 'HTML' },
    { src: Node, alt: 'Node' },
    { src: Python, alt: 'Python' },
    { src: C, alt: 'C' },
    { src: ReactLogo, alt: 'React' },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={50} height={50} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={50} height={50} />
          </li>
        ))}
      </ul>
    </div>
  );
}
