import { Config as Configuration } from 'bili'

const configuration: Configuration = {
  input: 'src/index.ts',
  output: {
    format: ['es', 'esm', 'cjs', 'commonjs', 'umd', 'umd-min'],
    moduleName: 'pegasus-js',
    fileName: ({ format }, defaultFileName) => {
      if (format === 'es') return 'index.mjs'
      if (format === 'cjs') return 'index.cjs'
      if (format === 'commonjs') return 'index.js'

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
