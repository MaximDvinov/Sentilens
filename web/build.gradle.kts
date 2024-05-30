plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.compose)
    alias(libs.plugins.compose.compiler)
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
                implementation(compose.runtime)
                implementation(compose.ui)
                implementation(compose.foundation)
                implementation(compose.material)

                implementation(libs.composeIcons.fontAwesome)

                implementation(libs.koin.core.js)
                implementation(libs.napier)
                implementation(libs.window.size)
                implementation(libs.multiplatformSettings)

                @OptIn(org.jetbrains.compose.ExperimentalComposeLibrary::class)
                implementation(compose.components.resources)

                implementation(project(":shared:composeMain"))
                implementation(project(":shared:core:composeUi"))
                implementation(project(":shared:core:utils"))
            }
        }
    }
}