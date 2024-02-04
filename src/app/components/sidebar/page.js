//sidebar
"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FiAlertCircle,
  FiBell,
  FiCalendar,
  FiClock,
  FiFile,
  FiHome,
  FiMessageCircle,
  FiPaperclip,
  FiPlusCircle,
  FiUser,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";

const CustomSidebar = ({ userRole, toggle, pathname }) => {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    console.log(pathname);
    setActiveItem(pathname);
  }, [pathname]);

  // Function to handle click event on a menu item
  const handleMenuItemClick = (link) => {
    setActiveItem(link);
  };
  return (
    <div className="flex h-screen ">
      <Sidebar
        collapsed={toggle}
        transitionDuration={500}
        onBackdropClick={() => setToggled(false)}
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        backgroundColor={`rgba(255, 255, 255,0.9)`}
      >
        {/* for superuser  */}

        {userRole === "superuser" && (
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (!active) {
                  return {
                    color: "#4b5563",
                    fontWeight: "300",
                  };
                } else {
                  return {
                    color: "#7e22ce",
                    fontWeight: "500",
                  };
                }
              },
            }}
          >
            <MenuItem
              icon={<FiHome />}
              active={activeItem === "/admin/dashboard"}
              onClick={() => handleMenuItemClick("/admin/dashboard")}
              component={<Link href="/admin/dashboard" />}
            >
              {" "}
              Dashboard{" "}
            </MenuItem>
            <MenuItem
              icon={<FiFile />}
              active={activeItem === "/admin/management"}
              onClick={() => handleMenuItemClick("/admin/management")}
              component={<Link href="/admin/management" />}
            >
              Management
            </MenuItem>
            <SubMenu icon={<FiClock />} label="User Management">
              <MenuItem
                icon={<FiUserPlus />}
                active={activeItem === "/admin/adduser"}
                onClick={() => handleMenuItemClick("/admin/add-user")}
                component={<Link href="/admin/adduser" />}
              >
                {" "}
                Add user{" "}
              </MenuItem>
              <MenuItem
                icon={<FiUsers />}
                active={activeItem === "/admin/users"}
                onClick={() => handleMenuItemClick("/admin/users")}
                component={<Link href="/admin/users" />}
              >
                {" "}
                Users{" "}
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<FiMessageCircle />}
              active={activeItem === "/admin/sendmail"}
              onClick={() => handleMenuItemClick("/admin/sendmail")}
              component={<Link href="/admin/sendmail" />}
            >
              {" "}
              Send Mail{" "}
            </MenuItem>
            <SubMenu icon={<FiClock />} label="Class Management">
              <MenuItem
                icon={<FiUserPlus />}
                active={activeItem === "/admin/addclass"}
                onClick={() => handleMenuItemClick("/admin/addclass")}
                component={<Link href="/admin/addclass" />}
              >
                {" "}
                Add class{" "}
              </MenuItem>
              <MenuItem
                icon={<FiUsers />}
                active={activeItem === "/admin/classes"}
                onClick={() => handleMenuItemClick("/admin/classes")}
                component={<Link href="/admin/classes" />}
              >
                {" "}
                Classes{" "}
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<FiCalendar />}
              active={activeItem === "/admin/messages"}
              onClick={() => handleMenuItemClick("/admin/messages")}
              component={<Link href="/admin/messages" />}
            >
              {" "}
              Messages{" "}
            </MenuItem>
            <MenuItem
              icon={<FiAlertCircle />}
              active={activeItem === "/admin/payments"}
              onClick={() => handleMenuItemClick("/admin/payments")}
              component={<Link href="/admin/payments" />}
            >
              {" "}
              Payments{" "}
            </MenuItem>
            <MenuItem
              icon={<FiAlertCircle />}
              active={activeItem === "/admin/alerts"}
              onClick={() => handleMenuItemClick("/admin/alerts")}
              component={<Link href="/admin/alerts" />}
            >
              {" "}
              Announcements{" "}
            </MenuItem>
          </Menu>
        )}

        {/* for supervisor  */}
        {userRole === "supervisor" && (
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (!active) {
                  return {
                    color: "#4b5563",
                    fontWeight: "300",
                  };
                } else {
                  return {
                    color: "#7e22ce",
                    fontWeight: "500",
                  };
                }
              },
            }}
          >
            <MenuItem
              icon={<FiHome />}
              active={activeItem === "/teacher/dashboard"}
              onClick={() => handleMenuItemClick("/teacher/dashboard")}
              component={<Link href="/teacher/dashboard" />}
            >
              {" "}
              Dashboard{" "}
            </MenuItem>
            <MenuItem
              icon={<FiUsers />}
              active={activeItem === "/teacher/users"}
              onClick={() => handleMenuItemClick("/teacher/users")}
              component={<Link href="/teacher/users" />}
            >
              {" "}
              Users{" "}
            </MenuItem>
            <MenuItem
              icon={<FiPaperclip />}
              active={activeItem === "/teacher/assignments"}
              onClick={() => handleMenuItemClick("/teacher/assignments")}
              component={<Link href="/teacher/assignments" />}
            >
              {" "}
              Assignments{" "}
            </MenuItem>
            <MenuItem
              icon={<FiUsers />}
              active={activeItem === "/teacher/messages"}
              onClick={() => handleMenuItemClick("/teacher/messages")}
              component={<Link href="/teacher/messages" />}
            >
              {" "}
              Messenger{" "}
            </MenuItem>

            <MenuItem
              icon={<FiAlertCircle />}
              active={activeItem === "/teacher/alerts"}
              onClick={() => handleMenuItemClick("/teacher/alerts")}
              component={<Link href="/teacher/alerts" />}
            >
              {" "}
              Announcements{" "}
            </MenuItem>
          </Menu>
        )}

        {/* for student  */}

        {userRole === "student" && (
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (!active) {
                  return {
                    color: "#4b5563",
                    fontWeight: "300",
                  };
                } else {
                  return {
                    color: "#7e22ce",
                    fontWeight: "500",
                  };
                }
              },
            }}
          >
            <MenuItem
              icon={<FiHome />}
              active={activeItem === "/student/dashboard"}
              onClick={() => handleMenuItemClick("/student/dashboard")}
              component={<Link href="/student/dashboard" />}
            >
              {" "}
              Dashboard{" "}
            </MenuItem>

            <MenuItem
              icon={<FiUser />}
              active={activeItem === `/userdetail`}
              onClick={() => handleMenuItemClick(`/userdetail`)}
              component={<Link href={`/userdetail`} />}
            >
              {" "}
              Profile{" "}
            </MenuItem>

            <MenuItem
              icon={<FiCalendar />}
              active={activeItem === "/student/assignments"}
              onClick={() => handleMenuItemClick("/student/assignments")}
              component={<Link href="/student/assignments" />}
            >
              {" "}
              Assignments{" "}
            </MenuItem>
            <MenuItem
              icon={<FiBell />}
              active={activeItem === "/student/alerts"}
              onClick={() => handleMenuItemClick("/student/alerts")}
              component={<Link href="/student/alerts" />}
            >
              {" "}
              Notifications{" "}
            </MenuItem>
          </Menu>
        )}
      </Sidebar>
    </div>
  );
};

export default CustomSidebar;
