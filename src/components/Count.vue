<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>

    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
// import { mapGetters } from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    increment() {
      this.$store.dispatch("countAbout/jia", this.n);
      // this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.dispatch("countAbout/jian", this.n);
      // this.$store.commit("JIAN", this.n);
    },
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },
    ...mapActions("countAbout", {
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
    // ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),
    ...mapActions("countAbout", ["jiaOdd", "jiaWait"]),
    ...mapMutations("countAbout", ["JIA", "JIAN"]),
  },
  computed: {
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapGetters("countAbout", ["bigSum"]),
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>