<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="300 250 200 100" width=100 height=100 >
  <g id="g14" clip-path="url(#clipPath18)" transform="matrix(1.33333, 0, 0, -1.33333, -399.235, 520.06)">
    <g id="g72" transform="translate(300.7024,287.5964)">
      <path d="m 0,0 h 19.981 l 26.941,51.405 -9.99,19.062 z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path74"></path>
    </g>
    <g id="g76" transform="translate(411.0943,346.0047)">
      <path d="M 0,0 H 42.38 V -40.925 L 27.45,-58.412 h -52.843 l -32.505,62.042 -0.029,-0.045 -9.978,19.06 10.007,19.103 43.335,-82.673 h 39.456 v 23.453 h -42.38 V 23.791 L -2.836,40.94 H 46.157 L 31.227,23.453 H 0 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path78"></path>
    </g>
    <g id="g80" transform="translate(482.9883,337.368)">
      <path d="m 0,0 v -8.615 l 35.16,-41.16 H 58.199 L 15.68,0 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path82"></path>
    </g>
    <g id="g84" transform="translate(485.2932,348.5472)">
      <path d="m 0,0 -2.229,-2.609 v -8.583 H 13.393 L 55.752,38.397 H 32.799 L -2.229,-2.609 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path86"></path>
    </g>
    <g id="g88" transform="translate(483.0645,354.4271)">
      <path d="M 0,0 V 32.517 H -17.436 V -20.412 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path90"></path>
    </g>
    <g id="g92" transform="translate(482.9883,337.368)">
      <path d="M 0,0 V 0 H -7.359 L -17.501,-11.874 V -49.775 H 0 v 41.16 L -7.359,0 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path94"></path>
    </g>
    <g id="g96" transform="translate(475.6295,337.368)">
      <path d="M 0,0 7.359,-8.615 V 0 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path98"></path>
    </g>
    <g id="g100" transform="translate(475.6295,337.3681)">
      <path d="M 0,0 H 7.359 V 8.615 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path102"></path>
    </g>
    <g id="g104" transform="translate(475.6295,337.3681)">
      <path d="M 0,0 7.359,8.615 Z" style="fill-opacity: 1; fill-rule: evenodd; stroke: rgb(85, 153, 218); fill: rgb(0, 0, 255);" id="path106"></path>
    </g>
  </g>
</svg>

</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40
    }
  },

  computed: {
    getWidth() {
      return this.width;
    },

    getHeight() {
      return Math.ceil(this.getWidth / 2);
    }
  }
};
</script>

