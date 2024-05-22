plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.compose)
    alias(libs.plugins.compose.compiler)
}

android.namespace = "org.diary.compose"

kotlin {
    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "17"
            }
        }
    }
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

                implementation(libs.multiplatformSettings)

                implementation(libs.composeIcons.fontAwesome)

                implementation(libs.window.size)

                implementation(libs.voyager.navigator)
                implementation(libs.voyager.transitions)
                implementation(libs.voyager.koin)

                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.kotlinx.datetime)
                implementation(libs.kotlinx.uuid.core)
                implementation(libs.kotlinx.collections.immutable)

                implementation(libs.koin.core)
                implementation(libs.napier)

                implementation(project(":shared:core:data"))
                implementation(project(":shared:core:composeUi"))
                implementation(project(":shared:core:utils"))
                implementation(project(":shared:core:navigation"))

                implementation(project(":shared:feature:advice"))
                implementation(project(":shared:feature:auth"))
                implementation(project(":shared:feature:diary"))
                implementation(project(":shared:feature:stats"))

            }
        }

        val androidMain by getting {
            dependsOn(commonMain)
            dependencies {
                implementation(libs.koin.android)
                implementation(libs.kotlinx.coroutines.android)
            }
        }

        val desktopMain by getting {
            dependsOn(commonMain)
            dependencies {

            }
        }

        val jsMain by getting {
            dependsOn(commonMain)
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
