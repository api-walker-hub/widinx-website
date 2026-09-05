<script setup>
defineProps({ name: { type: String, required: true } })
const paths = {
  box: 'M16 23 32 15 48 23 32 31ZM16 23v19l16 8 16-8V23M32 31v19M24 19l16 8v10',
  passport: 'M19 13h28v39H19ZM25 13v39M31 21h10M31 26h7M31 43h10M31 34l3 3 7-7',
  scale: 'M16 14h26v37H16ZM23 23h12M23 29h9M23 35h6M35 39l5 5 10-12M42 14v12',
  shield: 'M32 12 16 18v15c0 9 7 16 16 20 9-4 16-11 16-20V18ZM23 31l6 6 12-13M10 17v-7h7M47 10h7v7',
  route: 'M12 18h10v10H12ZM42 37h10v10H42ZM22 23h17v19h3M12 43h17V13h16M45 10v6M42 13h6',
  leaf: 'M18 45V32h8v13M29 45V25h8v20M40 45V18h8v27M13 51h40M15 23c0-10 9-14 17-12-1 9-7 16-17 12ZM15 23l10-7',
  spark: 'M21 21h22v22H21ZM27 27h10v10H27M26 13v8M37 13v8M26 43v8M37 43v8M13 26h8M13 37h8M43 26h8M43 37h8M28 33l3 3 5-7',
  plug: 'M11 16h15v13H11ZM38 35h15v13H38ZM26 22h13v13M18 29v13h20M8 12h6M50 52h6M15 20h7M42 40h7',
  twin: 'M13 13h24v24H13ZM27 27h24v24H27ZM19 19h12v12M33 33h12v12M13 51l6-6M51 13l-6 6',
  network: 'M25 25h14v14H25ZM8 27h9v10H8ZM47 27h9v10h-9ZM27 8h10v9H27ZM27 47h10v9H27ZM17 32h8M39 32h8M32 17v8M32 39v8',
  dam: 'M11 14h42v36H11ZM11 40l12-11 9 9 8-7 13 12M40 21h7v7h-7ZM17 20h6',
  carbon: 'M19 47h27a8 8 0 0 0 1-16 12 12 0 0 0-23-3 9.5 9.5 0 0 0-5 19ZM22 53h5M31 53h5M40 53h5M28 33l4 4 8-9',
}
</script>
<template>
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true" class="module-icon">
    <path d="M0 8V0h8M56 0h8v8M64 56v8h-8M8 64H0v-8" stroke="currentColor" opacity=".22" />
    <path d="M13 48 46 15l8 8-33 33Z" fill="var(--color-mint)" />
    <path :d="paths[name] || paths.box" stroke="currentColor" stroke-width="1.7" stroke-linejoin="miter" />
    <path d="M49 7h8v8h-8z" fill="#b97950" />
  </svg>
</template>
