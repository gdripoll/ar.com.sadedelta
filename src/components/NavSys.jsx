import { SpeedDial, SpeedDialAction } from "@mui/material";
import AnchorIcon from "@mui/icons-material/Anchor";

import DRLogo from "../assets/img/DRLogo.svg";
import LDRLogo from "../assets/img/LDRLogo.svg";
import RERLogo from "../assets/img/RERLogo.svg";
import TDRLogo from "../assets/img/TDRLogo.svg";

function NavSys() {
  return (
    <div>
      <SpeedDial
        ariaLabel="Navigation"
        sx={{ position: "fixed", bottom: "16px", right: "16px" }}
        icon={<AnchorIcon />}
        openIcon={<AnchorIcon />}
      >
        <SpeedDialAction
          icon={<img src={DRLogo} width={40} />}
          tooltipTitle="DE RÍO"
          href="https://derio.com.ar"
        />
        <SpeedDialAction
          icon={<img src={TDRLogo} width={40} />}
          tooltipTitle="TALLERES DE RÍO"
          href="https://talleres.derio.com.ar"
        />
        <SpeedDialAction
          icon={<img src={RERLogo} width={40} />}
          tooltipTitle="RIPOLL EN EL RÍO"
          href="https://ripoll.derio.com.ar"
        />
        <SpeedDialAction
          icon={<img src={LDRLogo} width={40} />}
          tooltipTitle="LIBRERÍA DE RÍO"
          href="https://libreria.derio.com.ar"
        />
      </SpeedDial>
    </div>
  );
}

export default NavSys;
