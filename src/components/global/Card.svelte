<script lang="ts">
	export let className: string = "";
	export let noPadding: boolean = false;
</script>

<div class={`rounded-3xl border-2 border-neutral-400 bg-white ${noPadding ? "" : "p-6"} ${className}`}><slot/></div>
