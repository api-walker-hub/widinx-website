<script setup>
import { ref } from 'vue'
import IconGlyph from '@/components/ui/IconGlyph.vue'
const paused = ref(false)
const signals = [
  { label: 'Connected at the source', icon: 'route' },
  { label: 'Materials traced', icon: 'layers' },
  { label: 'Authenticity verified', icon: 'shield' },
  { label: 'Compliance checked', icon: 'scale' },
  { label: 'Ready for a second life', icon: 'leaf' },
]
</script>

<template>
  <div class="passport-scene" :class="{ paused }" role="group" aria-label="Illustrative WidinX passport for an atelier bag, with its materials, origin and connected product history">
    <div class="scene-heading"><span>THE OBJECT. THE STORY. THE PROOF.</span><span>WX / 001</span></div>
    <svg class="product-art" viewBox="0 0 520 450" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bag" x1="135" y1="150" x2="370" y2="370" gradientUnits="userSpaceOnUse"><stop stop-color="#ab7253"/><stop offset=".5" stop-color="#8e573b"/><stop offset="1" stop-color="#613b2b"/></linearGradient>
        <linearGradient id="side" x1="338" y1="220" x2="400" y2="300"><stop stop-color="#754731"/><stop offset="1" stop-color="#462e24"/></linearGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="13"/></filter>
      </defs>
      <ellipse cx="264" cy="372" rx="144" ry="16" fill="#344638" opacity=".15" filter="url(#blur)"/>
      <circle cx="262" cy="227" r="167" stroke="#b9c9b6" stroke-dasharray="2 7"/>
      <circle cx="262" cy="227" r="132" stroke="#cbd6c7"/>
      <path d="M195 196v-49c0-82 108-82 108 0v49" stroke="#603f2f" stroke-width="13"/>
      <path d="M195 190v-43c0-76 108-76 108 0v43" stroke="#b78360" stroke-width="7"/>
      <path d="m153 181 178-12 42 28 17 154-53 22-199-17Z" fill="url(#bag)"/>
      <path d="m331 169 42 28 17 154-53 22Z" fill="url(#side)"/>
      <path d="m153 181 19 63 145 1 14-76" fill="#996244"/>
      <path d="m158 187 17 51 137 1 13-63M148 344l180 16 2-103" stroke="#d1a17b" stroke-width="1" stroke-dasharray="3 3" opacity=".65"/>
      <path d="M235 227h26v34h-26z" fill="#cbb78b"/><path d="M243 234h10v19h-10z" fill="#805d3d"/>
      <path d="m349 207 9 130" stroke="#b6805c" opacity=".6"/>
      <path d="m310 197 11 68" stroke="#4d392b" stroke-width="2"/>
      <g transform="rotate(-9 305 260)">
        <rect x="305" y="260" width="29" height="42" rx="4" fill="#e8e6d2"/>
        <image href="/widinx-symbol.svg" x="309" y="274" width="21" height="13.3" />
      </g>
      <circle cx="108" cy="190" r="5" fill="#387962"/><circle cx="409" cy="304" r="5" fill="#387962"/>
    </svg>
    <div class="signal-orbit">
      <div v-for="(signal, i) in signals" :key="signal.label" class="orbit-node" :style="{ '--angle': `${i * 72 - 144}deg` }">
        <span class="orbit-label"><IconGlyph :name="signal.icon" :size="13" />{{ signal.label }}</span>
      </div>
    </div>
    <button type="button" class="orbit-control" :aria-pressed="paused" @click="paused = !paused">{{ paused ? '▶ Play orbit' : 'Ⅱ Pause orbit' }}</button>
    <div class="passport-card">
      <div class="flex items-center justify-between"><span class="font-mono text-[9px] tracking-[.13em] text-muted">DIGITAL PRODUCT PASSPORT</span><IconGlyph name="passport" :size="20" /></div>
      <div class="mt-4 flex items-center justify-between gap-4"><div><h3 class="text-[20px] font-medium tracking-tight">The Atelier Bag</h3><p class="mt-1 font-mono text-[9px] text-muted">WX · LEATHER GOODS · 000128</p></div><span class="rounded-none bg-mint px-2.5 py-1 text-[10px] text-forest">✓ Verified</span></div>
      <div class="mt-5 grid grid-cols-2 border-y border-line py-3 text-[11px]"><div><span class="text-muted">Origin</span><p class="mt-1 font-medium">Tuscany, Italy</p></div><div class="border-l border-line pl-5"><span class="text-muted">Material</span><p class="mt-1 font-medium">Full-grain leather</p></div></div>
      <div class="mt-4 flex items-center justify-between text-[10px] text-forest"><span>● &nbsp; Made <span class="px-1 text-muted">—</span> ● &nbsp; Traced <span class="px-1 text-muted">—</span> ● &nbsp; Verified</span><span>↗</span></div>
    </div>
    <div class="scene-caption">PRODUCT IDENTITY, REIMAGINED <span>Illustrative passport</span></div>
  </div>
