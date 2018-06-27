import Vue from 'vue'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld'
import { mount,createLocalVue } from '@vue/test-utils'

let wrapper 
let localVue

describe('HelloWorld', () => {
  beforeEach(() => {
    const _Vue= createLocalVue()
    _Vue.use(Vuetify)
    localVue = _Vue
    wrapper = mount(HelloWorld,{
      localVue
    })
  })
  
  it('Checking <h2> tag text', function () {
    const h2 = wrapper.find('h2')
    expect(h2.text()).toBe('HELLO')
  }),
    it('checking <h1> tag text', () => {

      const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Welcome')
    }),
    // it('clicks submit button',() => {
    //   const wrapper = mount(HelloWorld)
    //   const button = wrapper.find('button')
    //   expect(button.text()).toBe('submit')
    // }),
    it('button click should increment the count', () => {
      expect(wrapper.vm.count).toBe(0)
      const button = wrapper.find('button')
      button.trigger('click')
      expect(wrapper.vm.count).toBe(1)
    }),
    it('taking input.', () => {
      const text = wrapper.vm.value
       wrapper.find('#text').trigger('value')
      expect(wrapper.find('#text').element.value).toBe(text)
    })
})