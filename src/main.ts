import { useAtomicApi } from '@atomicdesign/atomic-singularity';
import { VueGovernor } from '@atomicdesign/atomic-vue';
//import { OriginGovernor } from '@atomicdesign/atomic-origin';

import { HaloCMSSDKDefaultModules } from '@golden-circuit-technologies/halocms-sdk';

useAtomicApi()
  .useGovernor(VueGovernor)
  //.useGovernor(OriginGovernor)
  .useModule(HaloCMSSDKDefaultModules)
  .start()