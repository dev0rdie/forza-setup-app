import { SetupValues } from "../models/SetupValues";

export default class Calculator {

  /**
   * calculate
   */
  public calculate(min: number, max: number, percent: number) {
    const resultFront: number = (((max - min) * (percent / 100)) + min);
    const resultRear: number  = (((max - min) * ((100 - percent) / 100)) + min);
    const result: SetupValues = {
      front: resultFront,
      rear: resultRear
    }

    return result;
  }
}
