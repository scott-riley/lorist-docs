---
layout: false
---

<script setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

onMounted(() => {
  useRouter().go('/the-basics/getting-started')
})
</script>
