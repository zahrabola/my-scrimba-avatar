import React from "react";
import { IoPersonSharp } from "react-icons/io5";

const Avatar = ({ src, alt, children }) => {
  if (src) {
    return (
      <div className="avatar">
        <img src={src} alt={alt} />
      </div>
    );
  }
  if (children) {
    return (
        <div className="avatar avatar-letters">
            {children}
        </div>
    )
  } else {
    return (
<div className="avatar avatar-icon">
    <IoPersonSharp />
</div>
    )
    
  }


};

export default Avatar;
// if src prop
// render the image version
// if there's children
// render the initials version
// else
// render the anon version
