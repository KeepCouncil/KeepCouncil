import { build } from 'esbuild';

type Environment = 'production' | 'development';

const BUILD_MODE = (process.env.BUILD_MODE as Environment) || 'development';
if (!BUILD_MODE || !['production', 'development'].includes(BUILD_MODE)) {
    throw new Error(`[Build] Cannot build with provided environment "${BUILD_MODE}".`);
}

/**
 * A builder function for the server package.
 */
export async function buildServer() {
    console.log('[Build] Building server...');

    await build({
        entryPoints: ['src/index.ts'],
        outfile: 'dist/index.js',
        define: {
            'process.env.NODE_ENV': `"${BUILD_MODE}"`,
        },
        external: ['express', 'hiredis', 'default-gateway', 'cors'],
        platform: 'node',
        target: 'node16.15.1',
        bundle: true,
        minify: BUILD_MODE === 'production',
        sourcemap: BUILD_MODE === 'development',
        watch:
            BUILD_MODE === 'production'
                ? false
                : {
                      onRebuild: (error, result) => {
                          console.log(`[Server] Build finished at ${new Date().toISOString()}`);
                      },
                  },
    });

    console.log('[Build] Server built...');
}

/**
 * A builder function for all packages.
 */
async function buildAll() {
    console.log(`[Build] Building project in "${BUILD_MODE}" mode...`);

    await buildServer();

    console.log('[Build] Building completed.');
    process.exit(0);
}

// This method is executed when we run the script from the terminal with ts-node
buildAll();
