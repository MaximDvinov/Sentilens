plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
}

android.namespace = "org.diary.model"

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

            }
        }

        val androidMain by getting{
            dependencies {

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