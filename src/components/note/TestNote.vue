<template>
    <div id="app">
        <v-container class="fill-height ma-0 pa-0" fluid>
            <v-layout class="split">
                <section class="left">
                    <v-list-item
                    v-for="n in 20"
                    :key="`left-item-${ n }`"
                    class="left-item"
                    link
                    >
                    left item {{ n }}
                    </v-list-item>
                </section>
                <section class="right">
                    <v-list-item
                    v-for="n in 20"
                    :key="`right-item-${ n }`"
                    class="right-item"
                    link
                    >
                    right item {{ n }}
                    </v-list-item>
                </section>
            </v-layout>
        </v-container>
    </div>
</template>


<style scoped>

.split {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.left {
  background-color: teal;
  overflow-y: scroll; /* it works! */
}
.right {
  flex: 1;
  background-color: orange;
  overflow-y: scroll; /* it works! */
}
.left-item {
  background-color: magenta;
  border-radius: 5px;
  margin: 15px;
}
.right-item {
  background-color: greenyellow;
  border-radius: 5px;
  margin: 15px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>