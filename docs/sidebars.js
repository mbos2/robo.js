// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

	// But you can create a sidebar manually
	tutorialSidebar: [
		{
			type: 'html',
			value: 'Start Here',
			className: 'sidebar-title'
		},
		{
			id: 'getting-started',
			label: '✨ Getting Started',
			type: 'doc'
		},
		{
			type: 'html',
			value: 'Core Concepts',
			className: 'sidebar-title'
		},
		{
			type: 'category',
			label: 'Command Line',
			link: {
				id: 'cli/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'cli/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'cli/create-robo',
				'cli/robo'
			]
		},
		{
			type: 'category',
			label: 'Core Package',
			link: {
				id: 'robojs/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'robojs/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'robojs/config',
				'robojs/flashcore',
				{
					id: 'robojs/internals',
					label: '👀 Internals',
					type: 'doc'
				},
				'robojs/linting',
				'robojs/logger',
				'robojs/mode',
				'robojs/modules',
				'robojs/portal',
				'robojs/files',
				'robojs/state',
				'robojs/typescript'
			]
		},
		{
			type: 'category',
			label: 'Hosting',
			link: {
				id: 'hosting/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'hosting/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'hosting/roboplay',
				'hosting/self-host'
			]
		},
		{
			type: 'category',
			label: 'Plugins',
			link: {
				id: 'plugins/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'plugins/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				'plugins/create',
				'plugins/install',
				'plugins/seed'
			]
		},
		{
			type: 'html',
			value: 'Building Apps',
			className: 'sidebar-title'
		},
		{
			type: 'category',
			label: 'Discord Activities',
			link: {
				id: 'discord-activities/getting-started',
				type: 'doc'
			},
			items: [
				{
					id: 'discord-activities/getting-started',
					label: '✨ Getting Started',
					type: 'doc'
				},
				'discord-activities/authentication',
				{
					id: 'discord-activities/credentials',
					label: '🔑 Credentials',
					type: 'doc'
				},
				'discord-activities/proxy',
				'discord-activities/multiplayer'
			]
		},
		{
			type: 'category',
			label: 'Discord Bots',
			link: {
				id: 'discord-bots/getting-started',
				type: 'doc'
			},
			items: [
				{
					id: 'discord-bots/getting-started',
					label: '✨ Getting Started',
					type: 'doc'
				},
				'discord-bots/commands',
				'discord-bots/context-menu',
				{
					id: 'discord-bots/credentials',
					label: '🔑 Credentials',
					type: 'doc'
				},
				'discord-bots/debug',
				'discord-bots/events',
				'discord-bots/invite',
				'discord-bots/middleware',
				{
					id: 'discord-bots/migrate',
					label: '⭐ Migrating',
					type: 'doc'
				},
				'discord-bots/sage'
			]
		},
		{
			type: 'html',
			value: 'Ecosystem',
			className: 'sidebar-title'
		},
		{
			type: 'link',
			label: 'Contributing',
			href: 'https://github.com/Wave-Play/robo.js/blob/main/CONTRIBUTING.md'
		},
		{
			type: 'link',
			label: 'Discord Community',
			href: 'https://roboplay.dev/discord'
		},
		{
			type: 'category',
			label: 'Plugin Directory',
			link: {
				id: 'plugins/directory',
				type: 'doc'
			},
			items: [
				{
					id: 'plugins/directory',
					label: '✨ Overview',
					type: 'doc'
				},
				'plugins/ai',
				'plugins/ai-voice',
				'plugins/analytics',
				'plugins/better-stack',
				'plugins/dev',
				'plugins/maintenance',
				'plugins/moderation',
				'plugins/patch',
				'plugins/server',
				'plugins/sync',
				'plugins/trpc'
			]
		},
		{
			type: 'category',
			label: 'Templates',
			link: {
				id: 'templates/overview',
				type: 'doc'
			},
			items: [
				{
					id: 'templates/overview',
					label: '✨ Overview',
					type: 'doc'
				},
				{
					type: 'category',
					label: 'Discord Activities',
					items: [
						'templates/discord-activities/react-colyseus-ts',
						'templates/discord-activities/react-js',
						'templates/discord-activities/react-multiplayer-video-ts',
						'templates/discord-activities/react-music-proxy-ts',
						'templates/discord-activities/react-tailwind-shadcn-ts',
						'templates/discord-activities/react-tailwind-ts',
						'templates/discord-activities/react-trpc-ts',
						'templates/discord-activities/react-ts',
						'templates/discord-activities/unity',
						'templates/discord-activities/vanilla-js',
						'templates/discord-activities/vanilla-ts'
					]
				},
				{
					type: 'category',
					label: 'Discord Bots',
					items: [
						'templates/discord-bots/ai-chatbot-ts',
						'templates/discord-bots/analytics-ts',
						'templates/discord-bots/economy-ts',
						'templates/discord-bots/mongodb-ts',
						'templates/discord-bots/postgres-ts',
						'templates/discord-bots/prisma-ts',
						'templates/discord-bots/purrth-vader-ts',
						'templates/discord-bots/starter-js',
						'templates/discord-bots/starter-ts'
					]
				},
				{
					type: 'category',
					label: 'Plugins',
					items: ['templates/plugins/starter-js']
				},
				{
					type: 'category',
					label: 'Web Apps',
					items: ['templates/web-apps/react-js', 'templates/web-apps/react-ts']
				}
			]
		}
	]
}

module.exports = sidebars
