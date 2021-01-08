<template>
    <div class="header" :class="{other:!atHome,'components-page':!atHome}">
        <div class="header-brand">
            <router-link :to="'/'">
              <svg
                style="width: 50px;height: 50px"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0"
                y="0"
                width="200"
                height="200"
                viewBox="0 0 100 70"
                preserveAspectRatio="xMidYMid meet"
                color-interpolation-filters="sRGB"
              >
                <g fill="#c62525" transform="translate(20,0)">
                  <svg viewBox="0 0 60 60" x="0" y="0" width="68.174252790367" height="68.174252790367">
                    <g mask="url(#5a19471d-efb8-446d-bd47-cd4c2b782712)">
                      <g>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 60 60" version="1.1"
                             x="0" y="0" width="60" height="60">
                          <desc>Created with Sketch.</desc>
                          <g fill-rule="evenodd">
                            <g>
                              <path d="M49.001,0 L10.999,0 C4.934,0 0,4.934 0,10.999 L0,49.001 C0,55.066 4.934,60 10.999,60 L49.001,60 C55.065,60 60,55.066 60,49.001 L60,10.999 C60,4.934 55.065,0 49.001,0"/>
                            </g>
                          </g>
                        </svg>
                      </g>
                      <g filter="url(#colors3041816095)">
                        <svg fill="#f33422" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="9.5" y="9.5" viewBox="12.180000305175781 7.020999908447266 75.63999938964844 85.94500732421875" enable-background="new 0 0 100 100" xml:space="preserve" width="41" height="41"><path d="M77.018,7.021c-0.586,7.217-2.695,12.479-6.352,15.788c-6.295-4.118-13.148-6.114-20.589-6.002  c-7.202-0.112-13.944,1.773-20.24,5.653c-4.452-3.42-6.561-8.571-6.337-15.438c-10.413,11.111-12.354,20.422-5.835,27.973  c-3.657,6.394-5.485,13.038-5.485,19.892c0,10.287,3.713,19.276,11.152,26.926c7.427,7.44,16.346,11.153,26.745,11.153  c10.302,0,19.152-3.713,26.591-11.153c7.439-7.649,11.152-16.639,11.152-26.926c0-7.203-1.717-13.666-5.15-19.389  C88.965,27.261,87.066,17.783,77.018,7.021z M64.496,69.123c-4.02,4.007-8.822,6.003-14.406,6.003  c-5.499,0-10.357-1.996-14.587-6.003c-4.006-4.006-6.002-8.863-6.002-14.586c0-5.709,1.996-10.567,6.002-14.573  c4.118-4.118,8.976-6.114,14.587-6.002c5.583-0.112,10.386,1.884,14.406,6.002c3.992,4.006,6.002,8.864,6.002,14.573  C70.498,60.26,68.488,65.117,64.496,69.123z"/></svg>
                      </g>
                    </g>
                    <mask id="5a19471d-efb8-446d-bd47-cd4c2b782712">
                      <g fill="white">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 60 60" version="1.1"
                             x="0" y="0" width="60" height="60">
                          <desc>Created with Sketch.</desc>
                          <g fill-rule="evenodd">
                            <g>
                              <path d="M49.001,0 L10.999,0 C4.934,0 0,4.934 0,10.999 L0,49.001 C0,55.066 4.934,60 10.999,60 L49.001,60 C55.065,60 60,55.066 60,49.001 L60,10.999 C60,4.934 55.065,0 49.001,0"/>
                            </g>
                          </g>
                        </svg>
                      </g>
                      <g fill="black">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="9.5" y="9.5" viewBox="12.180000305175781 7.020999908447266 75.63999938964844 85.94500732421875" enable-background="new 0 0 100 100" xml:space="preserve" width="41" height="41"><path d="M77.018,7.021c-0.586,7.217-2.695,12.479-6.352,15.788c-6.295-4.118-13.148-6.114-20.589-6.002  c-7.202-0.112-13.944,1.773-20.24,5.653c-4.452-3.42-6.561-8.571-6.337-15.438c-10.413,11.111-12.354,20.422-5.835,27.973  c-3.657,6.394-5.485,13.038-5.485,19.892c0,10.287,3.713,19.276,11.152,26.926c7.427,7.44,16.346,11.153,26.745,11.153  c10.302,0,19.152-3.713,26.591-11.153c7.439-7.649,11.152-16.639,11.152-26.926c0-7.203-1.717-13.666-5.15-19.389  C88.965,27.261,87.066,17.783,77.018,7.021z M64.496,69.123c-4.02,4.007-8.822,6.003-14.406,6.003  c-5.499,0-10.357-1.996-14.587-6.003c-4.006-4.006-6.002-8.863-6.002-14.586c0-5.709,1.996-10.567,6.002-14.573  c4.118-4.118,8.976-6.114,14.587-6.002c5.583-0.112,10.386,1.884,14.406,6.002c3.992,4.006,6.002,8.864,6.002,14.573  C70.498,60.26,68.488,65.117,64.496,69.123z"/></svg>
                      </g>
                    </mask>
                  </svg>
                  <defs>
                    <filter id="colors3041816095">
                      <feColorMatrix type="matrix"
                                     values="0 0 0 0 0.7734375  0 0 0 0 0.14453125  0 0 0 0 0.14453125  0 0 0 1 0"
                      />
                    </filter>
                    <filter id="colorsf3248718108">
                      <feColorMatrix type="matrix"
                                     values="0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 0 0.99609375  0 0 0 1 0"
                      />
                    </filter>
                    <filter id="colorsb3584359014">
                      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
                      />
                    </filter>
                  </defs>
                </g>
              </svg>
            </router-link>
        </div>
        <div class="header-nav">
            <f-icon :color="fColor" name="left"></f-icon>
            <router-link class="header-nav-item" :to="`/${item.value}`" v-for="(item,index) in routerItems"
                         :key="index">
                {{item.name}}
            </router-link>
            <f-icon :color="fColor" name="right"></f-icon>
        </div>
        <div :class="{'header-angle':atHome}">
            <a href="https://github.com/jumodada/date-picker" target="_blank">
                <f-icon :color="fColor"
                        :font-size="35"
                        :class="atHome?'Header-angle-icon-home':'Header-angle-icon-other'" name="github1">
                </f-icon>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        computed:{
            fColor(){
                return this.atHome?'white':'#ffb311'
            }
        },
        data() {
            return {
                routerItems: [
                    {name: '首页', value: ''},
                    {name: '安装', value: 'components'},
                ],
                atHome: true
            }
        },
        mounted() {
            this.isHome()
        },
        methods: {
            isHome() {
                this.atHome = this.$route.name === 'home'
            }
        },
        watch: {
            '$route'() {
                this.isHome()
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/color/color-select";
    @import "../assets/styles/shadow-select";

    .header {
        position: relative;
        background-color: $header-dark-2;
        z-index: 9999;
        width: 100%;
        padding: 19px;
        display: flex;
        transition: 0.36s color ease;
        align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &-brand {
            cursor: pointer;
            float: left;
        }

        &-nav {
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
            text-align: end;
            margin-right: 120px;

            &-item {
                margin-left: 15px;
                margin-right: 15px;
                color: white;
                cursor: pointer;
                text-decoration: none;
                transition: color .38s ease;

                &::after {
                    position: absolute;
                    display: block;
                    content: '';
                    width: 33px;
                    height: 2px;
                    background-color: white;
                    transition: all .2s;
                    opacity: 0;
                }

                &:hover {
                    &::after {
                        transform: translateY(2px);
                        opacity: 1;
                    }
                }
            }
        }

        &-angle {
            position: absolute;
            right: 0;
            top: 0;
            width: 120px;
            height: 120px;
            border-width: 60px;
            border-style: solid;
            border-color: #1d2022 #1d2022 #313639 #313639;
            background-color: white;

            &-icon-home {
                cursor: pointer;
                position: absolute;
                top: -40px;
                transform: rotate(45deg);
                transition: .25s all ease;

                &:hover {
                    transform: rotate(56deg) scale(1.05);
                }
            }

            &-icon-other {
                cursor: pointer;
                transition: .25s all ease;

                &:hover {
                    transform: rotate(6deg) scale(1.05);
                }
            }
        }
    }

    .other {
        color: $text1-orange;
        padding-top: 16px;
        padding-bottom: 16px;
        box-shadow: $shadow-down-white;

        .header-nav {
            margin-right: 85px;
            transform: translateY(1px);
            &-item {
                color: $text1-orange;
                &::after {
                    position: absolute;
                    display: block;
                    content: '';
                    width: 33px;
                    height: 2px;
                    background-color: white;
                    transition: all .2s;
                    opacity: 0;
                }

                &:hover {
                    &::after {
                        transform: translateY(2px);
                        opacity: 1;
                    }
                }
            }
        }
    }
    .components-page{
        background-color: $header-dark-1;
    }
</style>
