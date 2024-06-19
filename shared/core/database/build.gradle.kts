plugins {
    alias(libs.plugins.multiplatform)
    alias(libs.plugins.android.library)
    alias(libs.plugins.sqlDelight)
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
                implementation(libs.sqlDelight.coroutines)
                implementation(libs.napier)

            }
        }

        val androidMain by getting {
            dependencies {
                implementation(libs.koin.android)
                implementation(libs.kotlinx.coroutines.android)
                implementation(libs.sqlDelight.driver.android)
            }
        }

        val desktopMain by getting {
            dependencies {
                implementation(libs.sqlDelight.driver.sqlite)
                implementation(libs.kotlin.multiplatform.appdirs)
            }
        }

        val jsMain by getting {
            dependencies {
                implementation(libs.sqlDelight.driver.js)
                implementation(npm("sql.js", "1.8.0"))
                implementation(npm("@cashapp/sqldelight-sqljs-worker", "2.0.2"))
                implementation(devNpm("copy-webpack-plugin", "9.1.0"))
            }
        }
    }
}

sqldelight {
    databases {
        create("SentilensDB") {
            packageName.set("org.diary.database")
            generateAsync.set(false)
        }
    }
}


android {
    compileSdk = 34

    defaultConfig {
        minSdk = 26
    }
}