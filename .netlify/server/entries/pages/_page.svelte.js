import { c as create_ssr_component, d as createEventDispatcher, f as each, e as escape, v as validate_component } from "../../chunks/index.js";
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h3>Description section</h3>

</div>`;
});
const Enrollment_svelte_svelte_type_style_lang = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h2>Footer section</h2>
</div>`;
});
const Home_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-1yhw8q0{padding:1rem}li.svelte-1yhw8q0{display:flex;font-size:3rem;padding-left:1rem;padding-right:1rem;display:inline;list-style:none;cursor:pointer}.active.svelte-1yhw8q0{color:red;transition:0.5s;text-decoration:underline}@media screen and (max-width: 1069px){li.svelte-1yhw8q0{font-size:3rem}}@media screen and (max-width: 848px){li.svelte-1yhw8q0{font-size:2rem}}@media screen and (max-width: 627px){li.svelte-1yhw8q0{font-size:1.5rem}}@media screen and (max-width: 516px){li.svelte-1yhw8q0{font-size:1.4rem}}@media screen and (max-width: 496px){li.svelte-1yhw8q0{font-size:1.2rem}}@media screen and (max-width: 450px){li.svelte-1yhw8q0{font-size:1rem}}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let homeTabs = ["Home", "Enrollment", "About Us"];
  let { activeItem = "" } = $$props;
  if ($$props.activeItem === void 0 && $$bindings.activeItem && activeItem !== void 0)
    $$bindings.activeItem(activeItem);
  $$result.css.add(css$1);
  return `<div><ul class="${"svelte-1yhw8q0"}">${each(homeTabs, (value) => {
    return `<li class="${["svelte-1yhw8q0", value == activeItem ? "active" : ""].join(" ").trim()}">${escape(value)}</li>`;
  })}</ul>
</div>`;
});
const HomeContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"main-div"}"><h3>Main content section</h3>
</div>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h3>Nav section</h3>

</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".close.svelte-3u2sq9{text-align:center;font-size:1rem;border-radius:10rem;border:1px solid black;color:red;float:right;background-color:blue;cursor:pointer}.modal.svelte-3u2sq9{background-color:rgba(0,0,0,0.9);width:100%;height:100%;position:absolute}.modalMsg.svelte-3u2sq9{border-radius:2rem;max-width:400px;height:200px;background-color:white;margin:8rem auto}p.svelte-3u2sq9{font-size:2rem;padding-top:3.5rem}.container.svelte-3u2sq9{background-color:aliceblue;display:grid;align-items:center;grid-template-columns:25% 50% 25%}.header.svelte-3u2sq9{text-align:center;grid-column:1/4;border-bottom:1px solid gainsboro}.navigation.svelte-3u2sq9{border-right:1px solid black;height:100%}.main-content.svelte-3u2sq9{border-right:1px solid black;height:100%}.description.svelte-3u2sq9{height:100%}.footer.svelte-3u2sq9{text-align:center;grid-column:1/4;border-top:1px solid gainsboro}@media screen and (max-width: 920px){.container.svelte-3u2sq9{display:block}.navigation.svelte-3u2sq9,.description.svelte-3u2sq9,.main-content.svelte-3u2sq9{border:1px solid black}.main-content.svelte-3u2sq9{justify-content:center}}@media screen and (max-width: 480px){.modal.svelte-3u2sq9{height:200%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeItem = "Home";
  $$result.css.add(css);
  return `<main><div class="${"container svelte-3u2sq9"}"><div class="${"header svelte-3u2sq9"}">${``}
            ${validate_component(Home, "Home").$$render($$result, { activeItem }, {}, {})}</div>

        <div class="${"navigation svelte-3u2sq9"}">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}</div>

        <div class="${"main-content svelte-3u2sq9"}">${`${validate_component(HomeContent, "HomeContent").$$render($$result, {}, {}, {})}`}</div>

        <div class="${"description svelte-3u2sq9"}">${validate_component(Description, "Description").$$render($$result, {}, {}, {})}</div>

        <div class="${"footer svelte-3u2sq9"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>
</main>`;
});
export {
  Page as default
};
