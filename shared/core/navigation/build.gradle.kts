plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.compose)
    alias(libs.plugins.compose.compiler)
}

android.namespace = "org.diary.navigation"

kotlin {
    androidTarget()
    jvm("desktop")
    js {
        browser { }
        binaries.executable()
    }

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(compose.runtime)
                implementation(compose.foundation)
                implementation(compose.material)
                implementation(compose.components.uiToolingPreview)
                implementation(compose.components.resources)

                implementation(libs.voyager.navigator)
                implementation(libs.kotlinx.uuid.core)
                implementation(libs.voyager.koin)
                implementation(libs.koin.core)

                implementation(project(":shared:core:model"))
            }
        }

        val jsMain by getting {
            dependencies {
                implementation(libs.koin.core.js)
            }
        }
    }
}

android {
    compileSdk = 34

    defaultConfig {
        minSdk = 26
    }
}