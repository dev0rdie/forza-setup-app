import {
  Alignment,
  Differential,
  ShockAbsorber,
  Springs
} from "./SetupComponent";

export interface SetupType {
  id: number,
  name: string,
  tyres: string,
  gears: string,
  alignment: Alignment,
  antiRollBar: string,
  springs: Springs,
  shockAbsorber: ShockAbsorber,
  aeroDynamics: string,
  brakes: string,
  differential: Differential
}
