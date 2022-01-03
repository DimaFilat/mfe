import React, { useRef, useLayoutEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
