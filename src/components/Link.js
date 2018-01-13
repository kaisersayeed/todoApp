import React from 'react'

const Link = ({ active, children, filter, setVisibilityFilter }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         setVisibilityFilter(filter);
       }}
    >
      {children}
    </a>
  )
};

export default Link;
