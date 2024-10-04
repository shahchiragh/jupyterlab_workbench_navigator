<script>
import Config from "./config.js"
import closeUrl from "../style/icons/small_cross_icon.svg"
export default {
    props: {
        app: Object,
    },
    data: () => ({
        hoveredModule: -1,
        closeIconUrl: closeUrl,
        show: false,
    }),
    mounted() {
        const wbLauncher = document.querySelector('.jp-LauncherCard[title="ARM Data Workbench"]')
        if (wbLauncher) {
            wbLauncher.addEventListener('click', this.workbenchLauncherClick)
        }
        const wbSidePanel = document.querySelector('.lm-TabBar-tab[title="ARM Data Workbench"]')
        if (wbSidePanel) {
            wbSidePanel.addEventListener('click', this.workbenchLauncherClick)
        }
        this.$root.$on('bv::modal::hide', () => {
            if (!this.app.shell.leftCollapsed) {
                this.app.shell.collapseLeft();
            }
        })
    },
    computed: {
        dashboardUrl() {
            return Config?.workbench?.dashboardUrl
        },
        workbenchModules() {
            return Config?.workbench?.modules
        },
        closeIcon() {
            return this.closeIconUrl
        },
        workbenchLauncherClick(){
            this.show = true
        }
    },
    methods: {
        moduleMouseOver(index) {
            Config.workbench.modules[index].hover = true
        },
        moduleMouseOut(index) {
            Config.workbench.modules[index].hover = false
        },
        navigate(url) {
            window.open(url, "_self")
        },
    },
}
</script>

<template>
    <div>
        <b-modal v-model="show" id="workbench-modal" size="xl" body-class="p-4" content-class="rounded-0" hide-header hide-footer
            centered>

            <b-img id="close-icon" :src="closeIcon" class="primaryBackgroundLight" width="30"
                @click="$bvModal.hide('workbench-modal')" />

            <div class="header text-center">
                ARM Data Workbench
            </div>
            <div class="text-center mb-4">
                The ARM Data Workbench (ADW) is a revolutionary ecosystem for interacting with ARM data.
                <br />
                It is intended to utilize the ARM Data Center's (ADC) full capabilities to improve users' experience in
                working with ARM data.
            </div>

            <b-row no-gutters>
                <b-col v-for="(module, index) in workbenchModules" :key="index"
                    :class="{ 'mr-4': index < workbenchModules.length - 1 }" class="module p-2"
                    @mouseover="hoveredModule = index" @mouseout="hoveredModule = -1">
                    <b-row align-v="center" class="pb-2" no-gutters>
                        <b-col class="pr-2" cols="auto">
                            <img :src="hoveredModule == index ? module.iconActive : module.iconInactive" width="40" />
                        </b-col>
                        <b-col class="module-label">
                            {{ module.label }}
                        </b-col>
                    </b-row>

                    <b-row no-gutters>
                        <b-col>
                            <div v-for="(content, index) in module.contents" :key="index"
                                :class="{ 'active': content.active, 'coming-soon': content.comingSoon }"
                                class="content mb-2" @click="navigate(content.url)">
                                <div v-if="content.active" class="active-indicator d-inline-block mr-1" />
                                {{ content.label }}
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

            <div class="text-center mt-4">
                <span class="dashboard-link" @click="navigate(dashboardUrl)">
                    Go to the Workbench Dashboard
                </span>
            </div>

        </b-modal>
    </div>
</template>



<style scoped>
#workbench-navigator {
    padding: 0.9em;
    font-weight: bold;
    font-size: 0.8em;
    color: white;
    background-image: url("../style/background_blue.jpg");
    position: fixed;
    right: -60px;
    top: 45%;
    z-index: 2000;
    margin: auto;
    transform: rotate(-90deg);
    cursor: pointer;
}

#workbench-modal {
    position: relative;
}

#close-icon {
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
}

::v-deep(.modal-body) {
    color: white;
    background-image: url("../style/background_blue.jpg");
}

.header {
    font-size: 2em;
}

.module {
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 250ms;
}

.module:hover {
    color: #00BD70;
    border: 1px solid #00BD70;
}

.module-label {
    font-size: 1.4em;
}

.content,
.dashboard-link {
    color: white;
    text-decoration: underline;
    cursor: pointer;
    transition: all 250ms;
}

.content:hover,
.dashboard-link:hover {
    color: #00BD70;
}

.active {
    color: #00BD70;
    text-decoration: none;
    pointer-events: none;
}

.active-indicator {
    width: 0.7em;
    height: 0.7em;
    background-color: #00BD70;
    border: 1px solid white;
    border-radius: 100%;
}

.coming-soon {
    color: gray;
    text-decoration: none;
    pointer-events: none;
}

.primaryBackgroundLight {
    background-color: #C5DFED !important;
}

@font-face {
    font-family: "Metropolis";
    src: url("../style/fonts/metropolis.regular.otf");
}

html,
body,
#workbench-navigator {
    font-family: "Metropolis";
    font-size: 12pt;
}

html>body {
    line-height: 1.5;
}
</style>
