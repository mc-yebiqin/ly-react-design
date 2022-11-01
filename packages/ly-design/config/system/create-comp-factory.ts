import React, { forwardRef, createElement } from "react";
import styled from "@emotion/styled";
import resolveInCss from "./create-attrs-css";

function assembleComp(type: any) {
  const styledComp = styled(type)(resolveInCss);
  const ReactComponent = forwardRef((props, ref) =>
    createElement(styledComp, { ref, ...props })
  );
  return ReactComponent;
}

function factory() {
  const proxyObj = {};
  const cacheComp = new Map<any, any>();
  const handlerFilter = {
    get(obj: any, type: any) {
      if (!cacheComp.has(type)) {
        const newComp = assembleComp(type);
        cacheComp.set(type, newComp);
      }
      return cacheComp.get(type);
    },
  };
  return new Proxy(proxyObj, handlerFilter);
}

export const laoye = factory();
