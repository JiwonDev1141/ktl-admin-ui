// 타입스크립트에서 .vue 파일을 인식할 수 있게 세팅하는 용도입니다.

declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }