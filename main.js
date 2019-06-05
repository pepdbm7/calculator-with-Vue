const vm = new Vue({
  el: "#calculator",
  data() {
    return {
      previous: "",
      current: "",
      operator: null,
      operatorClicked: false
    };
  },
  methods: {
    clear() {
      this.previous = "";
      this.current = "";
    },
    sign() {
      if (this.current)
        this.current =
          this.current.charAt(0) === "-"
            ? this.current.slice(1)
            : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (!this.current.includes(".")) this.append(".");
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      if (this.previous) this.equal();
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      if (this.previous) this.equal();
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      if (this.previous) this.equal();
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      if (this.previous) this.equal();
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.previous || 0),
        parseFloat(this.current)
      )}`;
      this.previous = "";
    }
  }
});
