import { createNebula } from "@atomicdesign/atomic-singularity";
import { HaloCMSNebula } from "@golden-circuit-technologies/halocms-sdk";
import Landing from './views/landing.vue';

export const useDemo = createNebula<HaloCMSNebula>({
    name: "Halo CMS: Demo",

    routes: [
        {
            path: "/",
            component: Landing,
            meta: {
                layout: {
                    showMainAsFlex: true,
                }
            }
        }
    ]
}).build();