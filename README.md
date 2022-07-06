# pinia-plugin-router

A pinia plugin to help you use vue-router in pinia store

## Installation

```bash
pnpm add pinia-plugin-router -D

or

npm install pinia-plugin-router -D

```

## Usage

```javascript
import PiniaRouter from "pinia-plugin-router"
import {router} from "./router"//your router
const pinia = createPinia()
pinia.use(PiniaRouter(router))
```

```javascript
// in your store

const store = defineStore("store",{
    actions:{
        jump(){
            this.$router.push('/demo')
        }
    }
})

```

## Related

created by template (starter-ts)[https://github.com/OceanPresentChao/starter-ts]