//https://github.com/element-plus/element-plus/blob/dev/website/md-loader/fence.js
// 覆盖默认的 fence 渲染策略
import * as Token from "markdown-it/lib/token"
import {Options} from "markdown-it/lib"
import * as Renderer from "markdown-it/lib/renderer"

export default function (md: any): void {
  const defaultRender = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens: Token [], idx: number, options: Options, env: any, self:Renderer) => {
    const token = tokens[idx]
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1]
    const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/)
    if (token.info === 'html' && isInDemoContainer) {
      return `<template #highlight><pre v-pre><code class="html">${md.utils.escapeHtml(token.content)}</code></pre></template>`
    }
    return defaultRender(tokens, idx, options, env, self)
  }
}
