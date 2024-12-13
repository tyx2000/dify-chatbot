import { useEffect, useState } from 'react';

const mobile = 768;

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobile - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < mobile);
    };

    mql.addEventListener('change', onChange);

    setIsMobile(window.innerWidth < mobile);

    return () => window.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
};

export default useMobile;
