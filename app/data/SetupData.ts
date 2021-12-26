import { SetupType } from "~/models/SetupType";

export default class SetupData {
  private setupTypes: SetupType[] = [
    {
      id: 1,
      name: 'Base',
      tyres: '1.6 ~ 1.7',
      gears: 'perso',
      alignment: {
        camber: "test avec télémétrie l'angle doit être le plus proche de 0",
        para: "ne pas toucher",
        chasse: "ne pas toucher"
      },
      antiRollBar: 'formule',
      springs: {
        springs: 'formule',
        gas: 'Minimum'
      },
      shockAbsorber: {
        det: 'formule',
        amort: '60% de la détente'
      },
      aeroDynamics: "Arrière = 100% - Avant = 75%",
      brakes: "Transfert de masse",
      differential: {
        front: "25%",
        rear: '50%',
        center: '75%'
      }
    },

    {
      id: 2,
      name: 'Drift',
      tyres: '1.6',
      gears: 'perso',
      alignment: {
        camber: "Avant = -3 / Arrière = -1.5",
        para: "0",
        chasse: "Maximum"
      },
      antiRollBar: 'Ne pas toucher et réglages après test au feeling',
      springs: {
        springs: 'formule',
        gas: 'Minimum'
      },
      shockAbsorber: {
        det: 'Ne pas toucher',
        amort: '~20%'
      },
      aeroDynamics: "No",
      brakes: "Transfert de masse",
      differential: {
        front: null,
        rear: '100% accélération 75% décélération',
        center: null
      }
    },
    {
      id: 3,
      name: 'Rally',
      tyres: '1.7',
      gears: 'perso',
      alignment: {
        camber: "Avant -1.5 / Arrière -1.2",
        para: "0",
        chasse: "5/6"
      },
      antiRollBar: 'Minimum en cas de mauvaises conditions (boue, pluie, neige, etc...) sinon ~20%',
      springs: {
        springs: 'formule',
        gas: 'Maximum'
      },
      shockAbsorber: {
        det: 'Minimum',
        amort: 'Minimum'
      },
      aeroDynamics: "Arrière = 50% - Avant = 80%",
      brakes: "Transfert de masse",
      differential: {
        front: "25%",
        rear: '65%',
        center: '60%-65%'
      }
    }
  ];

  getSetupTypes(): SetupType[] {
    return this.setupTypes;
  }

  getSetupTypeById(id: number): SetupType | undefined {
    return this.setupTypes.find(setupType => setupType.id === id) || undefined
  }
}
