const rootSelector = '[data-js-slider]'

class Slider {
  constructor(parameters) {}
}

class SliderCollection {
  constructor() {
    this.init
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new Slider(element)
    })
  }
}

export default SliderCollection
