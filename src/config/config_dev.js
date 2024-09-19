import discoverTransparentIconUrl from "../../style/icons/discover.svg"
import discoverGreenIconUrl from "../../style/icons/green_discover.svg"
import stageTransparentIconUrl from "../../style/icons/transparent_stage.svg"
import stageGreenIconUrl from "../../style/icons/green_stage.svg"
import processTransparentIconUrl from "../../style/icons/transparent_process.svg"
import processGreenIconUrl from "../../style/icons/green_process.svg"
import manageTransparentIconUrl from "../../style/icons/transparent_manage.svg"
import manageGreenIconUrl from "../../style/icons/green_manage.svg"
import learnTransparentIconUrl from "../../style/icons/transparent_learn.svg"
import learnGreenIconUrl from "../../style/icons/green_learn.svg"
import publishTransparentIconUrl from "../../style/icons/transparent_publish.svg"
import publishGreenIconUrl from "../../style/icons/green_publish.svg"

const config = {
    workbench: {
        dashboardUrl: "https://workbench-ui.dev.arm.gov",
        modules: [
            {
                id: "find",
                label: "Find",
                description: "Find data for your research",
                iconInactive: discoverTransparentIconUrl,
                iconActive: discoverGreenIconUrl,
                hover: false,
                contents: [
                    {
                        label: "Search and download data in your browser",
                        url: "https://armweb-dev.ornl.gov/discovery",
                        active: false,
                        comingSoon: false,
                    },
                    {
                        label: "Download data through REST API",
                        url: "https://armweb-dev.ornl.gov/armlive",
                        active: false,
                        comingSoon: false,
                    },
                ],
            },
            {
                id: "stage",
                label: "Stage",
                description: "Stage and work with data using ARM's computational resources",
                iconInactive: stageTransparentIconUrl,
                iconActive: stageGreenIconUrl,
                hover: false,
                contents: [
                    {
                        label: "Spin up notebooks",
                        url: "https://jupyterhub.arm.gov/",
                        active: true,
                        comingSoon: false,
                    },
                ],
            },
            {
                id: "analyze",
                label: "Analyze",
                description: "Perform advacned analysis and visualize data",
                iconInactive: processTransparentIconUrl,
                iconActive: processGreenIconUrl,
                hover: false,
                contents: [
                    {
                        label: "Visualize data",
                        url: "https://data-studio-ui.dev.arm.gov",
                        active: false,
                        comingSoon: false,
                    },
                ],
            },
            {
                id: "manage",
                label: "Manage",
                description: "Create and manage datasets, workflows, and more",
                iconInactive: manageTransparentIconUrl,
                iconActive: manageGreenIconUrl,
                hover: false,
                contents: [
                    {
                        label: "Manage data (coming soon)",
                        active: false,
                        comingSoon: true,
                    },
                    {
                        label: "Manage workflows (coming soon)",
                        active: false,
                        comingSoon: true,
                    },
                ],
            },
            {
                id: "learn",
                label: "Learn",
                description: "Learn about ARM data",
                iconInactive: learnTransparentIconUrl,
                iconActive: learnGreenIconUrl,
                alwaysShow: false,
                hover: false,
                contents: [
                    {
                        label: "Explore the ARM knowledge base",
                        url: "https://armcrf.servicenowservices.com/kb?id=kb_search&kb_knowledge_base=d932abb71ba9d590094aebdbac4bcb8b",
                        active: false,
                        comingSoon: false,
                    },
                ],
            },
            {
                id: "publish",
                label: "Publish",
                description: "Publish your data with other researchers",
                iconInactive: publishTransparentIconUrl,
                iconActive: publishGreenIconUrl,
                alwaysShow: false,
                hover: false,
                contents: [
                    {
                        label: "Submit a dataset",
                        url: "https://armweb-dev.ornl.gov/armome",
                        active: false,
                        comingSoon: false,
                    },
                ],
            },
        ],
    }
}
export default config