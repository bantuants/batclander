
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import viteImagemin from 'vite-plugin-imagemin';

  export default defineConfig({
    plugins: [
      react(),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 3,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        webp: {
          quality: 80,
        },
        svgo: {
          plugins: [
            { name: 'removeViewBox', active: false },
            { name: 'removeEmptyAttrs', active: true }
          ],
          multipass: true,
        },
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/ca1e2f2203994f5490f874d5524938c3a6501ab9.png': path.resolve(__dirname, './src/assets/ca1e2f2203994f5490f874d5524938c3a6501ab9.png'),
        'figma:asset/c322b961d2c24f9c39616d60e804c1a681504e49.png': path.resolve(__dirname, './src/assets/c322b961d2c24f9c39616d60e804c1a681504e49.png'),
        'figma:asset/c19cad1bd882671bbff66522f2e9653a40deb8e6.png': path.resolve(__dirname, './src/assets/c19cad1bd882671bbff66522f2e9653a40deb8e6.png'),
        'figma:asset/c17162da67f8a14f7410de301620c6f6bf1d89c5.png': path.resolve(__dirname, './src/assets/c17162da67f8a14f7410de301620c6f6bf1d89c5.png'),
        'figma:asset/a53c00692eee148d8b17ba877b9b233c466226e3.png': path.resolve(__dirname, './src/assets/a53c00692eee148d8b17ba877b9b233c466226e3.png'),
        'figma:asset/9c2d16c06202ab71d6c1cb16a2b7eb36a1ad2405.png': path.resolve(__dirname, './src/assets/9c2d16c06202ab71d6c1cb16a2b7eb36a1ad2405.png'),
        'figma:asset/791675dd32ce38cfa9cd81fade27c3117b97c549.png': path.resolve(__dirname, './src/assets/791675dd32ce38cfa9cd81fade27c3117b97c549.png'),
        'figma:asset/6356e6b4747c74cf9a04d0fc6b3df8fa41d5eab2.png': path.resolve(__dirname, './src/assets/6356e6b4747c74cf9a04d0fc6b3df8fa41d5eab2.png'),
        'figma:asset/5bad6ca7fc9fc528d134342420c9b9480f70e052.png': path.resolve(__dirname, './src/assets/5bad6ca7fc9fc528d134342420c9b9480f70e052.png'),
        'figma:asset/576020a663caf78293ba17cd6d1a3891ddb33d60.png': path.resolve(__dirname, './src/assets/576020a663caf78293ba17cd6d1a3891ddb33d60.png'),
        'figma:asset/4ba434264440e7fcc193a3f31366130220254909.png': path.resolve(__dirname, './src/assets/4ba434264440e7fcc193a3f31366130220254909.png'),
        'figma:asset/4a4b1c22f1d5f9e42d2ee4a88cee40c724c796ae.png': path.resolve(__dirname, './src/assets/4a4b1c22f1d5f9e42d2ee4a88cee40c724c796ae.png'),
        'figma:asset/3093334db9b018f797cda1e96c4e0681e4252e1a.png': path.resolve(__dirname, './src/assets/3093334db9b018f797cda1e96c4e0681e4252e1a.png'),
        'figma:asset/155a59036242946e2c12064a4b80c13cfe3bc131.png': path.resolve(__dirname, './src/assets/155a59036242946e2c12064a4b80c13cfe3bc131.png'),
        'figma:asset/131e28841535b2af8bf43a897a7a1a9e66b729bc.png': path.resolve(__dirname, './src/assets/131e28841535b2af8bf43a897a7a1a9e66b729bc.png'),
        'figma:asset/1080554e30d156906c815c78d2a1dfb1b504b3da.png': path.resolve(__dirname, './src/assets/1080554e30d156906c815c78d2a1dfb1b504b3da.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });