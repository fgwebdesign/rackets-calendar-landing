"use client";
import React from "react";
import useToggle from "../../Hooks/useToggle";
import BlogHomeOne from "../HomeOne/BlogHomeOne";
import FaqHomeOne from "../HomeOne/FaqHomeOne";
import FeaturesHomeOne from "../HomeOne/FeaturesHomeOne";
import FooterHomeOne from "../HomeOne/FooterHomeOne";
import ProjectHomeOne from "../HomeOne/ProjectHomeOne";
import TeamHomeOne from "../HomeOne/TeamHomeOne";
import CounterArea from "../HomeTwo/CounterArea";
import DownloadHomeTwo from "../HomeTwo/DownloadHomeTwo";
import PricingHomeTwo from "../HomeTwo/PricingHomeTwo";
import Drawer from "../Mobile/Drawer";
import HeaderHomeSeven from "./HeaderHomeSeven";
import HeroHomeSeven from "./HeroHomeSeven";

function HomeSeven() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeaderHomeSeven action={drawerAction.toggle} />
      <HeroHomeSeven />
      <FeaturesHomeOne />
      <CounterArea />
      <DownloadHomeTwo className="mb-0" />
      <TeamHomeOne />
      <PricingHomeTwo />
      <FaqHomeOne className="pt-90" />
      <BlogHomeOne />
      <ProjectHomeOne />
      <FooterHomeOne />
    </>
  );
}

export default HomeSeven;
