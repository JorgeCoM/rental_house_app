import React from 'react';
import { HomePage } from '../pages';
import { NavComponent } from '../components';

export const LayoutHome = () => {
  return (
    <>
    <div>
      <NavComponent/>
    </div>

      <div>
        <HomePage/>
      </div>
    </>
  )
}
