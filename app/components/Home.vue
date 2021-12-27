<template>
  <Page>
      <ActionBar title="Forza Setup by RyuJin"/>
      <StackLayout>
      <ListView for="item in setupTypes" @itemTap="onSetupTypeTap" height="200">
          <v-template>
            <Label :text="item.name" textWrap="true" />
          </v-template>
      </ListView>
      <button text="Calculator" @tap="onCalculatorTap" marginTop="50" />
      </StackLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
 import Calculator from "./Calculator.vue";
  import SetupData from "../data/SetupData"
  import SetupDetails from "./SetupDetails.vue"

  const setupData = new SetupData();

  export default Vue.extend({
    data() {
        return {
            setupTypes: setupData.getSetupTypes()
        }
    },
    methods: {
        onSetupTypeTap(args: any)  {
            const id = args.item.id;
            this.$navigateTo(SetupDetails, {
                props: { id }
            });
        },
        onCalculatorTap() {
          this.$navigateTo(Calculator);
        }
    }
  });
</script>
