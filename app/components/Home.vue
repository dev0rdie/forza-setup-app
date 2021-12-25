<template>
  <Page>
    <ActionBar title="toto"/>
    <StackLayout>
      <TextField ref="maxField" hint="MAX" width="90%" height="10%" keyboardType="number" />
      <TextField ref="minField" hint="MIN" width="90%" height="10%" keyboardType="number" />
      <TextField ref="percentField" hint="%" width="90%" height="10%" keyboardType="number" />
      <button text="Calculate" @tap="calculate" />

      <Label text="front" textWrap="true" />
      <Label :text="result.front" textWrap="true" />
      <Label text="rear" textWrap="true" />
      <Label :text="result.rear" textWrap="true" />
      <Label text="front 60%" textWrap="true" />
      <Label :text="resultSixteen.front" textWrap="true" />
      <Label text="rear 60%" textWrap="true" />
      <Label :text="resultSixteen.rear" textWrap="true" />
    </StackLayout>
  </Page>
</template>

<script lang="ts">
  import { TextField } from "@nativescript/core";
  import Vue from "nativescript-vue";
  import { SetupValues } from "../models/SetupValues";
  import Calculator from "../tools/Calculator";

  const calc = new Calculator();

  export default Vue.extend({
    data() {
        return {
          result : {
            front: 0,
            rear:0
          },
          resultSixteen: {
            front: 0,
            rear: 0
          }
        }
    },
    methods: {
      calculate() {
        const vueMin = this.$refs.minField as unknown as TextField;
        const vueMax = this.$refs.maxField as unknown as TextField;
        const vuePercent = this.$refs.percentField as unknown as TextField;
        const min: number = parseInt(vueMin.nativeView.text);
        const max: number = parseInt(vueMax.nativeView.text);
        const percent: number = parseInt(vuePercent.nativeView.text);

        vueMin.nativeView.dismissSoftInput();
        vueMax.nativeView.dismissSoftInput();
        vuePercent.nativeView.dismissSoftInput();

        this.result = calc.calculate(min, max, percent);
        this.calculateSixteen(this.result);
      },
      calculateSixteen(calcResult: SetupValues) {
        this.resultSixteen = {
          front : calcResult.front * 0.60,
          rear : calcResult.rear
        }
      }
    }
  });
</script>
