import DevConfig from "./config/config_dev.js"
import StageConfig from "./config/config_stage.js"
import ProdConfig from "./config/config_prod.js"

let Config = DevConfig

if (process.env.NODE_ENV == "production") {
  Config = ProdConfig 
} else if (process.env.NODE_ENV == "stage") {
  Config = StageConfig 
} else {
  Config = DevConfig
}

export default Config
