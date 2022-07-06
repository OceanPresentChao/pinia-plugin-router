import { beforeEach, describe, expect, it } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useStore } from "../src/store"
import { PiniaRouter } from "../src/index"
import { mount } from '@vue/test-utils'
import { router } from "../src/router"
import app from "../src/app.vue"

describe('Store', () => {
    const wrapper = mount(app, {
        global: {
            plugins: [createTestingPinia({
                stubActions: false,
                plugins: [PiniaRouter(router)],
            })]
        },
    })

    it('jump router', () => {
        const store = useStore()
        store.jump()
        expect(wrapper.findComponent('demo').text()).toMatchInlineSnapshot()
    })
})