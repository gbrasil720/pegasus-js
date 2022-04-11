import { Config as Configuration } from 'bili'

const configuration: Configuration = {
  input: 'src/index.ts',
  output: {
    format: ['es', 'esm', 'cjs', 'commonjs', 'umd', 'umd-min'],
    moduleName: 'pegasus-js',
    fileName: ({ format }, defaultFileName) => {
      if (format === 'es') return 'pegasus-js.mjs'
      if (format === 'cjs') return 'pegasus-js.cjs'
      if (format === 'commonjs') return 'pegasus-js.js'

      return defaultFileName
    },
  },
  plugins: {
    typescript2: {
      clean: true,
      tsconfig: './tsconfig.build.json',
      useTsconfigDeclarationDir: true,
    },
  },
}

export default configuration
