export const computedMixin = {
  computed:{
    reversed_data () {
      return this.text_data.split("").reverse().join("");
    },
    data_with_length () {
      return this.text_data + ' (' + this.text_data.length + ')';
    }
  }
}
