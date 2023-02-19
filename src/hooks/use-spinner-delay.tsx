import { useEffect, useState } from 'react';
import { MINIMUM_SPINNER_DELAY } from '../constants/common';

export const useSpinnerDelay = (isLoading: boolean) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const checkLoader = () => {
      setTimeout(() => {
        if (!isLoading) {
          setShowLoader(false);
        }
        checkLoader();
      }, MINIMUM_SPINNER_DELAY);
    };

    checkLoader();
  }, [isLoading]);

  return showLoader;
};
