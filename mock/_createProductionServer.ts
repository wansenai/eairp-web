import { createProdMockServer  } from 'vite-plugin-mock/dist/client';

const modules: Record<string, any> = import.meta.glob('./**/*.ts', {
  import: 'default',
  eager: true,
});

const mockModules = Object.keys(modules).reduce((pre, key) => {
  if (!key.includes('/_')) {
    pre.push(...modules[key]);
  }
  return pre;
}, [] as any[]);

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
