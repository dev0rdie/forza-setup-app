<template>
  <Page>
    <ActionBar title="Forza Setup by RyuJin"/>
    <StackLayout>
      <TextField ref="maxField" hint="MAX" width="90%" height="10%" keyboardType="number" />
      <TextField ref="minField" hint="MIN" width="90%" height="10%" keyboardType="number" />
      <TextField ref="percentField" hint="%" width="90%" height="10%" keyboardType="number" />
      <button text="Calculate" @tap="calculate" />

      <GridLayout rows="50, 50, 50, 50" columns="115, 115, 115, 115" width="80%">
        <Label text="Front" textWrap="true" row="0" col="0" marginTop="10" />
        <Label :text="result.front" textWrap="true" row="1" col="0" />
        <Label text="Front 60%" textWrap="true" row="2" col="0" marginTop="10"/>
        <Label :text="resultSixteen.front" textWrap="true" row="3" col="0"/>
        <Label text="Rear" textWrap="true" row="0" col="1" marginTop="10"/>
        <Label :text="result.rear" textWrap="true" row="1" col="1"/>
        <Label text="Rear 60%" textWrap="true" row="2" col="1" marginTop="10"/>
        <Label :text="resultSixteen.rear" textWrap="true" row="3" col="1"/>
      </GridLayout>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
  import { TextField } from "@nativescript/core";
  import Vue from "nativescript-vue";
  import { SetupValues } from "../models/SetupValues";
  import Calculator from "../tools/Calculator";

  const calc: Calculator = new Calculator();

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
          front : Math.round((calcResult.front * 0.60) * 100 / 100),
          rear : Math.round((calcResult.rear * 0.60) * 100) / 100
        }
      }
    }
  });
</script>
