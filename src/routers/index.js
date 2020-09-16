import HomePage from "../pages/HomePage";
import SmartCamera from "../pages/SmartCamera";
import Introduce from "../pages/Introduce";
import Team from "../pages/Team";

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
  },
  {
    path: PATHS.TEAM,
    exact: true,
    component: Team,
  }
]