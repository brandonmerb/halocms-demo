import "reflect-metadata";

import { useAtomicApi } from '@atomicdesign/atomic-singularity';
import { useAtomicVue } from '@atomicdesign/atomic-vue';
import { useAtomicSDK } from "@atomicdesign/atomic-sdk";
import { useTSyringe } from "@atomicdesign/atomic-singularity-tsyringe-wrapper";
//import { OriginNebula } from '@atomicdesign/atomic-origin';

import { HaloCMSSDKDefaultModules } from '@golden-circuit-technologies/halocms-sdk';
import { useDemo } from "./demo.nebula";

useAtomicApi()
  .use(useAtomicVue())
  .use(useTSyringe())
  .use(HaloCMSSDKDefaultModules())
  .use(useAtomicSDK())
  .use(useDemo())
  .start()