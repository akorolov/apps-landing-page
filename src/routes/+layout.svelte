<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { page } from '$app/stores';

	import Logo from "$lib/logo.svelte";

	let current_header = ""

	$: $page.url.pathname, UpdateHeader($page.url.pathname)

	function UpdateHeader(path: string) {
		switch (path.toString()) {
			case "/":
				current_header = "Some things I've made"
				break;
			case "/catbot":
				current_header = "AI Catbot"
				break;
			default:
				current_header = "Nothing here"
				break;
		}
	}



	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="flex flex-col gap-20">
	<div class="flex flex-row justify-between m-4">
		<Logo />
		<h1 class="h2" style="margin-top: 40px;">{current_header}</h1>
		<span class="w-80"></span>
	</div>

	<slot />
</div>
