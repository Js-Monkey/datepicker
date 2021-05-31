<style lang="scss" scoped>
@import "../../../assets/style/global";

.b-button {
  font-size: 14px;
  position: relative;
  padding: 10px 20px;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  color: $text;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all .2s;
  cursor: pointer;

  &:focus {
    border-color: $orange-2;
  }

  > .cloakLeft {
    float: left;
    height: inherit;
    opacity: 0.5;
  }

  > .cloakRight {
    float: right;
    height: inherit;
    opacity: 0.5;
  }

  &.size-big {
    font-size: 15px;
    padding: 10px 23px;
    border-radius: 5px;
  }

  &.size-medium {
    font-size: 14px;
    padding: 8px 18px;
    border-radius: 4px;
  }

  &.size-small {
    font-size: 13px;
    padding: 6px 15px;
    border-radius: 3px;
  }

  &.size-mini {
    font-size: 12px;
    padding: 4px 12px;
    border-radius: 3px;
  }

  &:hover {
    opacity: 0.6;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .b-button-content {
    order: 2;
    white-space: nowrap;
  }

  > .b-icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.3em;
  }

  &.icon-right {
    > .b-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }

    > .b-button-content {
      order: 1;
    }
  }

  &.type-error {
    color: white;

    background-color: $error-1;
    border-color: $error-1;

    &:active {
      opacity: 1;
      color: white;
      background-color: $error-2;
      border-color: $error-2;
    }
  }

  &.type-warn {
    color: white;
    background-color: $warn-1;
    border-color: $warn-1;

    &:hover {
      border-color: $warn-2;
    }
  }

  &.type-info {
    color: white;
    background-color: $info-1;
    border-color: $info-1;

    &:hover {
      border-color: $info-2;
    }
  }

  &.type-success {
    color: white;
    background-color: $success-1;
    border-color: $success-1;

    &:hover {
      opacity: 1;
      border-color: $success-2;
    }
  }

  .loading {
    animation: spin 1s infinite linear;
  }

  &-loading {
    visibility: hidden;
  }

  &-loading-icon {
    position: absolute;
  }

  &.loadingCloak {
    opacity: .5;
  }
}
</style>
<template>
  <button class="b-button"
          :class="[[`icon-${position}`],
             typeStyle,sizeStyle,loadingStyle]
            "
          ref="button"

  >
    <b-icon :name="icon"
            :fill="fill"
            :font-size="iconSize"
            :class="{'b-button-loading':loading}"
            v-if="icon">
    </b-icon>
    <b-icon name="loading"
            :fill="fill"
            :font-size="iconSize"
            class="b-button-loading-icon"
            :class="{loading:loading}"
            v-if="loading">
    </b-icon>
    <span class="b-button-content"
          :class="{'b-button-loading':loading}"
    >
            <slot>
            </slot>
        </span>
  </button>
</template>
<script lang="ts">

import Icon from '../../icon/src/icon.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'b-button',
  components: {
    'b-icon': Icon
  },
  computed: {
    typeStyle() {
      if (!this.type) return
      return `type-${this.type}`
    },
    sizeStyle() {
      if (!this.size) return
      return `size-${this.size}`
    },
    loadingStyle() {
      if (this.loading) {
        return 'loadingCloak'
      }
    },
    iconSize() {
      const sizeType = {
        large: '22px',
        medium: '20px',
        small: '18px',
        mini: '16px',
      }
      return sizeType[this.size]
    }
  },
  props: {
    icon: {
      type: String
    },
    type: {
      type: String,
      validator: (val) => ['primary', 'text', 'success', 'warn', 'error', 'info'].indexOf(val) > -1
    },
    size: {
      type: String,
      default: 'medium',
      validator(val) {
        return ['big', 'medium', 'small', 'mini'].indexOf(val) > -1
      }
    },
    fill: {
      type: String,
      default: '#ffffff'
    },

    loading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  },
  setup() {

  }
})
</script>




