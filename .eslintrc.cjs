const testFiles = ['./**/tests/**']

const ERROR = 'error'
const WARN = 'warn'

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	settings: {
		react: {
			version: 'detect',
		},
		tailwindcss: {
			callees: ['classnames', 'clsx', 'ctl', 'cn', 'cva'],
			config: 'tailwind.config.ts',
		},
	},
	plugins: ['import'],
	extends: ['eslint:recommended', 'plugin:tailwindcss/recommended', 'prettier'],
	rules: {
		'no-empty-pattern': 'off',
		'no-console': WARN,
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-unexpected-multiline': ERROR,
		'import/no-duplicates': [WARN, { 'prefer-inline': true }],
		'import/order': [
			WARN,
			{
				alphabetize: { order: 'asc', caseInsensitive: true },
				pathGroups: [{ pattern: '#/**', group: 'internal' }],
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
			},
		],
	},
	overrides: [
		{
			// TS and TSX Files
			extends: ['plugin:@typescript-eslint/recommended'],
			files: ['*.ts?(x)'],
			parser: '@typescript-eslint/parser',
			plugins: ['@typescript-eslint'],
			rules: {
				'@typescript-eslint/consistent-type-imports': [
					WARN,
					{
						disallowTypeAnnotations: true,
						fixStyle: 'inline-type-imports',
						prefer: 'type-imports',
					},
				],
				'@typescript-eslint/no-unused-vars': [
					ERROR,
					{
						args: 'after-used',
						caughtErrors: 'all',
						ignoreRestSiblings: true,
						varsIgnorePattern: '^ignored',
					},
				],
				'import/consistent-type-specifier-style': [WARN, 'prefer-inline'],
			},
		},
		{
			// React Files
			extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
			files: ['*.tsx', '*.jsx'],
			rules: {
				'react/jsx-pascal-case': 'off',
				'react/prop-types': 'off',
				'react/react-in-jsx-scope': 'off',
			},
		},
		{
			// React Hooks Files
			extends: ['plugin:react-hooks/recommended'],
			files: ['*.ts?(x)', '*.js?(x)'],
			rules: {
				'react-hooks/exhaustive-deps': WARN,
				'react-hooks/rules-of-hooks': ERROR,
			},
		},
		{
			// Astro Files
			extends: ['plugin:astro/recommended'],
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		{
			files: ['**/*.ts?(x)', '**/*.js?(x)'],
			excludedFiles: testFiles,
			rules: {
				'no-restricted-imports': [
					ERROR,
					{
						patterns: [
							{
								group: testFiles,
								message: 'Do not import test files in app files',
							},
						],
					},
				],
			},
		},
	],
}
