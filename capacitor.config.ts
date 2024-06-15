// @ts-ignore
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: process.env.APP_ID,
    appName: process.env.APP_NAME,
    webDir: 'build',
    ios: {
        contentInset: 'always'
    }
};

export default config;
