<template>
  <Page>
    <ScrollView orientation="vertical">
      <StackLayout marginLeft="10" marginBottom="20" orientation="vertical">
        <Label :text="setupType.name" fontSize="24" marginBottom="10" class="text-primary" />
        <Label text="Pneus" class="text-primary" textWrap="true" />
        <Label :text="setupType.tyres" class="text-secondary" textWrap="true" />
        <Label text="Rapports" class="text-primary" textWrap="true" />
        <Label :text="setupType.gears" class="text-secondary" textWrap="true" />
        <Label text="Carrossage" class="text-primary" textWrap="true" />
        <Label :text="setupType.alignment.camber" class="text-secondary" textWrap="true" />
        <Label text="Parralélisme" class="text-primary" textWrap="true" />
        <Label :text="setupType.alignment.para" class="text-secondary" textWrap="true" />
        <Label text="Chasse" class="text-primary" textWrap="true" />
        <Label :text="setupType.alignment.chasse" class="text-secondary" textWrap="true" />
        <Label text="Barre Antiroulis" class="text-primary" textWrap="true" />
        <Label :text="setupType.antiRollBar" class="text-secondary" textWrap="true" />
        <Label text="Ressort" class="text-primary" textWrap="true" />
        <Label :text="setupType.springs.springs" class="text-secondary" textWrap="true" />
        <Label text="Garde au sol" class="text-primary" textWrap="true" />
        <Label :text="setupType.springs.gas" class="text-secondary" textWrap="true" />
        <Label text="Rigidité détente" class="text-primary" textWrap="true" />
        <Label :text="setupType.shockAbsorber.det" class="text-secondary" textWrap="true" />
        <Label text="Rigidité amortissement" class="text-primary" textWrap="true" />
        <Label :text="setupType.shockAbsorber.amort" class="text-secondary" textWrap="true" />
        <Label text="Aérodynamisme" class="text-primary" textWrap="true" />
        <Label :text="setupType.aeroDynamics" class="text-secondary" textWrap="true" />
        <Label text="Freins" class="text-primary" textWrap="true" />
        <Label :text="setupType.brakes" class="text-secondary" textWrap="true" />
        <Label text="Différentiel avant" class="text-primary" textWrap="true" />
        <Label :text="setupType.differential.front" class="text-secondary" textWrap="true" />
        <Label text="Différentiel arrière" class="text-primary" textWrap="true" />
        <Label :text="setupType.differential.rear" class="text-secondary" textWrap="true" />
        <Label text="Différentiel central" class="text-primary" textWrap="true" />
        <Label :text="setupType.differential.center" class="text-secondary" textWrap="true" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import SetupData from '~/data/SetupData'

const setupData = new SetupData();

export default Vue.extend({
  props: ['id'],
  data() {
    return {
      setupType: setupData.getSetupTypeById(this.id)
    }
  }
})
</script>
