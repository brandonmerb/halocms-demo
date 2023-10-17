import { useAtomicApi } from '@atomicdesign/atomic-singularity';
import { useAtomicVue } from '@atomicdesign/atomic-vue';
//import { OriginGovernor } from '@atomicdesign/atomic-origin';

import { HaloCMSSDKDefaultModules } from '@golden-circuit-technologies/halocms-sdk';

useAtomicApi()
  .use(useAtomicVue())
  .use(HaloCMSSDKDefaultModules)
  .start()