<template>
  <div  class="b-input" :for="id">
    <input
      class="f-form-placeholder"
      :id="id"
      :style="style"
      :autocomplete="autocomplete"
      :spellcheck="spellcheck"
      :wrap="wrap"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxLength"
      :placeholder="placeholder"
      @input="handleInput"
      @change="$emit('change',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      type="text">
  </div>
</template>

<script lang="ts">
import '../../../assets/svg/svg'
import {defineComponent, toRefs} from 'vue'
import {isNumber} from "../../../../../src/utils/typeOf";

export default defineComponent({
  name: 'Input',
  props: {
    id: String,
    name: String,
    width: {
      type:[Number, String],
      default: 200
    },
    value: String,
    maxLength: Number,
    placeholder: String,
    size: {
      type: String,
      default: 'normal',
      validator: (val: string) => ['normal', 'large', 'small'].indexOf(val) > -1
    },
    rows: {
      type: Number,
      default: 2
    },
    clearable: {
      type: Boolean,
      default: false
    },
    spellcheck: {
      type: Boolean,
      default: false
    },
    wrap: {
      default: 'soft'
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    showLimit: {
      type: Boolean,
      default: false
    },
    showLimitOutside: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    icon: String,
    iconPosition: {
      type: String,
      default: 'left'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    const {width} = toRefs(props)
    let computedWidth  = width.value
    if(isNumber(width.value)) computedWidth += 'px'
    return {
      style:{
        width: computedWidth
      }
    }
  },
  methods: {
    handleInput(e: any) {
      let {value} = e.target
      this.$emit('input', value)
    }
  }
})
</script>

<style scoped lang="scss">
@import "./Doc/src/assets/style/global";
$input-height: 27px;
$input-large-height: 30px;
$input-small-height: 24px;
.b-input {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  position: relative;

  > :not(:last-child) {
    margin-right: .3em;
  }

  .cloak {
    position: absolute;
    height: $input-height;
    z-index: 2;
    opacity: 0;
  }

  &-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    fill: $text;
  }

  &-icon-left {
    left: 8px;
  }

  &-icon-right {
    right: 5px;
  }

  &-icon-cancel {
    right: 8px;
    cursor: pointer;
  }

  input {
    color: $text;
    height: $input-height;
    border: $border-solid;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    transition: .23s box-shadow ease;

    &::-webkit-input-placeholder {
      color: $grey-3;
    }

    &:-moz-placeholder {
      color: $grey-3;
    }

    &:-ms-input-placeholder {
      color: $grey-3;
    }

    &:hover {
      border-color: $border-color;
    }

    &:focus {
      box-shadow: 0 0 3px 1px $blue, 0 0 1px $blue-6;
      outline: none;
    }

    &[disabled] {
      border-color: $border-color;
      color: $disabled-text;
      cursor: not-allowed;
      pointer-events: none;
    }

    &.error {
      border-color: $error-1;

    }

  }

  textarea {
    min-height: $input-height;
    resize: vertical;
    padding: 6px 8px;
  }

  &-large {
    input, textarea {
      height: $input-large-height;
      font-size: $font-size-large;
    }
  }

  &-small {
    input, textarea {
      height: $input-small-height;
      font-size: $font-size-small;
    }
  }

  &-has-icon-left {
    input {
      padding-left: 30px;
    }
  }

  &-has-icon-right {
    input {
      padding-right: 30px;
    }
  }

  &-surplus-bar {
    color: $text-3;
    position: absolute;
    right: 8px;
    top: 50%;
    z-index: 2;
    padding-left: 6px;
    background-color: $grey-1;
    transform: translateY(-50%);
  }

  &-surplus-bar-outside {
    left: calc(100% + 3px);
  }

  &-surplus-bar-disabled {
    background-color: $grey-2;
  }

  &-surplus-bar-textarea {
    top: auto;
    bottom: 2px;
    transform: translateY(0);
  }

  &[disabled] {
    cursor: not-allowed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input, textarea {
      background-color: $grey-2;
    }
  }

  .errorMessage {
    color: $red;
  }
}

</style>
