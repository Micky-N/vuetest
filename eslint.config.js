import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
    },

    ...pluginVue.configs['flat/essential'],
    ...vueTsEslintConfig(),
    skipFormatting,
    {
        rules: {
            // VUE
            'vue/attributes-order': 'warn',
            'vue/no-v-text-v-html-on-component': 'off',
            'vue/no-v-html': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ['warn', 4],
            'vue/first-attribute-linebreak': ["error", {
                'singleline': "ignore",
                'multiline': "below"
            }],
            'vue/max-attributes-per-line': ["error", {
                'singleline': {
                    'max': 1
                },
                'multiline': {
                    'max': 1
                }
            }],
            'vue/html-closing-bracket-newline': [
                "error",
                {
                    'singleline': "never",
                    'multiline': "always",
                    'selfClosingTag': {
                        'singleline': "never",
                        'multiline': "always"
                    }
                }
            ],
            'vue/html-closing-bracket-spacing': ["error", {
                "startTag": "never",
                "endTag": "never",
                "selfClosingTag": "always"
            }],
            // TYPESCRIPT
            '@typescript-eslint/no-explicit-any': 'off'
        }
    }
]
