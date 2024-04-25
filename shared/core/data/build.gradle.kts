plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
}

android.namespace = "org.diary.data"

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
                implementation(libs.kotlinx.datetime)
                implementation(libs.kotlinx.uuid.core)
                implementation(libs.koin.core)
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.napier)

                implementation(project(":shared:core:network"))
                implementation(project(":shared:core:database"))
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