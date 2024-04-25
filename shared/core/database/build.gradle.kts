plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
}

android.namespace = "org.diary.database"

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
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.kotlinx.datetime)
                implementation(libs.kotlinx.uuid.core)
                implementation(libs.koin.core)
                implementation(libs.napier)

            }
        }

        val androidMain by getting{
            dependencies {
                implementation(libs.koin.android)
                implementation(libs.kotlinx.coroutines.android)
            }
        }

        val desktopMain by getting {
            dependencies {
            }
        }

        val jsMain by getting{
            dependencies {
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