<template>
  <v-row>
    <v-col cols="12">
      <v-card class="d-flex flex-column align-center justify-center text-center" flat height="500">
        <v-card-title class="text-h1 mb-5 font-weight-bold text-break text-center">
          <slot name="title" />
        </v-card-title>
        <v-card-subtitle>
          <slot />
        </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SFlag'
}
</script>

<style lang="scss" scoped>
//.v-card--flag {
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: center;
//  //background: url("~/assets/bg.jpg");
//  text-align: center;
//}
</style>
