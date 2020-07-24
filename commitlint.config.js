const Configuration = {
    extends: ['@commitlint/config-conventional'],
    formatter: '@commitlint/format',
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor','perf', 'test', 'chore','deps']]
    }
}

module.exports = Configuration
