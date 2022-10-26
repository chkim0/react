import { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

//Menu컴포넌트를 화살표함수로 변경해서 forwardRef메서드의 인수로 전달
const Menu = forwardRef((props, ref) => {
  const [Open, setOpen] = useState(true);
  const active = { color: 'orange' };

  //부모컴포넌트의 참조객체에 담길 객체를 리턴 (해당 객체안에는 함수를 담아서 전달)
  useImperativeHandle(ref, () => {
    return {
      toggle: () => setOpen(!Open)
    }
  })

  return (
    <AnimatePresence>
      {Open && (
        <nav id='mobileMenu'>
          <h1>
            <Link to='/'>
              <img src={process.env.PUBLIC_URL + '/img/logo_w.png'} alt="logo" />
            </Link>
          </h1>

          <ul id="gnb">
            <li>
              <NavLink to='/department' activeStyle={active}>
                Department
              </NavLink>

            </li>
            <li>
              <NavLink to='/community' activeStyle={active}>
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to='/gallery' activeStyle={active}>
                Gallery
              </NavLink>

            </li>
            <li>
              <NavLink to='/youtube' activeStyle={active}>
                Youtube
              </NavLink>
            </li>
            <li>
              <NavLink to='/location' activeStyle={active}>
                Location
              </NavLink>
            </li>
            <li>
              <NavLink to='/member' activeStyle={active}>
                Member
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </AnimatePresence>

  );
})

export default Menu;