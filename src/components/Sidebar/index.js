import React from "react";
import {
  SidebarLinks,
  Icon,
  CloseIcon,
  SideBarMenu,
  SidebarContainer,
  SidebarRoute,
  SideBtnWrap,
} from "./SiderbarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SidebarLinks to="/">Pizzas</SidebarLinks>
        <SidebarLinks to="/">Dessert</SidebarLinks>
        <SidebarLinks to="/">Full Menu</SidebarLinks>
      </SideBarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
