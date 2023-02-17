import { useEffect, useState } from 'react';

export const useSpinnerDelay = (isLoading: boolean) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowLoader(false);
      }, 1000);
    }
  }, [isLoading]);

  return showLoader;
};
