import { parseWebpackConfig } from '../config/parse';
import { RawValue, ViteConfig } from '../config/vite';
import { TransformContext } from './context';
import { initViteConfig, Transformer, useJsx } from './transformer';
import path from 'path';
import { DEFAULT_VUE_VERSION } from '../constants/constants';

// convert webpack.config.js => vite.config.js
<<<<<<< HEAD
export class WebpackTransformer implements Transformer {

    context : TransformContext = {
        vueVersion: DEFAULT_VUE_VERSION,
        jsx: useJsx(),
        config: initViteConfig(),
        importList: [],
    }


    public async transform(rootDir: string): Promise<ViteConfig> {
        const webpackConfig = await parseWebpackConfig(path.resolve(rootDir, 'webpack.config.js'))
        const config = this.context.config;
        
        // convert base config
        config.root = webpackConfig.entry
        config.mode = webpackConfig.mode

        const defaultAlias = [];
        
        const alias = {
            '@':`${rootDir}/src`,
        }
        Object.keys(alias).forEach((key) => {
            const relativePath = path.relative(rootDir,alias[key]).replace(/\\/g,'/');
            defaultAlias.push({
                find: key,
                replacement: new RawValue(`path.resolve(__dirname,'${relativePath}')`),
            });
        });

        config.resolve = {};
        config.resolve.alias = defaultAlias;
    
        return null
    }
    
}
=======
export class WebpackTransformer {

}
>>>>>>> 0ab32c6eba2269917a295346b261c66c4bb36889
