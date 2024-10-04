import DevConfig from "./config/config_dev.js"
import StageConfig from "./config/config_stage.js"
import ProdConfig from "./config/config_prod.js"

const host  = window.location.hostname
let Config = DevConfig

if (host.includes("localhost") || host.includes("dev")) {
  Config = DevConfig
} else if (host.includes("stage")) {
  Config = StageConfig 
} else {
  Config = ProdConfig 
}

export default Config
