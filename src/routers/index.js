import HomePage from "../pages/HomePage";
import SmartCamera from "../pages/SmartCamera";
import Introduce from "../pages/Introduce";

import { PATHS } from "../constants";

export const Routers = [
  {
    path: PATHS.HOMEPAGE,
    exact: true,
    component: HomePage,
  },
  {
    path: PATHS.CAMERA,
    exact: true,
    component: SmartCamera,
  },
  {
    path: PATHS.INTRODUCE,
    exact: true,
    component: Introduce,
  }
]