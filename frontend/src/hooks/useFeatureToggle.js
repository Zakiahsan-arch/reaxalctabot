// frontend/src/hooks/useFeatureToggle.js
import { useState } from 'react';

// Hook untuk toggle fitur bot
const useFeatureToggle = (initialState = false) => {
  const [enabled, setEnabled] = useState(initialState);

  const toggle = () => {
    setEnabled((prev) => !prev);
  };

  return { enabled, toggle };
};

export default useFeatureToggle;