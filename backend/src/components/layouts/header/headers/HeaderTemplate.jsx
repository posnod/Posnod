import HeaderContent1 from '@/src/components/layouts/header/HeaderContent1';
import LogoPosnod from '@/src/components/ui/nav/left/LogoPosnod';
import Navbar from '@/src/components/ui/nav/center/Navbar';
import LogoShield from '@/src/components/ui/nav/right/LogoShield';

export default function HeaderLanding() {
  return (
    <HeaderContent1
      left={<LogoPosnod />}
      center={<Navbar />}
      right={<LogoShield />}
    />
  );
}