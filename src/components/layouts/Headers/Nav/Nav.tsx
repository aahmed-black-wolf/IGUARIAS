"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/src/config/site";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";

import Logo from "../Logo";
import { ModeControl } from "../ThemeControl";
import Animater from "./Animater";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavItem } from "./NavItem";

const tr = {
  duration: 0.5,
  ease: "circInOut",
  type: "spring",
  damping: 20,
  stiffness: 200,
};
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("landing");
  return (
    <Animater>
      <Navbar maxWidth="2xl" isBlurred onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="lg:hidden">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
          <NavbarMenuItem>
            <LanguageSwitcher tr={tr} />
          </NavbarMenuItem>
          <div>
            <ModeControl tr={tr} />
          </div>
          {/* <NavbarMenuItem>
            <AuthModel />
          </NavbarMenuItem> */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
        </NavbarContent>

        {/* 
        <NavbarContent className="hidden  lg:flex gap-4" justify="end">
          {siteConfig.navItems.map((target, index) => (
            <Fragment key={index}>
              {target.isDrop ? (
                <DropList list={target.children as any} title={target.label} />
              ) : (
                <NavbarItem>
                  <NavItem target={{ ...target, label: t(target.label) }} />
                </NavbarItem>
              )}
            </Fragment>
          ))} */}

        <NavbarContent className="hidden  lg:flex gap-4" justify="start">
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
          {siteConfig.navItems.map((target, index) => (
            <NavbarItem key={index}>
              <NavItem target={{ ...target, label: t(target.label) }} />
            </NavbarItem>
          ))}

          {/* <NavbarMenuItem>
            <AuthModel />
          </NavbarMenuItem> */}
        </NavbarContent>

        <NavbarContent className="hidden  lg:flex gap-4" justify="end">
          <NavbarMenuItem>
            <LanguageSwitcher tr={tr} />
          </NavbarMenuItem>
          <NavbarMenuItem>
            <ModeControl tr={tr} />
          </NavbarMenuItem>
        </NavbarContent>

        <NavbarMenu className="bg-default-400/50 backdrop-blur-lg overflow-auto">
          {siteConfig.navItems.map((target, index) => (
            // target.isDrop ? (
            //   <motion.div
            //     key={index}
            //     initial={{
            //       x: (index + 1) * -50,
            //       opacity: 0,
            //     }}
            //     animate={{ x: 0, opacity: 1 }}
            //     transition={{ ...tr, delay: index * 0.2 }}
            //   >
            //     <DropMenu
            //       tr={tr}
            //       title={target.label}
            //       list={target.children as any}
            //     />
            //   </motion.div>
            // ) : (
            //   <motion.div
            //     key={index}
            //     initial={{
            //       x: (index + 1) * -50,
            //       opacity: 0,
            //     }}
            //     animate={{ x: 0, opacity: 1 }}
            //     transition={{ ...tr, delay: index * 0.2 }}
            //   >
            //     <NavbarMenuItem as={Link}>
            //       <NavItem target={{ ...target, label: t(target.label) }} />
            //     </NavbarMenuItem>
            //   </motion.div>
            // )
            <motion.div
              key={index}
              initial={{
                x: (index + 1) * -50,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ...tr, delay: index * 0.2 }}
            >
              <NavbarMenuItem as={Link}>
                <NavItem target={{ ...target, label: t(target.label) }} />
              </NavbarMenuItem>
            </motion.div>
          ))}
        </NavbarMenu>
      </Navbar>
    </Animater>
  );
}
