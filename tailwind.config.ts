import { join } from 'path';
import type { Config } from 'tailwindcss'
import { custom1 } from './src/custom1'

const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const { skeleton } = require('@skeletonlabs/tw-plugin');

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'modern',
						enhancements: true,
					},
				],
				custom: [
					custom1,
				],
			},
		}),
	],
} satisfies Config;
