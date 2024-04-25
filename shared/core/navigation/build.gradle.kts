plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
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
                implementation(libs.voyager.navigator)
                implementation(libs.kotlinx.uuid.core)

                implementation(project(":shared:core:model"))
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