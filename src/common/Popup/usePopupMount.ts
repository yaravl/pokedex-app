import React from 'react';

interface UsePopupMount {
  opened: boolean;
}

export const ANIMATION_TIME = 300;

export const usePopupMount = ({ opened }: UsePopupMount) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (opened && !mounted) {
      setMounted(true);
    } else if (!opened && mounted) {
      setTimeout(() => {
        setMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return { mounted };
};
