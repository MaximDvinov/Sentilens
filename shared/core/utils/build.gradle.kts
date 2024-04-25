plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
}

android.namespace = "org.diary.utils"

kotlin {
    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }
    }

    jvm("desktop")
    js {
        browser { }
        binaries.executable()
    }

    sourceSets {
        commonMain.dependencies {
            implementation(libs.kotlinx.datetime)
            implementation(libs.multiplatformSettings)

        }
    }
}

android {
    compileSdk = 34

    defaultConfig {
        minSdk = 26
    }
}