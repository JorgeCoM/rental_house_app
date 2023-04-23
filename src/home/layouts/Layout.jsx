import { Outlet } from 'react-router-dom';
import { NavComponent } from '../components';


export const LayoutHome = () => {
  return (
    <>
    <div>
      <NavComponent/>
    </div>

      <div>
        <Outlet/>
      </div>
    </>
  )
}
