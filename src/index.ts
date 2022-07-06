import { PiniaPluginContext } from "pinia"
import { markRaw } from "vue"
import type { Router } from "vue-router"

declare module 'pinia' {
    export interface PiniaCustomProperties {
        // you can define simpler values too
        $router: Router
    }
}

export default function PiniaRouter(router: Router) {
    return function (context: PiniaPluginContext) {
        const { store } = context
        store.$router = markRaw(router)
    }
}