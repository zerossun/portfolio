import React from "react";
import {ReactComponent as ReactSvg} from "../assets/logo/ReactSvg.svg";
import {ReactComponent as VueSvg} from "../assets/logo/VueSvg.svg";
import {ReactComponent as ScssSvg} from "../assets/logo/ScssSvg.svg";
import {ReactComponent as JspSvg} from "../assets/logo/JspSvg.svg";
import {ReactComponent as VuetifySvg} from "../assets/logo/VuetifySvg.svg";
import {ReactComponent as TailwindSvg} from "../assets/logo/TailwindSvg.svg";
import {ReactComponent as Git} from "../assets/logo/Git.svg";

import "../scss/scolling.scss";
export default function Scrolling() {
  return (
    <section class="main-container">
      <div class="main">
        <div class="big-circle">
          <div class="icon-block">
            <ReactSvg />
          </div>
          <div class="icon-block">
            <VueSvg />
          </div>
          <div class="icon-block">
            <ScssSvg />
          </div>
          <div class="icon-block">
            <JspSvg />
          </div>
        </div>
        <div class="circle">
          <div class="icon-block">
            <VuetifySvg />
          </div>
          <div class="icon-block">
            <Git />
          </div>
          <div class="icon-block">
            <TailwindSvg />
          </div>
        </div>
      </div>
    </section>
  );
}
