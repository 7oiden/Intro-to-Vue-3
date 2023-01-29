app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <h3>Product details</h3>
    <h4>Description</h4>
    <ul>
        <li v-for="(detail, index) in details" :key="detail.id">{{ detail }}</li>
    </ul>
    <h4>Sizes</h4>
    <ul>
        <li v-for="(size, index) in sizes" :key="size.id">{{ size }}</li>
    </ul>`,
});
