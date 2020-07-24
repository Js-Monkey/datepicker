<style scoped lang="scss">
    .f-message{
        display: inline-block;
        transition: all $animation-duration;
        border: 1px solid $border-color;
        position: fixed;
        min-width: 200px;
        z-index: 9999;
        font-size: 14px;
        line-height: 1.3;
        min-height: $input-height;
        box-shadow: $shadow-down;
        border-radius: 3px;
        background: $bg-color-1;
        padding: 10px 3px;
        color: $text;
        text-align: center;
        &-text{
            display: inline-block;
            text-align: center;
            vertical-align: middle;
        }
        &-close{
            margin-left: 15px;
            margin-right: 10px;
            font-size: 20px;
            &-icon{
                display: flex;
            }
        }
        &.position-top{
            top:0;
            left: 50%;
            transform: translateX(-50%);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation: slideDown  $animation-duration;

        }
        &.position-bottom{
            top:100%;
            transform: translateY(-100%) translateX(-50%);
            left: 50%;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: slideUp  $animation-duration;
        }
        &.position-center{
            top:50%;
            transform: translateY(-50%)translateX(-50%);
            left: 50%;
            animation: fade-in $animation-duration;
        }
        &.type-success{
            border: #e1f3d8;
            box-shadow: 0 0 3px $success-1;
        }
        &.type-error{
            background-color: #fef0f0;
            border: #fef0f0;
            color:#f56c6c;
            box-shadow: 0 0 3px $error-1;
        }
        &.type-warn{
            border: #faecd8;
            box-shadow: 0 0 3px $warn-1;
        }
        &-icon{
            vertical-align: middle;
            margin-right: 8px;
        }
    }
</style>

<template>
    <div class="f-message" ref="toast" :class="[toastClass,typeSelect]">
        <f-icon class="f-message-icon" v-if="type" :name="type" font-size="16px">
        </f-icon>
        <div class="f-message-text">
            <slot v-if="!enableHTML"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <span v-if="closeButtonShow" class="f-message-close" @click="onClickClosed">
        <div v-if="closeButton.text &&!closeButton.closeIcon">
            {{closeButton.text}}
        </div>
         <f-icon class="f-message-close-icon" v-if="closeButton.closeIcon"
                 :name="closeButton.closeIcon"
                 font-size="16px"
                 :style="typeStyle"
         >
        </f-icon>
    </span>
    </div>
</template>

<script>
    import Icon from '../icon/src/icon'

    export default {
        name: "toast",
        components: {
            'f-icon': Icon
        },
        props: {
            type: {
                type: String,
                validator(val) {
                    return ['success', 'warn', 'error'].indexOf(val) > -1
                }
            },
            autoClosed: {
                type: [Boolean, Number],
                default: 2,
                validator(val) {
                    return val === false || typeof val === 'number'
                }
            },
            closeButtonShow: {
                type: Boolean,
                default: false
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: null,
                        closeIcon: 'wrong',
                        callback: () => {

                        }
                    }
                },

                validator(val) {
                    let judge = ['wrong', 'correct'].indexOf(val.closeIcon) > -1
                    if (!val.text && !val.closeIcon) return console.error('至少设置一项')
                    if (val.text && val.text.length > 5) return console.error('不能输入超过5个字')
                    if (judge) return true
                    return false
                }
            },
            enableHTML: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(val) {
                    return ['top', 'bottom', 'center'].indexOf(val) > -1
                }
            },
        },
        mounted() {
            this.exeAutoClosed()
        },
        computed: {
            typeSelect() {
                if (!this.type) return
                return `type-${this.type}`
            },
            typeStyle() {
                if (!this.type) return
                let typeColor = {
                    success: 'fill:#17cc15;',
                    warn: 'fill:#ffb311;',
                    error: 'fill:#F1453D;'
                }
                return typeColor[this.type]
            },
            toastClass() {
                return `position-${this.position}`
            }
        },
        methods: {
            exeAutoClosed() {
                if (this.autoClosed) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClosed * 1000)
                }
            },

            leaveActive() {
                let {bottom, height, top} = this.$el.getBoundingClientRect()
                let $el = this.$el.style
                let position = this.position
                if (position === 'top') {
                    $el.top = `${top - height}px`
                } else if (position === 'bottom') {
                    $el.top = `${bottom + height}px`
                } else if (position === 'center') {
                    $el.opacity = 0
                }
            },
            close() {
                this.leaveActive()
                setTimeout(() => {
                    this.$el.remove()
                    this.$emit('close')
                    this.$destroy()
                }, 450)
            },
            onClickClosed() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }

    }
</script>
