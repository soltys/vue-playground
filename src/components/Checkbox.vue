<template>
  <div class="md-checkbox">
    <input
      :id="id"
      type="checkbox"
      :checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    />
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    id: String,
    label: String,
    checked: Boolean
  },
  model: {
    prop: "checked",
    event: "change"
  }
};
</script>

<style scoped>
.md-checkbox {
  position: relative;
  text-align: left;
}
.md-checkbox.md-checkbox-inline {
  display: inline-block;
}
.md-checkbox label {
  cursor: pointer;
  display: inline;
  vertical-align: top;
  clear: both;
}
.md-checkbox label:not(:empty) {
  padding-left: 0.75em;
}
.md-checkbox label:before,
.md-checkbox label:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
}
.md-checkbox label:before {
  width: 1.25em;
  height: 1.25em;
  background: #fff;
  border: 2px solid rgba(0, 0, 0, 0.54);
  border-radius: 0.125em;
  cursor: pointer;
  transition: background 0.3s;
}
.md-checkbox input[type="checkbox"] {
  outline: 0;
  visibility: hidden;
  width: 1.25em;
  margin: 0;
  display: block;
  float: left;
  font-size: inherit;
}
.md-checkbox input[type="checkbox"]:checked + label:before {
  background: #337ab7;
  border: none;
}
.md-checkbox input[type="checkbox"]:checked + label:after {
  transform: translate(0.25em, 0.3365384615em) rotate(-45deg);
  width: 0.75em;
  height: 0.375em;
  border: 0.125em solid #fff;
  border-top-style: none;
  border-right-style: none;
}
.md-checkbox input[type="checkbox"]:disabled + label:before {
  border-color: rgba(0, 0, 0, 0.26);
}
.md-checkbox input[type="checkbox"]:disabled:checked + label:before {
  background: rgba(0, 0, 0, 0.26);
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  background: #f0f0f0;
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #333;
  font-size: 16px;
}

section {
  background: white;
  margin: 0 auto;
  padding: 4em;
  max-width: 800px;
}
section h1 {
  margin: 0 0 2em;
}
</style>
