import React, { useState, useEffect } from 'react';

export function useFriendStatus (friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    if (friendID === 123)
      setIsOnline(true);

    // Write here cleanup method if needed 
  });

  return isOnline;
}
