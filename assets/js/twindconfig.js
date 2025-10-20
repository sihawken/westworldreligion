import { install, defineConfig } from 'https://cdn.twind.style/core';
import presetTailwind from 'https://cdn.twind.style/preset-tailwind';

const config = defineConfig({
  presets: [presetTailwind()],
  prefix: 'tw-', // Your desired prefix
});

let TwindConfig = {

  init : function() {
    install(config) 
  }
};

document.addEventListener('DOMContentLoaded', TwindConfig.init);