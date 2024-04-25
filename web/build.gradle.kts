plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}

kotlin {
    js {
        browser { }
        binaries.executable()
    }


    sourceSets {
        val jsMain by getting {
            dependencies {
                implementation(compose.html.core)
                implementation(libs.ktor.client.js)

                implementation(compose.components.resources)
                implementation(libs.composeIcons.fontAwesome)

                implementation(libs.koin.core)
                implementation(libs.napier)
                implementation(libs.multiplatformSettings)


                implementation(project(":shared:composeMain"))
                implementation(project(":shared:core:composeUi"))
            }
        }
    }
}

compose.experimental {
    web.application {}
}