</template>

<style scoped>
.passport-scene{position:relative;min-height:570px;border-radius:0;background:linear-gradient(145deg,#edf1e7,#dde6d7);border:1px solid #dfe6da;overflow:hidden}.scene-heading{position:absolute;inset:25px 25px auto;display:flex;justify-content:space-between;font:9px var(--font-mono);letter-spacing:.1em;color:#5b7061}.product-art{width:100%;height:430px;margin-top:12px}.origin-note{position:absolute;top:125px;left:20px;display:flex;align-items:center;gap:8px;border:1px solid #dce4dc;border-radius:0;background:#ffffffd9;padding:9px 12px;font-size:10px;color:#245c4d}.passport-card{position:relative;margin:-87px 24px 50px auto;width:310px;max-width:calc(100% - 48px);border:1px solid #fff;border-radius:0;background:#fffffff2;padding:21px;box-shadow:0 16px 48px #18372b14}.scene-caption{position:absolute;bottom:20px;left:25px;right:25px;display:flex;justify-content:space-between;gap:12px;font:8px var(--font-mono);letter-spacing:.08em;color:#5b7061}.scene-caption span{letter-spacing:0}@media(max-width:480px){.passport-scene{min-height:530px}.product-art{height:380px}.origin-note{top:95px;font-size:9px}.scene-heading{font-size:8px}}

.passport-scene{container-type:inline-size;min-height:650px}.product-art{height:440px;margin-top:28px}.passport-card{margin:0 24px 50px auto}.signal-orbit{position:absolute;top:239px;left:50%;width:0;height:0;--orbit-radius:clamp(88px,29cqw,150px);pointer-events:none}.orbit-node{position:absolute;top:0;left:0;animation:signal-circle 42s linear infinite;transform:rotate(var(--angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--angle)))}.orbit-label{position:absolute;transform:translate(-50%,-50%);display:flex;align-items:center;gap:6px;width:max-content;max-width:144px;padding:8px 9px;background:#fffffff2;border:1px solid #c8d5c5;font-size:9px;line-height:1.3;color:#245c4d;box-shadow:0 3px 12px #142f2a09}.orbit-label svg{flex-shrink:0}.orbit-control{position:absolute;top:49px;right:20px;padding:5px 8px;border:1px solid #c8d5c5;color:#245c4d;background:#f7f8f2;font:8px var(--font-mono);cursor:pointer}.paused .orbit-node{animation-play-state:paused}@keyframes signal-circle{from{transform:rotate(var(--angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--angle)))}to{transform:rotate(calc(var(--angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--angle) - 360deg))}}@media(max-width:480px){.orbit-label{font-size:8px;max-width:114px;padding:6px;gap:4px}.passport-card{margin-top:0}.product-art{height:410px}.signal-orbit{top:225px}.passport-scene{min-height:630px}}@media(prefers-reduced-motion:reduce){.orbit-node{animation:none}.orbit-control{display:none}}
</style>
