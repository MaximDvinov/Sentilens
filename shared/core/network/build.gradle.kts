plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlinx.serialization)
}

android.namespace = "org.diary.network"

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
                implementation(libs.ktor.core)
                implementation(libs.ktor.client.content.negotiation)
                implementation(libs.ktor.serialization.kotlinx.json)
                implementation(libs.kotlinx.serialization.json)
                implementation(libs.kotlinx.datetime)
                implementation(libs.koin.core)
                implementation(libs.ktor.client.auth)
                implementation(libs.ktor.client.logging)
                implementation(libs.multiplatformSettings)
                implementation(libs.kotlinx.uuid.core)
                implementation(libs.napier)
            }
        }

        val androidMain by getting{
            dependencies {
            implementation(libs.ktor.client.okhttp)
        }
        }

        val desktopMain by getting{
            dependencies {
                implementation(libs.ktor.client.okhttp)
            }
        }

        val jsMain by getting{
            dependencies {
                implementation(libs.ktor.client.js)
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