import { SetupValues } from "../models/SetupValues";

export default class Calculator {

  /**
   * calculate
   */
  public calculate(min: number, max: number, percent: number) {
    const resultFront: number = (((max - min) * (percent / 100)) + min);
    const resultRear: number  = (((max - min) * ((100 - percent) / 100)) + min);
    const resultFrontRound: number = Math.round(resultFront * 100) / 100;
    const resultRearRound: number = Math.round(resultRear * 100) / 100;
    const result: SetupValues = {
      front: resultFrontRound,
      rear: resultRearRound
    }

    return result;
  }
}
