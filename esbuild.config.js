import esbuildServe from 'esbuild-serve';

esbuildServe({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/bundle.js',
    define: {
        'process.dev.NODE_ENV':'"development"',
        'process.env.DEBUG': 'false'
    }
},
    {
        port: 3005,
        root: '.'
    }
)