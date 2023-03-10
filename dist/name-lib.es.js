import { openBlock as s, createElementBlock as l, renderSlot as _ } from "vue";
const a = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [c, r] of o)
    n[c] = r;
  return n;
}, u = {}, f = {
  type: "button",
  class: "myButton"
};
function i(t, o) {
  return s(), l("button", f, [
    _(t.$slots, "default")
  ]);
}
const p = /* @__PURE__ */ a(u, [["render", i]]), e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MyButton: p
}, Symbol.toStringTag, { value: "Module" }));
function d(t) {
  for (const o in e)
    t.component(o, e[o]);
}
const y = { install: d };
export {
  p as MyButton,
  y as default
};
